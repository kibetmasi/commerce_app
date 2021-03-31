import { Component } from '@angular/core';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [StatusBar],
})

export class AppComponent {
  constructor(private status:StatusBar, private platform:Platform) {
    platform.ready().then(() => {
      status.styleDefault();
      status.backgroundColorByHexString('#e4d3cf');
    });
  }
}
