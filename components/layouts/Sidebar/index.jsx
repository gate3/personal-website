/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React from 'react';
import Link from 'next/link';
import SocialLinks from './SocialLinks';
import CONSTANTS from './constants';

const { USER, MENU } = CONSTANTS;

export default () => (
  <>
    <div id="theSidebar" className="sidebar">
      <button className="close-button fa fa-fw fa-close" />
      <div className="">
        <img
          className="me-avatar"
          src={USER.THUMB_IMAGE.URL}
          alt={USER.THUMB_IMAGE.ALT}
        />
      </div>
      <h1>
        {USER.NAME}
      </h1>
      <p className="description">{USER.DESCRIPTION}</p>
      <SocialLinks />
      <div className="related">
        {
          MENU.map(m => (
            <Link href={`/${m.LINK}`}>
              <a className="menu-link">
                {m.NAME}
              </a>
            </Link>
          ))
        }
      </div>
    </div>
    <style jsx>
      {`
      h1{
        font-family: "Martel Sans", Arial, sans-serif !important;
      }
      img.me-avatar {
        border-radius: 50%;
      }
      p.description {
        font-size: 0.8em;
      }
      a.menu-link:hover, a.menu-link.active{
        text-decoration: line-through;
      }
    `}
    </style>
  </>
);
