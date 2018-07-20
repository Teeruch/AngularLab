import { Component, OnInit, ViewChild } from '@angular/core';
import { debug } from 'util';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public i = 0
  public txtStart   : number
  componentCounter  : number
  @ViewChild(CounterComponent) counterComponent: any;

  constructor() { }

  ngOnInit() {
    this.txtStart = 0
  }

  log(){
    this.i++
    console.log(this.i)
  }

  update(e) {
    this.componentCounter = e
  }

  count() {
    this.counterComponent.map((component) =>{
      component.count(); 
    });
    // this.counterComponent.count();
  }
}
