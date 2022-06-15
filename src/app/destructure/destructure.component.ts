import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destructure',
  templateUrl: './destructure.component.html',
  styleUrls: ['./destructure.component.css']
})
export class DestructureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.destructureWorker(this.worker);
    this.destructureWorkers(this.workers);
  }

  readonly worker = { id: 1, name: 'shannon', age:48, address: { city:'baltimore' }}

  readonly workers = [
    { id:1, name:'shannon', age:48, address:{city:'baltimore'} },
    { id:2, name:'elizabeth', age:23, address:{city:'portland'} },
    { id:3, name:'julius', age:33, address:{city:'denver'} },
    { id:4, name:'nancy', age:12, address:{city:'philadelphia'} },
    { id:5, name:'tucker', age:66, address:{city:'new york'} }
  ]

  public destructureWorker({name, address:{city}}:any):void {
    console.log(name + ' ' + city);
  }

  public destructureWorkers(arr:any[]):void {
    arr.map( x => {
      const {name, address:{city}} = x;
      console.log(name + ' ' + city);
    })
  }
}