import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import {  debounceTime, switchMap, tap, catchError } from 'rxjs/operators';
import { Http } from "@angular/http";
import { Router,ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from 'ngx-spinner';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import { CKEditor5 } from '@ckeditor/ckeditor5-angular/ckeditor';
import { Subject, Observable, of, concat } from 'rxjs';
import Swal from 'sweetalert2';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/Rx";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { apiService,Person } from '../../shared/services/index';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss']
})
export class ArtworkComponent implements OnInit {
  public ClassicEditorBuild = ClassicEditorBuild;
public editor: CKEditor5.Editor = null;
  publishOption = 1;
    uploadedFile = null;
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
  artistdata:  Person[] = [];
  artistsloading = false;
  artistinputs$ = new Subject<string>();
   entityLocation: Person[] = [];
   entityLocationloading = false;
   entityLocationinputs$ = new Subject<string>();

  lat: number = 51.678418;
  lng: number = 7.809007;
 articleFormartists: FormGroup;
 updateForm:string = null;
  constructor( private _fb: FormBuilder, private http: Http, private router: Router,private spinner: NgxSpinnerService,private _apiService:apiService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.loadArtits();
    // var acc = document.getElementsByClassName("accordion");
    // var i;
    this.loadVenues();

    // for (i = 0; i < acc.length; i++) {
    //   acc[i].addEventListener("click", function() {
    //     this.classList.toggle("active");
    //     var panel = this.nextElementSibling;
    //     if (panel.style.maxHeight){
    //       panel.style.maxHeight = null;
    //     } else {
    //       panel.style.maxHeight = panel.scrollHeight + "px";
    //     }
    //   });
    // }

     this.articleFormartists = this._fb.group({
      location: [null, [Validators.required]],
      title: [null, [Validators.required, Validators.minLength(5)]],
      units: [null],
      language: [null],
      artworkType: [null],
      photo: [null],
      height: [null],
      width:[null],
      date_field:[null],
      depth:[null],
      field_artists:[null],
      measurmentDescription:[null],
      mediumCategory:[null],
      specialties:[null],
      material:[null],
      edition:[null],
      dateQualifier:[null],
      subject:[null],
      status:[null],
      priceFrom:[null],
      priceTo:[null],
      currency: [null],
      extraDescription:[null],
      seo_keywords: [null],
      // Published: [null],
      // saveDrafts:[null],
      authored_by:[null],
      authored_on:[null],
      seo_description:[null],
      artwork_order:[null],
     });

     this.route.paramMap.subscribe(params =>{
       let artworkId = params.get('artworkId');
       if(artworkId){
         this.getArtworkData(artworkId);
       }
     })
  }

// Artist autocomplete section
private loadArtits() {
  this.artistsloading = true;
  this._apiService.getArtists({}).subscribe((x:any) => {
      this.artistdata = x.docs;
      debounceTime(200),
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
      this.updateForm = data._id;
      this.uploadedFile = data.files[0] ? data.files[0]['artwork_photos'][0].location : null;
      this.articleFormartists.patchValue({
      location:data.entityLocation,
      title: data.title,
      units: data.img_units,
      language: data.language,
      field_artists:data.field_artists,
      artworkType: data.artworkType,
      photo: null,
      height: data.img_height,
      width:data.img_width?data.img_width:null,
      depth:data.img_depth,
      measurmentDescription:data.img_measurmentDescription,
      mediumCategory:data.img_mediumCategory,
      specialties:data.artWorkSpecialties,
      material:data.material,
      edition:data.edition,
      dateQualifier:data.date_dateQualifier,
      subject:data.date_subject,
      status:data.date_status?data.date_status:null,
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
      this.spinner.show();
      let data= this.articleFormartists.value
      data.userId = localStorage.getItem('userId');
      console.log(data);
   if(!this.updateForm){
   this._apiService.createArtwork(data)
    .subscribe((result:any) => {

      file_data.append("_id", result._id);
      this.http.post(`${environment.medaiServerAddress}artwork/photo`, file_data).map(result => result.json())
    .subscribe(
      (file_data:any) => {

        console.log(file_data, "File_Result");
          let data = {
            ContentId:file_data._id,
            artworkType:file_data.artworkType,
            files:file_data.files,
            location:file_data.location,
            title:file_data.title,
            entityLocation:file_data.entityLocation,
            // Published: file_data.Published,

          };
          let Artistsdata = {
            ContentId:file_data._id,
            artworkType:file_data.artworkType,
            files:file_data.files,
            location:file_data.location,
            title:file_data.title,
            entityLocation:file_data.entityLocation,
            // Published: file_data.Published,
          };
          let venuId = file_data.entityLocation[0]._id;
          let artistsId = file_data.field_artists[0]._id;
          console.log(venuId);
          this._apiService.updateVenueLinkedList({data:data,linkVenueId:venuId,type:"linkedArtworks"}).subscribe((linkedData)=>{
              console.log('linked Data',linkedData);
          })
          this._apiService.updateArtworkLinkedList({data:data,linkArtworkId:venuId,type:"linkedVenues"}).subscribe((linkedData)=>{
            console.log('linked Data',linkedData);
          })
          this._apiService.updateArtistsLinkedList({data:data,linkArtistsId:artistsId,type:"linkedArtworks"}).subscribe((linkedData)=>{
            console.log('linked Data',linkedData);
        })
          this.http.post(`${environment.synchServerAddress}artwork`, Object.assign({"artworkId": result._id})).map(result => result.json())
          .subscribe(
            (elasticdata:any) => {
              console.log(elasticdata, "elasticdata_Result");
          })

     },
     (err: any) => {
      console.log('medaiServerAddress err', err)
     }
    )
     this.spinner.hide();
     Swal({
      title: 'Thank you',
      allowOutsideClick: false,
      text: "Artwork for page create. Click ok button to redirect dashboard page",
      type: 'success',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
   }).then((result) => {
   if (result.value) {
       this.router.navigate(["/layout/getArtwork"]);
   }
  })
    },error => {
        console.log(error);
        this.spinner.hide();
        let errorMessage = null;
        if(error.error.message == '"artistName" must be an array'){
            errorMessage = "Please select artist Name"
        }else if(error.error.message == '"artworkType" must be a string'){
            errorMessage = "Please select artwork ype"
        }else if(error.error.message == '"Authentication Failed'){
            errorMessage = "Please try creating the article by logout and Login Again"
        }else if(error.error.message == "You dont Have Access to do this action") {
            errorMessage = "You dont Have Access to do this action"
        }else{
            errorMessage = "there is some techinal issue please try after some time"
        }
        Swal({title: 'Oops...',
            text: errorMessage,
            type:'error'
        })
    });
  }else{
    data._id = this.updateForm
    this._apiService.updateArtWork(data).subscribe((response:any)=>{
      file_data.append("_id", response._id);
      this.http.post(`${environment.medaiServerAddress}artwork/updatePhoto`, file_data).map(result => result.json())
    .subscribe(
      (file_data:any) => {

        console.log(file_data, "File_Result");

     })
      this.spinner.hide();
      Swal({
        title: 'Thank you',
        text: "Artwork for page create. Click ok button to redirect dashboard page",
        type: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
     }).then((result) => {
     if (result.value) {
         this.router.navigate(["/layout/getArtwork"]);
     }
    })
    },error => {
        this.spinner.hide();
        console.log(error);
        let errorMessage = null;
        if(error.error.message == '"artistName" must be an array'){
            errorMessage = "Please select artist Name"
        }else if(error.error.message == '"artworkType" must be a string'){
            errorMessage = "Please select artwork ype"
        }else if(error.error.message == '"Authentication Failed'){
            errorMessage = "Please try creating the article by logout and Login Again"
        }else if(error.error.message == "You dont Have Access to do this action") {
            errorMessage = "You dont Have Access to do this action"
        }else{
            errorMessage = "there is some techinal issue please try after some time"
        }
        Swal({title: 'Oops...',
            text: errorMessage,
            type:'error'
        })
    });
  }

  }
}


