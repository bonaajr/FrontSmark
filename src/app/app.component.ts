import { Component } from '@angular/core';
import { AppModule } from './app.module';
import { FormsModule } from '@angular/forms';
import { ProtocoloService } from './services/protocolo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  standalone: true,
  imports: [AppModule, FormsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  identificadorEmpresa: string = '';
  title = 'FrontSmark';

  constructor(
    private protocoloService: ProtocoloService,
    private snackBar: MatSnackBar) 
    { }

  criarProtocolo() {
    let payload: any = {identificadorEmpresa: this.identificadorEmpresa};
    
    this.protocoloService.gerarProtocolo(payload).subscribe(res => {
      this.snackBar.open(`Protocolo criado com sucesso. Número do protocolo: ${res.resultado}`, 'X', {
        duration: 5000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: ['sucesso'],
      });
    }, err => {
      this.snackBar.open(`Ocorreu um erro ao tentar gerar o protocolo! ID: ${err.error.traceId}`, 'X', {
        duration: 5000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: ['erro'],
      });  
    });
    this.identificadorEmpresa = '';
  }
}
