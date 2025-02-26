import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  template: `<app-header></app-header>
              <main>
                <router-outlet></router-outlet>
              </main>
              <app-footer></app-footer>`,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular_project_BRINS';
}
