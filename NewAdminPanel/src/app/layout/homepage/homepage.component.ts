import { Component, OnInit,ElementRef} from '@angular/core';
import { Http} from "@angular/http";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { apiService} from '../../shared/services/index';
import { Router,ActivatedRoute  } from "@angular/router";
import { FormBuilder} from '@angular/forms';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public constructor(private _apiService: apiService,private spinner:NgxSpinnerService, private router: Router, private el: ElementRef, private _fb: FormBuilder,private route:ActivatedRoute, private http: Http) {}

  ngOnInit() {
  }
  submitForm(data) {
    this.spinner.show();
    this._apiService.allHomepagerecords(data)
              .subscribe((result:any) => {
                this._apiService.getHomepageVisualarts(data)
                .subscribe(result => {
                 
                  this._apiService.getHomepageSlideshowdata(data)
                  .subscribe(result => {
                    this.spinner.hide();
                    // most popular artist data
                    this._apiService.postMostpoupularArtists(data)
                    .subscribe(result => {
                  Swal({
                    title: 'Thank you',
                    allowOutsideClick: false,
                    text: "For create home page data",
                    type: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                 }).then((result) => {
                 if (result.value) {
                     this.router.navigate(["/layout/dashboard"]);
                 }
                })
              })
              })
                })
              })
  }
}
