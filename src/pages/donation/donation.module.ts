import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonationPage } from './donation';

@NgModule({
  declarations: [
    DonationPage,
  ],
  imports: [
    IonicPageModule.forChild(DonationPage),
  ],
})
export class DonationPageModule {}
