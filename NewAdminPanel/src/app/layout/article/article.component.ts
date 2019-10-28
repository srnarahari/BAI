import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators, FormControl} from '@angular/forms';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from "@angular/router";
import {NgxSpinnerService} from 'ngx-spinner';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import { CKEditor5 } from '@ckeditor/ckeditor5-angular/ckeditor';
import {Subject, Observable, of, concat} from 'rxjs';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {apiService} from '../../shared/services/index';
import {environment} from '../../../environments/environment';

declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
    public ClassicEditorBuild = ClassicEditorBuild;
    public editor: CKEditor5.Editor = null;
    publishOption = 1
    language_all = [
        {Language: 'Language neutral'},
        {Language: 'Chinese, Simplified'},
        {Language: 'English'},
        {Language: 'English, Australia'},
        {Language: 'English, Austria'},
        {Language: 'English, Brazil'},
        {Language: 'English, Canada'},
        {Language: 'English, Chinese'},
        {Language: 'English, Colombia'},
        {Language: 'English, France'},
        {Language: 'English, Germany'},
        {Language: 'Language neutral'},
        {Language: 'Chinese, Simplified'},

        {Language: 'English, Hong Kong'},
        {Language: 'English, India'},
        {Language: 'English, Italy'},
        {Language: 'English, Japan'},
        {Language: 'English, Korea'},
        {Language: 'English, Latin America'},
        {Language: 'English, Mexico'},
        {Language: 'English, Middle East'},
        {Language: 'English, Russia'},
        {Language: 'English, Southeast Asia'},
        {Language: 'English, United Kingdom'},
        {Language: 'French'},
        {Language: 'German'},
        {Language: 'German, Austria'},
        {Language: 'German, Swiss'},
        {Language: 'Italy'},
        {Language: 'Japanese'},
        {Language: 'Korean'},
        {Language: 'Portuguese, Brazil'},
        {Language: 'Russian'},


        {Language: 'Spanish'},
        {Language: 'Spanish, Columbia'},
        {Language: 'Spanish, Spain'}
    ];
    neighborhood_all = [
        {NeighborhoodLabel: 'Demo1'},
        {NeighborhoodLabel: 'Demo2'},
        {NeighborhoodLabel: 'Demo3'},
        {NeighborhoodLabel: 'Demo4'},
        {NeighborhoodLabel: 'Demo5'},
        {NeighborhoodLabel: 'Demo6'},
        {NeighborhoodLabel: 'Demo7'},
        {NeighborhoodLabel: 'Demo8'},
        {NeighborhoodLabel: 'Demo9'},
        {NeighborhoodLabel: 'Demo11'},
        {NeighborhoodLabel: 'Demo12'}
    ];
    // country_all = [
    //       { country: 'Australia'},
    //       { country: 'China'},
    //       { country: 'Germany'},
    //       { country: 'India'},
    //       { country: 'Japan'},
    //       { country: 'Middle East'},
    //       { country: 'Uk'},
    //       { country: 'Canada'},
    //       { country: 'France'},
    //       { country: 'Hong Kong'},
    //       { country: 'Italy'},
    //       { country: 'Korea'},
    //       { country: 'Spain'}
    //      ];

    lat: number = 51.678418;
    lng: number = 7.809007;
    articleFormartists: FormGroup;
    updateArtistId :string =null;
    uploadedFile:string = null;

    constructor(private _fb: FormBuilder, private http: Http,private router: Router, private spinner: NgxSpinnerService, private _apiService: apiService,private route:ActivatedRoute, private modalService: NgbModal) {
    }

    ngOnInit() {
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
        $(function () {
            var $tabButtonItem = $('#tab-button li'),
                $tabSelect = $('#tab-select'),
                $tabContents = $('.tab-contents'),
                activeClass = 'is-active';

            $tabButtonItem.first().addClass(activeClass);
            $tabContents.not(':first').hide();

            $tabButtonItem.find('a').on('click', function (e) {
                var target = $(this).attr('href');

                $tabButtonItem.removeClass(activeClass);
                $(this).parent().addClass(activeClass);
                $tabSelect.val(target);
                $tabContents.hide();
                $(target).show();
                e.preventDefault();
            });

            $tabSelect.on('change', function () {
                var target = $(this).val(),
                    targetSelectNum = $(this).prop('selectedIndex');

                $tabButtonItem.removeClass(activeClass);
                $tabButtonItem.eq(targetSelectNum).addClass(activeClass);
                $tabContents.hide();
                $(target).show();
            });

            $(".seo_keywords")
                .keyup(function () {
                    var value = $(this).val();
                    if (value) {
                        $(".show_author").text(value);
                        $('.anonymus').hide();
                    } else {
                        $('.anonymus').show();
                        $(".show_author").text('');
                    }
                })
                .keyup();
            $(".author_on_section")
                .keyup(function () {
                    var value = $(this).val();
                    if (value) {
                        $(".author_on").text(' on ' + value);
                        // $('.anonymus').hide();
                    } else {
                        //$('.anonymus').show();
                        $(".author_on").text('');
                    }
                })
                .keyup();
            $(".tab-contents input[type='checkbox']")
                .change(function () {
                    var ischecked = $(this).is(':checked');
                    if (!ischecked) {
                        var check_1 = $('.checked_1,.checked_2,.checked_3').is(':checked');
                        if (check_1 === false) {
                            $(".not_publised").show();
                        }
                    }
                })
            $(".checked_1")
                .change(function () {
                    var ischecked = $(this).is(':checked');
                    if (ischecked) {
                        var text = $(this).val();
                        // console.log(text);
                        $(".show_author_1").text(text);
                        $(".not_publised").hide();
                    } else {
                        $('.show_author_1').text('');
                    }

                })
            $(".checked_2")
                .change(function () {
                    var ischecked = $(this).is(':checked');
                    if (ischecked) {
                        var text = $(this).val();
                        // console.log(text);
                        $(".show_author_2").text(text);
                        $(".not_publised").hide();
                    } else {
                        $('.show_author_2').text('');
                    }

                })
            $(".checked_3")
                .change(function () {
                    var ischecked = $(this).is(':checked');
                    if (ischecked) {
                        var text = $(this).val();
                        // console.log(text);
                        $(".show_author_3").text(text);
                        $(".not_publised").hide();
                    } else {
                        $('.show_author_3').text('');
                    }

                })
            $(".show_date")
                .change(function () {
                    var ischecked = $(this).is(':checked');
                    if (ischecked) {
                        $('.formate_date').show();
                    } else {
                        $('.formate_date').hide();
                        //$('.show_author_1').text('');
                    }

                })
        });
        this.articleFormartists = this._fb.group({
            artistName: [null],
            fname: [null, [Validators.required, Validators.minLength(5)]],
            lname: [null, [Validators.required, Validators.minLength(5)]],
            language: [null],
            knownas: [null],
            photo: [null],
            nationality: [null],
            show_date: [null],
            photo_credit: [null],
            artist_statement: [null],
            field_country: [null],
            field_specialties: [null],
            fomat_date: [null],
            tofomat_date: [null],
            field_birth_year_qualifier: [null],
            field_death_year_quallifier: [null],
            place_of_birth: [null],
            place_of_death: [null],
            date_description: [null],
            articleDescription: [null],
            seo_keywords: [null],
            authored_by: [null],
            authored_on: [null],
            seo_description: [null],
            seo_title: [null],
            street_location: [null],
            // Published: [null],
            // saveDrafts: [null]
        });

        this.route.paramMap.subscribe(params => {
            let artistId = params.get('artistId');
            this.updateArtistId = artistId;
            if (artistId) {
                this.getArtistData(artistId);
            }
        })
    }


    getArtistData(artistId){
        this._apiService.getArtistByArtistId(artistId).subscribe((response:any) =>{
            console.log('ArtistData -->',response[0]);
            let data = response[0]

            this.uploadedFile = data.files[0] ? data.files[0]['author_photos'][0].location : null;
            this.articleFormartists.patchValue({
                artistName: data.artistName,
                fname: data.fname,
                lname: data.lname,
                language: data.language,
                knownas: data.knownas,
                photo: data.photo,
                nationality: data.nationality,
                show_date: data.show_date,
                photo_credit: data.photo_credit,
                artist_statement: data.artist_statement,
                field_country: data.field_country,
                field_specialties: data.field_specialties,
                fomat_date: data.fomat_date,
                tofomat_date: data.tofomat_date,
                field_birth_year_qualifier: data.field_birth_year_qualifier,
                field_death_year_quallifier: data.field_death_year_quallifier,
                place_of_birth: data.place_of_birth,
                place_of_death: data.place_of_death,
                date_description: data.date_description,
                articleDescription: data.articleDescription,
                seo_keywords: data.seo_keywords,
                authored_by: data.authored_by,
                authored_on: data.authored_on,
                seo_description: data.seo_description,
                seo_title: data.seo_title,
                street_location: data.street_location,
                // Published: data.Published,
                // saveDrafts: data.saveDrafts
            })
        })
    }

    get artistName() {
        return this.articleFormartists.get('artistName');
    }

    get fname() {
        return this.articleFormartists.get('fname');
    }

    get lname() {
        return this.articleFormartists.get('lname');
    }


    myFiles: string [] = [];

    getFileDetails(e) {
        //console.log (e.target.files);
        for (var i = 0; i < e.target.files.length; i++) {
            this.myFiles.push(e.target.files[i]);
        }
    }


    submitHandler() {
        const file_data = new FormData();
        const fileUploadObject: any = [];
        for (var i = 0; i < this.myFiles.length; i++) {
            file_data.append("author_photos", this.myFiles[i]);
            //fileUploadObject.push(this.myFiles[i]);
        }
        console.log(this.articleFormartists.value);

        this.spinner.show();
        if(!this.updateArtistId){
            this._apiService.createArtists(
                Object.assign({"userId": localStorage.getItem('userId')}, this.articleFormartists.value)
            ).subscribe((result:any) => {
                    file_data.append("_id", result._id);
                    this._apiService.addArtistPhoto(file_data)
                        .subscribe(
                        (file_data: any) => {
                            console.log(file_data, "File_Result");

                        this.http.post(`${environment.synchServerAddress}artist`, Object.assign({"artistId": result._id})).map(result => result.json())
                            .subscribe(
                                (elasticdata:any) => {
                            console.log(elasticdata, "elasticdata_Result");})
                        })
                        this.spinner.hide();
                        Swal({
                            title: 'Thank you',
                            text: "Artist for page create. Click ok button to redirect dashboard page",
                            type: 'success',
                            showCancelButton: false,
                            allowOutsideClick: false,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'OK'
                        }).then((result) => {
                            if (result.value) {
                                this.router.navigate(["/layout/get-artist"]);
                            }
                        })
                    },error => {
                this.spinner.hide();
                    console.log(error);
                    let errorMessage = null;
                 if(error.error.message == '"entityLocation" must be a string'){
                        errorMessage = "Please enter artist Name"
                    }else if(error.error.message == '"fname" must be a string'){
                        errorMessage = "Please enter first name"
                    }else if(error.error.message == '"lname" must be a string'){
                        errorMessage = "Please enter last name"
                    }else if(error.error.message == '"nationality" must be a string'){
                        errorMessage = "Please enter nationality"
                    }else if(error.error.message == '"field_country" must be a string'){
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


        }else{
            this._apiService.updateArtist(
                Object.assign({"userId": localStorage.getItem('userId'),"_id":this.updateArtistId}, this.articleFormartists.value)
            )
                .subscribe((result:any) => {
                    file_data.append("_id", result._id);
                    this._apiService.updateArtistPhoto(file_data)
                        .subscribe(
                            (file_data: any) => {

                                console.log(file_data, "File_Result");

                            })
                    this.spinner.hide();
                    Swal({
                        title: 'Thank you',
                        text: "Artist for page Updated. Click ok button to redirect dashboard page",
                        type: 'success',
                        showCancelButton: false,
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'OK'
                    }).then((result) => {
                        if (result.value) {
                            this.router.navigate(["/layout/get-artist"]);
                        }
                    })
                },error => {
                    this.spinner.hide();
                    console.log(error);
                    let errorMessage = null;
                    if(error.error.message == '"entityLocation" must be a string'){
                        errorMessage = "Please enter artist Name"
                    }else if(error.error.message == '"fname" must be a string'){
                        errorMessage = "Please enter first name"
                    }else if(error.error.message == '"lname" must be a string'){
                        errorMessage = "Please enter last name"
                    }else if(error.error.message == '"nationality" must be a string'){
                        errorMessage = "Please enter nationality"
                    }else if(error.error.message == '"field_country" must be a string'){
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

    }

}
