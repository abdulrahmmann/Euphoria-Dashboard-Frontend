import { Component } from '@angular/core';
import {DashboardLayout} from '../../../core/layouts/dashboard-layout/dashboard-layout';
import { StepperModule } from 'primeng/stepper';

@Component({
  selector: 'app-add-user',
  imports: [
    DashboardLayout,
    StepperModule,
  ],
  templateUrl: './add-user.html',
  styles: ``,
})
export class AddUser {

}
