import { Component } from '@angular/core';
import {PageCheckService} from "../page-check.service";


@Component({
  selector: 'app-product-details',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(public pageCheckService: PageCheckService) {
    this.pageCheckService.setPageTitle('Welcome!');
    this.pageCheckService.setPageBackground('matrix.jpg')
  }

}
