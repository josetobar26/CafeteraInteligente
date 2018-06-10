import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';
import { Usuario } from '../../modelos/usuario';
import { UsuarioService } from '../../providers/auth-service/usuario-service';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
 
  usuario:Usuario=new Usuario(null,'','','','','') ;
  createSuccess = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public userService:UsuarioService,private alertCtrl: AlertController) {
  }
  saveData(){
    this.usuario.rol="Invitado";
   
    this.userService.create(this.usuario)
            .subscribe(
                data => {
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    this.createSuccess = true;
                    this.showPopup("Success", "Account created.");
                },
                error => {
                  this.showPopup("Error", error);
                });


  }
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.navCtrl.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
