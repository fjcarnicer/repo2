import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-items',
  templateUrl: 'items.html'
})
export class ItemsPage {

  constructor(public navCtrl: NavController) {

  }
  itemPress(event, button) {
    console.log(button)
  }
}
