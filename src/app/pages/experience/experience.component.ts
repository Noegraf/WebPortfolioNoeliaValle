import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule], // ✅ Importar CommonModule siempre
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  standalone: true, // ✅ Importante: standalone
})
export class ExperienceComponent {

}


