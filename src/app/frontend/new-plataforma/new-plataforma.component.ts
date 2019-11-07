import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/cliente';
import { WebCliente } from '../../interfaces/web-cliente';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-plataforma',
  templateUrl: './new-plataforma.component.html',
  styleUrls: ['./new-plataforma.component.css']
})
export class NewPlataformaComponent implements OnInit {

  redesSociales: WebCliente;
  listClients: Cliente[];
  clientObject: Cliente;
  isAccount: boolean;

  constructor(private clientService: ClienteService, private router: Router, private authService: AuthService
  ) {
    this.redesSociales = {};
    this.redesSociales.whatsapp = "No disponible"
    this.redesSociales.instagram = "No disponible";
    this.redesSociales.facebook = "No disponible";
    this.isAccount = false;

    this.clientObject = {}
  }

  ngOnInit() {

    let cname = localStorage.getItem("cliente-chango");
    document.cookie = "login=" + cname + ";path=/;domain=changofree.com;";

    this.listClients = this.clientService.getListClients();
  }

  SendInfo() {
    let cname = localStorage.getItem("cliente-chango");
    document.cookie = "login=" + cname + ";path=/;domain=changofree.com;";
    this.authService.SignUp(this.clientObject.email, this.clientObject.password);
    this.clientService.SearchRegistForEmail(localStorage.getItem("cliente-chango"), this.listClients)
      .subscribe(data => {
        this.clientService.updateClient(this.redesSociales, data.web, data.$key);
        location.href = "http://" + this.clientObject.marca + ".changofree.com";
      });

  }

  ValidateForm() {
    this.validacionHasta();

    let aux = true;
    let validacion = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    aux = validacion.test(this.clientObject.email) ? true : false;
    if (aux) {
      this.listClients.forEach(element => {
        if (this.clientObject.email === element.email) {
          alert("Este email esta registrado")
          aux = false;
        }
        if (this.clientObject.marca === element.marca) {
          aux = false;
        }
      });
    } else {
      alert("email invalido")
      // this.openSnackBar("Ingresaste un email invalido...", "ok");
    }

    if (aux) {
      if (this.clientObject.marca !== undefined && this.clientObject.name !== undefined && this.clientObject.password !== undefined) {
        this.isAccount = true;
        const f = new Date();

        this.clientObject.fechaVerificacionAds = (f.getDate() - 1) + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
        this.clientObject.fotoAds = '';
        this.clientObject.statusAds = 'new user';

        this.clientService.insertClient(this.clientObject);
        localStorage.setItem('cliente-chango', this.clientObject.email);
        this.clientService.sendEmail(
          'Gracias por registrarte - Equipo de ChangoFree',
          '<h1>Hola ' + this.clientObject.name +
          '</h1>, <br> <p>Muchas gracias por haberte registrado en nuestra plataforma. Te recordamos que estamos a tu disposición por cualquier consula o inconveniente. Saludos! </p> ',
          this.clientObject.email
        ).subscribe(data => {
          console.log(data);
        });
        setTimeout(() => {
          this.SendInfo();
        }, 1500);
      } else {

        // this.openSnackBar("Por favor revisá que el formulario haya sido completado correctamente.", 'Ok, Gracias!');
      }
    }

  }

  validacionHasta() {
    const f = new Date();
    const daysToFree = 15;
    const diasDeEsteMes = new Date(f.getFullYear(), f.getMonth(), 0).getDate();
    const diaActual = Number(f.getDate());

    if (diaActual + daysToFree < diasDeEsteMes) {
      this.clientObject.hasta = (diaActual + 15).toString() + "/" + (f.getMonth()) + "/" + (f.getFullYear());
    } else {
      const aux = (diaActual + 15) - diasDeEsteMes;
      this.clientObject.hasta = aux.toString() + "/" + (f.getMonth() + 1) + "/" + (f.getFullYear());
    }
    this.clientObject.creacion = (f.getDay()) + "/" + (f.getMonth()) + "/" + (f.getFullYear());
  }

}
