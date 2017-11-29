import { Component } from '@angular/core';
import {Employee} from './models/model';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  model = new Employee('','');
  hasErrors = null;

  constructor(private router: Router) { 
  } 

  submitForm(form :NgForm)
  {
    //Validate Form 
    if(this.model.passWord != '123456')
      {
        this.hasErrors ="Password is wrong";
        console.log(this.hasErrors);
      }
      else
        {
          this.router.navigate(['/','Success']).then(nav => {
            console.log(nav); // true if navigation is successful
          }, err => {
            console.log(err) // when there's an error
          });
          console.log('success');
        }
    
  }

}
