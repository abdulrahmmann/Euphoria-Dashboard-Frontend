import {Component, OnInit} from '@angular/core';
import {DashboardLayout} from '../../../core/layouts/dashboard-layout/dashboard-layout';
import {InputText} from 'primeng/inputtext';
import {ReactiveFormsModule} from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { FluidModule } from 'primeng/fluid';
import { RadioButton } from 'primeng/radiobutton';

@Component({
  selector: 'app-profile',
  imports: [
    DashboardLayout,
    InputText,
    ReactiveFormsModule,
    DatePickerModule,
    FormsModule,
    FluidModule,
    RadioButton,
  ],
  templateUrl: './profile.html',
})
export class Profile implements OnInit {
  gender!: string;
  ngOnInit(): void {
    console.log(this.gender)
  }
  date2: Date | undefined;



}
