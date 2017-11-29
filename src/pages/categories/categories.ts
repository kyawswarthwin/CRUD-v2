import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { CategoryProvider as Category } from '../../providers/category/category';

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  categories: Category[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) { }

  ionViewWillEnter() {
    this.onReload();
  }

  loadData(refresher?: any) {
    Category.load()
      .then(data => {
        this.categories = this.categories.concat(data);
        refresher.complete();
      })
      .catch(error => {
        console.error(error);
      });
  }

  onReload(refresher?: any) {
    this.categories = [];
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
