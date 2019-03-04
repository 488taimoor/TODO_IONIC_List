import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AbcdService } from '../../providers/abcd.service';
import { Observable } from "rxjs";
import { filter, concat } from 'rxjs/operators';
import { ToastController, NavController, ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { CompletedPage } from '../completed/completed.page';






@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  todoitem = '';
  tododesc='';
  updateId = '';
  icon='bookmark';
  completevalue=false
  todolist: Observable<any[]>;
  properties: Observable<any[]>;
  List = [];
  constructor(private abcd: AbcdService, 
    private fdb: AngularFireDatabase, 
    private fbauth: AngularFireAuth,
    private toastCtrl: ToastController,
    private http: HttpClient,
    private navCtrl: NavController,
    private modalCtrl: ModalController) {


  }

  ngOnInit() {
    // this.http.get('https://api.diffbot.com/v3/article?token=6e309a316e339781718968e2511cce18&url=http%3A%2F%2Fblog.diffbot.com%2Fdiffbots-new-product-api-teaches-robots-to-shop-online').subscribe(data=>{
    // console.log('this is medium data:', data)
    // })
    this.fbauth.auth.onAuthStateChanged(user=>{
      if(user){
        console.log('user exist');
        
      }else{
        console.log('====================================');
        console.log('user not exist');
        console.log('====================================');
      }
    })
    this.fbauth.idToken.subscribe(token =>{
      console.log('====================================');
    console.log('heere is token:', token);
    console.log('====================================');
    })
    
  

    this.properties = this.abcd.findAll();

  }


  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }




  updatetodoitem(event: any) {
    this.todoitem = event.target.value;
    console.log('====================================');
    console.log(this.todoitem);
    console.log('====================================');
  }

  tododescription(event: any) {
    this.tododesc = event.target.value;
    console.log('====================================');
    console.log(this.tododesc);
    console.log('====================================');
  }

  AddinTodolist() {
    let todolist = { itemName: this.todoitem, description: this.tododesc, iconlabel: this.icon, completeStatus: this.completevalue }

    this.abcd.Add(todolist);
    this.todoitem = ''
    this.tododesc=''
    this.icon='bookmark'
    this.properties = this.abcd.findAll();
    console.log('====================================');
    console.log('here is data of properties array. ' + this.properties);
    console.log('====================================');
  }
  Delete(i) {
    let id = { id: i }
    console.log('====================================');
    console.log(i);
    console.log('====================================');
    this.abcd.Deleteitem(id).then(() => {
      console.log('====================================');
      console.log('Deleted');
      console.log('====================================');
    }).catch(err => {
      alert(JSON.stringify(err))
    })

    // this.List.splice(i);
    // this.List.sort();
  }
  Edit(i) {
    // let id ={id:i, name:this.todoitem}
    console.log('====================================');
    console.log('edit######:', i)
    console.log('====================================');
    this.updateId = i.key
    this.todoitem = i.itemName
    this.tododesc = i.description
    this.icon=i.iconlabel

    // this.abcd.Updateitem(i).then(data =>{
    //   console.log('====================================');
    //   console.log('updated', data);
    //   console.log('====================================');
    // }).catch(err =>{
    //   alert(JSON.stringify(err))
    // })

    // this.todoitem = this.List[i];
  }

  Update() {
    console.log('====================================');
    console.log(this.updateId);
    console.log('====================================');

    let updateditem= {id:this.updateId, itemName: this.todoitem, description:this.tododesc, iconlabel:this.icon, completeStatus: this.completevalue}
    this.todoitem=''
    this.tododesc=''
    this.icon='bookmark'
    this.abcd.Updateitem(updateditem).then(data =>{
      console.log('====================================');
      console.log('updated', data);
      console.log('====================================');
    }).catch(err =>{
      alert(JSON.stringify(err))
    })
  }

  iconselection(value){
    console.log('icon:', value);
    this.icon=value
  }

  Logout(){
    
    this.fbauth.auth.signOut()
    this.navCtrl.navigateForward('signup')
  }
updateCompleteStatus(updateditem){
  this.abcd.UpdateStatus(updateditem).then(data =>{
    console.log('====================================');
    console.log('updated', data);
    console.log('====================================');
  }).catch(err =>{
    alert(JSON.stringify(err))
  })
}

  complete(item ,event){
    let checkedvalue= event.target.checked
    console.log('checked value:', checkedvalue)
    // this.completevalue=checkedvalue;
    // this.updateId= item.key;
    // console.log('here is vkey:', this.updateId);
    let updateditem= {id: item.key, completeStatus: checkedvalue}
    
    this.updateCompleteStatus(updateditem);
  }
  async ToDoCompleted(){
    const modal = await this.modalCtrl.create({
      component: CompletedPage,
      // componentProps: {
      //   custom_id: this.value
      // }
    });
    await modal.present();
  }

  getlist() {
    var name = 'taimoor'
    console.log('====================================');
    console.log('im adding name in firebase');
    console.log('====================================');
    let body = JSON.stringify(name);
    this.fdb.list('favourites').push(body);

  }
}
