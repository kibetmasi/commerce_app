import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { ApiService } from '../services/api.service';
import { ModalController } from '@ionic/angular';
import { CreationPage } from '../pages/creation/creation.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
image: File;
description: string;
house_number: any;
name: string;
ads: any;
  constructor(private api:ApiService, public popoverController: PopoverController, public modalController: ModalController) {}

  ngOnInit(){
    this.getData();
  }

  // onImageChanged(event: any){
  //   this.image = event.target.files[0];
  // }

  // onDescriptionChanged(event:any){
  //   this.description = event.target.value;
  // }

  // onHouseChanged(event:any){
  //   this.house_number = event.target.value;
  // }

  // onNameChanged(event:any){
  //   this.name = event.target.value;
  // }

  // postData(){
  //   const uploadData = new FormData();
  //   uploadData.append("image", this.image);
  //   uploadData.append("description", this.description);
  //   uploadData.append("house_number", this.house_number);
  //   uploadData.append("name", this.name);
  //   this.api.CreateAds(uploadData).subscribe(response => {
  //     console.log(response)
  //     alert("Advertisement uploaded successfully")//present toast
  //   });
  // }

  doRefresh(event) {
    window.location.reload()

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CreationPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  getData(){
    return this.api.getAds().subscribe(data => {
      console.log("API DATA:", data);
      this.ads = data;
    })

  }
}
