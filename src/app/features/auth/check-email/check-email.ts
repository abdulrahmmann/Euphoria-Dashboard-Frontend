import { Component } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-check-email',
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './check-email.html',
  styles: ``,
})
export class CheckEmail {

}
