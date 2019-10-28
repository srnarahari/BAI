import { Component, OnInit,ElementRef} from '@angular/core';
import { Http, Headers, RequestOptions,Response } from "@angular/http";
import { distinctUntilChanged, debounceTime, switchMap, tap, catchError } from 'rxjs/operators'
import { Subject, Observable, of, concat } from 'rxjs';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {Form} from './slideShow';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import { CKEditor5 } from '@ckeditor/ckeditor5-angular/ckeditor';
import { apiService,Person,tag,Role,Author } from '../../shared/services/index';
import {NgbModal, ModalDismissReasons,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FORMS} from './radio-data';
import { Router,ActivatedRoute  } from "@angular/router";
import { FormBuilder, FormGroup, FormArray, Validators, FormControl,AbstractControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { environment } from '../../../environments/environment';

// import { FileUploadControl, FileUploadValidators } from '@iplab/ngx-file-upload';
import "rxjs/Rx";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
declare var $ :any;
@Component({
    selector: 'app-slideShow',
    templateUrl: './slideShow.component.html',
    styleUrls: ['./slideShow.component.scss'],
    providers: [apiService]
})
export class SlideShowComponent implements OnInit {
   // uploader = new FileUploader({url: YOUR URL});
   public ClassicEditorBuild = ClassicEditorBuild;
   public editor: CKEditor5.Editor = null;
   public show:boolean = true;
   public venue:boolean = true;
   public NewTag:string;
   hiddenInput : string = "slideshow";
   radioSel:any;
   radio_name:string;
   radioSelectedString:string;
   radioList: Form[] = FORMS;

   loading: boolean = false;
   response:string;
   TagModel:NgbModalRef ;

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
   //  dataSaved = false;
   SlideShowForm: FormGroup;
   UpdateSLideShowId:string = null;

   //Sub channels start
   subChannels: Array<any> = ['Fairs', 'Auctions', 'Galleries', 'Museums', 'Columnist', 'Features'];
   subChannelsError: Boolean = true;
   selectedChannelValues = [];
  //Sub channels end

   // All country define array data
   AllCountry: Array<any> = ['All', 'International', 'Australia', 'Canada', 'China', 'France', 'Germany', 'HongKong', 'India', 'Italy','Japan', 'Korea', 'MiddleEast', 'Spain', 'Uk'];
   AllCountryError: Boolean = true;
   selectedAllCountryValues = [];
   country_all = [{ country: 'Australia'},{ country: 'China'},{ country: 'Germany'},{ country: 'India'},{ country: 'Japan'},{ country: 'Middle East'},{ country: 'Uk'},{ country: 'Canada'},{ country: 'France'},{ country: 'Hong Kong'},{ country: 'Italy'},{ country: 'Korea'},{ country: 'Spain'}];

   //Sub sub start

   // Sub sub end

   //Genures start
   genures: Array<any> = ['Contemporary Art', 'Old Masters & Renaissance', 'Impressionism & Modern Art', 'Traditional', 'Antiquities'];
   genuresError: Boolean = true;
   selectedGenuresValues = [];
   // Genures end
   //Architecture & design
   archSubChannels: Array<any> = ['Architecture', 'Design', 'Home & Interiors'];
   archSubChannelsError: Boolean = true;
   selectedarchSubChannelsValues = [];



   //Performing arts
   PerSubChannels: Array<any> = ['Film', 'Music', 'Television', 'Theatre & Dance'];
   PerSubChannelsError: Boolean = true;
   selectedPerSubChannelsValues = [];


   //Lifesytles
   LifeStyleSubChannels: Array<any> = ['Food & Wine', 'Jewelry & Watches', 'Autos & Boats', 'Auctions'];
   LifeStyleSubChannelsError: Boolean = true;
   selectedLifeStyleSubChannelsValues = [];



   //Fashion
   FashionSubChannels: Array<any> = ['Designer Spotlight', 'Runway', 'Style Guide', 'Accessories', 'Exhibitions'];
   FashionSubChannelsError: Boolean = true;
   selectedFashionSubChannelsValues = [];



   //Travel
   TravelSubChannels: Array<any> = ['Inspiration', 'Destinations', 'People'];
   TravelSubChannelsError: Boolean = true;
   selectedTravelSubChannelsValues = [];

   TravelSubSub: Array<any> = ['Cultural Experiences','Hotels & Resorts', 'Shopping', 'Food & Wine', 'When In', 'Cue the Concierge', 'The Resident', 'The Venturer', ' Mr. Tripper'];
   TravelSubError: Boolean = true;
   selectedTravelSubValues = [];



   // Search Field for author
   authordata: Person[] = [];;
   authorloading = false;
   authorinputs$ = new Subject<string>();
   // Search Field for artist
   artistdata:Person[] = [];;
   artistsloading = false;
   artistinputs$ = new Subject<string>();
  // Search Field for article
   articledata: Person[] = [];
   articleloading = false;
   articleinputs$ = new Subject<string>();

   artworkdata: Person[] = [];
   artworkloading = false;
   artworkinputs$ = new Subject<string>();
   // Search Field for venues
   venuedata: Person[] = [];
   venueloading = false;
   venueinputs$ = new Subject<string>();
   // Search Field for tags

   tagdata: Person[] = [];
   tagloading = false;
   taginputs$ = new Subject<string>();
   // Search Field for Events
   eventdata: Person[] = [];
   eventloading = false;
   eventinputs$ = new Subject<string>();
     uploadedSideshowImage: null;
     uploadFiles: null;
     selectedCategoryType = null;

   public constructor(private _apiService: apiService,private spinner:NgxSpinnerService, private router: Router, private el: ElementRef, private _fb: FormBuilder,private modalService: NgbModal,private route:ActivatedRoute, private http: Http) {
      // Radio array to the print of all parts
      this.radioList = FORMS;
      this.radio_name = "";
      this.getSelecteditem();
    }
    toggle() {
        this.show = !this.show;
      }
    toggleVenue() {
        this.venue = !this.venue;
    }
    getSelecteditem(){
        this.radioSel = FORMS.find(Form => Form.value === this.radio_name);
        this.radioSelectedString = JSON.stringify(this.radioSel);
    }
    onItemChange(radio){
       this.getSelecteditem();
    }
    ngOnInit() {
       // Search fileter calling
       this.loadAuthor();
       this.loadArtits();
       this.loadArticle();
       this.loadEvents();
       this.loadArtwork();
       this.loadVenues();
       this.loadTag();
       $(function(){
        $('.product-chooser').not('.disabled').find('.product-chooser-item').on('click', function(){
            $(this).parent().parent().find('.product-chooser-item').removeClass('selected');
            $(this).addClass('selected');
            $(this).find('input[type="radio"]').prop("checked", true);
           // $(this).find('input[type="radio"]');
          });
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
        // Article form validations
    this.SlideShowForm = this._fb.group({
          author_article: [null,[Validators.required]],
          title: [null, [Validators.required, Validators.minLength(5)]],
          shortTitle: [null, [Validators.required, Validators.minLength(5)] ],
          cover_image:[null],
          slideshow_page: [null],
          slideshow_carousel: this._fb.array([this.AddCaurouselImages()]),
          ReferenceArtist:[null],
          field_referenced_article:[null],
          referencevenue: [null],
          referenceEvents: [null],
          subChannel: this.addSubChannels(),
          archSubChannels: this.addarchSubChannels(),
          PerSubChannels: this.addPerSubChannels(),
          category_type_article:[null],
          LifeStyleSubChannels: this.addLifeStyleSubChannels(),
          FashionSubChannels: this.addFashionSubChannels(),
          TravelSubChannels: this.addTravelSubChannels(),
          TravelSubSub:this.addTravelSubSub(),
          AllCountrys: this.addAllCountry(),
          // uploadFiles:this.filesControl
    });
    this.selectedCategoryType = 'Visual arts';
    this.route.paramMap.subscribe(params => {
      let slideShowId = params.get("slideShowId");
      this.UpdateSLideShowId = slideShowId;
      console.log(slideShowId);
      if(slideShowId)
      this.getSlideShow(slideShowId);
    })
    }

    getSlideShow(slideShowId){
       this._apiService.getSlideShowBySlideShowId(slideShowId).subscribe((response:any)=>{
           let data = response[0];
           console.log('slide Show edit Data -->',data);
           this.uploadedSideshowImage = data.files[0] ? data.files[0]['slideshow_carousel_images'] : null;

           this.uploadFiles = data.files[0] ? data.files[0]['uploadFiles'][0].location: null;

           this.SlideShowForm.patchValue({
               author_article: data.author_article,
               title: data.title,
               shortTitle: data.shortTitle,
               cover_image:data.cover_image,
               description:data.description,
               ReferenceArtist:data.ReferenceArtist,
               referencevenue: data.referencevenue,
               referenceEvents: data.referenceEvents,
           })

           this.setCaurouselImage(data.slideshow_carousel);
           this.SlideShowForm.setControl("AllCountrys",this.setAllCountry(data.All_country[0]))
           this.SlideShowForm.setControl("subChannel", this.setSubChannels(data.sub_channel[0]),)
           this.SlideShowForm.setControl("FashionSubChannels",this.setFashionSub(data.FashionChannels[0]),)
           this.SlideShowForm.setControl("LifeStyleSubChannels",this.setLifeStyleSub(data.LifesytlesChannels[0]),)
           this.SlideShowForm.setControl("archSubChannels",this.setarchSub(data.ArchitectureChannels[0]),)
           this.SlideShowForm.setControl("TravelSubChannels",this.setTravelSub(data.TravelSubs[0]),)
           this.SlideShowForm.setControl("TravelSubSub",this.setTravelSubSub(data.TravelChannels[0]),)
           this.SlideShowForm.setControl( "genures",this.setGenures(data.genu_res[0]),)

       })
    }

    //get Article
    // getArticle(articleId){
    //   this._apiService.getArticlebyArticleId(articleId).subscribe(response=>{
    //     let data = response['response'][0]
    //     console.log(data)
    //     this.setData(data)
    //   })
    // }

     get title() {
       return this.SlideShowForm.get('title');
     }
     get shortTitle() {
       return this.SlideShowForm.get('shortTitle');
     }
     AddCaurouselImages() {
    return this._fb.group({
      events_carousel_images:[null],
      image_caption: [null],
      image_credit:[null],
      enable_inquire_now:[null],
      imageTitle:[null],
      alt_text:[null]
    });
  }
    get addcarouselArray() {
    return <FormArray>this.SlideShowForm.get('slideshow_carousel');
  }

  setCaurouselImage(data){
      if(data.length != 0){
          this.addcarouselArray.removeAt(0);
          data.forEach(items=>{
              this.addcarouselArray.push(this._fb.group({
                  events_carousel_images:[items.events_carousel_images],
                  image_caption: [items.image_caption],
                  image_credit:[items.image_credit],
                  enable_inquire_now:[items.enable_inquire_now],
                  imageTitle:[items.imageTitle],
                  alt_text:[items.alt_text]
              }));

          })
      }
  }

  addcarousel() {
    this.addcarouselArray.push(this.AddCaurouselImages());
  }
  removecarousel(index) {
    this.addcarouselArray.removeAt(index);
  }
  myCarouselImages:string [] = [];
  get_event_carousel_images (e) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) {
      this.myCarouselImages.push(e.target.files[i]);
    }
  }

    // Author autocomplete sectioon
       private loadAuthor() {
        this.authorloading = true;
        this._apiService.getAllUserDetails().subscribe(x => {
            this.authordata= x;
            debounceTime(200),
            this.authorloading = false;
        });
    }
      // Artwork autocomplete sectioon
       private loadArtwork() {
        this.artworkloading = true;
        this._apiService.getArtworksDetails().subscribe(x => {
            this.artworkdata= x;
            debounceTime(200),
            this.artworkloading = false;
        });
    }
     // Venue autocomplete section
    private loadVenues() {
        this.venueloading = true;
        this._apiService.getvenuesDetails().subscribe(x => {
            this.venuedata= x;
            debounceTime(200),
            this.venueloading = false;
        });
    }

     // Events autocomplete section
    private loadEvents() {
        this.eventloading = true;
        this._apiService.getEventsDetails().subscribe(x => {
            this.eventdata= x;
            debounceTime(200),
            this.eventloading = false;
        });
    }

    // Artist autocomplete section
    private loadArtits() {
        this.artistsloading = true;
        this._apiService.getArtists({}).subscribe((x:any) => {
            this.artistdata= x.docs;
            debounceTime(200),
            this.artistsloading = false;
        });
    }
    // Tag autocomplete section
    private loadTag() {
      this.tagloading = true;
      this._apiService.getTagData().subscribe(x => {
          this.tagdata= x;
          debounceTime(200),
          this.tagloading = false;
      });
  }
    // sub channels code
   addSubChannels() {
     const arr = this.subChannels.map(item => {
      return this._fb.control(false);
     });
      return this._fb.array(arr);
   }




   setAllCountry(data){
    const arr = this.AllCountry.map(item => {
      return this._fb.control(data[item]);
     });

   return this._fb.array(arr);
   }

    setSubChannels(data){
        const arr = this.subChannels.map(item => {
            return this._fb.control(data[item]);
        });

        return this._fb.array(arr);
    }

    setGenures(data){
        const arr = this.genures.map(item => {
            return this._fb.control(data[item]);
        });

        return this._fb.array(arr);
    }

    setFashionSub(data){
        const arr = this.FashionSubChannels.map(item => {
            return this._fb.control(data[item]);
        });

        return this._fb.array(arr);
    }

    setTravelSub(data){
        const arr = this.TravelSubChannels.map(item => {
            return this._fb.control(data[item]);
        });

        return this._fb.array(arr);
    }

    setTravelSubSub(data){
        const arr = this.TravelSubSub.map(item => {
            return this._fb.control(data[item]);
        });

        return this._fb.array(arr);
    }

    setarchSub(data){
        const arr = this.archSubChannels.map(item => {
            return this._fb.control(data[item]);
        });

        return this._fb.array(arr);
    }



    setLifeStyleSub(data){
        const arr = this.LifeStyleSubChannels.map(item => {
            return this._fb.control(data[item]);
        });

        return this._fb.array(arr);
    }



    // All Country code
   addAllCountry() {
     const arr = this.AllCountry.map(item => {
      return this._fb.control(false);
     });
      return this._fb.array(arr);
   }
   // sub  code







   //archSubChannels
   addarchSubChannels() {
     const arr = this.archSubChannels.map(item => {
      return this._fb.control(false);
     });
      return this._fb.array(arr);
   }

   //addarchSubSub


   //addPerSubChannels
   addPerSubChannels() {
     const arr = this.PerSubChannels.map(item => {
      return this._fb.control(false);
     });
      return this._fb.array(arr);
   }

   //addPerSubChannels


   //addPerSubChannels
   addLifeStyleSubChannels() {
     const arr = this.LifeStyleSubChannels.map(item => {
      return this._fb.control(false);
     });
      return this._fb.array(arr);
   }

   //addLifeStyleSubSub


   //addFashionSubChannels
   addFashionSubChannels() {
     const arr = this.FashionSubChannels.map(item => {
      return this._fb.control(false);
     });
      return this._fb.array(arr);
   }

   //addFashionSubSub


   //addTravelSubChannels
   addTravelSubChannels() {
     const arr = this.TravelSubChannels.map(item => {
      return this._fb.control(false);
     });
      return this._fb.array(arr);
   }

   //addTravelSubSub
   addTravelSubSub() {
     const arr = this.TravelSubSub.map(item => {
      return this._fb.control(false);
     });
      return this._fb.array(arr);
   }

  // address paragraph
  AddImgParagraphGroup() {
    return this._fb.group({
      image_caption_para: [null],
      para_head: [null],
      Para_img_cap_credit: [null],
      image_title_paragraph: [null],
      image_alt_paragraph: [null]
    });
  }


  get subchannelsArray() {
    return <FormArray>this.SlideShowForm.get('subChannel');
  }
  get AllCountryArray() {
    return <FormArray>this.SlideShowForm.get('AllCountrys');
  }
  get subSubsArray() {
    return <FormArray>this.SlideShowForm.get('subSubs');
  }
  get genuresArray() {
    return <FormArray>this.SlideShowForm.get('genures');
  }

  get archSubChannelsArray() {
    return <FormArray>this.SlideShowForm.get('archSubChannels');
  }
  get archSubSubArray() {
    return <FormArray>this.SlideShowForm.get('archSubSub');
  }
  get PerSubChannelsArray() {
    return <FormArray>this.SlideShowForm.get('PerSubChannels');
  }

  get PerSubSubArray() {
    return <FormArray>this.SlideShowForm.get('PerSubSub');
  }
  get LifeStyleSubChannelsArray() {
    return <FormArray>this.SlideShowForm.get('LifeStyleSubChannels');
  }
  get LifeStyleSubSubArray() {
    return <FormArray>this.SlideShowForm.get('LifeStyleSubSub');
  }
  get FashionSubChannelsArray() {
    return <FormArray>this.SlideShowForm.get('FashionSubChannels');
  }
  get FashionSubSubArray() {
    return <FormArray>this.SlideShowForm.get('FashionSubSub');
  }
  get TravelSubChannelsArray() {
    return <FormArray>this.SlideShowForm.get('TravelSubChannels');
  }
  get TravelSubSubArray() {
    return <FormArray>this.SlideShowForm.get('TravelSubSub');
  }

  get author_article() {
    return this.SlideShowForm.get('author_article');
  }
  get Published() {
    return this.SlideShowForm.get('Published');
  }
  get saveDrafts() {
    return this.SlideShowForm.get('saveDrafts');
  }
  // get categoryRadio() {
  //   return this.SlideShowForm.get('categoryRadio');
  // }

  // sub channels code
  getSelectedChannels() {
     this.selectedChannelValues = [];
    this.subchannelsArray.controls.forEach((control, i) => {
      if (control.value) {
        console.log(this.subChannels, 'ffsdfdsfds', this.subChannels[i]);
        this.selectedChannelValues.push(this.subChannels[i]);
      }
    });
  }
   // All country code
  getSelectCountry() {
    this.selectedChannelValues = [];
    this.AllCountryArray.controls.forEach((control, i) => {
      if (control.value) {
        console.log(this.AllCountry, 'ffsdfdsfds', this.AllCountry[i]);
        this.selectedAllCountryValues.push(this.AllCountry[i]);
      }
    });
  }
  // subcode
  // Article autocomplete section
  private loadArticle() {
    this.articleloading = true;
    this._apiService.getArticleData().subscribe(x => {
        this.articledata= x;
        debounceTime(200),
        this.articleloading = false;
    });
}
  // Genures
  getSelectedgenures() {
    this.selectedGenuresValues = [];
    this.genuresArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedGenuresValues.push(this.genures[i]);
      }
    });
  }

  getSelectedarchSubChannels() {
    this.selectedarchSubChannelsValues = [];
    this.archSubChannelsArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedarchSubChannelsValues.push(this.archSubChannels[i]);
      }
    });
  }


  getSelectedPerSubChannels() {
    this.selectedPerSubChannelsValues = [];
    this.PerSubChannelsArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedPerSubChannelsValues.push(this.PerSubChannels[i]);
      }
    });
  }


  getSelectedLifeStyleSubChannels() {
    this.selectedLifeStyleSubChannelsValues = [];
    this.LifeStyleSubChannelsArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedLifeStyleSubChannelsValues.push(this.LifeStyleSubChannels[i]);
      }
    });
  }



  getSelectedFashionSubChannels() {
    this.selectedFashionSubChannelsValues = [];
    this.FashionSubChannelsArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedFashionSubChannelsValues.push(this.FashionSubChannels[i]);
      }
    });
  }



getSelectedTravelSubChannels() {
    this.selectedTravelSubChannelsValues = [];
    this.TravelSubChannelsArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedTravelSubChannelsValues.push(this.TravelSubChannels[i]);
      }
    });
  }

getSelectedTravelSubSub() {
    this.selectedTravelSubValues = [];
    this.TravelSubSubArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedTravelSubValues.push(this.TravelSubSub[i]);
      }
    });
  }

  myFiles:string [] = [];
  myFeatures:string [] = [];
  myParaGraphImg:string [] = [];
  mySlidImg:string [] = [];

  getFileDetails (e) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) {
      this.myFiles.push(e.target.files[i]);
    }
  }
  getFeatureImg (e) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) {
      this.myFeatures.push(e.target.files[i]);
    }
  }
  getParagraphImg (e) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) {
      this.myParaGraphImg.push(e.target.files[i]);
    }
  }
  getslideImg (e) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) {
      this.mySlidImg.push(e.target.files[i]);
    }
  }

  // submit to the api
  submitForm() {
    this.spinner.show();
      const data = new FormData();
      const file_data = new FormData();
      const fileUploadObject: any = [];
       for (var i = 0; i < this.myCarouselImages.length; i++) {
      file_data.append("slideshow_carousel_images", this.myCarouselImages[i]);
    }
   for (var i = 0; i < this.myFiles.length; i++) {

      file_data.append("uploadFiles", this.myFiles[i]);
      fileUploadObject.push(this.myFiles[i]);

   }


   const subChannelsObject: any = {};
   const subSubsObject: any = {};
   const genuresObject: any = {};
   const arc_subObject: any = {};
   const arc_sub_channelsObject: any = {};
   const per_subObject: any = {};
   const per_sub_channelsObject: any = {};
   const lifeStyle_subObject: any = {};
   const lifeStyle_sub_channelsObject: any = {};
   const fashion_subObject: any = {};
   const fashion_sub_channelsObject: any = {};
   const travel_subObject: any = {};
   const travel_sub_channelsObject: any = {};
   const allCountryObject: any = {};

   var keys = Object.keys(this.SlideShowForm.value);

   for(var i = 0; i < keys.length; i++) {
      var key = keys[i];
      let article_value = this.SlideShowForm.value[key];
      if (key === 'subChannel') {
        for(let j = 0; j < this.SlideShowForm.value[key].length; j++){
          subChannelsObject[this.subChannels[j]] = article_value[j];
        }
         // console.log(Object.assign({'subCha' : subChannelsObject}, this.SlideShowForm.value));
          data.append(key, subChannelsObject);
      } else if (key === 'subSubs') {


          data.append(key, subSubsObject);
        }else if (key === 'archSubChannels') {

        for(let j = 0; j < this.SlideShowForm.value[key].length; j++){
          arc_sub_channelsObject[this.archSubChannels[j]] = article_value[j];
        }
       // console.log(Object.assign({'ArchitectureChannels' : arc_sub_channelsObject}, this.SlideShowForm.value));
          data.append(key, arc_sub_channelsObject);
        }else if (key === 'archSubSub') {


          data.append(key, arc_subObject);
        }else if (key === 'PerSubChannels') {

        for(let j = 0; j < this.SlideShowForm.value[key].length; j++){
          per_sub_channelsObject[this.PerSubChannels[j]] = article_value[j];
        }
          data.append(key, per_sub_channelsObject);
        }else if (key === 'PerSubSub') {


          data.append(key, per_subObject);
        }else if (key === 'LifeStyleSubChannels') {

        for(let j = 0; j < this.SlideShowForm.value[key].length; j++){
          lifeStyle_sub_channelsObject[this.LifeStyleSubChannels[j]] = article_value[j];
        }
          data.append(key, lifeStyle_sub_channelsObject);
        }else if (key === 'LifeStyleSubSub') {


          data.append(key, lifeStyle_subObject);
        }else if (key === 'FashionSubChannels') {

        for(let j = 0; j < this.SlideShowForm.value[key].length; j++){
          fashion_sub_channelsObject[this.FashionSubChannels[j]] = article_value[j];
        }
          data.append(key, fashion_sub_channelsObject);
        }else if (key === 'FashionSubSub') {


          data.append(key, fashion_subObject);
        }else if (key === 'TravelSubChannels') {

        for(let j = 0; j < this.SlideShowForm.value[key].length; j++){
          travel_sub_channelsObject[this.TravelSubChannels[j]] = article_value[j];
        }
          data.append(key, travel_sub_channelsObject);
        }else if (key === 'TravelSubSub') {

        for(let j = 0; j < this.SlideShowForm.value[key].length; j++){
          travel_subObject[this.TravelSubSub[j]] = article_value[j];
        }
          data.append(key, travel_subObject);
        } else if (key === 'genures') {

        for(let j = 0; j < this.SlideShowForm.value[key].length; j++){
          genuresObject[this.genures[j]] = article_value[j];
        }
          data.append(key, genuresObject);
        }else if (key === 'AllCountrys') {

        for(let j = 0; j < this.SlideShowForm.value[key].length; j++){
            allCountryObject[this.AllCountry[j]] = article_value[j];
        }
          data.append(key, allCountryObject);
        } else {
          data.append(key, this.SlideShowForm.value[key]);
        }
    }
   this.SlideShowForm.patchValue({
       category_type_article:this.selectedCategoryType
   })
    console.log(this.SlideShowForm.value);
    //Stage 54.174.193.63;
      if(!this.UpdateSLideShowId){
          this._apiService.createSlideShow(
              Object.assign({'sub_channel' : [subChannelsObject],
                      'sub_subs': [subSubsObject],
                      'genu_res' : [genuresObject],
                      'ArchitectureChannels' : [arc_sub_channelsObject],
                      'ArchitectureSubs' : [arc_subObject],
                      'PerformanceChannels' : [per_sub_channelsObject],
                      'PerformanceSubs' : [per_subObject],
                      'LifesytlesChannels' : [lifeStyle_sub_channelsObject],
                      'LifesytlesSubs' : [lifeStyle_subObject],
                      'FashionChannels' : [fashion_sub_channelsObject],
                      'FashionSubs' : [fashion_subObject],
                      'TravelChannels' : [travel_sub_channelsObject],
                      'TravelSubs' : [travel_subObject],
                      'All_country' : [allCountryObject],
                      'upload_files': fileUploadObject},
                  {"userId" : localStorage.getItem('userId')}, this.SlideShowForm.value))
              .subscribe((result:any) => {
                  file_data.append("_id", result._id);
                  this.http.post(`${environment.medaiServerAddress}slideshow/photo`, file_data).map(result => result.json())
                      .subscribe(
                          (file_data:any) => {

                              console.log(file_data, "File_Result");
                              let data = {
                                ContentId:file_data._id,
                                author_article:file_data.author_article,
                                files:file_data.files,
                                title:file_data.title,
                                shortTitle:file_data.shortTitle,
                                summary:file_data.summary,
                                ArchitectureChannels:file_data.ArchitectureChannels,
                                PerformanceChannels:file_data.PerformanceChannels,
                                LifesytlesChannels:file_data.LifesytlesChannels,
                                FashionChannels:file_data.FashionChannels,
                                TravelChannels:file_data.TravelChannels,
                                TravelSubs:file_data.TravelSubs,
                                sub_channel:file_data.sub_channel,  
                                added_date:file_data.added_date,
                                category_type:file_data.category_type_article
                              };
                              let artistsdata = {
                                ContentId:file_data._id,
                                author_article:file_data.author_article,
                                files:file_data.files,
                                title:file_data.title,
                                shortTitle:file_data.shortTitle,
                                summary:file_data.summary,
                                ArchitectureChannels:file_data.ArchitectureChannels,
                                PerformanceChannels:file_data.PerformanceChannels,
                                LifesytlesChannels:file_data.LifesytlesChannels,
                                FashionChannels:file_data.FashionChannels,
                                TravelChannels:file_data.TravelChannels,
                                TravelSubs:file_data.TravelSubs,
                                sub_channel:file_data.sub_channel,  
                                added_date:file_data.added_date,
                                category_type_article:file_data.category_type_article
                              };
                              this.http.post(`${environment.synchServerAddress}slideshow`, Object.assign({"slideshowId": result._id})).map(result => result.json())
                              .subscribe(
                                (elasticdata:any) => {

                                console.log(elasticdata, "elasticdata_Result");
                               })

                              let venuId = file_data.referencevenue[0]._id;
                              let artistId = file_data.ReferenceArtist[0]._id;
                              this._apiService.updateVenueLinkedList({data:data,linkVenueId:venuId,type:"linkedSlideshows"}).subscribe((linkedData)=>{
                                  console.log('linked Data',linkedData);
                              })
                              this._apiService.updateArtistsLinkedList({data:artistsdata,linkArtistsId:artistId,type:"linkedSlideshows"}).subscribe((linkedArtistsData)=>{
                                console.log('linked Data',linkedArtistsData);
                            })

                          },
                          (err: any) => {
                            console.log('medaiServerAddress err', err)
                          }
                        );
                  this.spinner.hide();
                  Swal({
                      title: 'Thank you',
                      text: "slide Show for page create. Click ok button to redirect dashboard page",
                      type: 'success',
                      allowOutsideClick: false,
                      showCancelButton: false,
                      confirmButtonColor: '#3085d6',
                      confirmButtonText: 'OK'
                  }).then((result) => {
                      if (result.value) {
                          this.router.navigate(["/layout/get-slide-show"]);
                      }
                  });
              },error => {
                  console.log(error);
                  this.spinner.hide();
                  let errorMessage = null;
                  if(error.error.message == '"author_article" must be an array'){
                      errorMessage = "Please select Author"
                  }else if(error.error.message == '"category_type_article" must be a string'){
                      errorMessage = "Please select category Type"
                  }else if(error.error.message == '"title" must be a string'){
                      errorMessage = "Please enter title"
                  }else if(error.error.message == '"shortTitle" must be a string'){
                      errorMessage = "Please enter shortTitle"
                  }else if(error.error.message == '"Authentication Failed'){
                      errorMessage = "Please try creating the article by logout and Login Again"
                  }else if(error.error.message == "You dont Have Access to do this action") {
                      errorMessage = "You dont Have Access to do this action"
                  }else{
                      errorMessage = "there is some technical issue please try after some time"
                  }
                  Swal({title: 'Oops...',
                      text: errorMessage,
                      type:'error'
                  })
              });
      }else{
          this._apiService.updateSlideShow(
              Object.assign({'sub_channel' : [subChannelsObject],
                      'sub_subs': [subSubsObject],
                      'genu_res' : [genuresObject],
                      'ArchitectureChannels' : [arc_sub_channelsObject],
                      'ArchitectureSubs' : [arc_subObject],
                      'PerformanceChannels' : [per_sub_channelsObject],
                      'PerformanceSubs' : [per_subObject],
                      'LifesytlesChannels' : [lifeStyle_sub_channelsObject],
                      'LifesytlesSubs' : [lifeStyle_subObject],
                      'FashionChannels' : [fashion_sub_channelsObject],
                      'FashionSubs' : [fashion_subObject],
                      'TravelChannels' : [travel_sub_channelsObject],
                      'TravelSubs' : [travel_subObject],
                      'All_country' : [allCountryObject],
                      'upload_files': fileUploadObject,
                  '_id':this.UpdateSLideShowId},
                  {"userId" : localStorage.getItem('userId')}, this.SlideShowForm.value))
              .subscribe((result:any) => {
                  file_data.append("_id", result._id);
                  this.http.post(`${environment.medaiServerAddress}slideshow/updatePhoto`, file_data).map(result => result.json())
                      .subscribe(
                          (file_data:any) => {

                              console.log(file_data, "File_Result");

                          });
                  this.spinner.hide();
                  Swal({
                      title: 'Thank you',
                      text: "slide Show for page create. Click ok button to redirect dashboard page",
                      type: 'success',
                      allowOutsideClick: false,
                      showCancelButton: false,
                      confirmButtonColor: '#3085d6',
                      confirmButtonText: 'OK'
                  }).then((result) => {
                      if (result.value) {
                          this.router.navigate(["/layout/get-slide-show"]);
                      }
                  });
              },error => {
                  console.log(error);
                  this.spinner.hide();
                  let errorMessage = null;
                  if(error.error.message == '"author_article" must be an array'){
                      errorMessage = "Please select Author"
                  }else if(error.error.message == '"category_type_article" must be a string'){
                      errorMessage = "Please select category Type"
                  }else if(error.error.message == '"title" must be a string'){
                      errorMessage = "Please enter title"
                  }else if(error.error.message == '"shortTitle" must be a string'){
                      errorMessage = "Please enter shortTitle"
                  }else if(error.error.message == '"Authentication Failed'){
                      errorMessage = "Please try creating the article by logout and Login Again"
                  }else if(error.error.message == "You dont Have Access to do this action") {
                      errorMessage = "You dont Have Access to do this action"
                  }else{
                      errorMessage = "there is some technical issue please try after some time"
                  }
                  Swal({title: 'Oops...',
                      text: errorMessage,
                      type:'error'
                  })
              });
      }


}


}
