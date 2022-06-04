import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {ServicesService} from 'src/services/services.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:any
  errormsg:any
  NgForm: any;
  constructor(private _service: ServicesService,private router:Router) { }

  ngOnInit(): void {

  }
  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);

    const data=f.value

    this._service.checkUser(data).subscribe((res:any)=>{
      console.log(res.message);
      this.msg=res.message;
      if(res.message=='LOGIN SUCCESSFUL'){
        this.router.navigate(['/home'])
      }
      f.reset();
    })
  }
 

}
