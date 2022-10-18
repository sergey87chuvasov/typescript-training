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
}
