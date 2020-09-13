import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { MarcasComponent } from './marcas/marcas.component';
import { AutosComponent } from './autos/autos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { MarcaComponent } from './marcas/marca/marca.component';
import { MarcaListComponent } from './marcas/marca-list/marca-list.component';
import { MarcaService } from './shared/marca.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AutoComponent } from './autos/auto/auto.component';
import { AutoListComponent } from './autos/auto-list/auto-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    MarcasComponent,
    AutosComponent,
    MarcaComponent,
    MarcaListComponent,
    AutoComponent,
    AutoListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
  ],

  providers: [AuthService, MarcaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
