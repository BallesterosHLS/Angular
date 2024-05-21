import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoginComponent } from './login/login.component';
import { DatosComponentComponent } from './datos-component/datos-component.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path: "toDoList",
    component: ToDoListComponent
  },
  {
    path: "formulario",
    component: FormularioComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "datos",
    component: DatosComponentComponent
  },
  {
    path: "parent",
    component: ParentComponent
  },
  {
    path: "child",
    component: ChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
