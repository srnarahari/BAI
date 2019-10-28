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
  selector: 'app-getEntityLocation',
  templateUrl: './getEntityLocation.component.html',
  styleUrls: ['./getEntityLocation.component.scss']
})
export class GetEntityLocationComponent implements OnInit {

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
 entityType_all = [
  {entityTypeLael:"Art Center"},
  {entityTypeLael:"Assocaition"},
  {entityTypeLael:"Auction House"},
  {entityTypeLael:"Company"},
  {entityTypeLael:"Dealer"},
  {entityTypeLael:"Designer"},
  {entityTypeLael:"Fair"},
  {entityTypeLael:"Film/Media"},
  {entityTypeLael:"Foundation"},
  {entityTypeLael:"Gallery"},
  {entityTypeLael:"Institution"},
  {entityTypeLael:"Museum"},
  {entityTypeLael:"Perfoming Arts"},
  {entityTypeLael:"Publisher"},
]
selectedEntityType = null;
Speciality_All = [];
page:number = 1;
selectedSpeciality = null;
 constructor(private http: Http,private _router:Router,private userService:UserService,private apiService:apiService,private modalService: NgbModal,private _formBuilder: FormBuilder,private spinner: NgxSpinnerService ) { 
 }
  ngOnInit() {
    this.getallusers();
    this.Speciality_All = this.apiService.getSpecialityData();
  	this.user_activate = this._formBuilder.group({
      active: ['', [Validators.required]],
      userRole:['', [Validators.required]],
      userId:[''],
      filter:[''],
      articles:['']
    });
 
  }
 
  // Get all data 
 
// Get data from service
 private getallusers() {
   let Objdata ={
    'speciality':this.selectedSpeciality,
    'entityType':this.selectedEntityType,
    'page':this.page,
       'sort':this.sortOrder
   }
   this.apiService.getEntityLocation(Objdata)
      .subscribe((data:any)=> {
         this.data = data;
         console.log(data);
      });
  }
  //Get Roles Lit
  


deleteItem(item){
  /*this.apiService.deleteArticle(item._id).subscribe(response=>{
    this.getallusers();
  })*/
  this.apiService.deleteVenue(item._id).subscribe(response=>{
    this.getallusers();
  })
}

onEdit(item){
  this._router.navigateByUrl(`/layout/entity-Location/${item._id}`)
}


}
