import { Injectable } from '@angular/core';

import Parse from 'parse';

@Injectable()
export class CategoryProvider extends Parse.Object {
  constructor() {
    super('Category');
  }

  static load(): Promise<CategoryProvider[]> {
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
}

Parse.Object.registerSubclass('Category', CategoryProvider);