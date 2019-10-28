import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../../shared/services/user.service';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    isActive: boolean = false;
    collapsed: boolean = false;
    pushRightClass: string = 'push-right';
    showArticle: boolean = true;
    showArtists: boolean = true;
    showArtwork: boolean = true;
    showEvents: boolean = true;
    showVenue: boolean = true;
    showSlideShow: boolean = true;
    showSite: boolean = true;
    showTravels: boolean = true;
    showRltAndLtr: boolean = true;
    showMicroSite: boolean = true;
    @Output() collapsedEvent = new EventEmitter<boolean>();
    
    constructor(private translate: TranslateService, public router: Router, private userService:UserService) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
       
    }
      ngOnInit() {

     if(this.userService.roleMatch(['admin']))
      {
      console.log('hello');
      }
      if(this.userService.roleMatch(['Editor']))
      {
      this.showArtists = false;
      }
      if(this.userService.roleMatch(['Guest_Editor']))
      {
      
        this.showArticle = true;
        this.showArtists = false;
        this.showArtwork = false;
        this.showEvents = false;
        this.showVenue = false;
        this.showSlideShow = false;
        this.showSite = false;
        this.showTravels = false;
        this.showRltAndLtr = false;
        this.showMicroSite = false;
      }
      if(this.userService.roleMatch(['Gallery_Guide_Client']))
      {
        this.showArticle = false;
        this.showArtists = false;
        this.showArtwork = false;
        this.showEvents = false;
        this.showVenue = false;
        this.showSlideShow = false;
        this.showSite = false;
        this.showTravels = false;
        this.showRltAndLtr = false;
        this.showMicroSite = true;
      }
    }


    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }
    

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    onLoggedout() {
        localStorage.removeItem('token');
    }
}
