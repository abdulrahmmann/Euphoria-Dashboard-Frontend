import { Component } from '@angular/core';
import {DashboardLayout} from '../../../core/layouts/dashboard-layout/dashboard-layout';
import {InputText} from 'primeng/inputtext';
import {ReactiveFormsModule} from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { FluidModule } from 'primeng/fluid';
import { RadioButton } from 'primeng/radiobutton';
import {FileUpload, FileUploadEvent} from 'primeng/fileupload';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {Password} from 'primeng/password';
import { FloatLabel } from 'primeng/floatlabel';
import {Textarea} from 'primeng/textarea';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-add-user',
  imports: [
    DashboardLayout,
    InputText,
    ReactiveFormsModule,
    DatePickerModule,
    FormsModule,
    FluidModule,
    RadioButton,
    FileUpload,
    CommonModule,
    ToastModule,
    Password,
    FloatLabel,
    Textarea,
  ],
  providers: [MessageService],
  templateUrl: './add-user.html',
})
export class AddUser {
  gender!: string;

  role!: string;

  date2: Date | undefined;

  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

  onUpload(event: FileUploadEvent) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }
    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  onSelect(event: any) {
    this.uploadedFiles = event.files;
    console.log(this.uploadedFiles);
  }
}
