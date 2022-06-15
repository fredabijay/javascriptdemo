import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arraymethods',
  templateUrl: './arraymethods.component.html',
  styleUrls: ['./arraymethods.component.css']
})
export class ArraymethodsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.concatDemo();
    this.joinDemo();
    this.popDemo();
    this.pushDemo();
    this.sliceDemo();
    this.spliceDemo();
    this.reverseDemo();
  }

  readonly girls = ['Maria', 'Claire', 'Emily', 'Beatrice', 'Queenie']
  readonly boys = ['Joey', 'Chad', 'Eric']

  public concatDemo() {
    const res = this.girls.concat(this.boys);
    console.log(res);
  }

  public joinDemo() {
    const res = this.girls.join(' and ');
    console.log(res);
  }

  public popDemo() {
    const res = this.girls.pop();
    console.log(res + ' removed from array');
    console.log(this.girls);
  }

  public pushDemo() {
    const lengthOfArray = this.girls.push('Rebecca');
    console.log(lengthOfArray);
    console.log('new element added to array ' + this.girls);
  }

  public sliceDemo() {
    const res = this.girls.slice(0, 2);
    console.log(res);
    console.log('array not affected by slice ' + this.girls);
  }

  public spliceDemo() {
    const res = this.girls.splice(1, 1, 'Kate', 'Leanne', 'Ingrid');
    console.log(res + ' removed from array');
    console.log(this.girls);
  }

  public reverseDemo() {
    this.girls.reverse();
    console.log('array order reversed ' + this.girls);
  }
}
