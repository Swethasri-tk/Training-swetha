import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-matform',
  templateUrl: './matform.component.html',
  styleUrls: ['./matform.component.css']
})
export class MatformComponent implements OnInit {
  
  firstname = new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]);
  lastname = new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  p1 = new FormControl('',[Validators.required, Validators.minLength(6)]);
  p2 = new FormControl('',[Validators.required, Validators.minLength(6)]);
  image = new FormControl('', Validators.required);
  countries = new FormControl('',[Validators.required]);
  ff:any;
  err:any;
  url = "";
  hide = true;
  
  
  constructor() { }

  ngOnInit(): void {
   
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorp1() {
    if(this.p1.hasError('required')) {
      return 'Not a valid password';
    }
    return 'You must enter a value with atleast 6 characters' ;
    }  

  getErrorp2() {
      if(this.p1.value != this.p2.value) {
      return 'You must enter noo';
      }
      return ' Your password does not match' ;    
      }
     

  getErrorc() {
        if(this.countries.hasError('required') && this.countries == null) {
          return 'You must select your country';
        }
        return 'You must select your country';
      }

  getErrorn1() {
        if(this.firstname.hasError('required')) {
          return 'You must enter name';

        }
        return 'you must enter name between 3 to 20 characters ';
      }

    getErrorn2() {
        if(this.lastname.hasError('required')) {
          return 'You must enter name';

        }
        return 'you must enter name between 3 to 20 characters ';
      }

  
    oncc(check1:any, check2:any) {
      if(check1.checked == true && check2.checked == true) {
        this.ff = "Do not select more options";
      }
      else if(check1.checked == false && check2.checked == false) {
        this.ff = "You must choose";
      }
      else if(check1.checked == true || check2.checked == true) {
        this.ff= "";
      }
    }

    onerr(im:any) {
      if(im == null) {
        this.err ="You doesn't choose image";
      }
      this.err = "";
    }

    selectimg(event:any) {
      if(event.target.files) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event:any) => {
          this.url = event.target.result;
        }
      }
    }

    

      onSubmit(cc1:any,cc2:any) {
        if(this.firstname.valid && this.lastname.valid && this.email.valid && this.p1.valid && this.p2.valid && this.countries.valid  && this.image.valid && this.p1.value == this.p2.value && cc1.checked == true || cc2.checked == true) {
        alert("Form Validation successfull!!");
        }
        else if(this.p1.value != this.p2.value) {
        alert("your password does not match");
        }
        else if(cc1.checked == false && cc2.checked == false) {
          this.ff = "You must choose";
        }

        if(this.image.invalid) {
          this.err = "You doesn't choose image";
        }
       
      }

      }  
  


