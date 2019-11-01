import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/cliente';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plataformas',
  templateUrl: './plataformas.component.html',
  styleUrls: ['./plataformas.component.css']
})
export class PlataformasComponent implements OnInit {

  clientObject: Cliente;
  listClients: Cliente[];

  isLogin: boolean;

  constructor(private clientService: ClienteService,
    public snackBar: MatSnackBar,
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



  openSnackBar(Message: string, Action: string) {
    this.snackBar.open(Message, Action, {
      duration: 7200,
    });
  }
}
