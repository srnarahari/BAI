import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions,Response } from "@angular/http";
import {DatepickerOptions} from '../../../ng-datepicker/component/ng-datepicker.component';
import * as enLocale from 'date-fns/locale/en';
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import { CKEditor5 } from '@ckeditor/ckeditor5-angular/ckeditor';
 import { Subject, Observable, of, concat } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../../environments/environment';
import * as frLocale from 'date-fns/locale/fr';
declare var jquery:any;
import Swal from 'sweetalert2';
declare var $ :any;
@Component({
  selector: 'app-travel-city',
  templateUrl: './travel-city.component.html',
  styleUrls: ['./travel-city.component.scss']
})
export class TravelCityComponent implements OnInit {
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
  	  field_short_title: [null, [Validators.required, Validators.minLength(5)]],
  	  longitude:[null,Validators.required],
  	  lattitude:[null, Validators.required],
  	  field_tr_city_tagline:[null],
  	  field_tr_city_best_visit_time:[null],
  	  field_tr_city_what_to_pack: [null],
  	  genral_tips:[null],
  	  language:[null],
  	  teaser:[null],
  	  field_tr_location_info_location:[null],
      field_tr_city_reference:[null,Validators.required],
  	  tags: [null],
  	  entity_carousel_images:[null],	 
  	top_restaurants:this._fb.group({
  			field_restaurant:[null]
  		}),
  	top_shopings:this._fb.group({
  			top_shoping:[null]
  		}),

 
  	authored_by:[null],
  	authored_on:[null],
  	published:[null],
  	})
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

get field_artists_rates() {
    return this.tavelCityForm.get('field_artists_rates');
  }
get location_email() {
    return this.tavelCityForm.get('location_email');
  }
get tags() {
    return this.tavelCityForm.get('tags');
  }

get field_tr_location_info_location() {
    return this.tavelCityForm.get('field_tr_location_info_location');
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

 get field_restaurant() {
    const temp = <FormGroup>this.tavelCityForm.controls.top_restaurants;
    return temp.controls.field_restaurant;
  }
  get top_shoping() {
    const temp = <FormGroup>this.tavelCityForm.controls.top_shopings;
    return temp.controls.top_shoping;
  }

  get locationEmail() {
    const temp = <FormGroup>this.tavelCityForm.controls.locationEmail_section;
    return temp.controls.locationEmail;
  }
  


  get field_short_title() {
    return this.tavelCityForm.get('field_short_title');
  }
  get lattitude() {
    return this.tavelCityForm.get('lattitude');
  }
   get longitude() {
    return this.tavelCityForm.get('longitude');
  }
  get field_tr_city_tagline() {
    return this.tavelCityForm.get('field_tr_city_tagline');
  }
  get field_tr_city_best_visit_time() {
    return this.tavelCityForm.get('field_tr_city_best_visit_time');
  }
  get field_tr_city_what_to_pack() {
    return this.tavelCityForm.get('field_tr_city_what_to_pack');
  }
  get genral_tips() {
    return this.tavelCityForm.get('genral_tips');
  }
  get language() {
    return this.tavelCityForm.get('language');
  }
  get teaser() {
    return this.tavelCityForm.get('teaser');
  }

  get field_tr_city_reference() {
    return this.tavelCityForm.get('field_tr_city_reference');
  }



mytopImages:string [] = [];
wideImages:string [] = [];
mytopImages2:string [] = [];
mytopImages3:string [] = [];
top_image_1 (e) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) { 
      this.mytopImages.push(e.target.files[i]);
    }
  }
wide_images (e) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) { 
      this.wideImages.push(e.target.files[i]);
    }
  }
top_Images_2 (e) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) { 
      this.mytopImages2.push(e.target.files[i]);
    }
  }
top_Images_3 (e) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) { 
      this.mytopImages3.push(e.target.files[i]);
    }
  }

submitHandler() {
   const file_data = new FormData();
   const data = new FormData();
   const fileUploadObject: any = [];
    for (var i = 0; i < this.mytopImages.length; i++) {
      file_data.append("top_image_1", this.mytopImages[i]);
    }
    for (var i = 0; i < this.wideImages.length; i++) {
      file_data.append("Wide_Images", this.wideImages[i]);
    }
    for (var i = 0; i < this.mytopImages2.length; i++) {
      file_data.append("top_image_2", this.mytopImages2[i]);
    }
    for (var i = 0; i < this.mytopImages3.length; i++) {
      file_data.append("top_image_3", this.mytopImages3[i]);
    }
   
   console.log(this.tavelCityForm);
   this.spinner.show();
   this.http.post(`${environment.adminServerAddresss}travel/travelcity`, this.tavelCityForm.value)
    .map(result => result.json())
    .subscribe(result => {
      file_data.append("_id", result._id);
      this.http.post(`${environment.medaiServerAddress}travelcity/travelphoto`, file_data).map(result => result.json())
    .subscribe(
      (file_data:any) => {
      	 this.spinner.hide();
        console.log(file_data, "File_Result");
        Swal({
               title: 'Thank you',
               text: "Travel city page has been created. Click ok button to redirect dashboard page",
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
