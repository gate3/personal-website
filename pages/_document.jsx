// @flow
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const {
      html, head, errorHtml, chunks,
    } = renderPage();
    return {
      html, head, errorHtml, chunks,
    };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="../static/css/normalize.css" />
          <link rel="stylesheet" href="../static/fonts/font-awesome-4.3.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="../static/css/style1.css" />
          <script src="../static/js/modernizr.custom.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="../static/js/classie.js" />
          <script src="../static/js/main.js" />
        </body>
      </html>
    );
  }
}
