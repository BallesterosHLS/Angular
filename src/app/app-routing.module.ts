import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { combineLatest } from 'rxjs';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path: "ToDoList",
    component: ToDoListComponent
  },
  {
    path: "Formulario",
    component: FormularioComponent
  },
  {
    path: "Login",
    component: LoginComponent
  },
  {
    path: "Usuarios",
    component: UsuariosComponent
  },
  {
    path: "Child",
    component: ChildComponent
  },
  {
    path: "Parent",
    component: ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
