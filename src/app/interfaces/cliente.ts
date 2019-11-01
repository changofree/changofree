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
}
export class ClienteObject {
    $key?: string;
    name: string;
    email: string;
    password: string;
    marca: string;
    whatsapp?: string;
    instagram?: string;
    facebook?: string;
}