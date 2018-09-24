import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubidaImagenComponent } from './Components/subida-imagen/subida-imagen.component';
import { PeticionesService } from './Service/peticiones.service';

@NgModule({
  declarations: [
    AppComponent,
    SubidaImagenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PeticionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
