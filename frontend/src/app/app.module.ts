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

@NgModule({
  declarations: [
    AppComponent,
    FramePageComponent,
    NavBarComponent,
    SobreMimComponent,
    CertificadosPageComponent,
    CertificadoCardComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
