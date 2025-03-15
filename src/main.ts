// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { HomeComponent } from './app/pages/home/home.component';
import { ProjectsComponent } from './app/pages/projects/projects.component';
import { ExperienceComponent } from './app/pages/experience/experience.component';
import { AboutComponent } from './app/pages/about/about.component';
import { ContactComponent } from './app/pages/contact/contact.component';
import { EducationComponent } from './app/pages/education/education.component';
import { CommonModule } from '@angular/common';
 // Otros componentes que uses

bootstrapApplication(HomeComponent,  {
  providers: [
    provideRouter(routes),
    // Puedes añadir otros proveedores si los necesitas, como TranslateModule o HttpClientModule
  ],
}).catch((err) => console.error(err));
