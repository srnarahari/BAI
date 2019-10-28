import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import {AbstractControl} from '@angular/forms';
import { Http, Headers, RequestOptions,Response } from "@angular/http";
import { HttpHeaders } from '@angular/common/http';
import {compareValidator} from '../../compare.directive';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import { CKEditor5 } from '@ckeditor/ckeditor5-angular/ckeditor';
import {DatepickerOptions} from '../../../ng-datepicker/component/ng-datepicker.component';
import * as enLocale from 'date-fns/locale/en';
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
 import { Subject, Observable, of, concat } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../../environments/environment';
import * as frLocale from 'date-fns/locale/fr';
declare var jquery:any;
import Swal from 'sweetalert2';
declare var $ :any;
@Component({
  selector: 'app-travel-profile',
  templateUrl: './travel-profile.component.html',
  styleUrls: ['./travel-profile.component.scss']
})
export class TravelProfileComponent implements OnInit {
  public ClassicEditorBuild = ClassicEditorBuild;
  public editor: CKEditor5.Editor = null;
  tavelCityForm: FormGroup;
  date: Date;
  date_to: Date;

 
  constructor(private _fb: FormBuilder,private _user:UserService,private _router:Router,private http: Http,private spinner: NgxSpinnerService) {
    this.date = new Date(); 
    this.date_to = new Date(); 
  }
  options: DatepickerOptions = {
  // minYear: 1970,
  // maxYear: 2030,
  //displayFormat: 'MMM D[,] YYYY',
  //barTitleFormat: 'MMMM YYYY',
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
  	// Tab section
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
    $( ".seo_keywords" )
            .keyup(function() {
              var value = $( this ).val();
              if(value){
              $( ".show_author" ).text( value );
               $('.anonymus').hide();
            }else{
              $('.anonymus').show();
              $( ".show_author" ).text( '' );
            }
            })
            .keyup();
           $( ".author_on_section" )
            .keyup(function() {
              var value = $( this ).val();
              if(value){
              $( ".author_on" ).text(' on ' + value );
              // $('.anonymus').hide();
            }else{
              //$('.anonymus').show();
              $( ".author_on" ).text( '' );
            }
            })
            .keyup();
           $( ".tab-contents input[type='checkbox']")
            .change(function() {
             var ischecked= $(this).is(':checked');
             if(!ischecked){
               var check_1 = $('.checked_1,.checked_2,.checked_3').is(':checked');
               if(check_1===false){
               $(".not_publised").show();
               }
             }
           })
          $( ".checked_1" )
            .change(function() {
             var ischecked= $(this).is(':checked');
             if(ischecked) {
               var text = $( this ).val();
              // console.log(text);
               $( ".show_author_1" ).text( text );
               $(".not_publised").hide();
             }else{
              $('.show_author_1').text('');
             }
             
            })
            $( ".checked_2" )
            .change(function() {
             var ischecked= $(this).is(':checked');
             if(ischecked) {
               var text = $( this ).val();
              // console.log(text);
                $( ".show_author_2" ).text( text );
                $(".not_publised").hide();
             }else{
               $('.show_author_2').text('');
             }
             
            })
            $( ".checked_3" )
            .change(function() {
             var ischecked= $(this).is(':checked');
             if(ischecked) {
               var text = $( this ).val();
              // console.log(text);
                $( ".show_author_3" ).text( text );
                $(".not_publised").hide();
             }else{
               $('.show_author_3').text('');
             }
             
            })
             $( ".show_date" )
            .change(function() {
             var ischecked= $(this).is(':checked');
             if(ischecked) {
               $('.formate_date').show();
             }else{
                $('.formate_date').hide();
              //$('.show_author_1').text('');
             }
             
            })
        
          $('#tab01_au').css('display', 'block');
    // Formgrup start
  	this.tavelCityForm = this._fb.group({
  	  title: [null, [Validators.required, Validators.minLength(5)]],
  	  field_tr_website_url_title: [null, [Validators.required, Validators.minLength(5)]],
  	  field_tr_website_url: [null, [Validators.required, Validators.minLength(5)]],
  	  field_tr_location_info_location:[null],
  	  enter_Address_location: this._fb.group({
  			field_tr_location_info_street:[null, [Validators.required, Validators.minLength(5)]],
  			field_tr_location_info_additional:[null],
  			field_tr_location_info_country:[null, Validators.required],
  			field_tr_location_info_state:[null],
  			field_tr_location_info_city:[null],
  			field_tr_location_info_Latitude:[null, [Validators.required]],
  			field_tr_location_info_Longitude:[null, [Validators.required]],
  			field_tr_location_info_Neighborhood:[null, Validators.required],
  		}),
  	  field_tr_profile: [null],
  	  must_know:[null],
  	  field_artists_rates:[null],
  	  field_artists_rating:[null],
  	  field_tr_summary: [null, [Validators.required, Validators.minLength(5)]],
      field_tr_reference_city:[null, Validators.required],
      field_tr_entity_type:[null,[Validators.required]],
  	  brightcove_videos: [null],
  	  entity_carousel_images:[null],
      enitiy_details: this._fb.array([this.AddEntityDetails()]),	 
  	locationEmail_section:this._fb.array([this.AddRefArtiststImages()]),
  	referenced_article:this._fb.group({
  			field_referenced_article:[null]
  		}),

    business_hours:[null],
  	authored_by:[null],
  	authored_on:[null],
  	published:[null],
  	})
  }
 

 AddRefArtiststImages() {
    return this._fb.group({
    //  field_artist_not_required: [null],
      locationEmail: [null]
    });
  }
 AddEntityDetails() {
    return this._fb.group({
      entity_carousel_images: [null],
      field_event_image: [null]
    });
  }

  get addcarouselArray() {
    return <FormArray>this.tavelCityForm.get('enitiy_details');
  }

  get addreferenceArtistsArray() {
    return <FormArray>this.tavelCityForm.get('locationEmail_section');
  }
  get addParagraphArray() {
    return <FormArray>this.tavelCityForm.get('gallery');
  }

  addcarousel() {
    this.addcarouselArray.push(this.AddEntityDetails());
  }
  removecarousel(index) {
    this.addcarouselArray.removeAt(index);
  }

  addReferenceArtist() {
    this.addreferenceArtistsArray.push(this.AddRefArtiststImages());
  }
  removeReferenceArtist(index) {
    this.addreferenceArtistsArray.removeAt(index);
  }

get business_hours() {
    return this.tavelCityForm.get('business_hours');
  }
get field_artists_rates() {
    return this.tavelCityForm.get('field_artists_rates');
  }
get location_email() {
    return this.tavelCityForm.get('location_email');
  }
  
get field_artists_rating() {
    return this.tavelCityForm.get('field_artists_rating');
  }
get brightcove_videos() {
    return this.tavelCityForm.get('brightcove_videos');
  }
get must_know() {
    return this.tavelCityForm.get('must_know');
  }
  
get field_tr_location_info_location() {
    return this.tavelCityForm.get('field_tr_location_info_location');
  }
get field_tr_website_url_title() {
    return this.tavelCityForm.get('field_tr_website_url_title');
  }
get field_tr_website_url() {
    return this.tavelCityForm.get('field_tr_website_url');
  }
get field_tr_summary() {
    return this.tavelCityForm.get('field_tr_summary');
  }
get field_tr_profile() {
    return this.tavelCityForm.get('field_tr_profile');
  }  

get authored_by() {
    return this.tavelCityForm.get('authored_by');
  }
get authored_on() {
    return this.tavelCityForm.get('authored_on');
  }
get published() {
    return this.tavelCityForm.get('published');
  }

 get field_referenced_article() {
    const temp = <FormGroup>this.tavelCityForm.controls.referenced_article;
    return temp.controls.field_referenced_article;
  }

  get locationEmail() {
    const temp = <FormGroup>this.tavelCityForm.controls.locationEmail_section;
    return temp.controls.locationEmail;
  }
  get field_tr_location_info_street() {
    const temp = <FormGroup>this.tavelCityForm.controls.enter_Address_location;
    return temp.controls.field_tr_location_info_street;
  }
  get field_tr_location_info_additional() {
    const temp = <FormGroup>this.tavelCityForm.controls.enter_Address_location;
    return temp.controls.field_tr_location_info_additional;
  }
  get field_tr_location_info_country() {
    const temp = <FormGroup>this.tavelCityForm.controls.enter_Address_location;
    return temp.controls.field_tr_location_info_country;
  }
  get field_tr_location_info_state() {
    const temp = <FormGroup>this.tavelCityForm.controls.enter_Address_location;
    return temp.controls.field_tr_location_info_state;
  }
  get field_tr_location_info_city() {
    const temp = <FormGroup>this.tavelCityForm.controls.enter_Address_location;
    return temp.controls.field_tr_location_info_city;
  }
  get field_tr_location_info_Latitude() {
    const temp = <FormGroup>this.tavelCityForm.controls.enter_Address_location;
    return temp.controls.field_tr_location_info_Latitude;
  }
  get field_tr_location_info_Longitude() {
    const temp = <FormGroup>this.tavelCityForm.controls.enter_Address_location;
    return temp.controls.field_tr_location_info_Longitude;
  }
   get field_tr_location_info_Neighborhood() {
    const temp = <FormGroup>this.tavelCityForm.controls.enter_Address_location;
    return temp.controls.field_tr_location_info_Neighborhood;
  }


  get title() {
    return this.tavelCityForm.get('title');
  }
  get field_tr_reference_city() {
    return this.tavelCityForm.get('field_tr_reference_city');
  }

  get field_tr_entity_type() {
    return this.tavelCityForm.get('field_tr_entity_type');
  }


myCarouselImages:string [] = [];
  get_event_carousel_images (e) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) { 
      this.myCarouselImages.push(e.target.files[i]);
    }
  }

submitHandler() {
   const file_data = new FormData();
   const data = new FormData();
   const fileUploadObject: any = [];
    for (var i = 0; i < this.myCarouselImages.length; i++) {
      file_data.append("event_carousel_images", this.myCarouselImages[i]);
    }
   
   console.log(this.tavelCityForm);
   this.spinner.show();
   this.http.post(`${environment.adminServerAddresss}travel/travelprofile`, this.tavelCityForm.value)
    .map(result => result.json())
    .subscribe(result => {
      file_data.append("_id", result._id);
      this.http.post(`${environment.medaiServerAddress}travelprofile/travelphoto`, file_data).map(result => result.json())
    .subscribe(
      (file_data:any) => {
      	 this.spinner.hide();
        console.log(file_data, "File_Result");
        Swal({
               title: 'Thank you',
               text: "Travel profile page created. Click ok button to redirect dashboard page",
               type: 'success',
               showCancelButton: false,
               confirmButtonColor: '#3085d6',
               confirmButtonText: 'OK'
            }).then((result) => {
            if (result.value) {
                this._router.navigate(["/layout/dashboard"]);
            }
           })
     })
    });
  
  }

}
