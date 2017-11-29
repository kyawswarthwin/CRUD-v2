import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { DonationProvider as Donation } from '../../providers/donation/donation';
import { CategoryProvider as Category } from '../../providers/category/category';

@IonicPage()
@Component({
  selector: 'page-donation',
  templateUrl: 'donation.html',
})
export class DonationPage {
  isEditView: boolean = false;
  donation: any;
  categories: Category[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    if (navParams.get('donation')) {
      this.isEditView = true;
      this.donation = navParams.get('donation').toJSON();
    } else {
      this.donation = new Donation();
    }
    this.categories = navParams.get('categories');
  }

  closeModal(data?: any) {
    this.viewCtrl.dismiss(data);
  }

  onCreate() {
    this.donation.save().then(
      data => {
        this.closeModal(data);
      },
      error => {
        console.error(error);
      }
    );
  }

  onUpdate() {
    let donation = new Donation();
    donation.save(this.donation).then(
      data => {
        this.closeModal(data);
      },
      error => {
        console.error(error);
      }
    );
  }

  onDelete() {
    let donation = new Donation();
    donation.id = this.donation.objectId;
    donation.destroy().then(
      data => {
        this.closeModal(data);
      },
      error => {
        console.error(error);
      }
    );
  }
}
