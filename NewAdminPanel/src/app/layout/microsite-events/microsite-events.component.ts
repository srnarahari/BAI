import { Component, OnInit,ElementRef } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from "@angular/http";
import { distinctUntilChanged, debounceTime, switchMap, tap, catchError } from 'rxjs/operators';
import { Subject, Observable, of, concat } from 'rxjs';
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import { CKEditor5 } from '@ckeditor/ckeditor5-angular/ckeditor';
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
  selector: 'app-microsite-events',
  templateUrl: './microsite-events.component.html',
  styleUrls: ['./microsite-events.component.scss'],
  providers: [apiService]
})
export class MicrositeEventsComponent implements OnInit {
  public ClassicEditorBuild = ClassicEditorBuild;
  public editor: CKEditor5.Editor = null;
  MicrositeeventsForm: FormGroup;
  date: Date;
  updateEvent:string = null;
  date_to: Date;

  entityLocation: Person[] = [];
  entityLocationloading = false;
  entityLocationinputs$ = new Subject<string>();
   //Sub channels start
   visualArts: Array<any> = ['Art Fairs', 'Gallery Shows', 'Museum Exhibitions', 'Auctions', 'Talks'];
   visualArtsError: Boolean = true;
   selectedVisualsChannelValues = [];

   //performing arts start
   PerformingArts: Array<any> = ['Theater & Dance', 'Film', 'Music', 'Opera'];
   PerformingArtsError: Boolean = true;
   selectedPerformingChannelValues = [];
  //Sub channels end

  //Lifestyle start
   Lifestyle: Array<any> = ['Food & Wine', 'Jewelry & Watches', 'Auto & Boats', 'Auctions', 'Fashion'];
   LifestyleError: Boolean = true;
   selectedLifestyleChannelValues = [];
  //Sub channels end
  //Lifestyle start
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
   ArcDesign: Array<any> = ['All'];
   ArcDesignError: Boolean = true;
   selectedArcDesignChannelValues = [];
  //Sub channels end
   // Search Field for artist
   artistdata: Observable<Person[]>;
   artistsloading = false;
   artistinputs$ = new Subject<string>();
   // Search Field for article
   articledata: Observable<Person[]>;
   articleloading = false;
   articleinputs$ = new Subject<string>();
   // Search Field for Events
   eventdata: Observable<Person[]>;
   eventloading = false;
   eventinputs$ = new Subject<string>();
  constructor(private _apiService: apiService,
    private _fb: FormBuilder,
    private route:ActivatedRoute,
    private _router:Router,
    private http: Http,
    private spinner: NgxSpinnerService) {
    this.date = new Date(); 
    this.date_to = new Date(); 
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
     this.loadArticle();
     this.loadEvents();
     this.loadVenues();
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
            $( ".art_failr_events" )
            .change(function() {
             var ischecked= $(this).is(':checked');
             if(ischecked) {
               $('.art_failr_events_show').show();
             }else{
                $('.art_failr_events_show').hide();
              //$('.show_author_1').text('');
             }
             
            })
           $( ".revision_message" )
            .keyup(function() {
              var value = $( this ).val();
              if(value){
                $(".show_rev").show();
                $(".hide_revision").hide();
                $(".new_revision_chk").prop('checked', true);
            }else{
              $(".hide_revision").show();
              $(".show_rev").hide();
              $(".new_revision_chk").prop('checked', false);
              }
            })
            .keyup();
            $( ".url_alias" )
            .keyup(function() {
              var value = $( this ).val();
              if(value){
                $( ".show_url" ).text(' Alias: ' + value );
                $(".hide_url").hide();
            }else{
              $( ".show_url" ).text('');
              $(".hide_url").hide();
              }
            })
            .keyup();

             $( ".gallery_keyup_section" )
            .keyup(function() {
              var value = $( this ).val();
              if(value){
               alert('hi');   
            }else{
             
              }
            })
            .keyup();
            
          $('#tab03_au').css('display', 'block');
    // Formgrup start
  	this.MicrositeeventsForm = this._fb.group({
  		field_entity_profile_location: [null, [Validators.required, Validators.minLength(5)]],
  		visualArts: this.addvisualArts(),
    	PerformingArts: this.addperfonmingArts(),
  		Lifestyle: this.addlifeStyle(),
  		ArcDesign: this.addArcDesign(),
  		gallery: this._fb.array([this.AddgalleryGroup()]),
  		language:[null],
  		events_photo:[null],
  		urlalias:[null],
		  title:[null, [Validators.required, Validators.minLength(5)]],
		  field_img_credit:[null],
		  revision_message:[null],
		  new_revision:[null],
		  field_bool_single_chkbx_yes_no:[null],
		  main_event_photo:[null, Validators.required],
		  events_carousel_images:[null],
      field_ongoing_event:[null],
  		field_event_date:[null],
  		field_event_date_to:[null],
  		image_information:[null],
  		image_caption:[null],
  		image_credit:[null],
  		image_title:[null],
  		alt_text:[null],
  		field_event_opening_time_start:[null],
  		field_event_image:[null],
  		field_event_opening_time_end:[null],
  		field_event_opening_date:[null],
  		description_caption:[null],
        field_artist_not_required: [null],
  		event_details: this._fb.group({
  			field_website:[null, [Validators.required]],
  			field_location_website:[null],
  			field_price_range:[null],
  			field_price_range_to:[null],
  			field_editors_pick:[null],
  			field_featured:[null]
  		}),
  	    referenced_artists:this._fb.group({
          field_artists:[null]
        }),
  	    referenced_article:this._fb.group({
  			field_referenced_article:[null]
  		}),
	  	referenced_parties:this._fb.array([this.AddRefPartiesImages()]),
	  	referenced_videos:this._fb.array([this.AddRefVideosImages()]),
	  	referenced_fair: this._fb.array([this.AddRefFairsImages()]),
	    referenced_fair_partners:[null],
	  	press_relese:[null],
	  	meta_keywords:[null],
      currencyCost:[null],
	    meta_description: [null],
	  	authored_by:[null],
	  	authored_on:[null],
	  	published:[null],
    })
    
    this.route.paramMap.subscribe(params =>{
      let eventId = params.get('micrositeEventId');
     
      if(eventId){
        this.getEventData(eventId);
      }
    })
  }
  private loadVenues() {
    this.entityLocationloading = true;
    this._apiService.getvenuesDetails().subscribe(x => {
      debounceTime(200),
        this.entityLocation = x;
        this.entityLocationloading = false;
    });
}
  getEventData(eventId){
    this._apiService.getEventByEventId(eventId).subscribe(response=>{
      let data = response[0];
      this.updateEvent = data._id;
      this.MicrositeeventsForm.patchValue({
      field_entity_profile_location: data.field_entity_profile_location,
      language:data.language,
      
      events_photo:null,
      urlalias:data.urlalias,
      field_event_image:data.field_event_image,
      image_information:data.image_information,
      image_caption:data.image_caption,
      field_price_range_to:data.field_price_range_to,
      field_price_range:data.field_price_range,

      image_credit:data.image_credit,
      image_title:data.image_title,
      field_artists:data.field_artists,
      field_website:data.field_website,
      alt_text:data.alt_text,
     // visualArts: this.setVisualArts(data.visual_arts[0]),
      title:data.title,
      field_img_credit:data.field_img_credit,
      revision_message:data.revision_message,
      field_location_website:data.field_location_website,
  		new_revision:data.new_revision,
  		field_bool_single_chkbx_yes_no:data.field_bool_single_chkbx_yes_no,
  		main_event_photo:null,
  		events_carousel_images:null,
      field_ongoing_event:data.field_ongoing_event,
  		field_event_date:data.field_event_date,
  		field_event_date_to:data.field_event_date_to,
  		field_event_opening_time_start:data.field_event_opening_time_start,
  		field_event_opening_time_end:data.field_event_opening_time_end,
  		field_event_opening_date:data.field_event_opening_date?data.field_event_opening_date:null,
  		description_caption:data.description_caption,
      field_artist_not_required: data.field_artist_not_required,
      referenced_fair_partners:data.referenced_fair_partners,
    	press_relese:null,
    	meta_keywords:data.meta_keywords,
      meta_description: data.meta_description,
    	authored_by:data.authored_by,
    	authored_on:data.authored_on,
    	published:data.published,
      })
    })
  }

 AddRefFairsImages() {
    return this._fb.group({
      field_fair_partner: [null]
    });
  }

  setRefFairsImages(data){
    return this._fb.group({
      field_fair_partner: data.field_fair_partner?data.field_fair_partner:''
    });
  }
 AddRefVideosImages() {
    return this._fb.group({
      field_fair_video: [null]
    });
  }

  setRefVideosImages(data){
    return this._fb.group({
      field_fair_video: data.field_fair_video?data.field_fair_video:''
    });
  }

 AddgalleryGroup() {
    return this._fb.group({
      field_events_artfair: [null],
      field_events_both: [null]
    });
  }

  setGalleryGroup(data){
    return this._fb.group({
      field_events_artfair: data.field_events_artfair?data.field_events_artfair:'',
      field_events_both: data.field_events_both?data.field_events_both:''
    });
  }
  
AddRefPartiesImages() {
    return this._fb.group({
      field_photo_gallery: [null]
    });
  }

setRefPartiesImages(data){
  return this._fb.group({
    field_photo_gallery: data.field_photo_gallery?data.field_photo_gallery:''
  });
}
 AddRefArtiststImages() {
    return this._fb.group({
    //  field_artist_not_required: [null],
      field_artists: [null]
    });
  }

  setRefArtistsImages(data){
    return this._fb.group({
      //  field_artist_not_required: [null],
        field_artists: data.field_artists?data.field_artists:''
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

// Article autocomplete section 
    private loadArticle() {
        this.articledata = concat(
            of([]), // default items
            this.articleinputs$.pipe(
               debounceTime(200),
               distinctUntilChanged(),
               tap(() => this.articleloading = true),
               switchMap(articledata => this._apiService.getArticleData().pipe(
                   catchError(() => of([])), // empty list on error
                   tap(() => this.articleloading = false)
               )) 
            )
        );
    }
// Events autocomplete section 
    private loadEvents() {
        this.eventdata = concat(
            of([]), // default items
            this.eventinputs$.pipe(
               debounceTime(200),
               distinctUntilChanged(),
               tap(() => this.eventloading = true),
               switchMap(eventdata => this._apiService.getEventsDetails().pipe(
                   catchError(() => of([])), // empty list on error
                   tap(() => this.eventloading = false)
               )) 
            )
        );
    }

    
  get addreferenceVideosArray() {
    return <FormArray>this.MicrositeeventsForm.get('referenced_videos');
  }
  get addreferencePartnersArray() {
    return <FormArray>this.MicrositeeventsForm.get('referenced_fair');
  }
  get addcarouselArray() {
    return <FormArray>this.MicrositeeventsForm.get('event_carousel');
  }
  get addreferencePartiesArray() {
    return <FormArray>this.MicrositeeventsForm.get('referenced_parties');
  }
  get addreferenceArtistsArray() {
    return <FormArray>this.MicrositeeventsForm.get('referenced_artists');
  }
  get addParagraphArray() {
    return <FormArray>this.MicrositeeventsForm.get('gallery');
  }

  addReferenceVideos() {
    this.addreferenceVideosArray.push(this.AddRefVideosImages());
  }
  removeReferenceVideos(index) {
    this.addreferenceVideosArray.removeAt(index);
  }
  addReferencePatners() {
    this.addreferencePartnersArray.push(this.AddRefFairsImages());
  }
  removeReferencePatners(index) {
    this.addreferencePartnersArray.removeAt(index);
  }

  addReferenceParties() {
    this.addreferencePartiesArray.push(this.AddRefPartiesImages());
  }
  removeReferenceParties(index) {
    this.addreferencePartiesArray.removeAt(index);
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

  addGallery() {
    this.addParagraphArray.push(this.AddgalleryGroup());
  }
  removeParagraph(index) {
    this.addParagraphArray.removeAt(index);
  }
  
get meta_description() {
    return this.MicrositeeventsForm.get('meta_description');
  }
get AddCaurouselImages() {
    return this.MicrositeeventsForm.get('AddCaurouselImages');
  }
get press_relese() {
    return this.MicrositeeventsForm.get('press_relese');
  }
get field_artist_not_required() {
    return this.MicrositeeventsForm.get('field_artist_not_required');
  }
get main_event_photo() {
    return this.MicrositeeventsForm.get('main_event_photo');
  }  
get meta_keywords() {
    return this.MicrositeeventsForm.get('meta_keywords');
  }
get new_revision() {
    return this.MicrositeeventsForm.get('new_revision');
  }
get revision_message() {
    return this.MicrositeeventsForm.get('revision_message');
  }
  
get authored_by() {
    return this.MicrositeeventsForm.get('authored_by');
  }

get authored_on() {
    return this.MicrositeeventsForm.get('authored_on');
  }
get published() {
    return this.MicrositeeventsForm.get('published');
  }

get field_photo_gallery() {
    const temp = <FormGroup>this.MicrositeeventsForm.controls.referenced_parties;
    return temp.controls.field_photo_gallery;
  }
 get field_referenced_article() {
    const temp = <FormGroup>this.MicrositeeventsForm.controls.referenced_article;
    return temp.controls.field_referenced_article;
  }

  get field_artists() {
    const temp = <FormGroup>this.MicrositeeventsForm.controls.referenced_artists;
    return temp.controls.field_artists;
  }
  get field_website() {
    const temp = <FormGroup>this.MicrositeeventsForm.controls.event_details;
    return temp.controls.field_website;
  }
  
  get field_location_website() {
    const temp = <FormGroup>this.MicrositeeventsForm.controls.event_details;
    return temp.controls.field_location_website;
  }
  get field_price_range() {
    const temp = <FormGroup>this.MicrositeeventsForm.controls.event_details;
    return temp.controls.field_price_range;
  }
  get field_price_range_to() {
    const temp = <FormGroup>this.MicrositeeventsForm.controls.event_details;
    return temp.controls.field_price_range_to;
  }
  get field_editors_pick() {
    const temp = <FormGroup>this.MicrositeeventsForm.controls.event_details;
    return temp.controls.field_editors_pick;
  }
  get field_featured() {
    const temp = <FormGroup>this.MicrositeeventsForm.controls.event_details;
    return temp.controls.field_featured;
  }

  get field_events_artfair() {
    const temp = <FormGroup>this.MicrositeeventsForm.controls.gallery;
    return temp.controls.field_events_artfair;
  }
  get field_events_both() {
    const temp = <FormGroup>this.MicrositeeventsForm.controls.gallery;
    return temp.controls.field_events_both;
  }
  get field_img_credit() {
    return this.MicrositeeventsForm.get('field_img_credit');
  }
   get description_caption() {
    return this.MicrositeeventsForm.get('description_caption');
  }
  get field_event_opening_date() {
    return this.MicrositeeventsForm.get('field_event_opening_date');
  }
  get field_event_opening_time_end() {
    return this.MicrositeeventsForm.get('field_event_opening_time_end');
  }
  get field_event_opening_time_start() {
    return this.MicrositeeventsForm.get('field_event_opening_time_start');
  }
  get field_event_date() {
    return this.MicrositeeventsForm.get('field_event_date');
  }
  get field_event_date_to() {
    return this.MicrositeeventsForm.get('field_event_date_to');
  }
  get field_ongoing_event() {
    return this.MicrositeeventsForm.get('field_ongoing_event');
  }
 
  get field_bool_single_chkbx_yes_no() {
    return this.MicrositeeventsForm.get('field_bool_single_chkbx_yes_no');
  }

  get image_information() {
    return this.MicrositeeventsForm.get('image_information');
  }
  get image_caption() {
    return this.MicrositeeventsForm.get('image_caption');
  }
  get image_credit() {
    return this.MicrositeeventsForm.get('image_credit');
  }
  get image_title() {
    return this.MicrositeeventsForm.get('image_title');
  }
  get title() {
    return this.MicrositeeventsForm.get('title');
  }
   get urlalias() {
    return this.MicrositeeventsForm.get('urlalias');
  }
  get language() {
    return this.MicrositeeventsForm.get('language');
  }
  get visualArtsArray() {
    return <FormArray>this.MicrositeeventsForm.get('visualArts');
  }
  get arcDesignArray() {
    return <FormArray>this.MicrositeeventsForm.get('ArcDesign');
  }
  get LifeStyleArray() {
    return <FormArray>this.MicrositeeventsForm.get('Lifestyle');
  }
  get performingArtsArray() {
    return <FormArray>this.MicrositeeventsForm.get('PerformingArts');
  }
  get field_entity_profile_location() {
    return this.MicrositeeventsForm.get('field_entity_profile_location');
  }
   addvisualArts() {
     const arr = this.visualArts.map(item => {
      return this._fb.control(false);
     });
      return this._fb.array(arr);
   }

   setVisualArts(data){
    const arr = this.visualArts.map(item => {
      return this._fb.control(data[item]);
     });
      return this._fb.array(arr);
   }
   addArcDesign() {
     const arr = this.ArcDesign.map(item => {
      return this._fb.control(false);
     });
      return this._fb.array(arr);
   }

   setArcDesign(data){
    const arr = this.ArcDesign.map(item => {
      return this._fb.control(data[item]);
     });
      return this._fb.array(arr);
   }

   addlifeStyle() {
     const arr = this.Lifestyle.map(item => {
      return this._fb.control(false);
     });
      return this._fb.array(arr);
   }

   setLifeStyle(data){
    const arr = this.Lifestyle.map(item => {
      return this._fb.control(data[item]);
     });
      return this._fb.array(arr);
   }
   addperfonmingArts() {
     const arr = this.PerformingArts.map(item => {
      return this._fb.control(false);
     });
      return this._fb.array(arr);
   }

   setPerfomingArts(data){
    const arr = this.PerformingArts.map(item => {
      return this._fb.control(data[item]);
     });
      return this._fb.array(arr);
   }
  getSelectedChannels() {
    this.selectedVisualsChannelValues = [];
    this.visualArtsArray.controls.forEach((control, i) => {
      if (control.value) {
       // console.log(this.visualArts, 'ffsdfdsfds', this.visualArts[i]);
        this.selectedVisualsChannelValues.push(this.visualArts[i]);
      }
    });
  }
  getSelectedperformingArts() {
    this.selectedPerformingChannelValues = [];
    this.performingArtsArray.controls.forEach((control, i) => {
      if (control.value) {
       // console.log(this.PerformingArts, 'ffsdfdsfds', this.PerformingArts[i]);
        this.selectedPerformingChannelValues.push(this.PerformingArts[i]);
      }
    });
  }
  getSelectedlifeStyle() {
    this.selectedLifestyleChannelValues = [];
    this.LifeStyleArray.controls.forEach((control, i) => {
      if (control.value) {
       // console.log(this.Lifestyle, 'ffsdfdsfds', this.Lifestyle[i]);
        this.selectedLifestyleChannelValues.push(this.Lifestyle[i]);
      }
    });
  }
  getSelectedArcDesign() {
     this.selectedArcDesignChannelValues = [];
    this.arcDesignArray.controls.forEach((control, i) => {
      if (control.value) {
      //  console.log(this.ArcDesign, 'ffsdfdsfds', this.ArcDesign[i]);
        this.selectedArcDesignChannelValues.push(this.ArcDesign[i]);
      }
    });
  }

myFiles:string [] = [];
  getFileDetails (e) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) { 
      this.myFiles.push(e.target.files[i]);
    }
  }

myCarouselImages:string [] = [];
  get_event_carousel_images (e) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) { 
      this.myCarouselImages.push(e.target.files[i]);
    }
  }
pressRelease:string [] = [];
  getpressReleaseDetails (e) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) { 
      this.pressRelease.push(e.target.files[i]);
    }
  }


submitHandler() {
   const file_data = new FormData();
   const data = new FormData();
   const fileUploadObject: any = [];
    for (var i = 0; i < this.myFiles.length; i++) {
      file_data.append("main_events_photos", this.myFiles[i]);
    }
    for (var i = 0; i < this.myCarouselImages.length; i++) {
      file_data.append("event_carousel_images", this.myCarouselImages[i]);
    }
    for (var i = 0; i < this.pressRelease.length; i++) {
      file_data.append("press_release", this.pressRelease[i]);
    }
   const visualArtsObject: any = {};
   const PerformingArtsObject: any = {};
   const LifestyleObject: any = {};
   const ArcDesignObject: any = {};
   var keys = Object.keys(this.MicrositeeventsForm.value);
   for(var i = 0; i < keys.length; i++) {
      var key = keys[i];
      let event_value = this.MicrositeeventsForm.value[key];   
      if (key === 'visualArts') {
        for(let j = 0; j < this.MicrositeeventsForm.value[key].length; j++){
          visualArtsObject[this.visualArts[j]] = event_value[j];
        }
          //console.log(Object.assign({'subCha' : visualArtsObject}, this.MicrositeeventsForm.value));
          data.append(key, visualArtsObject);
      } else if (key === 'PerformingArts') {
          
        for(let j = 0; j < this.MicrositeeventsForm.value[key].length; j++){
          PerformingArtsObject[this.PerformingArts[j]] = event_value[j];
        }
          data.append(key, PerformingArtsObject);
        }else if (key === 'Lifestyle') {
          
        for(let j = 0; j < this.MicrositeeventsForm.value[key].length; j++){
          LifestyleObject[this.Lifestyle[j]] = event_value[j];
        }
          data.append(key, LifestyleObject);
        }else if (key === 'ArcDesign') {
          
        for(let j = 0; j < this.MicrositeeventsForm.value[key].length; j++){
          ArcDesignObject[this.ArcDesign[j]] = event_value[j];
        }
          data.append(key, ArcDesignObject);
        } else {
          data.append(key, this.MicrositeeventsForm.value[key]);
        }
    }
   console.log(this.MicrositeeventsForm);
   this.spinner.show();
   if(!this.updateEvent){
   this.http.post(`${environment.adminServerAddresss}event/createevents`, 
     Object.assign({
       'visual_arts' : [visualArtsObject], 
       'performing_arts': [PerformingArtsObject], 
       'Life_style' : [LifestyleObject], 
       'Arc_design': [ArcDesignObject], 
     },
       {"userId" : localStorage.getItem('userId')}, this.MicrositeeventsForm.value)
     )
    .map(result => result.json())
    .subscribe(result => {
      file_data.append("_id", result._id);
      this.http.post(`${environment.medaiServerAddress}event/photo`, file_data).map(result => result.json())
    .subscribe(
      (file_data:any) => {
         this.spinner.hide();
        console.log(file_data, "File_Result");
        Swal({
               title: 'Thank you',
               text: "Microsite for page create. Click ok button to redirect dashboard page",
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
  }else{
    this._apiService.updateEvent(Object.assign({
      'visual_arts' : [visualArtsObject], 
      'performing_arts': [PerformingArtsObject], 
      'Life_style' : [LifestyleObject], 
      'Arc_design': [ArcDesignObject], 
      '_id':this.updateEvent
    },
      {"userId" : localStorage.getItem('userId')}, this.MicrositeeventsForm.value)).subscribe(response=>{
        this.spinner.hide();
      
        Swal({
               title: 'Thank you',
               text: "Microsite  page update. Click ok button to redirect dashboard page",
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
  }
  
  }

}
