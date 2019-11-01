import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Angular material

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormFieldModule,
} from '@angular/material';


// FireBase Configuration

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';


//Assets

import { AppComponent } from './app.component';
import { NavbarComponent } from './frotend/navbar/navbar.component';
import { PlataformasComponent } from './frontend/plataformas/plataformas.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ClienteService } from './services/cliente.service';
import { UsuarioService } from './services/usuario.service';
import { NewPlataformaComponent } from './frontend/new-plataforma/new-plataforma.component';
import { BackendStandardComponent } from './backend/backend-standard/backend-standard.component';
import { ValidateComponent } from './frontend/validate/validate.component';
import { InicioComponent } from './backend/inicio/inicio.component';
import { LoginComponent } from './backend/login/login.component';
import { SidenavComponent } from './backend/sidenav/sidenav.component';
import { ClientesComponent } from './clientes/clientes.component';
import { NotificacionesComponent } from './backend/notificaciones/notificaciones.component';
import { VentasComponent } from './backend/ventas/ventas.component';
import { SoporteComponent } from './backend/soporte/soporte.component';
import { MensajesComponent } from './backend/soporte/mensajes/mensajes.component';
import { UsuarioOnlineComponent } from './frontend/usuario-online/usuario-online.component';
import { TerminosComponent } from './terminos/terminos.component';
import { PruebaComponent } from './prueba/prueba.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanesComponent } from './planes/planes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlataformasComponent,
    FooterComponent,
    NewPlataformaComponent,
    BackendStandardComponent,
    ValidateComponent,
    InicioComponent,
    LoginComponent,
    SidenavComponent,
    ClientesComponent,
    NotificacionesComponent,
    VentasComponent,
    SoporteComponent,
    MensajesComponent,
    UsuarioOnlineComponent,
    TerminosComponent,
    PruebaComponent,
    PlanesComponent
  ],
  imports: [
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatFormFieldModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [ClienteService, UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
