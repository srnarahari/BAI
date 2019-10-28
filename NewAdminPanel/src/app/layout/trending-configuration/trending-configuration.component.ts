import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { first } from 'rxjs/operators';
// import { User } from './user';
import {FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { apiService,Person,tag,Role} from '../../shared/services/index';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

import { Router } from '@angular/router';
import { Subject, Observable, of, concat } from 'rxjs';
import { distinctUntilChanged, debounceTime, switchMap, tap, catchError } from 'rxjs/operators'
@Component({
  selector: 'app-trending-configuration',
  templateUrl: './trending-configuration.component.html',
  styleUrls: ['./trending-configuration.component.scss']
})
export class TrendingConfigurationComponent implements OnInit {
 users: any;
 treding_configuration: FormGroup;
 role_all 
 pos_all=[
   {posValue:1},
   {posValue:2},
   {posValue:3}
 ];
country_all=[
   {countryValue:'ALL'},
   {countryValue:'INTR'},
   {countryValue:'AU'},
   {countryValue:'CA'},
   {countryValue:'CHINA'},
   {countryValue:'FR'},
   {countryValue:'GER'},
   {countryValue:'HK'},
   {countryValue:'IND'},
   {countryValue:'ITL'},
   {countryValue:'JP'},
   {countryValue:'KR'},
   {countryValue:'ME'},
   {countryValue:'ES'},
   {countryValue:'UK'},
 ]; 
articledata: Person[] = [];
 articleloading = false;
 articleinputs$ = new Subject<string>();
 userName:"";
 public data: any[];
 public filterQuery = "";
 public rowsOnPage = 5;
 public sortBy = "userName";
 public sortOrder = "1";
 constructor(private _router:Router,private userService:UserService,private apiService:apiService,private modalService: NgbModal,private _formBuilder: FormBuilder,private spinner: NgxSpinnerService ) { 
 }
  ngOnInit() {
    this.getallusers();
    this.loadArticle();
    this.getUserRoles();
   this.treding_configuration = this._formBuilder.group({
       _id: [null],
       pos: [null],
        country_abb:[null],
    });
 
  }
 get _id() {
    return this.treding_configuration.get('_id');
  }
  get pos() {
    return this.treding_configuration.get('pos');
  }
   get country_abb() {
    return this.treding_configuration.get('country_abb');
  }
   // Article autocomplete section 
    // private loadArticle() {
    //     this.articledata = concat(
    //         of([]), // default items
    //         this.articleinputs$.pipe(
    //            debounceTime(200),
    //            distinctUntilChanged(),
    //            tap(() => this.articleloading = true),
    //            switchMap(articledata => this.apiService.getArticleData().pipe(
    //                catchError(() => of([])), // empty list on error
    //                tap(() => this.articleloading = false)
    //            )) 
    //         )
    //     );
    // }
    private loadArticle() {
      this.articleloading = true;
      this.apiService.getArticleData().subscribe(x => {
          debounceTime(200),
          this.articledata = x;
          this.articleloading = false;
      });
  }
// Get data from service
private getallusers() {
  this.spinner.show();
  this.apiService.gethomepageconfig()
     .subscribe((data)=> {
        this.data = data.response;
        this.spinner.hide();
         console.log(data);
     });
  }
  //Get Roles Lit
  getUserRoles(){
    this.apiService.gethomepageconfig().subscribe(data=>{
      this.role_all = data;

    })
  }
  public toInt(num: string) {
        return +num;
    }
   ontrending(){
    this.spinner.show();
     this.apiService.trendingConfig(this.treding_configuration.value)
      .subscribe(
      data=> {
         this.spinner.hide();
          Swal({
               title: 'Thank for update home page trending',
               text: "Click ok button going to same page",
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
 // Select data to server
onSelect(selectedItem: any) {
  // this.treding_configuration.patchValue({
  //   _id:[selectedItem.articleId]
  // });
  this.spinner.show();
    let data = {
        _id: [selectedItem.articleId], pos: selectedItem.pos, country_abb: selectedItem.country_abb
    }
  if(selectedItem.articleId){
     console.log(this.treding_configuration.value);
     this.apiService.trendingConfig(data)
      .subscribe(
      data=> {
         this.spinner.hide();
          Swal({
               title: 'Thank for update home page trending',
              text: "Click ok button going to same page",
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
 deleteItem(item){
   Swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
         //closeOnConfirm: false,
         //closeOnCancel: false
      }).then((result) => {
        if (result.value) {
          Swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
           this.apiService.deleteTrendingConfig(item._id, item.trending[0]._id).subscribe(response=>{
                  this.getallusers();
                })
        }


           })
  
}
	
}
