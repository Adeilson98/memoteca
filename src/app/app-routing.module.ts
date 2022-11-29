import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { CreateThoughtsComponent } from './components/thoughts/create-thoughts/create-thoughts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
import { EditThoughtComponent } from './components/thoughts/edit-thought/edit-thought.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mural',
    pathMatch: 'full' // whem full is set all url is read
  },
  {
    path: 'novo-pensamento',
    component: CreateThoughtsComponent
  },
  {
    path: 'mural',
    component: ListThoughtsComponent
  },
  {
    path: 'pensamentos/excluir/:id',
    component: DeleteThoughtComponent
  },
  {
    path: 'pensamentos/editar/:id',
    component: EditThoughtComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
