import { Component, OnInit,ElementRef,EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from "@angular/http";
import { HttpHeaders } from '@angular/common/http';
import { routerTransition } from '../../router.animations';
import { distinctUntilChanged, debounceTime, switchMap, tap, catchError } from 'rxjs/operators'
import { Subject, Observable, of, concat } from 'rxjs';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {Form} from './form';
import { apiService,Person,tag,Role } from '../../shared/services/index';
import {NgbModal, ModalDismissReasons,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
//import {Article} from '../../article';
import {FORMS} from './radio-data';
import { environment } from '../../../environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import { CKEditor5 } from '@ckeditor/ckeditor5-angular/ckeditor';
//import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { Router,ActivatedRoute  } from "@angular/router";
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
// import { FileUploadControl, FileUploadValidators } from '@iplab/ngx-file-upload';
import "rxjs/Rx";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { delay } from 'rxjs/operators';
declare var jquery:any;
declare var $ :any;

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()],
    providers: [apiService]
})
export class FormComponent implements OnInit {
  public ClassicEditorBuild = ClassicEditorBuild;
  public editor: CKEditor5.Editor = null;
  selectedCompanies: string = null;
   public tagName : string = null;
   public show:boolean = true;
   hiddenInput : string = "article";
   public venue:boolean = true;
   public NewTag:string;
   radioSel:any;
   radio_name:string;
   radioSelectedString:string;
   radioList: Form[] = FORMS;

   loading: boolean = false;
   response:string;
   TagModel:NgbModalRef ;


   //  dataSaved = false;
   articleForm: FormGroup;

   //Sub channels start
   subChannels: Array<any> = ['Fairs', 'Auctions', 'Galleries', 'Museums', 'Columnist', 'Features'];
   subChannelsError: Boolean = true;
   selectedChannelValues = [];
  //Sub channels end

   // All country define array data
   AllCountry: Array<any> = ['All', 'International', 'Australia', 'Canada', 'China', 'France', 'Germany', 'HongKong', 'India', 'Italy','Japan', 'Korea', 'MiddleEast', 'Spain', 'Uk'];
   AllCountryError: Boolean = true;
   selectedAllCountryValues = [];
   country_all = ['Europe','Asia/Pacific','Southeast Asia','North America','Worldwide','Africa/Middle East','Australia','Latin America','Asia','Pacific','Americas','South Asia','East Asia','Central/South America'];

   //Sub sub start
   subSubs: Array<any> = ['News', 'Previews', 'Reviews', 'Parties', 'Videos'];
   subSubsError: Boolean = true;
   selectedSubValues = [];
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

   //Architecture & design
   archSubSub: Array<any> = ['News', 'Reviews', 'Video'];
   SubSubError: Boolean = true;
   selectedSubSubValues = [];
   selectedarchSubSubValues = [];

   //Performing arts
   PerSubChannels: Array<any> = ['Film', 'Music', 'Television', 'Theatre & Dance'];
   PerSubChannelsError: Boolean = true;
   selectedPerSubChannelsValues = [];

   PerSubSub: Array<any> = ['News', 'Reviews', 'Video', 'Parties'];
   PerSubError: Boolean = true;
   selectedPerSubValues = [];

   //Lifesytles
   LifeStyleSubChannels: Array<any> = ['Food & Wine', 'Jewelry & Watches', 'Autos & Boats', 'Auctions'];
   LifeStyleSubChannelsError: Boolean = true;
   selectedLifeStyleSubChannelsValues = [];

   LifeStyleSubSub: Array<any> = ['News', 'Video', 'Parties'];
   LifeStyleSubError: Boolean = true;
   selectedLifeStyleSubValues = [];

   //Fashion
   FashionSubChannels: Array<any> = ['Designer Spotlight', 'Runway', 'Style Guide', 'Accessories', 'Exhibitions'];
   FashionSubChannelsError: Boolean = true;
   selectedFashionSubChannelsValues = [];

   FashionSubSub: Array<any> = ['News','Reviews', 'Video', 'Parties'];
   FashionSubError: Boolean = true;
   selectedFashionSubValues = [];

   //Travel
   TravelSubChannels: Array<any> = ['Inspiration', 'Destinations', 'People'];
   TravelSubChannelsError: Boolean = true;
   selectedTravelSubChannelsValues = [];

   TravelSubSub: Array<any> = ['Cultural Experiences','Hotels & Resorts', 'Shopping', 'Food & Wine', 'When In', 'Cue the Concierge', 'The Resident', 'The Venturer', ' Mr. Tripper'];
   TravelSubError: Boolean = true;
   selectedTravelSubValues = [];


   // Search Field for author
    recomendedArticlesData: Person[] = [];
    recomendedArticlesloading = false;
    recomendedArticlesinputs$ = new Subject<string>();

   authordata: Observable<Role[]>;
   authorloading = false;
   authorinputs$ = new Subject<string>();
   // Search Field for artist
   artistdata: Person[] = [];
   artistsloading = false;
   artistinputs$ = new Subject<string>();

    articledata: Person[] = [];
    articleloading = false;
    articleinputs$ = new Subject<string>();
   // Search Field for venues
   venuedata: Person[] = [];
   venueloading = false;
   venueinputs$ = new Subject<string>();

    slideShowdata: Person[] = [];
    slideShowloading = false;
    slideShowinputs$ = new Subject<string>();

   // Search Field for Events
   eventdata: Person[] = [];
   eventloading = false;
   eventinputs$ = new Subject<string>();
   // Search Field for tags
   tagdata:Observable<tag[]>;
   tagloading = false;
   taginputs$ = new Subject<string>();

   updateArticle = null;
     uploadedSlideImg: null;
     uploadedParagraphImgs: null;
     uploadedFeatureImg: null;
     uploadFiles: null;
     closeResult: string;
   public constructor(private _apiService: apiService, private http: Http, private router: Router, private el: ElementRef, private _fb: FormBuilder,private modalService: NgbModal,private route:ActivatedRoute) {
      // Radio array to the print of all parts
      this.radioList = FORMS;
      this.radio_name = "";
      this.getSelecteditem();
    }

    getSelecteditem(){
        this.radioSel = FORMS.find(Form => Form.value === this.radio_name);
        this.radioSelectedString = JSON.stringify(this.radioSel);
    }
    // onItemChange(radio){
    //    this.getSelecteditem();
    // }

    ngOnInit() {
       // Search fileter calling


       this.loadAuthor();
       this.loadArtits();
       this.loadVenues();
       this.loadEvents();
       this.loadTag();
      //this.loadArticle();
       this.loadSlideShow();
      //  $(window).on('load', function() {
      //   var imagess = $('.main_img_class img').attr('src');
      //   console.log(imagess);
      //   if(imagess){
      //      $('.main_files').hide();
      //      $('.img_part').show();
      //     }else{

      //      $('.main_files').show();
      //      $('.img_part').hide();
      //   }
      //  })
       $(function(){

        // var imagess = $('.main_img_class img').attr('src');
        // //console.log(imagess);
        // if(imagess){
        //   $('.main_files').hide();
        //   $('.img_part').show();
        //  }else{
        //   $('.main_files').show();
        //   $('.img_part').hide();
        // }

        $('.checked_visual_arts').trigger('click');
        $('.product-chooser').not('.disabled').find('.product-chooser-item').on('click', function(){
            $(this).parent().parent().find('.product-chooser-item').removeClass('selected');
            $(this).addClass('selected');
            $(this).find('input[type="radio"]').prop("checked", true);
           // $(this).find('input[type="radio"]');
          });

        });
        // Article form validations
          this.articleForm = this._fb.group({
          title: new FormControl(null, [Validators.required, Validators.minLength(5)]),
          short_title: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(60)] ),
          summary: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(180)] ),
          tags: new FormControl(null),
          uploadFiles: new FormControl(null,[Validators.required]),
          image_caption:new FormControl(null),
          image_credit: new FormControl(null),
          imageTitle:new FormControl(null),
          slider_carousel: this._fb.array([this.AddCaurouselImages()]),
          category_type_article: new FormControl(null),
          alt_text:new FormControl(null),
          Published:new FormControl('',[Validators.required]),
          article_page: new FormControl(null),
          subChannel: this.addSubChannels(),
          subSubs: this.addSubs(),
          genures: this.addGenures(),
          archSubChannels: this.addarchSubChannels(),
          archSubSub: this.addarchSubSub(),
          PerSubChannels: this.addPerSubChannels(),
          PerSubSub: this.addPerSubSub(),
          LifeStyleSubChannels: this.addLifeStyleSubChannels(),
          LifeStyleSubSub: this.addLifeStyleSubSub(),
          FashionSubChannels: this.addFashionSubChannels(),
          FashionSubSub: this.addFashionSubSub(),
          TravelSubChannels: this.addTravelSubChannels(),
          TravelSubSub: this.addTravelSubSub(),
          para_data: this._fb.array([this.AddImgParagraphGroup()]),
          sliderUpload: this._fb.group({
            enable_inq:new FormControl(null),
            imageCaption:new FormControl(null),
            ImageCredit:new FormControl(null),
            ImageTitle:new FormControl(null),
            AltText:new FormControl(null)
          }),
          author_article: new FormControl(null),
          artistData: new FormControl(null),
          referencevenue: new FormControl(null),
          referenceSlideShow: new FormControl(null),
          referenceEvents: new FormControl(null),
          auctionResults: new FormControl(null),
          recommendArticles: new FormControl(null),
          globalarticleRegion: new FormControl(null),
          GlobalRegion:new FormControl(null),
          AllCountrys: this.addAllCountry(),
          ReferenceArtist:new FormControl(null),
          ReferenceVenue:new FormControl(null),
          main_img_uploader:new FormControl(null),
          feature_image:new FormControl(null),
          sliderImg:new FormControl(null),
          // uploadFiles:this.filesControl
    });
    this.route.paramMap.subscribe(params => {
      let articleId = params.get("articleId")
      console.log(articleId);
      if(articleId)
      this.getArticle(articleId);
    //  this.setData(data)
    })
    }

    AddCaurouselImages() {
      return this._fb.group({
        imageCaption:[null],
        ImageCredit: [null],
        ImageTitle:[null],
        AltText:[null],
        sliderImg:[null]

      });
    }

    setCaurousel(data){
        if(data.length != 0){
            this.addcarouselArray.removeAt(0);
            data.forEach(items=>{
                this.addcarouselArray.push(this._fb.group({
                    imageCaption:[items.imageCaption],
                    ImageCredit: [items.ImageCredit],
                    ImageTitle:[items.ImageTitle],
                    AltText:[items.AltText],
                    sliderImg:[items.sliderImg]
                }));

            })
        }
    }
      get addcarouselArray() {
      return <FormArray>this.articleForm.get('slider_carousel');
    }
    addcarousel() {
      this.addcarouselArray.push(this.AddCaurouselImages());
    }
    removecarousel(index) {
      this.addcarouselArray.removeAt(index);
    }
    //get Article
    getArticle(articleId){
      this._apiService.getArticlebyArticleId(articleId).subscribe(response=>{
        let data = response[0]
     // this.response = response;
         console.log(data)
         this.setData(data)
      })
    }

    setData(data){
      this.updateArticle = data._id;
      this.articleForm.patchValue({
        title: data.title,
        short_title: data.short_title,
        summary: data.summary,
        tags: data.tags,
       // uploadFiles:data.uploadFiles,
        image_caption:data.image_caption,
        image_credit: data.image_credit,
        imageTitle:data.imageTitle,
        alt_text:data.alt_text,
        Published:true,
        author_article: data.author_article,
        artistData: data.artistData,
        referencevenue: data.referencevenue,
        referenceSlideShow:data.referenceSlideShow?data.referenceSlideShow:'',
        referenceEvents: data.referenceEvents,
        auctionResults: data.auctionResults,
        recommendArticles: data.recommendArticles,
        globalarticleRegion: data.globalarticleRegion,
        GlobalRegion:data.GlobalRegion,
        subChannel: data.sub_channel,
        subSubs:data.sub_subs,
        genures: data.genu_res,
        archSubChannels: data.ArchitectureChannels,
        archSubSub:data.ArchitectureSubs,
        PerSubChannels: data.PerformanceChannels,
        PerSubSub: data.PerformanceSubs,
        LifeStyleSubChannels:data.LifesytlesChannels,
        LifeStyleSubSub:data.LifesytlesSubs,
        FashionSubChannels: data.FashionChannels,
        FashionSubSub: data.FashionSubs,
        TravelSubChannels: data.TravelChannels,
        TravelSubSub:data.TravelSubs,
        ReferenceArtist:data.ReferenceArtist,
        ReferenceVenue:data.ReferenceVenue,
          para_data:[]
      });
      this.articleForm.setControl("AllCountrys",this.setAllCountry(data.All_country[0]))
      this.articleForm.setControl("subChannel", this.setSubChannels(data.sub_channel[0]),)
      this.articleForm.setControl("subSubs",this.setSubs(data.sub_subs[0]),)
      this.articleForm.setControl( "genures",this.setGenures(data.genu_res[0]),)
        this.setParaGraph(data.para_data);
      this.setCaurousel(data.slider_carousel)
      this.updateArticle = data._id;
      this.uploadFiles = data.files ? data.files[0]['uploadFiles']? data.files[0]['uploadFiles'][0].location :null : null;
      this.uploadedSlideImg = data.files ?  data.files[0]['sliderImg']?data.files[0]['sliderImg'][0].location:null : null;
      this.uploadedFeatureImg = data.files ? data.files[0]['feature_image']?data.files[0]['feature_image'][0].location:null : null;
      this.uploadedParagraphImgs = data.files ? data.files[0]['paragraph_img']?data.files[0]['paragraph_img'][0].location:null : null;

    }

    // Author autocomplete sectioon
     private loadAuthor() {
        this.authorloading = true;
        this._apiService.getAllUserDetails().subscribe(x => {
            this.authordata = x;
            this.authorloading = false;
        });
    }

    loadRecomendedArticles(data){
      this.recomendedArticlesloading = true;
      this._apiService.getArticlesByTags(data).subscribe(x => {
          debounceTime(200),
          this.recomendedArticlesData = x;
          this.recomendedArticlesloading = false;
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
    // private loadArticle() {

    // }

    private loadSlideShow() {
        this.slideShowloading = true;
        this._apiService.getSlideShow({}).subscribe((x:any) => {
            debounceTime(200),
            this.slideShowdata = x.docs;
            this.slideShowloading = false;
        });
    }
    // Venue autocomplete section
    private loadVenues() {
        this.venueloading = true;
        this._apiService.getvenuesDetails().subscribe(x => {
            debounceTime(200),
            this.venuedata = x;
            this.venueloading = false;
        });
    }

     // Events autocomplete section
    private loadEvents() {
        this.eventloading = true;
        this._apiService.getEventsDetails().subscribe(x => {
            debounceTime(200),
            this.eventdata = x;
            this.eventloading = false;
        });
    }


    // Tag autocomplete section
  //   private loadTag() {
  //     this.tagloading = true;
  //     this._apiService.getTagData().subscribe(x => {
  //         debounceTime(200),
  //         this.tagdata = x;
  //         this.tagloading = false;
  //     });
  // }
  private loadTag() {
    this.tagdata = concat(
        of([]), // default items
        this.taginputs$.pipe(
           debounceTime(200),
           distinctUntilChanged(),
           tap(() => this.tagloading = true),
           switchMap(tagdata => this._apiService.getTagData().pipe(
               catchError(() => of([])), // empty list on error
               tap(() => this.tagloading = false)
           ))
        )
    );
}
    // sub channels code
   addSubChannels() {
     const arr = this.subChannels.map(item => {
      return this._fb.control(false);
     });
      return this._fb.array(arr);
   }

   setSubChannels(data){
    const arr = this.subChannels.map(item => {
      return this._fb.control(data[item]);
     });

   return this._fb.array(arr);
  }


   setAllCountry(data){
    const arr = this.AllCountry.map(item => {
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
   addSubs() {
     const arr = this.subSubs.map(item => {
      return this._fb.control(false);
     });
      return this._fb.array(arr);
   }

   setSubs(data){
    const arr = this.subSubs.map(item => {
      return this._fb.control(data[item]);
     });

   return this._fb.array(arr);
  }
   // sub  code
   addGenures() {
     const arr = this.genures.map(item => {
      return this._fb.control(false);
     });
      return this._fb.array(arr);
   }

   setGenures(data){
    const arr = this.genures.map(item => {
      return this._fb.control(data[item]);
     });

   return this._fb.array(arr);
  }

   //archSubChannels
   addarchSubChannels() {
     const arr = this.archSubChannels.map(item => {
      return this._fb.control(false);
     });
      return this._fb.array(arr);
   }

   //addarchSubSub
   addarchSubSub() {
     const arr = this.archSubSub.map(item => {
      return this._fb.control(false);
     });
      return this._fb.array(arr);
   }

   //addPerSubChannels
   addPerSubChannels() {
     const arr = this.PerSubChannels.map(item => {
      return this._fb.control(false);
     });
      return this._fb.array(arr);
   }

   //addPerSubChannels
   addPerSubSub() {
     const arr = this.PerSubSub.map(item => {
      return this._fb.control(false);
     });
      return this._fb.array(arr);
   }

   //addPerSubChannels
   addLifeStyleSubChannels() {
     const arr = this.LifeStyleSubChannels.map(item => {
      return this._fb.control(false);
     });
      return this._fb.array(arr);
   }

   //addLifeStyleSubSub
   addLifeStyleSubSub() {
     const arr = this.LifeStyleSubSub.map(item => {
      return this._fb.control(false);
     });
      return this._fb.array(arr);
   }

   //addFashionSubChannels
   addFashionSubChannels() {
     const arr = this.FashionSubChannels.map(item => {
      return this._fb.control(false);
     });
      return this._fb.array(arr);
   }

   //addFashionSubSub
   addFashionSubSub() {
     const arr = this.FashionSubSub.map(item => {
      return this._fb.control(false);
     });
      return this._fb.array(arr);
   }

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
      para_body: [null],
      para_head: [null],
      para_img_cap_credit: [null],
      para_image_title: [null],
      para_alt_text: [null]
    });
  }
  addParagraph() {
    this.addParagraphArray.push(this.AddImgParagraphGroup());
  }

  setParaGraph(data){
       if(data.length != 0){
           this.addParagraphArray.removeAt(0);
           data.forEach(items=>{
              this.addParagraphArray.push(this._fb.group({
                   para_body: [items.para_body],
                   para_head: [items.para_head],
                   para_img_cap_credit: [items.para_img_cap_credit],
                   para_image_title: [items.para_image_title],
                   para_alt_text: [items.para_alt_text]
               }));

           })
       }

  }

  get subchannelsArray() {
    return <FormArray>this.articleForm.get('subChannel');
  }
  get AllCountryArray() {
    return <FormArray>this.articleForm.get('AllCountrys');
  }
  get subSubsArray() {
    return <FormArray>this.articleForm.get('subSubs');
  }
  get genuresArray() {
    return <FormArray>this.articleForm.get('genures');
  }

  get archSubChannelsArray() {
    return <FormArray>this.articleForm.get('archSubChannels');
  }
  get archSubSubArray() {
    return <FormArray>this.articleForm.get('archSubSub');
  }
  get PerSubChannelsArray() {
    return <FormArray>this.articleForm.get('PerSubChannels');
  }

  get PerSubSubArray() {
    return <FormArray>this.articleForm.get('PerSubSub');
  }
  get LifeStyleSubChannelsArray() {
    return <FormArray>this.articleForm.get('LifeStyleSubChannels');
  }
  get LifeStyleSubSubArray() {
    return <FormArray>this.articleForm.get('LifeStyleSubSub');
  }
  get FashionSubChannelsArray() {
    return <FormArray>this.articleForm.get('FashionSubChannels');
  }
  get FashionSubSubArray() {
    return <FormArray>this.articleForm.get('FashionSubSub');
  }
  get TravelSubChannelsArray() {
    return <FormArray>this.articleForm.get('TravelSubChannels');
  }
  get TravelSubSubArray() {
    return <FormArray>this.articleForm.get('TravelSubSub');
  }



  removeParagraph(index) {
    this.addParagraphArray.removeAt(index);
  }
  get addParagraphArray() {
    return <FormArray>this.articleForm.get('para_data');
  }

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
  getSelectedSub() {
    this.selectedSubValues = [];
    this.subSubsArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedSubValues.push(this.subSubs[i]);
      }
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

  getSelectedarchSubSub() {
    this.selectedarchSubSubValues = [];
    this.archSubSubArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedarchSubSubValues.push(this.archSubSub[i]);
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

  getSelectedPerSubSub() {
    this.selectedPerSubValues = [];
    this.PerSubSubArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedPerSubValues.push(this.PerSubSub[i]);
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

  getSelectedLifeStyleSubSub() {
    this.selectedLifeStyleSubValues = [];
    this.LifeStyleSubSubArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedLifeStyleSubValues.push(this.LifeStyleSubSub[i]);
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

  getSelectedFashionSubSub() {
    this.selectedFashionSubValues = [];
    this.FashionSubSubArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedFashionSubValues.push(this.FashionSubSub[i]);
      }
    });
  }


  onChange(event) {
      console.log( event.editor.getData() );

       let tagNames = [];
       event.forEach(tags=>{
           tagNames.push(tags.tagName);
       })
        this._apiService.getArticlesByTags(tagNames.join(',')).subscribe(articles =>{
            this.recomendedArticlesData = articles;
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


  imageUrl: any;

    //method definition in your class

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

  submitForm() {
      const data = new FormData();
      const file_data = new FormData();
      const file_data_edit_main_img = new FormData();
      const fileUploadObject: any = [];
      var imagess = $('.main_img_class img').attr('src');
   for (var i = 0; i < this.myFiles.length; i++) {

      file_data.append("uploadFiles", this.myFiles[i]);
      fileUploadObject.push(this.myFiles[i]);

   }
   for (var i = 0; i < this.myFiles.length; i++) {

    file_data_edit_main_img.append("uploadFiles", this.myFiles[i]);
    fileUploadObject.push(this.myFiles[i]);

 }

   for (var i = 0; i < this.myFeatures.length; i++) {

      file_data.append("feature_image", this.myFeatures[i]);

   }
   for (var i = 0; i < this.myParaGraphImg.length; i++) {

      file_data.append("paragraph_img", this.myParaGraphImg[i]);

   }
   for (var i = 0; i < this.mySlidImg.length; i++) {

      file_data.append("sliderImg", this.mySlidImg[i]);

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
   const authorObject: any = {};
   const allCountryObject: any = {};

   var keys = Object.keys(this.articleForm.value);

   for(var i = 0; i < keys.length; i++) {
      var key = keys[i];
      let article_value = this.articleForm.value[key];
      if (key === 'subChannel') {
         for(let j = 0; j < this.articleForm.value[key].length; j++){
           subChannelsObject[this.subChannels[j]] = article_value[j];
         }
           console.log(Object.assign({'subCha' : subChannelsObject}, this.articleForm.value));
           data.append(key, subChannelsObject);
       } else if (key === 'subSubs') {

         for(let j = 0; j < this.articleForm.value[key].length; j++){
           subSubsObject[this.subSubs[j]] = article_value[j];
         }
           data.append(key, subSubsObject);
         }else if (key === 'archSubChannels') {

         for(let j = 0; j < this.articleForm.value[key].length; j++){
           arc_sub_channelsObject[this.archSubChannels[j]] = article_value[j];
         }
        // console.log(Object.assign({'ArchitectureChannels' : arc_sub_channelsObject}, this.articleForm.value));
           data.append(key, arc_sub_channelsObject);
         }else if (key === 'archSubSub') {

         for(let j = 0; j < this.articleForm.value[key].length; j++){
           arc_subObject[this.archSubSub[j]] = article_value[j];
         }
           data.append(key, arc_subObject);
         }else if (key === 'PerSubChannels') {

         for(let j = 0; j < this.articleForm.value[key].length; j++){
           per_sub_channelsObject[this.PerSubChannels[j]] = article_value[j];
         }
           data.append(key, per_sub_channelsObject);
         }else if (key === 'PerSubSub') {

         for(let j = 0; j < this.articleForm.value[key].length; j++){
           per_subObject[this.PerSubSub[j]] = article_value[j];
         }
           data.append(key, per_subObject);
         }else if (key === 'LifeStyleSubChannels') {

         for(let j = 0; j < this.articleForm.value[key].length; j++){
           lifeStyle_sub_channelsObject[this.LifeStyleSubChannels[j]] = article_value[j];
         }
           data.append(key, lifeStyle_sub_channelsObject);
         }else if (key === 'LifeStyleSubSub') {

         for(let j = 0; j < this.articleForm.value[key].length; j++){
           lifeStyle_subObject[this.LifeStyleSubSub[j]] = article_value[j];
         }
           data.append(key, lifeStyle_subObject);
         }else if (key === 'FashionSubChannels') {

         for(let j = 0; j < this.articleForm.value[key].length; j++){
           fashion_sub_channelsObject[this.FashionSubChannels[j]] = article_value[j];
         }
           data.append(key, fashion_sub_channelsObject);
         }else if (key === 'FashionSubSub') {

         for(let j = 0; j < this.articleForm.value[key].length; j++){
           fashion_subObject[this.FashionSubSub[j]] = article_value[j];
         }
           data.append(key, fashion_subObject);
         }else if (key === 'TravelSubChannels') {

         for(let j = 0; j < this.articleForm.value[key].length; j++){
           travel_sub_channelsObject[this.TravelSubChannels[j]] = article_value[j];
         }
           data.append(key, travel_sub_channelsObject);
         }else if (key === 'TravelSubSub') {

         for(let j = 0; j < this.articleForm.value[key].length; j++){
           travel_subObject[this.TravelSubSub[j]] = article_value[j];
         }
           data.append(key, travel_subObject);
         } else if (key === 'genures') {

         for(let j = 0; j < this.articleForm.value[key].length; j++){
           genuresObject[this.genures[j]] = article_value[j];
         }
           data.append(key, genuresObject);
         }else if (key === 'AllCountrys') {

         for(let j = 0; j < this.articleForm.value[key].length; j++){
             allCountryObject[this.AllCountry[j]] = article_value[j];
         }
           data.append(key, allCountryObject);
         } else {
           data.append(key, this.articleForm.value[key]);
         }
    }
    console.log(this.articleForm.value);
    //Stage 54.174.193.63
    if(!this.updateArticle){
    this._apiService.createArticle(
      Object.assign({
        'sub_channel' : [subChannelsObject],
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
        {"userId" : localStorage.getItem('userId')}, this.articleForm.value))
      .subscribe(
          (result_data:any) => {
            console.log(result_data, "Result");

                file_data.append("_id", result_data._id);
                this.http.post(`${environment.medaiServerAddress}article/updatearticle`, file_data).map(result => result.json()).subscribe(
                    (file_data:any) => {
                        let data = {
                          ContentId:file_data._id,
                          author_article:file_data.author_article,
                          files:file_data.files,
                          title:file_data.title,
                          summary:file_data.summary,
                          Published: file_data.Published,
                          ArchitectureChannels:file_data.ArchitectureChannels,
                          ArchitectureSubs:file_data.ArchitectureSubs,
                          PerformanceChannels:file_data.PerformanceChannels,
                          PerformanceSubs:file_data.PerformanceSubs,
                          LifesytlesChannels:file_data.LifesytlesChannels,
                          LifesytlesSubs:file_data.LifesytlesSubs,
                          FashionChannels:file_data.FashionChannels,
                          FashionSubs:file_data.FashionSubs,
                          TravelChannels:file_data.TravelChannels,
                          TravelSubs:file_data.TravelSubs,
                          sub_channel:file_data.sub_channel,
                          sub_subs:file_data.sub_subs,
                          genu_res:file_data.genu_res,
                          short_title:file_data.short_title,
                          added_date:file_data.added_date,
                          category_type_article:file_data.category_type_article
                        };
                        let Artistdata = {
                          ContentId:file_data._id,
                          author_article:file_data.author_article,
                          files:file_data.files,
                          title:file_data.title,
                          summary:file_data.summary,
                          Published: file_data.Published,
                          ArchitectureChannels:file_data.ArchitectureChannels,
                          ArchitectureSubs:file_data.ArchitectureSubs,
                          PerformanceChannels:file_data.PerformanceChannels,
                          PerformanceSubs:file_data.PerformanceSubs,
                          LifesytlesChannels:file_data.LifesytlesChannels,
                          LifesytlesSubs:file_data.LifesytlesSubs,
                          FashionChannels:file_data.FashionChannels,
                          FashionSubs:file_data.FashionSubs,
                          TravelChannels:file_data.TravelChannels,
                          TravelSubs:file_data.TravelSubs,
                          sub_channel:file_data.sub_channel,
                          sub_subs:file_data.sub_subs,
                          genu_res:file_data.genu_res,
                          short_title:file_data.short_title,
                          added_date:file_data.added_date,
                          category_type_article:file_data.category_type_article
                      };
                        let venuId = '';
                        if (file_data.referencevenue) {
                          venuId = file_data.referencevenue[0]._id;
                            this._apiService.updateVenueLinkedList({data:data,linkVenueId:venuId,type:"linkedArticles"}).subscribe((linkedData)=>{
                                console.log('linked Data',linkedData);
                            })
                        }
                        let artistsId = '';
                        if(file_data.artistData){
                          artistsId = file_data.artistData[0]._id;
                            this._apiService.updateArtistsLinkedList({data:Artistdata,linkArtistsId:artistsId,type:"linkedArticles"}).subscribe((linkedArtistsData)=>{
                                console.log('linked Data',linkedArtistsData);
                            })
                        }



                        this._apiService.updateArticlesInHomePageCOnfig(this.articleForm.value.category_type_article).subscribe(data=>{});
                        console.log(file_data, "File_Result");
                        this.http.post(`${environment.synchServerAddress}article`, Object.assign({"_id": result_data._id,"category_type_article":result_data.category_type_article, "title":result_data.title, "short_title":result_data.short_title, "summary":result_data.summary, "author_article":result_data.author_article})).map(result => result.json())
                         .subscribe(
                            (elasticdata:any) => {
                              console.log(elasticdata, "elasticdata_Result");
                            },
                            (err: any) => console.log('synchServerAddress err', err)
                          )

                    },
                    (err: any) => {
                      console.log('medaiServerAddress err', err)
                    }
                );

                Swal({
                    title: 'Thank you',
                    allowOutsideClick: false,
                    text: "Article for page create. Click ok button to redirect dashboard page",
                    type: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.value) {
                        this.router.navigate(["/layout/getarticles"]);
                    }
                })
                setTimeout(() => {
                    console.log(key);
                    this.loading = false;
                }, 1000);
      },
      error => {
          console.log(error);
          let errorMessage = null;
          if(error.error.message == '"author_article" must be an array'){
              errorMessage = "Author  is Required"
          }else if(error.error.message == '"artistData" must be an array'){
              errorMessage = "Artist Data is Required"
          }else if(error.error.message == '"referencevenue" must be an array'){
              errorMessage = "Venue Data is Required"
          }else if(error.error.message == '"globalarticleRegion" must be a string'){
              errorMessage = "Please select Global Region"
          }else if(error.error.message == '"GlobalRegion" must be a string'){
              errorMessage = "Please select globalcountry"
          }else if(error.error.message == '"Authentication Failed'){
              errorMessage = "Please try creating the article by logout and Login Again"
          }else if(error.error.message == '"tags" must be an array'){
              errorMessage = "please select a Tag"
          }else if(error.error.message == "You dont Have Access to do this action") {
              errorMessage = "You dont Have Access to do this action"
          }else{
              errorMessage = "there is some techinal issue please try after some time"
          }
          Swal({title: 'Oops...',
              text: errorMessage,
              type:'error'
          })
      }
    );
    }else{
      this._apiService.UpdateArticle(
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
          {'_id': this.updateArticle},
          {"userId" : localStorage.getItem('userId')}, this.articleForm.value))
            .subscribe(
              (result_data:any) => {
                  console.log(result_data, "File_Result");

                      file_data_edit_main_img.append("_id", result_data._id);
                      this.http.post(`${environment.medaiServerAddress}article/updatearticlePhoto`, file_data).map(result => result.json()).subscribe(
                          (file_data: any) => {
                              this._apiService.updateArticlesInHomePageCOnfig(this.articleForm.value.category_type_article).subscribe(data=>{});
                              console.log(file_data, "File_Result");

                          })
                      Swal({
                          title: 'Thank you',
                          allowOutsideClick: false,
                          text: "Thank you for update",
                          type: 'success',
                          showCancelButton: false,
                          confirmButtonColor: '#3085d6',
                          confirmButtonText: 'OK'
                      }).then((result) => {
                          if (result.value) {
                              this.router.navigate(["/layout/dashboard"]);
                          }
                      })
              },
                error => {
                    console.log(error);
                    let errorMessage = null;
                    if(error.error.message == '"author_article" must be an array'){
                        errorMessage = "Author  is Required"
                    }else if(error.error.message == '"artistData" must be an array'){
                        errorMessage = "Artist Data is Required"
                    }else if(error.error.message == '"referencevenue" must be an array'){
                        errorMessage = "Venue Data is Required"
                    }else if(error.error.message == '"globalarticleRegion" must be a string'){
                        errorMessage = "Please select Global Region"
                    }else if(error.error.message == '"GlobalRegion" must be a string'){
                        errorMessage = "Please select globalcountry"
                    }else if(error.error.message == '"Authentication Failed'){
                        errorMessage = "Please try creating the article by logout and Login Again"
                    }else if(error.error.message == '"tags" must be an array'){
                        errorMessage = "please select a Tag"
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

addTagModal(content:any){
  this.TagModel = this.modalService.open(content,{ centered: true })
  this.TagModel.result.then((result) => {
    console.log(`Closed with: ${result}`);
  }, (reason) => {
    console.log(`Dismissed ${reason}`);
  });
}

addTag(){
  this._apiService.addTag(this.NewTag).subscribe(response=>{
    if(response['message'] !='Sucess'){
      alert(response['message'])
    }else{
      this.TagModel.close();
    }
  })
}

}
