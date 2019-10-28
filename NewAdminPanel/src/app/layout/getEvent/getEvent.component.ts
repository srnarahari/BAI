import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { first } from 'rxjs/operators';
// import { User } from './user';
import {FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { article,apiService } from '../../shared/services/index';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { Subject, Observable, of, concat } from 'rxjs';
import {Http} from "@angular/http";

import { distinctUntilChanged, debounceTime, switchMap, tap, catchError } from 'rxjs/operators'
@Component({
  selector: 'app-getEvent',
  templateUrl: './getEvent.component.html',
  styleUrls: ['./getEvent.component.scss']
})
export class GetEventComponent implements OnInit {

  users: any;
 user_activate: FormGroup;
 role_all 
//  = [
//     { role: 'Author'},
//     { role: 'Publisher'}
//  ]; 
 userName:"";
 public data:any = [];
 public filterQuery = "";
 public rowsOnPage = 5;
 public sortBy = "userName";
 public sortOrder = "-1";
 Categories_all = [];
 Month_all = [];
 Years_all = [];
 selectedYear = null;
 selectedMonth= null;
 selectedCategory = null;
 page:number = 1;

 constructor(private http: Http,private _router:Router,private userService:UserService,private apiService:apiService,private modalService: NgbModal,private _formBuilder: FormBuilder,private spinner: NgxSpinnerService ) { 
 }
  ngOnInit() {
    this.Years_all = this.apiService.getYears(new Date().getFullYear());
    this.Month_all = this.apiService.getMonths();
    this.Categories_all = this.apiService.getCategories();
    this.getallusers();
  	this.user_activate = this._formBuilder.group({
      active: ['', [Validators.required]],
      userRole:['', [Validators.required]],
      userId:[''],
      filter:[''],
      articles:['']
    });
 
  }
 
// Get data from service
 private getallusers() {
  let Objdata={
    'year':this.selectedYear,
    'month':this.selectedMonth,
    'category':this.selectedCategory,
    'page' : this.page,
      'sort':this.sortOrder
   }
   this.apiService.getEvents(Objdata)
      .subscribe((data:any)=> {
         this.data = data;
         console.log(data);
      });
  }
  
deleteItem(item){
  this.apiService.deleteEvent(item._id).subscribe(response=>{
    this.getallusers();
  })
}

onEdit(item){

 // alert(`/layout/events/${item._id}`);
  this._router.navigateByUrl(`/layout/events/${item._id}`)
}


}
