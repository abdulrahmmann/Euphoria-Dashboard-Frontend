import { Component } from '@angular/core';
import {Sidebar} from '../../../shared/components/sidebar/sidebar';
import {NgClass} from '@angular/common';
import {Header} from '../../../shared/components/header/header';

@Component({
  selector: 'app-dashboard-layout',
  imports: [
    Sidebar,
    NgClass,
    Header
  ],
  templateUrl: './dashboard-layout.html',
})
export class DashboardLayout {
  isSidebarPinned: boolean = false;

  handleSidebarPin(isPinned: boolean) {
    this.isSidebarPinned = isPinned;
  }
}
