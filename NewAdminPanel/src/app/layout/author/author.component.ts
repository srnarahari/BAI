import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Http, Headers, RequestOptions,Response } from "@angular/http";
import { HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { environment } from '../../../environments/environment';
import { apiService } from '../../shared/services/index';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
   authorForm: FormGroup;
  constructor( private _fb: FormBuilder, private http: Http, private router: Router,private spinner: NgxSpinnerService,private _apiService:apiService) { }

  ngOnInit() {
  	 this.authorForm = this._fb.group({
      author: [null, [Validators.required, Validators.minLength(5)]],
      authorName: [null, [Validators.required, Validators.minLength(5)] ],
      authorTitle: [null, [Validators.required, Validators.minLength(5)] ],
      authorDescription: [null]
     });
  }
  get author() {
    return this.authorForm.get('author');
  }

  get authorName() {
    return this.authorForm.get('authorName');
  }
  get authorTitle() {
    return this.authorForm.get('authorTitle');
  }
  submitHandler() {
     console.log(this.authorForm);
     
       this.spinner.show();
      this._apiService.createAuthor(JSON.stringify(this.authorForm.value))
          //.map(result => result.json())
          .subscribe(result => {
             this.spinner.hide();
              this.router.navigate(["/layout/dashboard"]);
          });
  
  }

}
