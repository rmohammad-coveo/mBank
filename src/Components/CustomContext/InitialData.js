/* 
Before you edit:

When editing the 'InitialData', make sure to delete keys 'profile_selected' and 'context_data' in your localStorage to see the changes. 

To access localStorage:

Developer tools > Application > Storage > LocalStorage

*/


// DONOT CHANGE
export const KEY_NAME_PROFILE_SELECTED = 'profile_selected_v2';
export const KEY_NAME_CONTEXT_DATA = 'context_data_v2'


export const InitialData = [
  {
    name: "anonimowy",
    profile: "https://icon-library.com/images/anonymous-user-icon/anonymous-user-icon-2.jpg",
    context: [],
  },
  {
    name: "Robert Lewandowski",
    email : "rlewandowski@coveo.com",
    profile: "https://assets.laliga.com/squad/2023/t178/p56764/256x256/p56764_t178_2023_0_003_000.png",
    context: [
      {
        active: true,
        keyName: "interest",
        keyValue: "konta",
        customQRF: false,
      }
    ],
  },
  {
    name: "Ewalina Kamczyk",
    email : "ekamczyk@coveo.com",
    profile:
      "https://yt3.googleusercontent.com/ytc/AGIKgqO5RLguKtaqkMAYOGrGqC8Ce0Vhslt5UAb-q32YZA=s900-c-k-c0x00ffffff-no-rj",
    context: [
      {
        active: true,
        keyName: "interest",
        keyValue: "kredyt",
        customQRF: false,
      },
    ],
  },
];



