import { Component, OnInit, Input, OnChanges,  SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnChanges {

  @Input() start : number
  @Output() change = new EventEmitter<number>()
  counter : number = 0
  
  constructor() { }

  ngOnInit() {
    this.counter = this.start
  }

  ngOnChanges(changes: SimpleChanges) {
    this.counter = this.start
  }

  reset() {
    this.counter = this.start
    this.change.emit(this.counter)
  }

  count() {
    this.counter++
    console.log(this.counter)
    this.change.emit(this.counter)
  }

}
