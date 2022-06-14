import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapreducefilter',
  templateUrl: './mapreducefilter.component.html',
  styleUrls: ['./mapreducefilter.component.css']
})
export class MapreducefilterComponent implements OnInit {

  readonly staff = [
    { id: 1, name:'pete', age:20},
    { id: 2, name:'bob', age:36},
    { id: 3, name:'sherwin', age:42},
    { id: 4, name:'ping', age:70}
  ]
  constructor() { }

  ngOnInit(): void {
    // MAP EXAMPLES
    this.staff.map(x => {
      console.log(x);
    })
    const ageDoubled = this.staff.map(this.doubleAge);
    console.log(ageDoubled);
    // FILTER EXAMPLES
    const filteredAboveFortyStaff = this.staff.filter(x => x.age > 40);
    console.log(filteredAboveFortyStaff);
    const filteredBelowFortyStaff = this.staff.filter(this.lessThanForty);
    console.log(filteredBelowFortyStaff);
    // REDUCE EXAMPLES
    const reducer = (accumulator:any, item:any) => {
      return accumulator + item.age;
    }
    const total = this.staff.reduce(reducer, 0);
    console.log(total);
  }

  public doubleAge(o:any):number {
    return o.age * 2;
  } 

  public lessThanForty(o:any):any {
    if (o.age < 40) {
      return o;
    }
    return false;
  }
}
