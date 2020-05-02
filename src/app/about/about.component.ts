import { Component, OnInit } from '@angular/core';
import {PageCheckService} from "../page-check.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public pageCheckService: PageCheckService) {
    this.pageCheckService.setPageTitle('About Me');
    this.pageCheckService.setPageBackground('about2.jpg')
  }

  ngOnInit(): void {
  }

}
