import { Component, OnInit } from "@angular/core";
import {
    FormBuilder,
    FormGroup,
    FormArray,
    Validators,
    FormControl
} from "@angular/forms";
import { UserService } from "../../shared/services/user.service";
import { Router } from "@angular/router";
import { AbstractControl } from "@angular/forms";
import { apiService } from "../../shared/services/index";
import { compareValidator } from "../../compare.directive";
import Swal from "sweetalert2";
declare var jquery: any;
declare var $: any;
@Component({
    selector: "app-account-update",
    templateUrl: "./account-update.component.html",
    styleUrls: ["./account-update.component.scss"]
})
export class AccountUpdateComponent implements OnInit {
    accountupdateForm: FormGroup;
    public data: any[];
    constructor(
        private _fb: FormBuilder,
        private _user: UserService,
        private _router: Router,
        private apiService: apiService
    ) {}
    private fieldArray: Array<any> = [];
    private newAttribute: any = {};
    private fieldArray_1: Array<any> = [];
    private newAttribute_1: any = {};
    addFieldValue_1() {
        this.fieldArray_1.push(this.newAttribute_1);
        this.newAttribute_1 = {};
    }
    deleteFieldValue_1(index) {
        this.fieldArray_1.splice(index, 1);
    }
    addFieldValue() {
        this.fieldArray.push(this.newAttribute);
        this.newAttribute = {};
    }
    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }
    ngOnInit() {
        this.getallusers();
        $(document).ready(function() {
            var acc = document.getElementsByClassName("accordion");
            var i;

            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                });
            }
        });
        this.accountupdateForm = this._fb.group({
            firstName: [null, [Validators.required, Validators.minLength(2)]],
            lastName: [null, [Validators.required, Validators.minLength(5)]],
            personal_information: this._fb.group({
                field_state: [null],
                gender: [null],
                field_year_of_birth: [null],
                field_zip_code: [null],
                field_household_income: [null],
                field_country: [null],
                field_job_experience: [null],
                field_job_industry: [null]
            }),
            userName: [null],
            email: [null],
            currentPassword: [null],
            passwd: [null],
            passwd2: [null],
            userId: [window.localStorage.getItem('userId')],
            artinfo_url: this._fb.group({
                field_artinfo_newsletter: [null],
                field_art_fair_reports: [null],
                field_offer_lbm: [null],
                field_offer_lbf: [null],
                field_offer_artinfo: [null],
                field_art_auction: [null],
                field_modern_painters: [null],
                field_gallery_guide: [null],
                field_alerts: [null]
            }),
            recent_comments: this._fb.group({
                files_picture_upload: [null],
                Contact: [null],
                language: [null],
                timezone: [null],
                block: [null],
                mimemail_textonly: [null],
                field_address: [null],
                field_city: [null],
                field_phone: [null],
                field_more_microsites: [null],
                field_terms_conditions: [null],
                field_user_company_profile: [null],
                group_audience: [null],
                field_profile_public: [null],
                field_position: [null]
            })
        });
    }

    setData(data) {
        this.accountupdateForm.patchValue({
            userName: data.userName,
            firstName: data.profile.firstName,
            lastName: data.profile.lastName,
            email: data.userName
            // currentPassword: data.currentPassword,
            // passwd: data.passwd,
            // passwd2: data.passwd2,
            // personal_information: {
            //     gender: data.personal_information.gender,
            //     field_state: data.personal_information.field_state,
            //     field_year_of_birth:
            //         data.personal_information.field_year_of_birth,
            //     field_zip_code: data.personal_information.field_zip_code,
            //     field_household_income:
            //         data.personal_information.field_household_income,
            //     field_country: data.personal_information.field_country,
            //     field_job_experience:
            //         data.personal_information.field_job_experience,
            //     field_job_industry: data.personal_information.field_job_industry
            // },
            // artinfo_url: {
            //     field_artinfo_newsletter:
            //         data.artinfo_url.field_artinfo_newsletter,
            //     field_art_fair_reports: data.artinfo_url.field_art_fair_reports,
            //     field_offer_lbm: data.artinfo_url.field_offer_lbm,
            //     field_offer_lbf: data.artinfo_url.field_offer_lbf,
            //     field_offer_artinfo: data.artinfo_url.field_offer_artinfo,
            //     field_art_auction: data.artinfo_url.field_art_auction,
            //     field_modern_painters: data.artinfo_url.field_modern_painters,
            //     field_gallery_guide: data.artinfo_url.field_gallery_guide,
            //     field_alerts: data.artinfo_url.field_alerts
            // },
            // recent_comments: {
            //     files_picture_upload: data.recent_comments.files_picture_upload,
            //     Contact: data.recent_comments.Contact,
            //     language: data.recent_comments.language,
            //     timezone: data.recent_comments.timezone,
            //     block: data.recent_comments.block,
            //     mimemail_textonly: data.recent_comments.mimemail_textonly,
            //     field_address: data.recent_comments.field_address,
            //     field_city: data.recent_comments.field_city,
            //     field_phone: data.recent_comments.field_phone,
            //     field_more_microsites:
            //         data.recent_comments.field_more_microsites,
            //     field_terms_conditions:
            //         data.recent_comments.field_terms_conditions,
            //     field_user_company_profile:
            //         data.recent_comments.field_user_company_profile,
            //     group_audience: data.recent_comments.group_audience,
            //     field_profile_public: data.recent_comments.field_profile_public,
            //     field_position: data.recent_comments.field_position
            // }
        });
    }
    get files_picture_upload() {
        const temp = <FormGroup>this.accountupdateForm.controls.recent_comments;
        return temp.controls.files_picture_upload;
    }
    get Contact() {
        const temp = <FormGroup>this.accountupdateForm.controls.recent_comments;
        return temp.controls.Contact;
    }
    get language() {
        const temp = <FormGroup>this.accountupdateForm.controls.recent_comments;
        return temp.controls.language;
    }
    get timezone() {
        const temp = <FormGroup>this.accountupdateForm.controls.recent_comments;
        return temp.controls.timezone;
    }
    get block() {
        const temp = <FormGroup>this.accountupdateForm.controls.recent_comments;
        return temp.controls.block;
    }
    get mimemail_textonly() {
        const temp = <FormGroup>this.accountupdateForm.controls.recent_comments;
        return temp.controls.mimemail_textonly;
    }
    get field_address() {
        const temp = <FormGroup>this.accountupdateForm.controls.recent_comments;
        return temp.controls.field_address;
    }
    get field_city() {
        const temp = <FormGroup>this.accountupdateForm.controls.recent_comments;
        return temp.controls.field_city;
    }
    get field_phone() {
        const temp = <FormGroup>this.accountupdateForm.controls.recent_comments;
        return temp.controls.field_phone;
    }
    get field_more_microsites() {
        const temp = <FormGroup>this.accountupdateForm.controls.recent_comments;
        return temp.controls.field_more_microsites;
    }
    get field_terms_conditions() {
        const temp = <FormGroup>this.accountupdateForm.controls.recent_comments;
        return temp.controls.field_terms_conditions;
    }
    get field_user_company_profile() {
        const temp = <FormGroup>this.accountupdateForm.controls.recent_comments;
        return temp.controls.field_user_company_profile;
    }
    get group_audience() {
        const temp = <FormGroup>this.accountupdateForm.controls.recent_comments;
        return temp.controls.group_audience;
    }
    get field_profile_public() {
        const temp = <FormGroup>this.accountupdateForm.controls.recent_comments;
        return temp.controls.field_profile_public;
    }
    get field_position() {
        const temp = <FormGroup>this.accountupdateForm.controls.recent_comments;
        return temp.controls.field_position;
    }

    get field_artinfo_newsletter() {
        const temp = <FormGroup>this.accountupdateForm.controls.artinfo_url;
        return temp.controls.field_artinfo_newsletter;
    }
    get field_art_fair_reports() {
        const temp = <FormGroup>this.accountupdateForm.controls.artinfo_url;
        return temp.controls.field_art_fair_reports;
    }
    get field_offer_lbm() {
        const temp = <FormGroup>this.accountupdateForm.controls.artinfo_url;
        return temp.controls.field_offer_lbm;
    }
    get field_offer_lbf() {
        const temp = <FormGroup>this.accountupdateForm.controls.artinfo_url;
        return temp.controls.field_offer_lbf;
    }
    get field_offer_artinfo() {
        const temp = <FormGroup>this.accountupdateForm.controls.artinfo_url;
        return temp.controls.field_offer_artinfo;
    }
    get field_art_auction() {
        const temp = <FormGroup>this.accountupdateForm.controls.artinfo_url;
        return temp.controls.field_art_auction;
    }
    get field_modern_painters() {
        const temp = <FormGroup>this.accountupdateForm.controls.artinfo_url;
        return temp.controls.field_modern_painters;
    }
    get field_gallery_guide() {
        const temp = <FormGroup>this.accountupdateForm.controls.artinfo_url;
        return temp.controls.field_gallery_guide;
    }
    get field_alerts() {
        const temp = <FormGroup>this.accountupdateForm.controls.artinfo_url;
        return temp.controls.field_alerts;
    }

    get field_state() {
        const temp = <FormGroup>(
            this.accountupdateForm.controls.personal_information
        );
        return temp.controls.field_state;
    }
    get gender() {
        const temp = <FormGroup>(
            this.accountupdateForm.controls.personal_information
        );
        return temp.controls.gender;
    }
    get field_year_of_birth() {
        const temp = <FormGroup>(
            this.accountupdateForm.controls.personal_information
        );
        return temp.controls.field_year_of_birth;
    }
    get field_zip_code() {
        const temp = <FormGroup>(
            this.accountupdateForm.controls.personal_information
        );
        return temp.controls.field_zip_code;
    }
    get field_household_income() {
        const temp = <FormGroup>(
            this.accountupdateForm.controls.personal_information
        );
        return temp.controls.field_household_income;
    }
    get field_country() {
        const temp = <FormGroup>(
            this.accountupdateForm.controls.personal_information
        );
        return temp.controls.field_country;
    }
    get field_job_experience() {
        const temp = <FormGroup>(
            this.accountupdateForm.controls.personal_information
        );
        return temp.controls.field_job_experience;
    }
    get field_job_industry() {
        const temp = <FormGroup>(
            this.accountupdateForm.controls.personal_information
        );
        return temp.controls.field_job_industry;
    }
    get firstName() {
        return this.accountupdateForm.get("firstName");
    }
    get userName() {
        return this.accountupdateForm.get("userName");
    }
    get currentPassword() {
        return this.accountupdateForm.get("currentPassword");
    }
    get lastName() {
        return this.accountupdateForm.get("lastName");
    }
    get email() {
        return this.accountupdateForm.get("email");
    }
    get passwd() {
        return this.accountupdateForm.get("passwd");
    }
    get passwd2() {
        return this.accountupdateForm.get("passwd2");
    }
    private getallusers() {
        this.apiService.getuserDetails().subscribe(data => {
            this.data = data;
            console.log(data);
            this.setData(data);
        });
    }

    myFiles: string[] = [];
    getFileDetails(e) {
        //console.log (e.target.files);
        for (var i = 0; i < e.target.files.length; i++) {
            this.myFiles.push(e.target.files[i]);
        }
    }
    submitHandler(dataobj) {
        const file_data = new FormData();
        const data = new FormData();
        const fileUploadObject: any = [];
        for (var i = 0; i < this.myFiles.length; i++) {
            file_data.append("user_photos", this.myFiles[i]);
        }
        this.apiService
            .accountUpdate(this.accountupdateForm.value)
            .subscribe(result => {
                Swal({
                    title: "Thank for active user",
                    text: "Click ok button going for dashboard page",
                    type: "success",
                    allowOutsideClick: false,
                    showCancelButton: false,
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "OK"
                }).then(result => {
                    if (result.value) {
                        this._router.navigate(["/layout/dashboard"]);
                    }
                });
            });
    }
}
