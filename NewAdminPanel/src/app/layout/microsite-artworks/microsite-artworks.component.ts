import { Component, OnInit,ElementRef } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from "@angular/http";
import { distinctUntilChanged, debounceTime, switchMap, tap, catchError } from 'rxjs/operators';
import { Subject, Observable, of, concat } from 'rxjs';
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import { apiService,Person,tag,Role } from '../../shared/services/index';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import {NgbModal, ModalDismissReasons,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {AbstractControl} from '@angular/forms';

import { HttpHeaders } from '@angular/common/http';
import {compareValidator} from '../../compare.directive';

import {DatepickerOptions} from '../../../ng-datepicker/component/ng-datepicker.component';
import * as enLocale from 'date-fns/locale/en';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import { CKEditor5 } from '@ckeditor/ckeditor5-angular/ckeditor';
 
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../../environments/environment';
import * as frLocale from 'date-fns/locale/fr';
import "rxjs/Rx";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { delay } from 'rxjs/operators';
declare var jquery:any;
import Swal from 'sweetalert2';
declare var $ :any;

@Component({
  selector: 'app-microsite-artworks',
  templateUrl: './microsite-artworks.component.html',
  styleUrls: ['./microsite-artworks.component.scss']
})
export class MicrositeArtworksComponent implements OnInit {
  public ClassicEditorBuild = ClassicEditorBuild;
public editor: CKEditor5.Editor = null;
	date: Date;
  // Search Field for artist
 artistdata: Observable<Person[]>;
 artistsloading = false;
 artistinputs$ = new Subject<string>();
 entityLocation: Person[] = [];
 entityLocationloading = false;
 entityLocationinputs$ = new Subject<string>();
 language_all = [
        { Language: 'Language neutral'},
        { Language: 'Chinese, Simplified'},
        { Language: 'English'},
        { Language: 'English, Australia'},
        { Language: 'English, Austria'},
        { Language: 'English, Brazil'},
        { Language: 'English, Canada'},
        { Language: 'English, Chinese'},
        { Language: 'English, Colombia'},
        { Language: 'English, France'},
        { Language: 'English, Germany'},
        { Language: 'Language neutral'},
        { Language: 'Chinese, Simplified'},

        { Language: 'English, Hong Kong'},
        { Language: 'English, India'},
        { Language: 'English, Italy'},
        { Language: 'English, Japan'},
        { Language: 'English, Korea'},
        { Language: 'English, Latin America'},
        { Language: 'English, Mexico'},
        { Language: 'English, Middle East'},
        { Language: 'English, Russia'},
        { Language: 'English, Southeast Asia'},
        { Language: 'English, United Kingdom'},
        { Language: 'French'},
        { Language: 'German'},
        { Language: 'German, Austria'},
        { Language: 'German, Swiss'},
        { Language: 'Italy'},
        { Language: 'Japanese'},
        { Language: 'Korean'},
        { Language: 'Portuguese, Brazil'},
        { Language: 'Russian'},


        { Language: 'Spanish'},
        { Language: 'Spanish, Columbia'},
        { Language: 'Spanish, Spain'}
       ]; 
 
  artworkType_all=[
    {artworkTypeLabel:'-None-'},
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
  units_all = [
    {unitTypeLabel:'-select a value-'},
    {unitTypeLabel:'Centimeters'},
    {unitTypeLabel:'Inches'},
    {unitTypeLabel:'Meters'},
    {unitTypeLabel:'Feet'}
  ]

  mediumCategory_all = [
    {mediumType:'- Select a value -'},
    {mediumType:'Animation'},
    {mediumType:'Antiques'},
    {mediumType:'Architecture'},
    {mediumType:'Artifacts'},
    {mediumType:'Boats'},
    {mediumType:'Books'},
    {mediumType:'Cars'},
    {mediumType:'Carton'},
    {mediumType:'Ceramics'},
    {mediumType:'Crafts'},
    {mediumType:'Decorative Arts'},
    {mediumType:'Design'},
    {mediumType:'Digital Art'},
    {mediumType:'Drawing'},
    {mediumType:'Film'},
    {mediumType:'Fine Jewellery'},
    {mediumType:'Folk Art'},
    {mediumType:'Furniture'},
    {mediumType:'Glass'},
    {mediumType:'Graphic Arts'},
    {mediumType:'Graffiti'},
    {mediumType:'Illustration'},
    {mediumType:'Installation'},
    {mediumType:'Jewerly'},
    {mediumType:'Mixed Media'},
    {mediumType:'Multiples and Editions'},
    {mediumType:'New Media'},
    {mediumType:'Painting'},
    {mediumType:'Perfomance'},
    {mediumType:'Photography'},
    {mediumType:'Prints'},
    {mediumType:'Real Estate'},
    {mediumType:'Scientific'},
    {mediumType:'Sculpture'},
    {mediumType:'Silverware'},
    {mediumType:'Various'},
    {mediumType:'Video'},
    {mediumType:'Vinatage Cars'},
    {mediumType:'Watches'},
    {mediumType:'Works On Paper'},
    {mediumType:'Yachts'}
    
  ]

  dateQualifier_all = [
    {dateQualifierType:"None"},
    {dateQualifierType:"before"},
    {dateQualifierType:"crica"},
    {dateQualifierType:"after"}
  ]

  status_all=[
    {statusType:'- None -'},
    {statusType:'Available'},
    {statusType:'On-hold'},
    {statusType:'Sold'},
  ]

  currency_all=[
    {currencyType:'$'},
    {currencyType:'$'},
    {currencyType:'FR'},
    {currencyType:'$'},
    {currencyType:'$'},
    {currencyType:'$'},
    {currencyType:'$'}
  ]

  subject_all=[
    {subjectType:'- None -'},
    {subjectType:'Abstract'},
    {subjectType:'Allegorial'},
    {subjectType:'American Western'},
    {subjectType:'Architectural'},
    {subjectType:'Biblical'},
    {subjectType:'Botanical'},
    {subjectType:'Cityscapes'},
    {subjectType:'Design'},
    {subjectType:'Domestic Scenes'},
    {subjectType:'Fantasy'},
    {subjectType:'Figurative'},
    {subjectType:'Genre'},
    {subjectType:'Geometric'},
    {subjectType:'Historical'},
    {subjectType:'Landscapes'},
    {subjectType:'Literary'},
    {subjectType:'Maritime'},
    {subjectType:'Military'},
    {subjectType:'Mythological'},
    {subjectType:'Nudes'},
    {subjectType:'Pastrol Scenes'},
    {subjectType:'Portraits'},
    {subjectType:'Religious'},
    {subjectType:'Social & Political'},
    {subjectType:'Sporing'},
    {subjectType:'Still Lifw'},
    {subjectType:'Theatre'},
    {subjectType:'Travel'},
    {subjectType:'Zoological'},

    
  ]


  lat: number = 51.678418;
  lng: number = 7.809007;
 articleFormartists: FormGroup;
 updateForm:string = null;
  constructor( private _fb: FormBuilder, private http: Http, private router: Router,private spinner: NgxSpinnerService,private _apiService:apiService,private route:ActivatedRoute) 
  { 
this.date = new Date(); 
  }
  options: DatepickerOptions = {
  // minYear: 1970,
  // maxYear: 2030,
  displayFormat: 'MMM D[,] YYYY',
  barTitleFormat: 'MMMM YYYY',
  dayNamesFormat: 'dd',
  firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
  locale: enLocale,
  // minDate: new Date(Date.now()), // Minimal selectable date
  // maxDate: new Date(Date.now()),  // Maximal selectable date
  // barTitleIfEmpty: 'Click to select a date',
  // placeholder: 'Click to select a date', // HTML input placeholder attribute (default: '')
  //addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
  // addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
  // fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
   useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown 
};
  ngOnInit() {
    this.loadArtits();
    this.loadVenues();
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }
    
     this.articleFormartists = this._fb.group({
      location: [null, [Validators.required, Validators.minLength(5)]],
      title: [null, [Validators.required, Validators.minLength(5)]],
      units: [null, Validators.required],
      language: [null],
      artworkType: [null],
      photo: [null],
      height: [null],
      circa:[null],
      width:[null],
      published:[null],
      start_date:[null],
      depth:[null],
      field_artists:[null],
      measurmentDescription:[null],
      mediumCategory:[null,Validators.required],
      specialties:[null,Validators.required],
      material:[null],
      edition:[null],
      dateQualifier:[null],
      subject:[null],
      status:[null],
      priceFrom:[null],
      priceTo:[null],
      currency: [null,Validators.required],
      extraDescription:[null],
      seo_keywords: [null],
      authored_by:[null],
      authored_on:[null],
      seo_description:[null],
      artwork_order:[null],
     });

     this.route.paramMap.subscribe(params =>{
       let artworkId = params.get('micrositeArtworkId');
       if(artworkId){
         this.getArtworkData(artworkId);
       }
     })
  }
  // Artist autocomplete section 
    private loadArtits() {
      this.artistsloading = true;
      this._apiService.getArtists({}).subscribe((x:any) => {
          debounceTime(200),
          this.artistdata = x.docs;
          this.artistsloading = false;
      });
    }
    private loadVenues() {
      this.entityLocationloading = true;
      this._apiService.getvenuesDetails().subscribe(x => {
        debounceTime(200),
          this.entityLocation = x;
          this.entityLocationloading = false;
      });
  }
  
  getArtworkData(artworkId){
    this._apiService.getArtworkByArtworkId(artworkId).subscribe((response:any)=>{
      let data = response[0]
      this.updateForm = data._id
      this.articleFormartists.patchValue({
      location:data.entityLocation,
      title: data.title,
      units: data.img_units,
      language: data.language,
      published:data.published,
      start_date:data.start_date,
      circa:data.circa,
      status:data.status,
      artworkType: data.artworkType,
      photo: null,
      height: data.img_height,
      width:data.img_width,
      depth:data.img_depth,
      measurmentDescription:data.img_measurmentDescription,
      mediumCategory:data.img_mediumCategory,
      specialties:data.artWorkSpecialties,
      material:data.material,
      edition:data.edition,
      dateQualifier:data.date_dateQualifier,
      subject:data.date_subject,
      priceFrom:data.date_priceFrom,
      priceTo:data.date_priceTo,
      currency:data.currency,
      extraDescription:data.extraDescription,
      seo_keywords: data.seo_keywords,
      authored_by:data.authored_by,
      authored_on:data.authored_on,
      seo_description:data.description?data.description:null,
      artwork_order:data.artwork_order,
      })
    })

  }
  

  myFiles:string [] = [];
  getFileDetails (e) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) { 
      this.myFiles.push(e.target.files[i]);
    }
  }

submitHandler() {
   const file_data = new FormData();
    const fileUploadObject: any = [];
    for (var i = 0; i < this.myFiles.length; i++) {
      file_data.append("artwork_photos", this.myFiles[i]);
      //fileUploadObject.push(this.myFiles[i]);
   }
   console.log(this.articleFormartists.value);
      this.spinner.show();
      let data= this.articleFormartists.value
      data.userId = localStorage.getItem('userId');
   if(!this.updateForm){
   this._apiService.createArtwork(data)
    .subscribe((result:any) => {
      file_data.append("_id", result._id);
      this.http.post(`${environment.medaiServerAddress}artwork/photo`, file_data).map(result => result.json())
    .subscribe(
      (file_data:any) => {
         this.spinner.hide();
        console.log(file_data, "File_Result");
        Swal({
               title: 'Thank you',
               text: "slide Show for page create. Click ok button to redirect dashboard page",
               type: 'success',
               showCancelButton: false,
               confirmButtonColor: '#3085d6',
               confirmButtonText: 'OK'
            }).then((result) => {
            if (result.value) {
                this.router.navigate(["/layout/dashboard"]);
            }
           })
     })
    });
  }else{
    data._id = this.updateForm
    this._apiService.updateArtWork(data).subscribe((response:any)=>{
      this.spinner.hide();
      Swal({
        title: 'Thank you',
        text: "slide Show for page create. Click ok button to redirect dashboard page",
        type: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
     }).then((result) => {
     if (result.value) {
         this.router.navigate(["/layout/dashboard"]);
     }
    })
    });
  }
  
  }
}
