import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  navLinks = [
    { path: "/", label: "About" },
    { path: '/pricing', label: 'Pricing' },
    // { path: '/services', label: 'Services' }
  ];
  
  get isOddIndexPage(): boolean {
    const index = this.navLinks.findIndex(link => link.path === this.router.url);
    return index % 2 == 1;
  }

  
  isSpecialPage: boolean = false; // Digunakan untuk mengubah warna teks

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isSpecialPage = this.router.url === "/pricing" || this.router.url === "/services";
      }
    });
  }
}
