import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../../pipes/safe.pipe'; // Ajustá la ruta si es necesario

@Component({
  selector: 'app-projects',
  standalone: true, // ✅ Indica que este componente no usa módulos
  imports: [CommonModule, SafePipe], // ✅ Agregamos los imports aquí
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @ViewChild('slider') slider!: ElementRef;

  projects = [
    {
      title: 'Wallet Ethereum Argentina',
      image: 'assets/images/proyecto1.webp',
      description: 'Wallet para Hackathon Ethereum Argentina 2024.',
      figma: 'https://www.figma.com/embed?embed_host=angular&url=https://www.figma.com/proto/xxxx'
    },
    {
      title: 'PICH DESK',
      image: 'assets/images/proyecto2.webp',
      description: 'Admin Panel para gestión de contratos.',
      figma: 'https://www.figma.com/embed?embed_host=angular&url=https://www.figma.com/proto/yyyy'
    }
  ];

  selectedProject: any = null;

  scrollLeft() {
    this.slider.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.slider.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  openModal(project: any) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null;
  }

  
}

