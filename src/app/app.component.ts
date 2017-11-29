import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import Parse from 'parse';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'DonationsPage';

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    Parse.initialize('uaNpSvLm4WbacM9ArUj9PO5hdUXDfYIyfR00AksI', 'lC4JHEfPC1bAXdJ74xie2WAryqeMoQrISDTPesy9');
    Parse.serverURL = 'https://parseapi.back4app.com/';

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Donations', component: 'DonationsPage' },
      { title: 'Categories', component: 'CategoriesPage' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
