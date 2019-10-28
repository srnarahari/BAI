import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import {FormGroup,Validators,FormBuilder } from '@angular/forms';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { apiService, Person } from '../../shared/services/index';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-getarticles',
  templateUrl: './getarticles.component.html',
  styleUrls: ['./getarticles.component.scss']
})
export class GetarticlesComponent implements OnInit {

  users: any;
 user_activate: FormGroup;
 role_all 
//  = [
//     { role: 'Author'},
//     { role: 'Publisher'}
//  ]; 
 userName:"";
 public data: any;
 public filterQuery = "";
 sortAsceding = false;
 public rowsOnPage = 5;
 public sortBy = "userName";
 public sortOrder = "-1";
 selectedYear = null;
 selectedPublished = null;
 selectedMonth = null;
 selectedVenue = null;
 selectedCategory = null;
 page:number = 1;
 // entityLocation: Person[] = [];
 //    entityLocationloading = false;
 //    entityLocationinputs$ = new Subject<string>();

 Published_all = [
   {value:null,name:'Not Published'},
   {value:true,name:'Published'}
 ]
 Month_all = [];
 Years_all = [];
 Categories_all = [];
    searchText: any;

 constructor(private _router:Router,private userService:UserService,private apiService:apiService,private modalService: NgbModal,private _formBuilder: FormBuilder,private spinner: NgxSpinnerService ) {
 }
  ngOnInit() {
    this.getallusers();
    this.Years_all = this.apiService.getYears(new Date().getFullYear());
    this.Month_all = this.apiService.getMonths();
    this.Categories_all = this.apiService.getCategories();
    console.log(this.Years_all);
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
   let data={
    'year':this.selectedYear,
    'month':this.selectedMonth,
    'category':this.selectedCategory,
    'published':this.selectedPublished,
    'page' : this.page,
       'sort':this.sortOrder
   }
   this.apiService.getarticles(data)
      .subscribe((data)=> {
         this.data = data;
         console.log(data);
      });
  }
  //Get Roles Lit
  
  public toInt(num: string) {
        return +num;
    }
 

addAritcle(data){
  console.log(this.user_activate.get('articles').value);
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
          this.apiService.deleteArticle(item._id).subscribe(response => {
            console.log(item._id);
            this.getallusers();
          })
          //  this.apiService.deleteArticle(item._id).subscribe(response=>{
          //         //this.getallusers();
                  
          // })
        }


           })
  
}

onEdit(item){

  this._router.navigateByUrl(`/layout/forms/${item._id}`);

  
}

SortDate(){
     this.data.sort((a,b)=>{ return this.sortAsceding?a.added_date - b.added_date:b.added_date - a.added_date});
     this.sortAsceding = !this.sortAsceding;
}

// private loadVenues() {
//   this.entityLocationloading = true;
//   this.apiService.getvenuesDetails().subscribe(x => {
//       debounceTime(200),
//           this.entityLocation = x;
//       this.entityLocationloading = false;
//   });
// }


}
