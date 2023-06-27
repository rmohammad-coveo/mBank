import HeroImage from '../assets/Hero.jpg'
import { RecommendationType } from './Types/ConfigTypes';

export const NavBarConfig = [
  {
    title: "konta",
    redirectTo: "/home",
  },
  {
    title: "kredyty",
    redirectTo: "/home",
  },
  {
    title: "karty",
    redirectTo: "/home",
  },
  {
    title: "inwestycje i oszczędności",
    redirectTo: "/home",
  },
  {
    title: "ubezpieczenia",
    redirectTo: "/home",
  },
  {
    title: "usługi i e-urząd",
    redirectTo: "/home",
  },
  {
    title: "aplikacja i serwis",
    redirectTo: "/home",
  },
  {
    title: "dla klienta",
    redirectTo: "/home",
  },
  {
    title: "bezpieczeństwo",
    redirectTo: "/home",
  },
];


export const HeaderConfig = [
  {
    title: "klienci indywidualni",
    redirectTo: "/home",
    color: "#993300"
  },
  {
    title: "private banking",
    redirectTo: "/home",
    color: "#993300"
  },
  {
    title: "firmy",
    redirectTo: "/home",
    color: "#008520"
  },
  {
    title: "msp i korporacje",
    redirectTo: "/home",
    color: "#3554f0"
  },
]


export const HeroConfig = {
    title  : 'Life changes fast',
    description : 'A BTEP Mortgage gives you the flexibility to use the equity from your home when you need it.',
    background : HeroImage,
    buttonText : 'Learn More',
    onClickButtonRedirect : '/search',
    
}


export const MainRecommendationConfig : RecommendationType= {

  title : 'polecane',
  description : "Here are your personalized recommendations",
  numberOfResults: 6,
  imageField : 'sfimage_url__c',
  pipeline : 'Rec Content',
  searchHub: 'default',
  id : 'Recommendation'
}

export const VideoRecommendationConfig : RecommendationType  = {

  title : 'filmy',
  description : "Here are your personalized recommendations",
  numberOfResults: 3,
  imageField : 'ytthumbnailurl',
  pipeline : 'Video Rec Content',
  searchHub: 'default',
  id : 'Recommendation'
}


export const EnableAuthentication = false;