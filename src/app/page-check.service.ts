import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';


@Injectable({
  providedIn: 'root'
})
export class PageCheckService {
public pageTitle = new Subject<any>();
public pageBackground = new Subject<any>();

  setPageTitle (value: string) {
    this.pageTitle.next(value);
  }

  setPageBackground (value: string) {
    this.pageBackground.next(value);
  }

  constructor() { }
}
