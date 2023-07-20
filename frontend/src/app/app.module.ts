import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FramePageComponent } from './pages/frame-page/frame-page.component';
import { Service } from './services/service';
import { SobreMimComponent } from './pages/sobre-mim/sobre-mim.component';
import { CertificadosPageComponent } from './pages/certificados-page/certificados-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CertificadoCardComponent } from './components/certificado-card/certificado-card.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { ClipboardModule } from 'ngx-clipboard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TableCertificadosComponent } from './components/table-certificados/table-certificados.component';

@NgModule({
  declarations: [
    AppComponent,
    FramePageComponent,
    NavBarComponent,
    SobreMimComponent,
    CertificadosPageComponent,
    CertificadoCardComponent,
    LoadingComponent,
    FooterComponent,
    LoginPageComponent,
    DashboardComponent,
    TableCertificadosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ClipboardModule,
    ReactiveFormsModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
