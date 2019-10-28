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
  selector: 'app-microsite-edit-artwork',
  templateUrl: './microsite-edit-artwork.component.html',
  styleUrls: ['./microsite-edit-artwork.component.scss']
})
export class MicrositeEditArtworkComponent implements OnInit {

  
 
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
 public rowsOnPage = 5;
 public sortBy = "userName";
 public sortOrder = "1";
 constructor(private http: Http,private _router:Router,private userService:UserService,private apiService:apiService,private modalService: NgbModal,private _formBuilder: FormBuilder,private spinner: NgxSpinnerService ) { 
 }
  ngOnInit() {
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
   this.apiService.getArtworksDetails().subscribe((data)=> {
         this.data = data;
         //console.log(data);
      });
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
           this.apiService.deleteArtwork(item._id).subscribe(response=>{
                  this.getallusers();
                })
        }
           })
}

onEdit(item){
	//alert(`/layout/microsite-events/${item._id}`);
  this._router.navigateByUrl(`/layout/microsite-artworks/${item._id}`)
}



}
