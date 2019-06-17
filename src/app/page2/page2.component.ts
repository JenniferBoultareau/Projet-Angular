import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})

@Injectable()
export class Page2Component implements OnInit {

  datas = [];
  
  constructor(private httpClient: HttpClient) { }
  
  ngOnInit() {
  }

  getWebradio() {
    this.httpClient
      .get<any[]>('https://webradio.julienduhem.fr/')
      .subscribe(
        (response) => {
          console.log(response);
          this.datas = response;
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  onFetch() {
    this.getWebradio();
  }

}
