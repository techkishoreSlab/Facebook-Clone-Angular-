import { Component,ElementRef, Renderer2  } from '@angular/core';

@Component({
  selector: 'app-fb-headerpage',
  templateUrl: './fb-headerpage.component.html',
  styleUrls: ['./fb-headerpage.component.css']
})
export class FbHeaderpageComponent {
  subMenu: ElementRef | null = null;
  isMenuOpen = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.subMenu = this.elementRef.nativeElement.querySelector('.sub-menu-wrap');
  }

  toggleMenu() {
    if (this.subMenu) {
      if (this.isMenuOpen) {
        this.renderer.removeClass(this.subMenu, 'open-menu');
      } else {
        this.renderer.addClass(this.subMenu, 'open-menu');
      }
      this.isMenuOpen = !this.isMenuOpen;
    }
  }

}
