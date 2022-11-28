import React, { Children } from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { AppRegistry } from 'react-native-web';
import { getStyleElement as getResponsiveQueryStyleElement } from 'native-base';
// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
  html, body, #__next {
    width: 100%;
    /* To smooth any scrolling behavior */
    -webkit-overflow-scrolling: touch;
    margin: 0px;
    padding: 0px;
    /* Allows content to fill the viewport and go beyond the bottom */
    min-height: 100%;
  }
  #__next {
    flex-shrink: 0;
    flex-basis: auto;
    flex-direction: column;
    flex-grow: 1;
    display: flex;
    flex: 1;
  }
  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
    height: 100%;
  }
  body {
    display: flex;
    overflow-y: auto;
    overscroll-behavior-y: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-overflow-style: scrollbar;
  }
`;

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
Document.getInitialProps = async (ctx) => {
  AppRegistry.registerComponent('Main', () => Main);
  const { getStyleElement } = AppRegistry.getApplication('Main');
  const originalRenderPage = ctx.renderPage;
  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => <App {...props} />,
      });
    const initialProps = await NextDocument.getInitialProps(ctx);

    console.log(getResponsiveQueryStyleElement(), 'hello here');
    const styles = [
      // eslint-disable-next-line react/jsx-key
      <style dangerouslySetInnerHTML={{ __html: normalizeNextElements }} />,
      getStyleElement(),
      getResponsiveQueryStyleElement(),
    ];
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {Children.toArray(styles)}
        </>
      ),
    };
  } finally {
  }
};
export default Document;
