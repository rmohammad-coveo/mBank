import HeroImage from '../assets/Hero.jpg'
import { RecommendationType } from './Types/ConfigTypes';

export const NavBarConfig = [
  {
    title: "konta",
    redirectTo: "/homehome",
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
    title: "Inwestycje i oszczędności",
    redirectTo: "/home",
  },
  {
    title: "ubezpieczenia",
    redirectTo: "/home",
  },
  {
    title: "Usługi i e-Urząd",
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
    title: "Klienci indywidualni",
    redirectTo: "/home",
    color: "#993300"
  },
  {
    title: "Private banking",
    redirectTo: "/home",
    color: "#993300"
  },
  {
    title: "Firmy",
    redirectTo: "/home",
    color: "#008520"
  },
  {
    title: "MSP i korporacje",
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

  title : 'Recommendations',
  description : "Here are your personalized recommendations",
  numberOfResults: 6,
  imageField : 'sfimage_url__c',
  pipeline : 'Homepage',
  searchHub: 'default',
  id : 'Recommendation'
}

export const VideoRecommendationConfig : RecommendationType  = {

  title : 'Videos',
  description : "Here are your personalized recommendations",
  numberOfResults: 3,
  imageField : 'ytthumbnailurl',
  pipeline : 'Video Rec Sidebar',
  searchHub: 'default',
  id : 'Recommendation'
}


export const EnableAuthentication = false;