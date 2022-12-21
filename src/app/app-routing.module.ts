import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { LoginComponent } from './login/login.component';
import {BackComponent} from './back/back.component';


const routes: Routes = [
  { path: "Nosotros", component: NosotrosComponent},
  { path: "productos", component: ProductosComponent},
  { path: "contactos", component: ContactosComponent},
  { path: "AppComponent", component: AppComponent},
  { path: "carousel", component: CarouselComponent},
  { path: "index", component: IndexComponent},
  { path: "contactos", component: ContactosComponent},
  { path: "login", component: LoginComponent},
  { path: "**", component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
