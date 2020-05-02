import { Component, OnInit } from '@angular/core';
import {PageCheckService} from "../page-check.service";


@Component({
  selector: 'app-cart',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contactForm;

  constructor(
    public pageCheckService: PageCheckService
  ) {
    this.pageCheckService.setPageTitle('Contact');
    this.pageCheckService.setPageBackground('contact.jpg')
   }

  ngOnInit() {
  }

}
