import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/Comentario';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent implements OnInit {

  listComentarios:Comentario[] = [
    {
    titulo: 'Angular', 
    creador: 'Jesús', 
    fechaCreacion: new Date(), 
    texto: 'Framework para crear SPA', 
    },
    {
      titulo: 'React', 
      creador: 'Altamirano', 
      fechaCreacion: new Date(), 
      texto: 'Libreria para crear SPA', 
    },
    {
      titulo: 'Vue', 
      creador: 'Carrillo', 
      fechaCreacion: new Date(), 
      texto: 'Framework progresivo para crear SPA', 
    },
    {
      titulo: 'Phyton', 
      creador: '5°B', 
      fechaCreacion: new Date(), 
      texto: 'Lenguaje de programación', 
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
