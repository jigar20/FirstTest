import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  itemcount = 0;
  btnText: string = 'Add an item';
  goalText: string = 'My first life goal';
  goals = ['Ride bike','Go Out','Sleep'];


  constructor() { }

  // ngOnInit() {
  //   this.itemcount = this.goals.length;
  // }

  addItem(){
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemcount = this.goals.length;
  }
}
