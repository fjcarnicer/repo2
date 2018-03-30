import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service';
@Component({
  selector: 'page-items',
  templateUrl: 'items.html'
})
export class ItemsPage {
  users: any[] = [];
  constructor(
    public navCtrl: NavController, 
    public userService: UserService
  ) {}

  itemPress(event, button) {
    console.log(button)
  }

  ionViewDidLoad(){
    this.userService.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data['results'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }
}
