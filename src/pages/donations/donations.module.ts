import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonationsPage } from './donations';

@NgModule({
  declarations: [
    DonationsPage,
  ],
  imports: [
    IonicPageModule.forChild(DonationsPage),
  ],
})
export class DonationsPageModule {}
