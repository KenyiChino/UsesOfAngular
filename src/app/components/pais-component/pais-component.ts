import { Component , inject, signal} from '@angular/core';
import { PaisesService } from '../../services/paises-service';
import {Pais} from '../../models/pais-interface';


@Component({
  selector: 'app-pais-component',
  imports: [],
  standalone: true,
  templateUrl: './pais-component.html',
  styleUrl: './pais-component.css',
})
export class PaisComponent {
  private paisesService = inject(PaisesService)
  paises = signal<Pais[]> ([]);
  cargando = signal<boolean> (true);
  error = signal<string | null>(null);
  constructor(){
    this.cargarPaises();
  }
  cargarPaises(): void{
    this.paisesService.obtenerPaises().subscribe({
      next: (data)=>{
        this.paises.set(data);
        this.cargando.set(false);
      },
      error: (err)=>{
        console.error('Error al cargar el pais',err);
        this.error.set('Error al cargar el Pais');
      }
    })
  }

}
