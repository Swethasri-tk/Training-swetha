import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-formv',
  templateUrl: './formv.component.html',
  styleUrls: ['./formv.component.css']
})
export class FormvComponent implements OnInit {
bb:any;
cc:any;
mm:any;
ff:any;
image:any;
url ="";
  constructor() { 
    
  }

  ngOnInit(): void {
   
  }
onc(one:any,two:any) {
  if(!one.checked && !two.checked)
  this.cc = "nooo";
  else
  this.bb = "yes";
 
}

oncc(check1:any, check2:any) {
  if(check1.checked == true && check2.checked == true) {
    this.ff = "nooo one choose"
  }
  else if(check1.checked == false && check2.checked == false) {
    this.ff = "choose must";
  }
  else if(check1.checked == true || check2.checked == true) {
    this.ff= "good";
  }

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


  
}
