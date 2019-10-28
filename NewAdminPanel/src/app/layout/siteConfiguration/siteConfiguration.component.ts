import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
// import { User } from './user';
import {FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { apiService,Person,tag,Role} from '../../shared/services/index';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { Subject, Observable, of, concat } from 'rxjs';
declare var jquery:any;
declare var $ :any;
import { distinctUntilChanged, debounceTime, switchMap, tap, catchError } from 'rxjs/operators'
@Component({
  selector: 'app-siteConfiguration',
  templateUrl: './siteConfiguration.component.html',
  styleUrls: ['./siteConfiguration.component.scss']
})
export class SiteConfigurationComponent implements OnInit {
  short_title: any;
  users: any;
  sliders:string[];
 user_activate: FormGroup;
 pos_all=[
   {posValue:1},
   {posValue:2},
   {posValue:3},
   {posValue:4},
   {posValue:5}
 ]
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
 ]
 role_all 
//  = [
//     { role: 'Author'},
//     { role: 'Publisher'}
//  ]; 
// Search Field for article
 articledata: Person[] = [];
 articleloading = false;
 articleinputs$ = new Subject<string>();

 userName:"";
 public data: any[];
 public filterQuery = "";
 public rowsOnPage = 5;
 public sortBy = "userName";
 public sortOrder = "1";
 constructor(private _router:Router,private userService:UserService,private apiService:apiService,private _formBuilder: FormBuilder,private spinner: NgxSpinnerService ) { 
 }
  ngOnInit() {
    this.getallusers();
    this.loadArticle();
   // this.getUserRoles();
  	this.user_activate = this._formBuilder.group({
      _id: [null],
      pos: [null],
      country_abb:[null],
     
      
    });
 
 
  }
  get _id() {
    return this.user_activate.get('_id');
  }
 
  get pos() {
    return this.user_activate.get('pos');
  }
  get country_abb() {
    return this.user_activate.get('country_abb');
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
  // Select slider 

 onslider(){
    this.spinner.show();
    console.log(this.user_activate.value);
     this.apiService.sliderConfig(this.user_activate.value)
      .subscribe(
      data=> {
         this.spinner.hide();
          Swal({
               title: 'Thank for update home page slider',
               text: "Click ok button going to the same page",
               type: 'success',
               allowOutsideClick: false,
               showCancelButton: false,
               confirmButtonColor: '#3085d6',         
               confirmButtonText: 'OK'
            }).then((result) => {
            if (result.value) {
                this._router.navigate(['/layout/dashboard'])
            }})
        console.log(this.user_activate.value);
      },
      error => {
        alert('error');
      })
 }
 // Select data to server
onSelect(selectedItem: any) {
  // this.user_activate.patchValue({
  //   _id:[selectedItem.articleId],
  //     pos:[selectedItem.articleId.pos],
  //     country_abb:[selectedItem.country_abb]
  //
  // });
  let data = {
      _id: [selectedItem.articleId], pos: selectedItem.pos, country_abb: selectedItem.country_abb
  }
  this.spinner.show();
  console.log(selectedItem);
  if(selectedItem.articleId){
    console.log(this.user_activate.value);
     this.apiService.sliderConfig(data)
      .subscribe(
      data=> {
         this.spinner.hide();
          Swal({
               title: 'Thank for update home page slider',
               text: "Click ok button going to the same page",
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


addAritcle(data){
  console.log("dasdsad",data);
  console.log(this.user_activate.get('articles').value);
  let object={
    _id:this.user_activate.get('articles').value._id,
    pos:this.data.length,

  }
  this.apiService.createArticleCountryPos(object).subscribe(Response=>{
    console.log(Response)
  })
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
           this.apiService.deleteSiteConfiguartion(item._id, item.sliders[0]._id).subscribe(response=>{
                  this.getallusers();
                })
        }


           })
  
}
onEdit(item){
  this._router.navigateByUrl(`/layout/forms/${item._id}`)
}


    testing(event,datas) {
        console.log(event,datas);
    }
}
