// @flow
import * as React from 'react';
import Icon from '@mdi/react';
import { mdiTwitter, mdiLinkedin, mdiGithubBox } from '@mdi/js';
import CONSTANTS from './constants';

type SOCIAL_LINK_TYPE = Array<React.Element<'a'>>;

const { USER: { TWITTER, GITHUB, LINKEDIN } } = CONSTANTS;
const socialLinks:SOCIAL_LINK_TYPE = [
  { icon: mdiTwitter, link: TWITTER },
  { icon: mdiLinkedin, link: LINKEDIN },
  { icon: mdiGithubBox, link: GITHUB },
].map(s => (
  <a className="social-links" href={s.link}>
    <Icon
      path={s.icon}
      size={1}
    />
  </a>
));

export default () => (
  <>
    <nav className="codrops-demos">
      {socialLinks}
    </nav>
    <style jsx>
      {`
        a.social-links:hover svg{
          fill: #81c483
        }
    `}
    </style>
  </>
);
