import { Component, OnInit,ElementRef } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from "@angular/http";
import { distinctUntilChanged, debounceTime, switchMap, tap, catchError } from 'rxjs/operators';
import { Subject, Observable, of, concat } from 'rxjs';
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
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
  selector: 'app-microsite',
  templateUrl: './microsite.component.html',
  styleUrls: ['./microsite.component.scss']
})
export class MicrositeComponent implements OnInit {

    constructor(private _apiService: apiService,
    private _fb: FormBuilder,
    private route:ActivatedRoute,
    private _router:Router,
    private http: Http,
    private spinner: NgxSpinnerService) {
   
  }

  ngOnInit() {
  }

}
