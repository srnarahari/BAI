import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { first } from 'rxjs/operators';
// import { User } from './user';
import {FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {article, apiService, Person} from '../../shared/services/index';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import {Http} from "@angular/http";

import { distinctUntilChanged, debounceTime, switchMap, tap, catchError } from 'rxjs/operators'
import {Subject} from "rxjs";
@Component({
  selector: 'app-getArtwork',
  templateUrl: './getArtwork.component.html',
  styleUrls: ['./getArtwork.component.scss']
})
export class GetArtworkComponent implements OnInit {

  users: any;
 user_activate: FormGroup;
 role_all 
//  = [
//     { role: 'Author'},
//     { role: 'Publisher'}
//  ];

    artworkType_all=[
        {artworkTypeLabel:'Antiques'},
        {artworkTypeLabel:'Asian Art'},
        {artworkTypeLabel:'Book'},
        {artworkTypeLabel:'Books & Antiquariam'},
        {artworkTypeLabel:'Cars'},
        {artworkTypeLabel:'Ceramics'},
        {artworkTypeLabel:'Decorative Arts'},
        {artworkTypeLabel:'Digital Art'},
        {artworkTypeLabel:'Ethnographic Art'},
        {artworkTypeLabel:'Fairs'},
        {artworkTypeLabel:'Fine Jewellery'},
        {artworkTypeLabel:'Folk Art'},
        {artworkTypeLabel:'Furniture'},
        {artworkTypeLabel:'Galleries'},
        {artworkTypeLabel:'Glass'},
        {artworkTypeLabel:'Installation'},
        {artworkTypeLabel:'Islamic Art'},
        {artworkTypeLabel:'Jewelry'},
        {artworkTypeLabel:'Mixed Media'},
        {artworkTypeLabel:'Painting'},
        {artworkTypeLabel:'Performance'},
        {artworkTypeLabel:'Photographs'},
        {artworkTypeLabel:'Poster'},
        {artworkTypeLabel:'Prints'},
        {artworkTypeLabel:'Real Estate'},
        {artworkTypeLabel:'Scientific'},
        {artworkTypeLabel:'Sculpture'},
        {artworkTypeLabel:'SilverWare'},
        {artworkTypeLabel:'Text And Tapestries'},
        {artworkTypeLabel:'video/Film'},
        {artworkTypeLabel:'Watches'},
        {artworkTypeLabel:'Work on Paper'}
    ]

 userName:"";
 public data: any = [];
 public filterQuery = "";
 public rowsOnPage = 5;
 public sortBy = "userName";
 public sortOrder = "-1";
 Speciality_All:any = [];
    entityLocation: Person[] = [];
    entityLocationloading = false;
    entityLocationinputs$ = new Subject<string>();
    selectedArtworkType: any = null;
    selectedSpeciality:any = null;
    selectedVenue: any = null;
    page:number = 1;

 constructor(private http: Http,private _router:Router,private userService:UserService,private apiService:apiService,private modalService: NgbModal,private _formBuilder: FormBuilder,private spinner: NgxSpinnerService ) { 
 }
  ngOnInit() {
    this.getallusers();
    this.loadVenues();
    this.Speciality_All = this.apiService.getSpecialityData();
    console.log(this.Speciality_All);
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
     let objectData = {
         'artWorkType':this.selectedArtworkType,
         'speciality':this.selectedSpeciality,
         'Venue':this.selectedVenue,
         'page':this.page,
         'sort':this.sortOrder
     }
   this.apiService.getArtwork(objectData)
      .subscribe((data)=> {
         this.data = data;
         console.log(data);
      });
  }



deleteItem(item){
  this.apiService.deleteArtwork(item._id).subscribe(response=>{
    this.getallusers();
  })
}

onEdit(item){
  this._router.navigateByUrl(`/layout/artwork/${item._id}`)
}


    private loadVenues() {
        this.entityLocationloading = true;
        this.apiService.getvenuesDetails().subscribe(x => {
            debounceTime(200),
                this.entityLocation = x;
            this.entityLocationloading = false;
        });
    }


    testeing() {
        console.log(this.selectedArtworkType,this.selectedSpeciality,this.selectedVenue,this.page)
    }
}
