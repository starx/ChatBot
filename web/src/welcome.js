import {computedFrom} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Welcome{
  heading = 'Welcome to the Chatbot';
  firstName = 'John';
  lastName = 'Doe';
  email = '';
  previousValue = this.fullName;

  //Getters can't be observed with Object.observe, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below.
  //@computedFrom('firstName', 'lastName')
  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  submit(){    
    this.previousValue = this.fullName;
    this.email = this.email;
    
    console.log(`Welcome, ${this.fullName}!`, `${this.email}`);
    registerUser();
  }

  registerUser() {
    url = "/chat/register/user";
    return this.http.jsonp(url).then(response => {
      this.images = response.content.items;
    });    
  }

  canDeactivate() {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}