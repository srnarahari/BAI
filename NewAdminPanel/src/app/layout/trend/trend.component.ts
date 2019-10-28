import { Component, OnInit,ElementRef } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from "@angular/http";
import { distinctUntilChanged, debounceTime, switchMap, tap, catchError } from 'rxjs/operators';
import { Subject, Observable, of, concat } from 'rxjs';
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import { apiService,Person,tag,Role } from '../../shared/services/index';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { Router,ActivatedRoute } from '@angular/router';
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
class ImageSnippet {
   pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.scss']
})
export class TrendComponent implements OnInit {
  selectedFile: ImageSnippet;
  trendForm: FormGroup;
    // Search Field for author
   authordata: Observable<Role[]>;
   authorloading = false;
   authorinputs$ = new Subject<string>();
  constructor(private _apiService: apiService,
    private _fb: FormBuilder,
   // private imageService: ImageService,
    private _user:UserService,
    private _router:Router,
    private http: Http,
    private route:ActivatedRoute,
    private el: ElementRef,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal) {
    }
 
  ngOnInit() {
  	this.loadAuthor();
  	$(document).ready(function() {
        // $("#fileUpload").on('change', function() {
        //   //Get count of selected files
        //   var countFiles = $(this)[0].files.length;
        //   var imgPath = $(this)[0].value;
        //   var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
        //   var image_holder = $("#image-holder");
        //   image_holder.empty();
        //   if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
        //     if (typeof(FileReader) != "undefined") {
        //       //loop for each file selected for uploaded.
        //       for (var i = 0; i < countFiles; i++) 
        //       {
        //         var reader = new FileReader();
        //         reader.onload = function(e) {
        //           $("<img />", {
        //             "src": e.target.result,
        //             "class": "thumb-image_"+i+++"",
        //             "style":"width:100px;border-radius:100%;height:100px;"
        //           }).appendTo(image_holder);
        //         // 
        //         // $('span').html("X").appendTo(image_holder);
        //          }
        //         image_holder.show();

        //         reader.readAsDataURL($(this)[0].files[i]);
        //        // $("#image-holder").html('<button class="close'+i+++'">x</button>');
        //       }
        //     } else {
        //       alert("This browser does not support FileReader.");
        //     }
        //   } else {
        //     alert("Pls select only images");
        //   }
        // });
      });
  	this.trendForm = this._fb.group({
  		main_trends_photos: [null],
  		subCategory:[null],
  		description:[null],
  		author_article:[null]
  	});
    this.route.paramMap.subscribe(params => {
      let trendId = params.get("trendId")
      console.log(trendId);
      if(trendId)
      this.getTrend(trendId);
    })
  }
 
    //get Article
    getTrend(trendId){
      this._apiService.getTrendbyTrendId(trendId).subscribe(response=>{
        let data = response['response'][0]
        console.log(data)
        this.setData(data)
      })
    }
    setData(data){
       this.trendForm.patchValue({
         subCategory:data.subCategory,
         description:data.description,
         author_article:data.author_article,
         files:{
           main_trends_photos: data.main_trends_photos
         }
       })
     }
  // Author autocomplete sectioon
     private loadAuthor() {
        this.authordata = concat(
            of([]), // default items
            this.authorinputs$.pipe(
               debounceTime(200),
               distinctUntilChanged(),
               tap(() => this.authorloading = true),
               switchMap(authordata => this._apiService.getAllUserDetails().pipe(
                   catchError(() => of([])), // empty list on error
                   tap(() => this.authorloading = false)
               )) 
            )
        );
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
   const data = new FormData();
   const fileUploadObject: any = [];
    for (var i = 0; i < this.myFiles.length; i++) {
      file_data.append("main_trends_photos", this.myFiles[i]);
    }
 
   console.log(this.trendForm);
   this.spinner.show();
   this.http.post(`${environment.adminServerAddresss}trend/trendprofile`, this.trendForm.value)
   .map(result => result.json())
   .subscribe(result => {
      file_data.append("_id", result._id);
      this.http.post(`${environment.medaiServerAddress}trend/photo`, file_data).map(result => result.json())
    .subscribe(
      (file_data:any) => {
         this.spinner.hide();
        console.log(file_data, "File_Result");
        Swal({
               title: 'Thank you',
               text: "Trending for page create. Click ok button to redirect dashboard page",
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
