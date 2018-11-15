/* eslint-disable react/button-has-type */
import React from 'react';

export default () => (
  <div id="theSidebar" className="sidebar">
    <button className="close-button fa fa-fw fa-close" />
    <div className="codrops-links">
      <a
        className="codrops-icon codrops-icon--prev"
        href="http://tympanus.net/Tutorials/MotionBlurEffect/"
        title="Previous Demo"
      >
        <span>Previous Demo</span>
      </a>
      <a
        className="codrops-icon codrops-icon--drop"
        href="http://tympanus.net/codrops/?p=23872"
        title="Back to the article"
      >
        <span>Back to the Codrops article</span>
      </a>
    </div>
    <h1>
      <span>Animated</span>
      {' '}
      Grid Layout
    </h1>
    <nav className="codrops-demos">
      <a className="current-demo" href="index.html">Demo 1</a>
      <a href="index2.html">Demo 2</a>
    </nav>
    <div className="related">
      <h3>Related Demos</h3>
      <a href="http://tympanus.net/Development/BookPreview/">Book Preview</a>
      <a href="http://tympanus.net/Tutorials/ThumbnailGridExpandingPreview/">Thumbnail Grid</a>
      <a href="http://tympanus.net/Development/3DGridEffect/">3D Grid Effect</a>
    </div>
  </div>
);
