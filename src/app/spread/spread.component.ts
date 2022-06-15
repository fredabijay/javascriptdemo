import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spread',
  templateUrl: './spread.component.html',
  styleUrls: ['./spread.component.css']
})
export class SpreadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.mergeArrays(this.asianCountries, this.africanCountries));
    console.log(this.cloneArray(this.asianCountries));
  }

  readonly asianCountries = ['Thailand', 'Iran', 'North Korea'];
  readonly africanCountries = ['Egypt', 'South Africa', 'Mali'];

  public mergeArrays(arr1:any, arr2:any):any {
    const combinedArrays = [...arr1, ...arr2]
    return combinedArrays;
  }

  public cloneArray(arr:any):any {
    const clone = [...arr];
    return clone;
  }
}
