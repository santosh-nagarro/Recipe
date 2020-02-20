import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  forbiddenUsernames = ['Blaise', 'Ann', 'Max'];

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl('', [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    // this.signUpForm.valueChanges.subscribe(value => {
    //   console.log(value);
    // });
    // this.signUpForm.statusChanges.subscribe(status => {
    //   console.log(status);
    // });

    // this.signUpForm.setValue({
    //   userData: {
    //     'username': 'Anna',
    //     'email': "test@test.com"
    //   },
    //   'gender': 'male',
    //   'hobbies': []
    // });

    // this.signUpForm.patchValue({
    //   userData: {
    //     'username': 'john'
    //   }
    // });
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  onAddHobby() {
    const controls = new FormControl('', Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(controls);
  }
  getControls() {
    return (this.signUpForm.get('hobbies') as FormArray).controls;
    //return (<FormArray>this.signUpForm.get('hobbies')).controls; // Alternative method also can use
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'Forbidden': true };
    }
    return null;
  }
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promiseValue = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'santosh.2d@gmail.com') {
          resolve({ 'EmailisForbidden': true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promiseValue;
  }
}
