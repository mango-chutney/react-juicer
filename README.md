# react-juicer

A feed of social media image posts using React and Juicer API.

## Install

npm publish soon

## Usage

TBD:

```
yarn add react-juicer
```

```
import ReactJuicer from 'react-juicer';

const JuicerFeed = () => (
    <ReactJuicer
      feedId="juicer-feed-id"
      imagesPer={30}
    />
);
```

## Props

| Name                |        Type         | Default                  | Description                                       |
| ------------------- | :-----------------: | :----------------------- | ------------------------------------------------- |
| **feedId**          | `String (required)` |                          | Required Juicer ID - the feed the component reads |
| **imagesPer**       | `Number (required)` |                          | Number of items to load every time API is called  |
| **initialLimit**    |      `Number`       |                          | Number of items to display on first render        |
| **disableLoadMore** |      `Boolean`      | `false`                  | Optionally remove disable load more button        |
| **disableOnScroll** |      `Boolean`      | `false`                  | Optionally disable loading more items on scroll   |
| **theme**           |      `Object`       | defaultTheme (see below) | Optionally a theme object to style feed           |

## Theme

A theme object can be passed to modify the default theme below

```
const defaultTheme = {
  feedItem: {
    color: '#ffffff',
    backgroundColor: '#000000',
  },
  media: media,
  columns: {
    default: 2,
    medium: 4,
    large: 6,
  },
  button: {
    padding: '0.75rem 1.25rem',
    color: 'white',
    backgroundColor: 'black',
    backgroundColorHover: 'black',
    borderRadius: rem(4),
    margin: '2rem auto',
  },
};

```

Media is derived from `styled-media-query` which generates the breakpoints to display the number of columns of the feed

```
const media = generateMedia({
  huge: '1440px',
  large: '1170px',
  medium: '768px',
  small: '450px',
});
```

## Examples

Create a react server using react scripts to display an example

```
yarn run examples
```
