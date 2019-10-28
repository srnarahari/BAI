import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../shared/services/user.service";
import {apiService} from "../../shared/services";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgxSpinnerService} from "ngx-spinner";
import Swal from 'sweetalert2';

@Component({
    selector: 'app-get-artist',
    templateUrl: './get-artist.component.html',
    styleUrls: ['./get-artist.component.scss']
})
export class GetArtistComponent implements OnInit {
    users: any;
    user_activate: FormGroup;
    public data:any = [];
    public filterQuery = "";
    public rowsOnPage = 5;
    public sortBy = "userName";
    public sortOrder = "1";
    selectedNationality = null;
    selectedCountry = null;
    selectedSpeciality = null;
    Speciality_All = [];
    page:number = 1;
    allCountry = [{ value:"AF",name:"Afghanistan"},
    { value:"AL",name:"Albania"},
    { value:"DZ",name:"Algeria"},
    { value:"AS",name:"American Samoa"},
    { value:"AD",name:"Andorra"},
    { value:"AO",name:"Angola"},
    { value:"AI",name:"Anguilla"},
    { value:"AQ",name:"Antarctica"},
    { value:"AG",name:"Antigua and Barbuda"},
    { value:"AR",name:"Argentina"},
    { value:"AM",name:"Armenia"},
    { value:"AW",name:"Aruba"},
    { value:"AU",name:"Australia"},
    { value:"AT",name:"Austria"},
    { value:"AZ",name:"Azerbaijan"},
    { value:"BS",name:"Bahamas"},
    { value:"BH",name:"Bahrain"},
    { value:"BD",name:"Bangladesh"},
    { value:"BB",name:"Barbados"},
    { value:"BY",name:"Belarus"},
    { value:"BE",name:"Belgium"},
    { value:"BZ",name:"Belize"},
    { value:"BJ",name:"Benin"},
    { value:"BM",name:"Bermuda"},
    { value:"BT",name:"Bhutan"},
    { value:"BO",name:"Bolivia"},
    { value:"BA",name:"Bosnia and Herzegovina"},
    { value:"BW",name:"Botswana"},
    { value:"BV",name:"Bouvet Island"},
    { value:"BR",name:"Brazil"},
    { value:"IO",name:"British Indian Ocean Territory"},
    { value:"BN",name:"Brunei Darussalam"},
    { value:"BG",name:"Bulgaria"},
    { value:"BF",name:"Burkina Faso"},
    { value:"BI",name:"Burundi"},
    { value:"KH",name:"Cambodia"},
    { value:"CM",name:"Cameroon"},
    { value:"CA",name:"Canada"},
    { value:"CV",name:"Cape Verde"},
    { value:"KY",name:"Cayman Islands"},
    { value:"CF",name:"Central African Republic"},
    { value:"TD",name:"Chad"},
    { value:"CL",name:"Chile"},
    { value:"CN",name:"China"},
    { value:"CX",name:"Christmas Island"},
    { value:"CC",name:"Cocos (Keeling) Islands"},
    { value:"CO",name:"Colombia"},
    { value:"KM",name:"Comoros"},
    { value:"CG",name:"Congo, Republic of"},
    { value:"CD",name:"Congo, the Democratic Republic of the"},
    { value:"CK",name:"Cook Islands"},
    { value:"CR",name:"Costa Rica"},
    { value:"HR",name:"Croatia"},
    { value:"CU",name:"Cuba"},
    { value:"CY",name:"Cyprus"},
    { value:"CZ",name:"Czech Republic"},
    { value:"CI",name:"Côte D'Ivoire"},
    { value:"DK",name:"Denmark"},
    { value:"DJ",name:"Djibouti"},
    { value:"DM",name:"Dominica"},
    { value:"DO",name:"Dominican Republic"},
    { value:"EC",name:"Ecuador"},
    { value:"EG",name:"Egypt"},
    { value:"SV",name:"El Salvador"},
    { value:"GQ",name:"Equatorial Guinea"},
    { value:"ER",name:"Eritrea"},
    { value:"EE",name:"Estonia"},
    { value:"ET",name:"Ethiopia"},
    { value:"FO",name:"Faeroe Islands"},
    { value:"FK",name:"Falkland Islands"},
    { value:"FJ",name:"Fiji"},
    { value:"FI",name:"Finland"},
    { value:"FR",name:"France"},
    { value:"GF",name:"French Guiana"},
    { value:"PF",name:"French Polynesia"},
    { value:"TF",name:"French Southern Territories"},
    { value:"GA",name:"Gabon"},
    { value:"GM",name:"Gambia, the"},
    { value:"GE",name:"Georgia"},
    { value:"DE",name:"Germany"},
    { value:"GH",name:"Ghana"},
    { value:"GI",name:"Gibraltar"},
    { value:"GR",name:"Greece"},
    { value:"GL",name:"Greenland"},
    { value:"GD",name:"Grenada"},
    { value:"GP",name:"Guadeloupe"},
    { value:"GU",name:"Guam"},
    { value:"GT",name:"Guatemala"},
    { value:"GG",name:"Guernsey"},
    { value:"GN",name:"Guinea"},
    { value:"GW",name:"Guinea-Bissau"},
    { value:"GY",name:"Guyana"},
    { value:"HT",name:"Haiti"},
    { value:"HM",name:"Heard Island and Mcdonald Islands"},
    { value:"HN",name:"Honduras"},
    { value:"HK",name:"Hong Kong"},
    { value:"HU",name:"Hungary"},
    { value:"IS",name:"Iceland"},
    { value:"IN",name:"India"},
    { value:"ID",name:"Indonesia"},
    { value:"IR",name:"Iran"},
    { value:"IQ",name:"Iraq"},
    { value:"IE",name:"Ireland"},
    { value:"IM",name:"Isle of Man"},
    { value:"IL",name:"Israel"},
    { value:"IT",name:"Italy"},
    { value:"JM",name:"Jamaica"},
    { value:"JP",name:"Japan"},
    { value:"JE",name:"Jersey"},
    { value:"JO",name:"Jordan"},
    { value:"KZ",name:"Kazakhstan"},
    { value:"KE",name:"Kenya"},
    { value:"KI",name:"Kiribati"},
    { value:"KO",name:"Korea"},
    { value:"KW",name:"Kuwait"},
    { value:"KG",name:"Kyrgyzstan"},
    { value:"LA",name:"Lao People's Democratic Republic"},
    { value:"LV",name:"Latvia"},
    { value:"LB",name:"Lebanon"},
    { value:"LS",name:"Lesotho"},
    { value:"LR",name:"Liberia"},
    { value:"LY",name:"Libya"},
    { value:"LI",name:"Liechtenstein"},
    { value:"LT",name:"Lithuania"},
    { value:"LU",name:"Luxembourg"},
    { value:"MO",name:"Macao"},
    { value:"MK",name:"Macedonia"},
    { value:"MG",name:"Madagascar"},
    { value:"MW",name:"Malawi"},
    { value:"MY",name:"Malaysia"},
    { value:"MV",name:"Maldives"},
    { value:"ML",name:"Mali"},
    { value:"MT",name:"Malta"},
    { value:"MH",name:"Marshall Islands"},
    { value:"MQ",name:"Martinique"},
    { value:"MR",name:"Mauritania"},
    { value:"MU",name:"Mauritius"},
    { value:"YT",name:"Mayotte"},
    { value:"MX",name:"Mexico"},
    { value:"FM",name:"Micronesia"},
    { value:"MD",name:"Moldova"},
    { value:"MC",name:"Monaco"},
    { value:"MN",name:"Mongolia"},
    { value:"ME",name:"Montenegro"},
    { value:"MS",name:"Montserrat"},
    { value:"MA",name:"Morocco"},
    { value:"MZ",name:"Mozambique"},
    { value:"MM",name:"Myanmar"},
    { value:"NA",name:"Namibia"},
    { value:"NR",name:"Nauru"},
    { value:"NP",name:"Nepal"},
    { value:"NL",name:"Netherlands"},
    { value:"AN",name:"Netherlands Antilles"},
    { value:"NC",name:"New Caledonia"},
    { value:"NZ",name:"New Zealand"},
    { value:"NI",name:"Nicaragua"},
    { value:"NE",name:"Niger"},
    { value:"NG",name:"Nigeria"},
    { value:"NU",name:"Niue"},
    { value:"NF",name:"Norfolk Island"},
    { value:"KP",name:"North Korea"},
    { value:"MP",name:"Northern Mariana Islands"},
    { value:"NO",name:"Norway"},
    { value:"OM",name:"Oman"},
    { value:"PK",name:"Pakistan"},
    { value:"PW",name:"Palau"},
    { value:"PS",name:"Palestinian Territories"},
    { value:"PA",name:"Panama"},
    { value:"PG",name:"Papua New Guinea"},
    { value:"PY",name:"Paraguay"},
    { value:"PE",name:"Peru"},
    { value:"PH",name:"Philippines"},
    { value:"PN",name:"Pitcairn"},
    { value:"PL",name:"Poland"},
    { value:"PT",name:"Portugal"},
    { value:"PR",name:"Puerto Rico"},
    { value:"QA",name:"Qatar"},
    { value:"RO",name:"Romania"},
    { value:"RU",name:"Russian Federation"},
    { value:"RW",name:"Rwanda"},
    { value:"RE",name:"Réunion"},
    { value:"SH",name:"Saint Helena"},
    { value:"KN",name:"Saint Kitts and Nevis"},
    { value:"LC",name:"Saint Lucia"},
    { value:"PM",name:"Saint Pierre and Miquelon"},
    { value:"VC",name:"Saint Vincent and the Grenadines"},
    { value:"WS",name:"Samoa"},
    { value:"SM",name:"San Marino"},
    { value:"ST",name:"Sao Tome and Principe"},
    { value:"SA",name:"Saudi Arabia"},
    { value:"SN",name:"Senegal"},
    { value:"RS",name:"Serbia"},
    { value:"SC",name:"Seychelles"},
    { value:"SL",name:"Sierra Leone"},
    { value:"SG",name:"Singapore"},
    { value:"SK",name:"Slovakia"},
    { value:"SI",name:"Slovenia"},
    { value:"SB",name:"Solomon Islands"},
    { value:"SO",name:"Somalia"},
    { value:"ZA",name:"South Africa"},
    { value:"GS",name:"South Georgia and the South Sandwich Islands"},
    { value:"KR",name:"South Korea"},
    { value:"ES",name:"Spain"},
    { value:"LK",name:"Sri Lanka"},
    { value:"SD",name:"Sudan"},
    { value:"SR",name:"Suriname"},
    { value:"SJ",name:"Svalbard and Jan Mayen"},
    { value:"SZ",name:"Swaziland"},
    { value:"SE",name:"Sweden"},
    { value:"CH",name:"Switzerland"},
    { value:"SY",name:"Syrian Arab Republic"},
    { value:"TW",name:"Taiwan"},
    { value:"TJ",name:"Tajikistan"},
    { value:"TZ",name:"Tanzania"},
    { value:"TH",name:"Thailand"},
    { value:"TL",name:"Timor-Leste"},
    { value:"TG",name:"Togo"},
    { value:"TK",name:"Tokelau"},
    { value:"TO",name:"Tonga"},
    { value:"TT",name:"Trinidad and Tobago"},
    { value:"TN",name:"Tunisia"},
    { value:"TR",name:"Turkey"},
    { value:"TM",name:"Turkmenistan"},
    { value:"TC",name:"Turks and Caicos Islands"},
    { value:"TV",name:"Tuvalu"},
    { value:"UG",name:"Uganda"},
    { value:"UA",name:"Ukraine"},
    { value:"AE",name:"United Arab Emirates"},
    { value:"UK",name:"United Kingdom"},
    { value:"US",name:"United States"},
    { value:"UM",name:"United States Minor Outlying Islands"},
    { value:"UY",name:"Uruguay"},
    { value:"UZ",name:"Uzbekistan"},
    { value:"VU",name:"Vanuatu"},
    { value:"VA",name:"Vatican City"},
    { value:"VE",name:"Venezuela"},
    { value:"VN",name:"Viet Nam"},
    { value:"VG",name:"Virgin Islands, British"},
    { value:"VI",name:"Virgin Islands, U.S."},
    { value:"WF",name:"Wallis and Futuna"},
    { value:"EH",name:"Western Sahara"},
    { value:"YE",name:"Yemen"},
    { value:"ZM",name:"Zambia"},
    { value:"ZW",name:"Zimbabwe"},
    { value:"AX",name:"Åland Islands"},]

    constructor(private _router: Router, private userService: UserService, private apiService: apiService, private modalService: NgbModal, private _formBuilder: FormBuilder, private spinner: NgxSpinnerService) {
    }

    ngOnInit() {
        this.getAllArtist();
        this.Speciality_All = this.apiService.getSpecialityData();
        this.user_activate = this._formBuilder.group({
            active: ['', [Validators.required]],
            userRole: ['', [Validators.required]],
            userId: [''],
            filter: [''],
            articles: ['']
        });
        this.sortOrder = "-1"

    }


// Get data from service
    private getAllArtist() {
        let objData={
            'Country':this.selectedCountry,
         'speciality':this.selectedSpeciality,
         'nationality':this.selectedNationality,
         'page':this.page,
            'sort':this.sortOrder
        }
        this.apiService.getArtists(objData)
            .subscribe((data: any) => {
                this.data = data;
                console.log(data);
            });
    }

    //Get Roles Lit

    public toInt(num: string) {
        return +num;
    }


    addAritcle(data) {
        console.log(this.user_activate.get('articles').value);
    }

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
                this.apiService.deleteArtist(item._id).subscribe(response => {
                    this.getAllArtist();
                })
            }


        })

    }

    onEdit(item) {
        this._router.navigateByUrl(`/layout/artist/${item._id}`)
    }


}
