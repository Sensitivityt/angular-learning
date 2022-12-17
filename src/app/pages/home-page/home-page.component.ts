import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  res = {} as activityInfo;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<activityInfo>('https://www.boredapi.com/api/activity').subscribe(response => {
      this.res = response;
    });
  }
}

export interface activityInfo {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
}