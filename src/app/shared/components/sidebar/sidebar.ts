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
        { name: 'Users', icon: '/icons/user.svg', route: '/users/list' },
        { name: 'Add User', icon: '/icons/add.svg', route: '/users/add-user' },
      ]
    },
    {
      title: 'e-commerce',
      items: [
        { name: 'Products', icon: '/icons/products.svg', route: '/ecommerce/products' },
        { name: 'Categories', icon: '/icons/category.svg', route: '/ecommerce/categories' },
        { name: 'brands', icon: '/icons/reviews.svg', route: '/ecommerce/brands' },
        { name: 'reviews', icon: '/icons/reviews.svg', route: '/ecommerce/reviews' },
        { name: 'product tags', icon: '/icons/reviews.svg', route: '/ecommerce/tags' },
        { name: 'product badges', icon: '/icons/reviews.svg', route: '/ecommerce/badges' },
        { name: 'wishlist', icon: '/icons/reviews.svg', route: '/ecommerce/wishlist' },
      ]
    },

  ];

}
