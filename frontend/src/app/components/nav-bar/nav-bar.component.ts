import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {

  public isCollapsed = false;

  setIscollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

}
