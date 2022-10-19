// import '@types/googlemaps';
// import '@types/google.maps';
// import '@types/google-maps';
import { Loader } from '@googlemaps/js-api-loader';

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

// new CustomMap('map');

const user = new User();
// console.log(user);
const company = new Company();
// console.log(company);

const customMap = new CustomMap('map');
customMap.addUserMarker(user);
customMap.addCompanyMarker(company);

// ! проверка на null
// const map = new google.maps.Map(document.getElementById('map')!, {
//   zoom: 1,
//   center: {
//     lat: 0,
//     lng: 0,
//   },
// });

// opt 1
// let map: google.maps.Map;

// function initMap(): void {
//   map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// declare global {
//   interface Window {
//     initMap: () => void;
//   }
// }
// window.initMap = initMap;

// opt 2

// let map: google.maps.Map;

// const additionalOptions = {};

// const loader = new Loader({
//   apiKey: 'AIzaSyBCfaym8xxhYxLlCLWckS3r937JZIT7cqA',
//   version: 'weekly',
//   ...additionalOptions,
// });

// loader.load().then(() => {
//   map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 1,
//   });
// });

// export {};
