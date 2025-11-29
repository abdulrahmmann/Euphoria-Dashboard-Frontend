import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {UserActions} from '../user-actions/user-actions';


@Component({
  selector: 'app-header',
  imports: [
    DrawerModule,
    NgIf,
    NgForOf,
    NgClass,
    UserActions,
    NgOptimizedImage,
  ],
  templateUrl: './header.html',
  styles: ``,
})
export class Header {
  visible: boolean = false;

  breadcrumbs: Array<{ label: string, url: string }> = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.buildBreadcrumbs(this.route.root);
      });
  }

  buildBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Array<{ label: string; url: string }> = []
  ): Array<{ label: string; url: string }> {

    const children = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL = child.snapshot.url.map(seg => seg.path).join('/');

      if (routeURL) {
        url += `/${routeURL}`;
      }

      const label = child.snapshot.data['breadcrumb'];

      if (label) {
        breadcrumbs.push({
          label: label,
          url: url
        });
      }

      return this.buildBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }

  isDropdownActive: boolean = false;

  setDropdownClick(): void {
    this.isDropdownActive = !this.isDropdownActive;
  }

  toggleFullscreen() {
    const elem = document.documentElement;
    if (!document.fullscreenElement) {
      elem.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }

}
