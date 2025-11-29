import { Component } from '@angular/core';
import {DashboardLayout} from '../../../core/layouts/dashboard-layout/dashboard-layout';
import {RouterLink} from '@angular/router';
import {DatePipe, UpperCasePipe} from '@angular/common';
import {PrimeTemplate} from 'primeng/api';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-category',
  imports: [
    DashboardLayout,
    RouterLink,
    DatePipe,
    PrimeTemplate,
    TableModule,
    UpperCasePipe
  ],
  templateUrl: './category.html',
  styles: ``,
})
export class Category {

}
