import { Component, OnInit } from '@angular/core';
import { Certificado } from 'src/app/models/certificados.model';
import { Service } from 'src/app/services/service';

@Component({
  selector: 'app-table-certificados',
  templateUrl: './table-certificados.component.html',
  styleUrls: ['./table-certificados.component.css']
})
export class TableCertificadosComponent implements OnInit{
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
