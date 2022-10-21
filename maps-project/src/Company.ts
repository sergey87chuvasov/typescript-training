import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  cathPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  color: string = 'white';

  constructor() {
    this.companyName = faker.company.name();
    this.cathPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent() {
    return `
    <div>
      <h1>Company Name: ${this.companyName}</h1>
      <h3>Company Catchphrase: ${this.cathPhrase}</h3>
    </div>
    `;
  }
}
