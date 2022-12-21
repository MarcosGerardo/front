import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbaroneComponent } from './navbarone/navbarone.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { NavbartwoComponent } from './navbartwo/navbartwo.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonWsComponent } from './button-ws/button-ws.component';
import { IndexComponent } from './index/index.component';
import { ProductosComponent } from './productos/productos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactosComponent } from './contactos/contactos.component';
import { NosotroscontenidoComponent } from './nosotroscontenido/nosotroscontenido.component';
import { HeaderimagenComponent } from './headerimagen/headerimagen.component';
import { BodycontactoComponent } from './bodycontacto/bodycontacto.component';
import { ContenidosproductosComponent } from './contenidosproductos/contenidosproductos.component';
import { BttnWSComponent } from './bttn-ws/bttn-ws.component';
import { NosotrosBodyComponent } from './nosotros-body/nosotros-body.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { BackComponent } from './back/back.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import {ShowproductComponent}from './components/showproduct/showproduct.component'
import { ReactiveFormsModule } from '@angular/forms';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { AlifeFileToBase64Directive } from 'alife-file-to-base64/lib/alife-file-to-base64.directive';




@NgModule({
  declarations: [
    AppComponent,
    NavbaroneComponent,
    CarouselComponent,
    CardComponent,
    NavbartwoComponent,
    FooterComponent,
    ButtonWsComponent,
    IndexComponent,
    ProductosComponent,
    NosotrosComponent,
    ContactosComponent,
    NosotroscontenidoComponent,
    HeaderimagenComponent,
    BodycontactoComponent,
    ContenidosproductosComponent,
    BttnWSComponent,
    NosotrosBodyComponent,
    LoginComponent,
    BackComponent,
    NewProductComponent,
    ShowproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     ReactiveFormsModule ,
     HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
