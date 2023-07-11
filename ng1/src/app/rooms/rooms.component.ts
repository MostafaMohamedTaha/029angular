import { Component, OnInit } from '@angular/core';
import {Room} from './rooms'
@Component({
  selector: 'hint-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit{
[x: string]: any;
  name='mostafa';
  num1=10;
  t1=false;
  rooms:Room={
    totalRooms:30,
    availableRooms:20,
    bookedRooms:5
}
  constructor(){}
  ngOnInit(): void {
  }
  toggle(){
    this.t1=!this.t1;
  }
}


