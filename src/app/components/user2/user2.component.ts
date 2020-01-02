import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {

  name: string;
  email: string;
  age: number;
  address : {
    street:string,
    city:string,
    state:string
  };

  hobbies:string[];
  constructor() { }

  ngOnInit() {

    this.name = 'harsha';
    this.age = 20;
    this.email = 'harsha@gmail.com';
    this.address = {
      street: '5 th Main ',
      city: 'NewYork',
      state: 'NY'
    }

    this.hobbies=['To Code','Listing to music','Playing Chess'];

  }
  OnClick(){
    this.name = 'Harsha Anantharamu';
    //this.hobbies.push('New Hobby');
    //this.hobbies.pop();
    //this.hobbies.splice(2,2);
    this.hobbies.unshift('New hobbies')
  }

  counter = 0;
  increaseCounterValue(){
     this.counter++;
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i=0;i<=this.hobbies.length;i++){
      if(this.hobbies[i]==hobby){
        this.hobbies.splice(i,1);
      }
      
    }
  }
}
