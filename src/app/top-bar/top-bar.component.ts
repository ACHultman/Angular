import {Component, OnInit, OnDestroy, Host} from '@angular/core';
import { ViewChild, ElementRef } from "@angular/core";

import { PageCheckService } from "../page-check.service";
import { Subscription } from "rxjs";

import { HostListener } from "@angular/core";


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit, OnDestroy {
  background: string;
  pageTitle: string;
  subscription: Subscription;

  @ViewChild('target')
  target: ElementRef;

  @HostListener('window:scroll', ['$event'])
  onElementScroll($event){
    console.log("element scrolling");
    //const verticalOffset = window.pageYOffset;
    //const scrollRemaining = 71 - verticalOffset;
    //window.scrollBy(0, 10);
  }

  scroll(): void {
      //this.target.nativeElement.scrollIntoView({behavior: 'smooth'});
      console.log('Scroll activated');
      window.scrollTo({
          top: 700,
          behavior: 'smooth'
      });

  }

  constructor(public pageCheckService: PageCheckService) { }

  ngOnInit() {
    this.subscription = this.pageCheckService.pageTitle.subscribe(
        (pageTitle) => {
          this.pageTitle = pageTitle;
        }
    );
      this.subscription = this.pageCheckService.pageBackground.subscribe(
          (pageBackground) => {
              this.background = pageBackground;
          }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
