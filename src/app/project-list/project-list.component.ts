import { Component } from '@angular/core';

import { projects } from '../projects';

import { PageCheckService } from "../page-check.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  projects = projects;

  constructor(public pageCheckService: PageCheckService) {
    this.pageCheckService.setPageTitle('Projects');
    this.pageCheckService.setPageBackground('projects.jpg')
  }

  goToUrl(link: string) {
    window.open(link, '_blank');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
