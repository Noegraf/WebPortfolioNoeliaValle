import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  template: `
  <a routerLink="/">Home</a>
  <a routerLink="/user">User</a>
`,
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink], // ✅ Importante: RouterOutlet
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-portafolio';
  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
}
