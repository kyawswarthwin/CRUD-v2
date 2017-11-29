import { Injectable } from '@angular/core';

import Parse from 'parse';

import { Donation } from '../../models/donation/donation';

@Injectable()
export class DonationProvider extends Parse.Object {
  constructor() {
    super('Donation');
  }

  static load(): Promise<DonationProvider[]> {
    return new Promise((resolve, reject) => {
      let query = new Parse.Query(this);
      query.find().then(resolve, reject);
    });
  }

  get name(): string {
    return this.get('name');
  }

  set name(name: string) {
    this.set('name', name);
  }

  get address(): string {
    return this.get('address');
  }

  set address(address: string) {
    this.set('address', address);
  }

  get donation(): Donation[] {
    return this.get('donation');
  }

  set donation(donation: Donation[]) {
    this.set('donation', donation);
  }
}

Parse.Object.registerSubclass('Donation', DonationProvider);