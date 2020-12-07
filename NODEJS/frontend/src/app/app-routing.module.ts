import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importación de modulos  creados

import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { CreateComponent } from './tarea/create/create.component';
import { ListComponent } from './tarea/list/list.component';

//Estableblecemos  la estructura de la navegacion de la APP
const routes: Routes = 
[
  {
    path:'',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path:'irLogin',
    component: LoginComponent,
  },
  {
    path:'irRegistro',
    component: RegisterComponent,
  },
  {
    path:'irTareaCreate',
    component: CreateComponent,
  },
  {
    path:'irTareaList',
    component: ListComponent,
  }

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
