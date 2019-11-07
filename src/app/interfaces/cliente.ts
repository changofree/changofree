import { WebCliente } from "./web-cliente";

export interface Cliente {
    $key?: string;
    name?: string;
    email?: string;
    password?: string;
    creacion?: string;
    marca?: string;
    web?: WebCliente;
    hasta?: string;
    online?: boolean;
    rubro?: string;
    fechaVerificacionAds?: string;
    statusAds?: string;
    fotoAds?: string;
}
