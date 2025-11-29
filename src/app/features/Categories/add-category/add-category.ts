import { Component } from '@angular/core';
import {DashboardLayout} from '../../../core/layouts/dashboard-layout/dashboard-layout';
import {FileUpload} from 'primeng/fileupload';
import {Toast} from 'primeng/toast';
import {NgOptimizedImage} from '@angular/common';
import {InputText} from 'primeng/inputtext';
import {FloatLabel} from 'primeng/floatlabel';
import {Textarea} from 'primeng/textarea';

@Component({
  selector: 'app-add-category',
  imports: [
    DashboardLayout,
    FileUpload,
    Toast,
    NgOptimizedImage,
    InputText,
    FloatLabel,
    Textarea
  ],
  templateUrl: './add-category.html',
  styles: ``,
})
export class AddCategory {

}
