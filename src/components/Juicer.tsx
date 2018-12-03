import * as React from 'react';
import {
  FeedItem,
  FeedItemHover,
  FeedWrapper,
  LoadMoreButton,
  LoadMoreContainer,
} from './index';
import Modal from 'react-modal';
import BottomScrollListener from 'react-bottom-scroll-listener';
import { ThemeProvider } from 'styled-components';
import defaultsDeep from 'lodash/defaultsDeep';
import * as styles from '../styles';

interface JuicerItemProps {
  additional_photos?: any;
  comment_count?: number;
  comments?: number;
  deleted_at?: any;
  deleted_by?: any;
  description?: any;
  edit?: any;
  external_created_at: string;
  external_id: string;
  external?: any;
  feed: string;
  full_url: string;
  height: number;
  id: number;
  image: undefined | string;
  like_count: number;
  likes: number;
  location: string;
  message: string;
  position?: string;
  poster_display_name?: number;
  poster_id?: number;
  poster_image?: number;
  poster_name: number;
  poster_url: number;
  source: {
    id: number;
    options: any;
    queue?: any;
    source: string;
    term_type: string;
    term: string;
  };
  tagged_users?: any;
  unformatted_message: string;
  width: number;
}

interface Props {
  disableLoadMore: boolean;
  disableOnScroll?: boolean;
  feedId: string;
  imagesPer: number;
  initialLimit?: number;
  theme?: any;
}

interface State {
  activeIndex: undefined | number;
  afterInitialLimit: boolean;
  currentPage: number;
  isOpen: boolean;
  juicerFeed: undefined | Array<JuicerItemProps>;
  loadedAll: boolean;
  loading: boolean;
  loadingMore: boolean;
}

class Juicer extends React.Component<Props, State> {
  static defaultProps = {
    disableLoadMore: false,
  };

  public state: State = {
    activeIndex: undefined,
    afterInitialLimit: false,
    currentPage: 1,
    isOpen: false,
    juicerFeed: undefined,
    loading: true,
    loadingMore: false,
    loadedAll: false,
  };

  componentDidMount() {
    const { feedId, imagesPer } = this.props;

    const { currentPage } = this.state;

    fetch(
      `https://www.juicer.io/api/feeds/${feedId}?per=${imagesPer}&page=${currentPage}`,
    )
      .then(response => response.json())
      .then(response => {
        this.setState({ loading: false, juicerFeed: response.posts.items });
      })
      .then(() => {
        const { juicerFeed } = this.state;

        if (juicerFeed) {
          juicerFeed.forEach((item, index) => {
            this.checkIfImageExists(item.image, index);
          });
        }
      });
  }

  checkIfImageExists(imageURL: undefined | string, index: number) {
    const image = new (window as any).Image();

    image.onerror = () => {
      const { juicerFeed } = this.state;

      if (juicerFeed) {
        juicerFeed[index].image = undefined;
      }

      this.forceUpdate();
    };
    image.src = imageURL;
  }

  addJuicerPage = () => {
    const { feedId, imagesPer } = this.props;

    const { juicerFeed, currentPage } = this.state;

    fetch(
      `https://www.juicer.io/api/feeds/${feedId}?per=${imagesPer}&page=${currentPage}`,
    )
      .then(response => response.json())
      .then(response => {
        console.log(response.posts.items);
        this.setState({
          juicerFeed:
            juicerFeed &&
            juicerFeed.concat(
              response.posts.items.filter(
                (item: any) => item.height !== null && item.image !== null,
              ),
            ),
          loadingMore: false,
          loadedAll: response.posts.items.length > 0 ? false : true,
        });
      })
      .then(() => {
        if (juicerFeed) {
          juicerFeed.slice(imagesPer * currentPage).forEach((item, index) => {
            this.checkIfImageExists(
              item.image,
              imagesPer * currentPage + index,
            );
          });
        }
      });
  };

  handleLoadMore = () => {
    const { juicerFeed, currentPage, loadingMore } = this.state;

    if (!loadingMore) {
      this.setState(
        {
          afterInitialLimit: true,
          currentPage: currentPage + 1,
          loadingMore: true,
        },
        () => {
          if (juicerFeed) {
            this.addJuicerPage();
          }
        },
      );
    }
  };

  render() {
    const {
      activeIndex,
      afterInitialLimit,
      isOpen,
      juicerFeed,
      loading,
      loadingMore,
      loadedAll,
    } = this.state;

    const {
      disableLoadMore,
      initialLimit,
      theme,
      disableOnScroll,
    } = this.props;

    if (loading) {
      return <div>loading</div>;
    }

    if (!juicerFeed) {
      return <div>could not load feed</div>;
    }

    const filteredJuicer = (() =>
      juicerFeed
        .filter(item => item.image !== undefined)
        .filter(
          (item, index) =>
            afterInitialLimit || !initialLimit || index < initialLimit,
        ))();

    const activeJuice = (() =>
      activeIndex ? filteredJuicer[activeIndex] : undefined)();

    return (
      <ThemeProvider theme={defaultsDeep({ ...theme }, styles.defaultTheme)}>
        <>
          <FeedWrapper>
            {filteredJuicer.map(
              ({ comment_count, id, image, like_count }, index) => (
                <FeedItem
                  key={id}
                  style={{ backgroundImage: `url(${image})` }}
                  onClick={() =>
                    this.setState({ isOpen: true, activeIndex: index })
                  }
                >
                  <img src={image} alt="" />
                  <FeedItemHover>
                    <span>{comment_count}</span>
                    <span>{like_count}</span>
                  </FeedItemHover>
                </FeedItem>
              ),
            )}
            <BottomScrollListener
              onBottom={disableOnScroll ? () => {} : this.handleLoadMore}
            />
          </FeedWrapper>
          {!disableLoadMore && !loadedAll && (
            <LoadMoreContainer>
              <LoadMoreButton
                className="button large"
                onClick={() => {
                  this.handleLoadMore();
                }}
              >
                {loadingMore ? 'Loading...' : 'Load more'}
              </LoadMoreButton>
            </LoadMoreContainer>
          )}
          {activeJuice && (
            <Modal
              isOpen={isOpen}
              onRequestClose={() =>
                this.setState({ isOpen: false, activeIndex: undefined })
              }
            >
              <img src={activeJuice.image} alt="" />
            </Modal>
          )}
        </>
      </ThemeProvider>
    );
  }
}

export default Juicer;
