import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../shared/services/user.service";
import {apiService} from "../../shared/services";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgxSpinnerService} from "ngx-spinner";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-slide-show',
  templateUrl: './get-slide-show.component.html',
  styleUrls: ['./get-slide-show.component.scss']
})
export class GetSlideShowComponent implements OnInit {

    users: any;
    public data:any = [];
    public filterQuery = "";
    public rowsOnPage = 5;
    public sortBy = "userName";
    public sortOrder = "-1";
    selectedYear = null;
    selectedPublished = null;
    selectedMonth = null;
    selectedCategory = null;
    private user_activate: FormGroup;
    Published_all = [
        {value:null,name:'Not Published'},
        {value:true,name:'Published'}
      ]
      Month_all = [];
      Years_all = [];
      Categories_all = [];
      page:number = 1;

    constructor(private _router: Router, private userService: UserService, private apiService: apiService, private modalService: NgbModal, private _formBuilder: FormBuilder, private spinner: NgxSpinnerService) {
    }

    ngOnInit() {
        this.getAllSlideShows();
        this.Years_all = this.apiService.getYears(new Date().getFullYear());
        this.Month_all = this.apiService.getMonths();
        this.Categories_all = this.apiService.getCategories();
        this.user_activate = this._formBuilder.group({
            active: ['', [Validators.required]],
            userRole: ['', [Validators.required]],
            userId: [''],
            filter: [''],
            articles: ['']
        });

    }


// Get data from service
    private getAllSlideShows() {
        let ObjData={
            'year':this.selectedYear,
            'month':this.selectedMonth,
            'category':this.selectedCategory,
            'published':this.selectedPublished,
            'page' : this.page,
            'sort':this.sortOrder
           }
        this.apiService.getSlideShow(ObjData)
            .subscribe((data: any) => {
                this.data = data;
                console.log(data);
            });
    }

    //Get Roles Lit



    deleteItem(item) {
        Swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            //closeOnConfirm: false,
            //closeOnCancel: false
        }).then((result) => {
            if (result.value) {
                Swal(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                );
                this.apiService.deleteSlideShow(item._id).subscribe(response => {
                    this.getAllSlideShows();
                })
            }


        })

    }

    onEdit(item) {
        this._router.navigateByUrl(`/layout/slide-show/${item._id}`)
    }

}
