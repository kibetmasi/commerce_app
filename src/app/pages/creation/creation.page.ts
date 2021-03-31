import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {HomePage} from 'src/app/home/home.page'
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-creation',
  templateUrl: './creation.page.html',
  styleUrls: ['./creation.page.scss'],
})
export class CreationPage implements OnInit {
image: File;
description: string;
house_number: any;
name: string;

  constructor(private api:ApiService, public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  onImageChanged(event: any){
    this.image = event.target.files[0];
  }

  onDescriptionChanged(event:any){
    this.description = event.target.value;
  }

  onHouseChanged(event:any){
    this.house_number = event.target.value;
  }

  onNameChanged(event:any){
    this.name = event.target.value;
  }

  postData(){
    const uploadData = new FormData();
    uploadData.append("image", this.image);
    uploadData.append("description", this.description);
    uploadData.append("house_number", this.house_number);
    uploadData.append("name", this.name);
    this.api.CreateAds(uploadData).subscribe(response => {
      console.log(response)
      alert("Advertisement uploaded successfully")//present toast
    });
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
