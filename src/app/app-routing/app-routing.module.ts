import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { PlataformasComponent } from '../frontend/plataformas/plataformas.component';
import { NewPlataformaComponent } from '../frontend/new-plataforma/new-plataforma.component';
import { BackendStandardComponent } from '../backend/backend-standard/backend-standard.component';
import { ValidateComponent } from '../frontend/validate/validate.component';
import { LoginComponent } from '../backend/login/login.component';
import { SidenavComponent } from '../backend/sidenav/sidenav.component';
import { InicioComponent } from '../backend/inicio/inicio.component';
import { ClientesComponent } from '../clientes/clientes.component';
import { NotificacionesComponent } from '../backend/notificaciones/notificaciones.component';
import { VentasComponent } from '../backend/ventas/ventas.component';
import { SoporteComponent } from '../backend/soporte/soporte.component';
import { MensajesComponent } from '../backend/soporte/mensajes/mensajes.component';
import { UsuarioOnlineComponent } from '../frontend/usuario-online/usuario-online.component';
import { TerminosComponent } from '../terminos/terminos.component';
import { PruebaComponent } from '../prueba/prueba.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: PlataformasComponent  },
  { path: 'crear-tienda', component: NewPlataformaComponent},
  { path: 'cliente-backend',component: BackendStandardComponent},
  { path: 'login', component: ValidateComponent},
  { path: 'backend/login', component: LoginComponent},
  { path: 'terminos', component: TerminosComponent},
  { path: 'piria', component: PruebaComponent},
  { path: 'backend', component: SidenavComponent,
  children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full'},
      { path: 'inicio', component: InicioComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'notificaciones', component: NotificacionesComponent },
      { path: 'ventas', component: VentasComponent },     
      { path: 'soporte', component: SoporteComponent },
      { path: 'soporte/mensajes/:key', component: MensajesComponent },      
  ]},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
],
  declarations: []
})

export class AppRoutingModule {}