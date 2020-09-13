import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutosComponent } from './autos/autos.component';
import { MarcasComponent } from './marcas/marcas.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    canActivate: [AuthGuard],
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  { canActivate: [AuthGuard], path: 'autos', component: AutosComponent },
  { canActivate: [AuthGuard], path: 'marcas', component: MarcasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
