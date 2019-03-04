import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { AbcdService } from '../../providers/abcd.service';
import { Observable } from "rxjs";
@Component({
  selector: 'app-completed',
  templateUrl: './completed.page.html',
  styleUrls: ['./completed.page.scss'],
})
export class CompletedPage implements OnInit {
  properties: Observable<any[]>;
  constructor( private modalCtrl: ModalController,
              private abc:AbcdService,
                                      
            ) { }

  ngOnInit() {
   this.properties= this.abc.findAll()
    
  }


  updateCompleteStatus(updateditem){
    this.abc.UpdateStatus(updateditem).then(data =>{
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
  



  closeModal() {
    this.modalCtrl.dismiss();
  }
}
