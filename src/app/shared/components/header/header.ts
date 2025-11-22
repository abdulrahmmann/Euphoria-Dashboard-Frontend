import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';


@Component({
  selector: 'app-header',
  imports: [
    DrawerModule,
  ],
  templateUrl: './header.html',
  styles: ``,
})
export class Header {
  visible: boolean = false;
}
