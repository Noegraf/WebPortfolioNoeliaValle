import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule], // ✅ Importar CommonModule siempre
  templateUrl: './contact.component.html',
  standalone: true, // ✅ Importante: standalone
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}


