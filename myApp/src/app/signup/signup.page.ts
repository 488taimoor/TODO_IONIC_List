
import { Component, OnInit } from '@angular/core';
// import { IonicPage, NavController, AlertController, ToastController, MenuController, LoadingController } from 'ionic-angular';
import { NavController, ModalController, PopoverController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private fb: FormBuilder, private fbauth: AngularFireAuth, public navctrl: NavController, private loadingCtrl:LoadingController) {
  }


  fullname = new FormControl('', [
    Validators.required
  ]);

  email = new FormControl("", [
    Validators.required,
    Validators.pattern("[^ @]*@[^ @]*")
  ]);
  
  gender= new FormControl('',[
    Validators.required
  ])
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);

  myform: FormGroup = this.fb.group({
    fullname: this.fullname,
    email: this.email,
    gender: this.gender,
    password: this.password
  });









  ngOnInit() {

    // this.creatForm();
  }

  // creatForm(){
  //   this.myform = this.fb.group({
  //     fullname: ['',[Validators.required,
  //       Validators.minLength(8)]]
  //   })
  // }
  showdata() {
    // this.navCtrl.setRoot('news')
    
   
    console.log('====================================');
    console.log(this.myform.value);
    console.log('====================================');
    let data = this.myform.value;
    let credentials = {
			name: data.fullname,
      email: data.email,
      gender: data.gender,
      password: data.password
    };

  

    try{
      const result=  this.fbauth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
      console.log('====================================');
      console.log('here is result',result);
      console.log('====================================');
      if(result){
        
        this.navctrl.navigateForward('news')
        
      }
    }catch(e){
      console.log('====================================');
      console.log('here is error:',e);
      console.log('====================================');
    }
   
  }

}
