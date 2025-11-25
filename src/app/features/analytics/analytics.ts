import { Component } from '@angular/core';
import {DashboardLayout} from '../../core/layouts/dashboard-layout/dashboard-layout';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-analytics',
  imports: [
    DashboardLayout,
    RouterLink
  ],
  templateUrl: './analytics.html',
  styles: ``,
})
export class Analytics {

}
