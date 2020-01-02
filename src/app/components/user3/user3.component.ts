import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user3',
  templateUrl: './user3.component.html',
  styleUrls: ['./user3.component.css']
})
export class User3Component implements OnInit {

  name:string;
  age:number;
  email:string;

  hobbies:string[];

  constructor() { }

  ngOnInit() {

    this.name = 'harsha';
    this.age = 22;
    this.email = 'harsha@gmail.com'

    this.hobbies = ['To Code','Listen to music','To Dance'];
  }
  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for (let i=0;i<this.hobbies.length;i++){
      if(this.hobbies[i]==hobby){
        
        this.hobbies.splice(i,1);
      }
    }
  }

}
