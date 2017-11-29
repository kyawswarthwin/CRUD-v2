import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { CategoryProvider as Category } from '../../providers/category/category';

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  isEditView: boolean = false;
  category: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    if (navParams.get('category')) {
      this.isEditView = true;
      this.category = navParams.get('category').toJSON();
    } else {
      this.category = new Category();
    }
  }

  closeModal(data?: any) {
    this.viewCtrl.dismiss(data);
  }

  onCreate() {
    this.category.save().then(
      data => {
        this.closeModal(data);
      },
      error => {
        console.error(error);
      }
    );
  }

  onUpdate() {
    let category = new Category();
    category.save(this.category).then(
      data => {
        this.closeModal(data);
      },
      error => {
        console.error(error);
      }
    );
  }

  onDelete() {
    let category = new Category();
    category.id = this.category.objectId;
    category.destroy().then(
      data => {
        this.closeModal(data);
      },
      error => {
        console.error(error);
      }
    );
  }
}
