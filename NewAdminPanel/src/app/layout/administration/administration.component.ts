import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { first } from 'rxjs/operators';
// import { User } from './user';
import {DataFilterPipe} from "./data-filter.pipe";
import {FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { apiService } from '../../shared/services/index';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import {Http} from "@angular/http";
@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {
 users: any;
 user_activate: FormGroup;
 role_all

 userName:"";
 public data: any[];
 public filterQuery = "";
 public rowsOnPage = 5;
 public sortBy = "userName";
 public sortOrder = "1";
 constructor(private http: Http,private _router:Router,private userService:UserService,private apiService:apiService,private modalService: NgbModal,private _formBuilder: FormBuilder,private spinner: NgxSpinnerService ) { 
 }
  ngOnInit() {
    this.getallusers();
    this.getUserRoles();
  	this.user_activate = this._formBuilder.group({
      active: ['', [Validators.required]],
      userRole:['', [Validators.required]],
      userId:[''],
      filter:['']
    });
 
  }
 
  // Get all data 
  get role() {
    return this.user_activate.get('role');
  } 
   get active() {
    return this.user_activate.get('active');
  } 
   get userId() {
    return this.user_activate.get('userId');
  } 
// Get data from service
 private getallusers() {
   this.apiService.getAllUserDetails()
      .subscribe((data)=> {
         this.data = data;
         console.log(data);
      });
  }
  //Get Roles Lit
  getUserRoles(){
    this.apiService.getUserRole().subscribe(data=>{
      this.role_all = data
    })
  }
  public toInt(num: string) {
        return +num;
    }
 // Select data to server
onSelect(selectedItem: any) {
  this.user_activate.patchValue({
    userId:selectedItem._id 
  });
  this.spinner.show();
  if(selectedItem._id){
     console.log(this.user_activate.value);
     this.apiService.administration(this.user_activate.value)
      .subscribe(
      data=> {
         this.spinner.hide();
          Swal({
               title: 'Thank for active user',
               text: "Click ok button going for dashboard page",
               type: 'success',
               allowOutsideClick: false,
               showCancelButton: false,
               confirmButtonColor: '#3085d6',         
               confirmButtonText: 'OK'
            }).then((result) => {
            if (result.value) {
                this._router.navigate(['/layout/dashboard'])
            }})
        console.log(data);

      },
      error => {
        alert('error');
      })
  }
 

}

}
