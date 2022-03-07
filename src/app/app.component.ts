import { Component } from '@angular/core';
import { ClientelaravelService } from './service/clientelaravel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor (public servc:ClientelaravelService)
  {
    this.servc.getWards().subscribe(r=>{
      console.warn(r);
      console.table(r[0]);
    })
  }
}