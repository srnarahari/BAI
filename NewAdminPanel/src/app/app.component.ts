import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'sweetalert2/src/sweetalert2.scss'
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private router: Router,private activatedRoute: ActivatedRoute) {
    }


    ngOnInit() {
    	
  }

    
}
