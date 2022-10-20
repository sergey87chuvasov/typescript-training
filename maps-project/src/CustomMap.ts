// import { User } from './User';
// import { Company } from './Company';

// instructions for other classes for addMarker
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  // add type
  private googleMap: google.maps.Map;

  constructor(mapDivd: string) {
    this.googleMap = new google.maps.Map(document.getElementById(mapDivd)!, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  // 1 version
  // addUserMarker(user: User): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng,
  //     },
  //   });
  // }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng,
  //     },
  //   });
  // }

  // 2 version - bad
  // addMarker(mappable: User | Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: mappable.location.lat,
  //       lng: mappable.location.lng,
  //     },
  //   });
  // }

  // 3 version + interface
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: 'Hey there!',
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
