// @flow

type USER_TYPE = {|
  NAME: string,
  ROLE: string,
  DESCRIPTION: string,
  TWITTER: string,
  LINKEDIN: string,
  GITHUB: string,
  IMAGE: {
    URL: string,
    ALT: string,
  },
  THUMB_IMAGE: {
    URL: string,
    ALT: string,
  },
|};

type MENU_TYPE = Array<{|NAME: string, LINK: string|}>;
// I write code that powers the second largest Db in West Africa (Go figure)
const USER = {
  NAME: 'Doyin Olarewaju',
  ROLE: 'FULLSTACK ENGINEER',
  DESCRIPTION: 'Think-Plan-Code-Test-Repeat, Crazy about Javascript and ML, Writer, Backend Engineer @SoftcomNG',
  TWITTER: 'https://twitter.com/OlarewajuDoyin',
  LINKEDIN: 'https://www.linkedin.com/in/olarewaju-doyin/',
  GITHUB: 'https://github.com/gate3',
  IMAGE: {
    URL: 'https://res.cloudinary.com/dou9gp536/image/upload/v1542295522/IMG_8798.jpg',
    ALT: 'Doyin Olarewaju',
  },
  THUMB_IMAGE: {
    URL: 'https://res.cloudinary.com/dou9gp536/image/upload/c_thumb,w_64,g_face/v1542295220/IMG_8798.jpg',
    ALT: 'Doyin Olarewaju',
  },
};

const MENU = [
  {
    NAME: 'About',
    LINK: 'about',
  },
  {
    NAME: 'Blog',
    LINK: '',
  },
  {
    NAME: 'Portfolio',
    LINK: 'portfolio',
  },
];

const CONSTANTS:{ USER: USER_TYPE, MENU: MENU_TYPE } = {
  USER,
  MENU,
};

export default CONSTANTS;
