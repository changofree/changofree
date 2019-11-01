import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../interfaces/cliente';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {
  isLogin: boolean;
  clientObject: Cliente;
  listClients: Cliente[];
  constructor(private clientService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.isLogin = false;
  }

  ngOnInit() {
    localStorage.clear();
    this.clientObject = {};
    this.clientObject.hasta = "";
    this.listClients = [];
    this.clientService.clientsWithSnap()
      .snapshotChanges()
      .subscribe(data => {
        data.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.listClients.push(x);
        });
      });
  }

  ValidateForm() {
    this.listClients.forEach(element => {
      if (element.email === this.clientObject.email) {
        if (element.password === this.clientObject.password) {
          localStorage.setItem('cliente-chango', this.clientObject.email);
          let cname = localStorage.getItem("cliente-chango");
          document.cookie = "login=" + cname + ";path=/;domain=changofree.com;";
          location.href='http://'+element.marca+'.changofree.com';
        }
      }
    });
  }
}
