import { Certificado } from './../../models/certificados.model';
import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/service';

@Component({
  selector: 'app-certificados-page',
  templateUrl: './certificados-page.component.html'
})
export class CertificadosPageComponent implements OnInit {

  public certificados: Certificado[] = [];
  public loading?: boolean;

  constructor(private service: Service) { }

  ngOnInit() {
    this.loading = true
    this.getCertificados();
    this.loading = false
  }

  getCertificados(): void {
    let certificados = this.service.getCertificados();
    certificados.subscribe((data: any) => this.certificados = data)
  }

}
