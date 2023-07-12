import { Certificado } from './../models/certificados.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Service {
    readonly apiBaseUrl: string;

    constructor(private http: HttpClient) {
        this.apiBaseUrl = 'https://backendnodejs-az6r.onrender.com/';
    }

    getCertificados() {
        return this.http.get<Certificado[]>(`${this.apiBaseUrl}certificado`)
    }   
    
    
}