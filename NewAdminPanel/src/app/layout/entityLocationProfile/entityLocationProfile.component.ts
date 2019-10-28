/// <reference types="@types/googlemaps" />
import { Component, OnInit,ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Http, Headers, RequestOptions,Response } from "@angular/http";
import { Router, ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from 'ngx-spinner';
import {NgbModal, ModalDismissReasons,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { distinctUntilChanged, debounceTime, switchMap, tap, catchError } from 'rxjs/operators'
import "rxjs/add/operator/do";
import { Subject, Observable, of, concat } from 'rxjs';
import "rxjs/add/operator/map";
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import { CKEditor5 } from '@ckeditor/ckeditor5-angular/ckeditor';
import { apiService,Person,tag,Role } from '../../shared/services/index';
import Swal from 'sweetalert2';
import { environment } from '../../../environments/environment';
import { MapsAPILoader, MouseEvent } from '@agm/core';
declare let google: any;
@Component({
  selector: 'app-EntityLocationProfiletwork',
  templateUrl: './entityLocationProfile.component.html',
  styleUrls: ['./entityLocationProfile.component.scss']
})
export class EntityLocationProfileComponent implements OnInit {

  public ClassicEditorBuild = ClassicEditorBuild;
  public editor: CKEditor5.Editor = null;
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;
 // declare var google;
  @ViewChild('search')
  public searchElementRef: ElementRef;
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
  entityType_all = [
    {entityTypeLael:"- Select a Value -"},
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

  region_all=[
    {regionLabel:'none'},
    {regionLabel:'international'},
    {regionLabel:'New York/NorthEast'},
    {regionLabel:'West'},
    {regionLabel:'SouthEast'},
    {regionLabel:'Chicago / Midwes'},
  ]

 entityProfileLocationForm: FormGroup;
 updateEntity:string = null;
 uploadedFile: null;
 stateInfo: any[] = [];

 countryInfo: any[] = [];


 cityInfo: any[] = [];
 artistdata: Person[] = [];
 artistsloading = false;
 artistinputs$ = new Subject<string>();
  constructor(private mapsAPILoader: MapsAPILoader,private ngZone: NgZone, private _fb: FormBuilder, private http: Http, private router: Router,private spinner: NgxSpinnerService,private _apiService:apiService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.loadArtits();
    this.getCountries();
    var acc = document.getElementsByClassName("accordion");
    var i;
     //load Places Autocomplete
     this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 10;
        });
      });
    });
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

     this.entityProfileLocationForm = this._fb.group({
      entityType: [null],
      language: [null],
      entityName: [null,  [Validators.required, Validators.minLength(5)]],
      websiteTitle: [null],
      websiteurl: [null],
      enitity_array_location:this._fb.array([this.AddEnitityInformation()]),
      photo:[null],
      facebookWebsite: [null],
      twitterWebsite: [null],
      artistData: new FormControl(null),
      googlePlusWebsite:[null],
      briefInfo:[null],
      //locationName:[null],
      // street:[null],
      // additional:[null],
      // country:[null],
      // stateProvince:[null],
      // city:[null],
      // postalCode:[null],
      // latitude:[null],
      // longitude:[null],
      // neighborhood: [null],
      // locationPhone:[null],
      // locationFax: [null],
      // locationEmail:[null],
      // openingHoursAlternative:[null],
      // region:[null],
      specialties:[null],
      contract_Notes:[null],
	    contract_Description:[null],
      contract_Representative:[null],
      CEO_Name:[null],
      CEO_ChiefMarketingOfficer: [null],
      CEO_HeadquartersCityOrCountry:[null],
      //CEO_EventLocation: [null],
      seo_Keywords:[null],
      seo_description:[null],
      tags:[null],
      url_alias:[null],
	    revisionLogMessage: [null],
      authored_by:[null],
      authored_on:[null],
      publishOption:[null],
     });

     this.route.paramMap.subscribe(params =>{
      let EntityId = params.get('EntityId');

      if(EntityId){
        this.getEntityData(EntityId);
      }
    })
  }
  AddEnitityInformation() {
    return this._fb.group({
      locationName:[null],
      street:[null],
      additional:[null],
      country:[null],
      stateProvince:[null],
      city:[null],
      postalCode:[null],
      latitude:[null],
      longitude:[null],
        photo:[null],
      neighborhood: [null],
      locationPhone:[null],
      locationFax: [null],
      locationEmail:[null],
      openingHoursAlternative:[null],
      region:[null],
    });
  }
  addParagraph() {
    this.addEnitityArray.push(this.AddEnitityInformation());
  }

  removeParagraph(index) {
    this.addEnitityArray.removeAt(index);
  }
  get addEnitityArray() {
    return <FormArray>this.entityProfileLocationForm.get('enitity_array_location');
  }
    // Get Current Location Coordinates
    private setCurrentLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 8;
          this.getAddress(this.latitude, this.longitude);
        });
      }
    }


    markerDragEnd($event: MouseEvent) {
      console.log($event);
      this.latitude = $event.coords.lat;
      this.longitude = $event.coords.lng;
      this.getAddress(this.latitude, this.longitude);
    }

    getAddress(latitude, longitude) {
      this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
        console.log(results);
        console.log(status);
        if (status === 'OK') {
          if (results[0]) {
            this.zoom = 12;
            this.address = results[0].formatted_address;
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }

      });
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

  // countries api linking
  getCountries(){
    this._apiService.allCountries().
    subscribe(
      data2 => {
        this.countryInfo=data2.Countries;
        console.log('Data:', this.countryInfo);
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }
// onchange country change with state and city
  onChangeCountry(countryValue) {
    this.stateInfo=this.countryInfo[countryValue].States;
    this.cityInfo=this.stateInfo[0].Cities;
    console.log(this.stateInfo);
  }

  onChangeState(stateValue) {
    this.cityInfo=this.stateInfo[stateValue].Cities;
    //console.log(this.cityInfo);
  }

  getEntityData(EntityId){
    this._apiService.getEntityLocationByEnityId(EntityId).subscribe(response=>{
      let data = response[0];
      debugger
      this.updateEntity = data._id;
      this.uploadedFile = data.files[0] ? data.files[0]['location_photos'][0].location : null;
      this.entityProfileLocationForm.patchValue({
      entityType: data.entityType,
      language: data.language,
      entityName:data.entityName,
      websiteTitle: data.websiteTitle,
      url: data.url,
      photo:null,
      facebookWebsite: data.facebookWebsite,
      twitterWebsite: data.twitterWebsite,
      googlePlusWebsite:data.googlePlusWebsite,
      briefInfo:data.briefInfo,
      specialties:data.specialties,
      locationName:data.locationName,
      street:data.street,
      additional:data.additional,
      country:data.country,
      stateProvince:data.stateProvince,
      city:data.city,
      postalCode:data.postalCode,
      latitude:data.latitude,
      longitude:data.longitude,
      neighborhood: data.neighborhood,
      locationPhone:data.locationPhone,
      locationFax: data.locationFax,
      locationEmail:data.locationEmail,
      openingHoursAlternative:data.openingHoursAlternative,
      region:data.region,
      contract_Notes:data.contract_Notes,
	    contract_Description:data.contract_Description,
      contract_Representative:data.contract_Representative,
      CEO_Name:data.CEO_Name,
      CEO_ChiefMarketingOfficer: data.CEO_ChiefMarketingOfficer,
      CEO_HeadquartersCityOrCountry:data.CEO_HeadquartersCityOrCountry,
      // CEO_EventLocation: data.CEO_EventLocation,
      seo_Keywords:data.seo_Keywords,
      seo_description:data.seo_description,
      tags:data.tags,
      url_alias:data.url_alias,
	    revisionLogMessage: data.revisionLogMessage,
      authored_by:data.authored_by,
      authored_on:data.authored_on,
      publishOption:data.publishOption,
      })
    })
  }

  get entityName() {
    return this.entityProfileLocationForm.get('entityName');
  }
  get locationName() {
    return this.entityProfileLocationForm.get('locationName');
  }
  get street() {
    return this.entityProfileLocationForm.get('street');
  }
  get locationPhone() {
    return this.entityProfileLocationForm.get('locationPhone');
  }


   keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  myFiles:string [] = [];
  getFileDetails (e) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) {
      this.myFiles.push(e.target.files[i]);
    }
  }
  submitHandler() {
    this.addEnitityArray.patchValue([{
      latitude:this.latitude,
      longitude:this.longitude,
  }])
   console.log(this.entityProfileLocationForm.value);
    const file_data = new FormData();
    const fileUploadObject: any = [];
    for (var i = 0; i < this.myFiles.length; i++) {
      file_data.append("location_photos", this.myFiles[i]);
      //fileUploadObject.push(this.myFiles[i]);
   }
     console.log(this.entityProfileLocationForm);
      let headers = new Headers({ "content-type": "application/json" });
      let options = new RequestOptions({ headers: headers });
      this.spinner.show();
      if(!this.updateEntity){
        this._apiService.createEntityProfileLocation(this.entityProfileLocationForm.value)
          .subscribe((result:any) => {
            file_data.append("_id", result['_id']);
            this._apiService.addSinglePhoto(file_data).subscribe(
              (file_data:any) => {

                this.http.post(
                  `${environment.synchServerAddress}venues`, Object.assign({"venuesId": result._id})
                )
                  .map(result => result.json())
                    .subscribe(
                      (elasticdata:any) => {
                        console.log(elasticdata, "elasticdata_Result");
                      }
                    )
                  if(file_data.artistData.length != 0){
                      let data = {
                          ContentId:file_data._id,
                          authorName:localStorage.getItem('user'),
                          Name:file_data.artistData[0].artistName,
                          added_date:new Date(),
                      };

                      let venuId = file_data._id;
                      this._apiService.updateVenueLinkedList({data:data,linkVenueId:venuId,type:"linkedArtist"}).subscribe((linkedData)=>{
                          console.log('linked Data',linkedData);
                      })

                  }

              },
              (err: any) => {
                console.log('addSinglePhoto err', err)
              }
            );
              this.spinner.hide();
            Swal({
              title: 'Thank you',
              allowOutsideClick: false,
              text: "Entity Location data create. Click ok button to redirect dashboard page",
              type: 'success',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK'
           }).then((result) => {
           if (result.value) {
               this.router.navigate(["/layout/getEntityLocation"]);
           }
          })
          //  })

            //this.router.navigate(["/layout/dashboard"]);
          },error => {
              this.spinner.hide();
              console.log(error);
              let errorMessage = null;
           if(error.error.message == '"entityType" must be a string'){
                  errorMessage = "Please select entity Type"
              }else if(error.error.message == '"entityName" must be a string'){
                  errorMessage = "Please enter entity Name"
              }else if(error.error.message == '"locationName" must be a string'){
                  errorMessage = "Please enter location"
              }else if(error.error.message == '"street" must be a string'){
                  errorMessage = "Please enter street"
              }else if(error.error.message == '"country" must be a string'){
                  errorMessage = "Please enter country"
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
     else{
       let data = this.entityProfileLocationForm.value
       data._id = this.updateEntity
       this._apiService.updateEntity(data).subscribe(response=>{
           file_data.append("_id", response['_id']);
           this._apiService.updateVenuPhoto(file_data).subscribe(
               (file_data:any) => {
                   console.log(file_data, "File_Result");});
         this.spinner.hide();
         Swal({
           title: 'Thank you',
           allowOutsideClick: false,
           text: "Entity Location data Updated. Click ok button to redirect dashboard page",
           type: 'success',
           showCancelButton: false,
           confirmButtonColor: '#3085d6',
           confirmButtonText: 'OK'
        }).then((result) => {
        if (result.value) {
            this.router.navigate(["/layout/dashboard"]);
        }
       })

       },error => {
           this.spinner.hide();
           console.log(error);
           let errorMessage = null;
           if(error.error.message == '"entityType" must be a string'){
               errorMessage = "Please select entity Type"
           }else if(error.error.message == '"entityName" must be a string'){
               errorMessage = "Please enter entity Name"
           }else if(error.error.message == '"locationName" must be a string'){
               errorMessage = "Please enter location"
           }else if(error.error.message == '"street" must be a string'){
               errorMessage = "Please enter street"
           }else if(error.error.message == '"country" must be a string'){
               errorMessage = "Please enter country"
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
       })
     }
  }

}
