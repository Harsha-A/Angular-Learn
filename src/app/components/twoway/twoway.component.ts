import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent implements OnInit {

  name: string;
  age: number;
  email : string;
  address: Address;
  constructor() { }

  ngOnInit() {

    this.name = "harsha";
    this.age = 20;
    this.email = "harsha@gmail.com";
    this.address = {
      street : "5th Main Road",
      city:"New York",
      state:"NY"
    }
    
  }

}

interface Address {
  street: string,
  city: string,
  state: string
}
