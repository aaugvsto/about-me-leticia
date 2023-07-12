import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-certificado-card',
  templateUrl: './certificado-card.component.html'
})
export class CertificadoCardComponent {

  @Input() title?: string;
  @Input() description?: string;
  @Input() link?: string;
  

  constructor() {}

}
