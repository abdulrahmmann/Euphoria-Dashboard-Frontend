import {Component, EventEmitter, Output} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {ScrollPanel} from 'primeng/scrollpanel';
import {NgClass, NgForOf} from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    ScrollPanel,
    NgClass,
    NgForOf,
    RouterLinkActive,
    RouterModule,
  ],
  templateUrl: './sidebar.html',
})
export class Sidebar {
  isHovered: boolean = false;
  isPinned: boolean = false;

  @Output() pinnedChange = new EventEmitter<boolean>();

  togglePin(): void {
    this.isPinned = !this.isPinned;
    this.pinnedChange.emit(this.isPinned);
  }

  get sidebarExpanded(): boolean {
    return this.isPinned || this.isHovered;
  }

  sidebarSections = [
    {
      title: 'dashboards',
      items: [
        { name: 'Dashboard', icon: '/icons/dashboard.svg', route: '/dashboard/analytics' },
      ]
    },
    {
      title: 'authentication',
      items: [
        { name: 'login', icon: '/icons/login.svg', route: '/auth/login' },
        { name: 'register', icon: '/icons/register.svg', route: '/auth/register' },
      ]
    },
    {
      title: 'user managements',
      items: [
        { name: 'Users', icon: '/icons/user.svg', route: '/users' },
        { name: 'Add User', icon: '/icons/add.svg', route: '/users/add-new-user' },
      ]
    },
    {
      title: 'e-commerce',
      items: [
        { name: 'Products', icon: '/icons/products.svg', route: '/products' },
        { name: 'Add Product', icon: '/icons/add-product.svg', route: '/products/add-product' },
        { name: 'Categories', icon: '/icons/category.svg', route: '/categories' },
        { name: 'reviews', icon: '/icons/reviews.svg', route: '/reviews' },
        { name: 'product tags', icon: '/icons/reviews.svg', route: '/tags' },
        { name: 'product badger', icon: '/icons/reviews.svg', route: '/badges' },
        { name: 'wishlist', icon: '/icons/reviews.svg', route: '/wishlist' },
      ]
    },

  ];

}
