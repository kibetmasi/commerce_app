import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
news;
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.getData()
  }

  getData(){
    return this.api.getNews().subscribe(data => {
      console.log("API DATA:", data);
      this.news = data;
    })

  }
}
