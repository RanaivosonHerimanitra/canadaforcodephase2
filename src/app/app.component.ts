import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '(document:click)': 'closeDropdownItem($event)',
  }
})
export class AppComponent {
  @ViewChild('navdrop') navdrop: ElementRef;
  title = 'Code For Canada';
  constructor(private eref: ElementRef, private router: Router) {
    router.events.forEach((event: any) => {
      // tslint:disable-next-line: curly
      if (event instanceof NavigationStart) this.closeDropdownItem(event);
  });
  }

  openDropdownItem(): void {
    this.navdrop.nativeElement.classList.toggle('show');
  }

  closeDropdownItem(event: any): void {
    // tslint:disable-next-line: curly
    if (!this.eref.nativeElement.contains(event.target))  this.navdrop.nativeElement.classList = 'dropdown-menu dropdown-primary';
  }
}
