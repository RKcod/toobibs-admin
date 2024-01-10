import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/users', title: 'Utilisateurs',  icon:'person', class: '' },
    { path: '/centers', title: 'Centres',  icon:'business', class: '' },
    { path: '/specialities', title: 'Spécialités',  icon:'business', class: '' },
    { path: '/rdv-annule', title: 'RDV annulés',  icon:'business', class: '' },
    // { path: '/sms', title: 'SMS Personalisé',  icon:'business', class: '' },
    { path: '/settings', title: 'Paramètres',  icon:'content_paste', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(public router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

    logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("token_data");
        localStorage.removeItem("user");
        this.router.navigate(["/login"]);
    }
}
