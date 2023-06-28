import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { AzulejosComponent } from './componentes/azulejos/azulejos.component';
import { VajillasComponent } from './componentes/vajillas/vajillas.component';
import { JarronesComponent } from './componentes/jarrones/jarrones.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { LogadmComponent } from './componentes/logadm/logadm.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ProductosComponent,
    AzulejosComponent,
    VajillasComponent,
    JarronesComponent
    RegistroComponent,
    AdminComponent,
    LogadmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
