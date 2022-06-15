import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asyncawaitpromise',
  templateUrl: './asyncawaitpromise.component.html',
  styleUrls: ['./asyncawaitpromise.component.css']
})
export class AsyncawaitpromiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.waitForFiveSeconds().then(this.waitForThreeSeconds);
  }

  async waitForFiveSeconds() {
    const promise1 = new Promise((resolve, reject) => {
      setTimeout(() => resolve("1 second"), 1000);
    });

    const promise2 = new Promise((resolve, reject) => {
      setTimeout(() => resolve("4 seconds"), 4000);
    });

    const v1 = await promise1;
    console.log(v1);
    const v2 = await promise2;
    console.log(v2);
  }

  async waitForThreeSeconds() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("3 seconds"), 3000);
    });

    const value = await promise;
    console.log(value);
  }
}
