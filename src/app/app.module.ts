import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProtocoloService } from './services/protocolo.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [ProtocoloService],

  declarations: [ ],

  bootstrap: [ AppComponent ]
})
export class AppModule {}