import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>Doyin Olarewaju</title>
          <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/gate3/my-site-assets/css/normalize.css" />
          <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/gate3/my-site-assets/fonts/font-awesome-4.3.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/gate3/my-site-assets/css/style1.css" />
          <script src="//cdn.jsdelivr.net/gh/gate3/my-site-assets/js/modernizr.custom.js" />
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}
