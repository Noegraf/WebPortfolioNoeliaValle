import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [CommonModule], // ✅ Importar CommonModule siempre
  templateUrl: './education.component.html',
  standalone: true, // ✅ Importante: standalone
  styleUrl: './education.component.css'
})
export class EducationComponent {

}


