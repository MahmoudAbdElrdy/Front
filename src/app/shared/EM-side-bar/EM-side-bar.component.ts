import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ROUTES } from './EMMenuItems';


@Component({
  selector: 'app-EM-side-bar',
  templateUrl: './EM-side-bar.component.html',
  styleUrls: ['./EM-side-bar.component.css']
})
export class EMSideBarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  public isCollapsed = true;
  public sidebarnavItems: any[];
  // this is for the open close
  addExpandClass(element: any) {
      if (element === this.showMenu) {
          this.showMenu = '0';
      } else {
          this.showMenu = element;
      }

  }
  addActiveClass(element: any) {
      if (element === this.showSubMenu) {
          this.showSubMenu = '0';
      } else {
          this.showSubMenu = element;
      }
      window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
      });
  }

  constructor(
      private modalService: NgbModal,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  // End open close
  ngOnInit() {
      this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);
  }
}
