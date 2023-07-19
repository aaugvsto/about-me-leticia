import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sobre-mim',
  templateUrl: './sobre-mim.component.html',
  styleUrls: ['./sobre-mim.component.css']
})
export class SobreMimComponent {

  public readonly email = 'leticiabartolinig@gmail.com';

  constructor(private toastr: ToastrService) { }
  
  copiarEmail() {
    this.toastr.success('E-mail copiado com sucesso!')
  }

}
