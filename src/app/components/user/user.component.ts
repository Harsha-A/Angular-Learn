import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email: string;
  address: Address;
  hobbies : string[];

  constructor() {
    console.log('Constructor Ran');
   }

  ngOnInit() {
    console.log('ngOnInit Ran')
    this.name = 'John Doe';
    this.age = 20;
    this.address={
      street: '50 Main Street',
      city: 'Boston',
      state: 'MA'
    }
    this.email = 'harsha@gmail.com'

    this.hobbies=['Swimming','Coding','Dancing'];
  }

  onClick(){
    console.log('Hello ')
    this.name = 'Harsha'
    this.hobbies.push('New Hobby');
  }

}

interface Address {
  street: string,
  city:string,
  state:string
}