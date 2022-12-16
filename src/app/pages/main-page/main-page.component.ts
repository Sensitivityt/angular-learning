import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  title: string;
  description: string;
  hero: string;
  titleHide: string = "ซ่อน";
  _show: boolean = true;

  userList: string[] = ["A1", "A2", "A3"];

  constructor() { }

  ngOnInit(): void {
    this.title = "ฮีโร่ในดวงใจ";
    this.description = "โปรดระบุฮีโร่ในดวงใจของท่าน";
    this.hero = "ไอ้มดแดง";
  }

  btnclick() {
    this.userList.push(this.hero);
  }

  btnDel() {
    this.userList.pop();
  }

  btnSwicth(){
    if(this._show){
      this._show = false;
      this.titleHide = "แสดง";
    }else{
      this._show = true;
      this.titleHide = "ซ่อน";
    }
  }

}
