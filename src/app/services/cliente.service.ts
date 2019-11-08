import { Injectable } from '@angular/core';

// FireBase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Cliente } from '../interfaces/cliente';
import { WebCliente } from '../interfaces/web-cliente';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private fireBase: AngularFireDatabase,
    private http: HttpClient
  ) { }

  listClient: AngularFireList<Cliente>;


  clientsWithSnap() {
    return this.listClient = this.fireBase.list('cliente');
  }

  sendEmail(titulo, mensaje, email) {
    return this.http.get("https://changofree.com/assets/php/send-mail.php?titulo=" + titulo + "&mensaje=" + mensaje + "&email=" + email);
  }

  getListClients() {

    let auxList: Cliente[];
    auxList = [];

    this.listClient = this.fireBase.list('cliente');

    this.listClient.snapshotChanges()
      .subscribe(item => {
        item.forEach(element => {
          let x = element.payload.toJSON();
          x['$key'] = element.key;
          auxList.push(x as Cliente);
        });
      });

    return auxList;
  }

  /**
   * 
   * @param clientObject 
   * 
   */
  insertClient(clientObject: Cliente) {
    this.fireBase.list('cliente').set(clientObject.marca, {
      name: clientObject.name,
      email: clientObject.email,
      password: clientObject.password,
      marca: clientObject.marca,
      creacion: clientObject.creacion,
      hasta: clientObject.hasta,
      online: true,
      fechaVerificacionAds: clientObject.fechaVerificacionAds,
      statusAds: clientObject.statusAds,
      fotoAds: clientObject.fotoAds,
      web: {
        carrito: null,
        anuncios: null,
        product: null,
        plataforma: "stand",
        whatsapp: "",
        instagram: "",
        facebook: "",
        view: 0
      }
    })
  }

  updateClient(clientObject: WebCliente, data: WebCliente, $key: string) {
    console.log(clientObject)
    this.listClient.update($key, {
      web: {
        whatsapp: clientObject.whatsapp,
        instagram: clientObject.instagram,
        facebook: clientObject.facebook,
        plataforma: data.plataforma,
        view: 0,
      }
    });
  }

  SearchRegistForEmail(email: string, json) {
    return of(json.find((client => client.email === email)));
  }

  generateSubdomain() {
    return this.http.get('https://changofree.com/assets/php/generate-domain.php');
  }
  generateFile() {
    return this.http.get('https://changofree.com/assets/php/copy_directory.php');
  }
  
}
