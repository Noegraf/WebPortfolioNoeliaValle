import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule], // ✅ Importar CommonModule siempre
  templateUrl: './about.component.html',
  standalone: true, // ✅ Importante: standalone
  styleUrl: './about.component.css'
})
export class AboutComponent {

}



