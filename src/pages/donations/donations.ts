import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { DonationProvider as Donation } from '../../providers/donation/donation';
import { CategoryProvider as Category } from '../../providers/category/category';

@IonicPage()
@Component({
  selector: 'page-donations',
  templateUrl: 'donations.html',
})
export class DonationsPage {
  donations: Donation[];
  categories: Category[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) { }

  ionViewWillEnter() {
    this.onReload();
  }

  loadData(refresher?: any) {
    Donation.load()
      .then(data => {
        this.donations = this.donations.concat(data);
        return Category.load();
      })
      .then(data => {
        this.categories = data;
        refresher.complete();
      })
      .catch(error => {
        console.error(error);
      });
  }

  onReload(refresher?: any) {
    this.donations = [];
    this.loadData(refresher);
  }

  openModal(page: string, data?: any) {
    let modal = this.modalCtrl.create(page, data);
    modal.onDidDismiss(data => {
      if (data) this.onReload();
    });
    modal.present();
  }
}
