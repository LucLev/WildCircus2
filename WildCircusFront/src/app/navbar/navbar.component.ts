import { Component, OnInit, Inject } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: [ './navbar.component.css' ]
})
export class NavbarComponent implements OnInit {

	scrollToElement($element){
		console.log($element);
		$element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
    
	constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {}

	ngOnInit() {
        this.pageScrollService.scroll({
            document: this.document,
            scrollTarget: '.theEnd',
          });
    }
}
