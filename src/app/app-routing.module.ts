import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComentariosComponent } from './components/list-comentarios/list-comentarios.component';
import { AgregarEditarComentarioComponent } from './components/agregar-editar-comentario/agregar-editar-comentario.component';
import { Error404Component } from './components/error404/error404.component';
import { VerComentarioComponent } from './components/ver-comentario/ver-comentario.component';

const routes: Routes = [
  {
    path: '',
    component:ListComentariosComponent
  },
  {
    path: 'agregar',
    component: AgregarEditarComentarioComponent
  },
  {
    path: 'editar/:id',
    component: AgregarEditarComentarioComponent
  },
  {
    path: 'ver/:id',
    component: VerComentarioComponent
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
