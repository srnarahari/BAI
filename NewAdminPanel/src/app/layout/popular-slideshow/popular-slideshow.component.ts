import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { first } from 'rxjs/operators';
// import { User } from './user';
import {FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { article,apiService,Person,tag,Role } from '../../shared/services/index';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { Subject, Observable, of, concat } from 'rxjs';
import { distinctUntilChanged, debounceTime, switchMap, tap, catchError } from 'rxjs/operators';
declare var $ :any;
@Component({
  selector: 'app-popular-slideshow',
  templateUrl: './popular-slideshow.component.html',
  styleUrls: ['./popular-slideshow.component.scss']
})
export class PopularSlideshowComponent implements OnInit {

  users: any;
 popularSlideshows_config: FormGroup;
 pos_all=[
   {posValue:1},
   {posValue:2},
   {posValue:3},

   {posValue:4},
   {posValue:5},
   {posValue:6},
   {posValue:7},
   {posValue:8},
   {posValue:9},
 ]
 role_all
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
//  = [
//     { role: 'Author'},
//     { role: 'Publisher'}
//  ]; 
slideshowCurrenDatedata: Observable<Person[]>;
 slideshowCurrenDateloading = false;
 slideshowCurrenDateinputs$ = new Subject<string>();

 slideshowCurrenWeekdata: Observable<Person[]>;
 slideshowCurrenWeekloading = false;
 slideshowCurrenWeekinputs$ = new Subject<string>();

 slideshowCurrenMonthdata: Observable<Person[]>;
 slideshowCurrenMonthloading = false;
 slideshowCurrenMonthinputs$ = new Subject<string>();
 userName:"";
 public data: any[];
  public datas: any[];
  public month: any[];
 public filterQuery = "";
 public rowsOnPage = 5;
 public sortBy = "userName";
 public sortOrder = "1";
 constructor(private _router:Router,private userService:UserService,private apiService:apiService,private modalService: NgbModal,private _formBuilder: FormBuilder,private spinner: NgxSpinnerService ) { 
 }
  ngOnInit() {
            $(function(){
     
           var $tabButtonItem = $('#tab-button li'),
            $tabSelect = $('#tab-select'),
            $tabContents = $('.tab-contents'),
            activeClass = 'is-active';

          $tabButtonItem.first().addClass(activeClass);
          $tabContents.not(':first').hide();

          $tabButtonItem.find('a').on('click', function(e) {
            var target = $(this).attr('href');

            $tabButtonItem.removeClass(activeClass);
            $(this).parent().addClass(activeClass);
            $tabSelect.val(target);
            $tabContents.hide();
            $(target).show();
            e.preventDefault();
          });

          $tabSelect.on('change', function() {
            var target = $(this).val(),
                targetSelectNum = $(this).prop('selectedIndex');

            $tabButtonItem.removeClass(activeClass);
            $tabButtonItem.eq(targetSelectNum).addClass(activeClass);
            $tabContents.hide();
            $(target).show();
          });      
        });
  this.getallusers();
  this.getallusersWeek();
  this.getallusersMonth();
  this.loadSlideshowCurrentDate();
   this.loadSlideshowCurrentWeek();
   this.loadSlideshowCurrentMonth();
   this.popularSlideshows_config = this._formBuilder.group({
       _id: [null],   
        pos: [null],
        country_abb:[null]
    
    });
 
  }

 get _id() {
    return this.popularSlideshows_config.get('_id');
  }
  get pos() {
    return this.popularSlideshows_config.get('pos');
  }
  get country_abb() {
    return this.popularSlideshows_config.get('country_abb');
  }
// Get data from service
 private getallusers() {
   this.apiService.gethomepageconfig()
      .subscribe((data)=> {
         this.data = data.response;
          console.log(data);
      });
  }
  //Get Roles Lit
  getUserRoles(){
    this.apiService.gethomepageconfig().subscribe(data=>{
      this.role_all = data;

    })
  }
   private getallusersWeek() {
   this.apiService.getslideshowpageWeekconfig()
      .subscribe((datas)=> {
         this.datas = datas.response;
          console.log(datas);
      });
  }
   getUserRoless(){
    this.apiService.getslideshowpageWeekconfig().subscribe(datas=>{
      this.role_all = datas;

    })
  }
  private getallusersMonth() {
   this.apiService.getslideshowpageMonthconfig()
      .subscribe((month)=> {
         this.month = month.response;
          console.log(month);
      });
  }
   getUserRolesss(){
    this.apiService.getslideshowpageMonthconfig().subscribe(month=>{
      this.role_all = month;

    })
  }
  //Get Roles Lit
  // getallusersWeek(){
  //   this.apiService.getslideshowpageconfig().subscribe(data=>{
  //     this.role_all = data;

  //   })
  // }
  public toInt(num: string) {
        return +num;
    }
private loadSlideshowCurrentDate() {
  this.slideshowCurrenDatedata = concat(
      of([]), // default items
      this.slideshowCurrenDateinputs$.pipe(
         debounceTime(200),
         distinctUntilChanged(),
         tap(() => this.slideshowCurrenDateloading = true),
         switchMap(tagdata => this.apiService.getSlideshowCurrentDateData().pipe(
             catchError(() => of([])), // empty list on error
             tap(() => this.slideshowCurrenDateloading = false)
         )) 
      )
  );
}
private loadSlideshowCurrentWeek() {
  this.slideshowCurrenWeekdata = concat(
      of([]), // default items
      this.slideshowCurrenWeekinputs$.pipe(
         debounceTime(200),
         distinctUntilChanged(),
         tap(() => this.slideshowCurrenWeekloading = true),
         switchMap(tagdata => this.apiService.getSlideshowCurrentWeekData().pipe(
             catchError(() => of([])), // empty list on error
             tap(() => this.slideshowCurrenWeekloading = false)
         )) 
      )
  );
}
private loadSlideshowCurrentMonth() {
  this.slideshowCurrenMonthdata = concat(
      of([]), // default items
      this.slideshowCurrenMonthinputs$.pipe(
         debounceTime(200),
         distinctUntilChanged(),
         tap(() => this.slideshowCurrenMonthloading = true),
         switchMap(tagdata => this.apiService.getSlideshowCurrentMonthData().pipe(
             catchError(() => of([])), // empty list on error
             tap(() => this.slideshowCurrenMonthloading = false)
         )) 
      )
  );
}


//create cuttent date 
createCurrentDate(){
    this.spinner.show();
     this.apiService.popularSlideshow(this.popularSlideshows_config.value)
      .subscribe(
      data=> {
         this.spinner.hide();
          Swal({
               title: 'Thank for update home page current date slideshow',
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
 onSelect(selectedItem: any) {
  this.popularSlideshows_config.patchValue({
    _id:selectedItem.slideshowId 
  });
 // console.log(selectedItem.slideshowId);
  this.spinner.show();
  if(selectedItem.slideshowId){
     console.log(this.popularSlideshows_config.value);
     this.apiService.popularSlideshow(this.popularSlideshows_config.value)
      .subscribe(
      data=> {
         this.spinner.hide();
          Swal({
               title: 'Thank for update home page current date slideshow',
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
 // Select data to server
deleteItem(item, popularSlideshows){

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
           this.apiService.deletePopularSlideshow(item._id, item.popularSlideshows[0]._id).subscribe(response=>{
                  this.getallusers();
                })
        }


           })
  
}
addAritcle(data){
  console.log("dasdsad",data);
  console.log(this.popularSlideshows_config.get('articles').value);
  let object={
    _id:this.popularSlideshows_config.get('articles').value._id,
    pos:this.data.length
  }
  this.apiService.createArticleCountryPos(object).subscribe(Response=>{
    console.log(Response)
  })
}


}
