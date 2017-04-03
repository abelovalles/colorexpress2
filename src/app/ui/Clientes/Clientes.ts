/**
 * Created by AbelRicardo on 2/23/2017.
 */
import { Component } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clientes',
  templateUrl: 'Clientes.html',
  styleUrls: ['Clientes.css'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})

export class ClientesComponent {
  slides: Array<Object>;
  constructor(config: NgbCarouselConfig) {

    // customize default values of carousels used by this component tree
    config.interval = 0;
    config.wrap = true;
    config.keyboard = true;
    this.slides = [
      {'url' : '/src/app/images/clientes/sanpablocolor.png'},
      {'url' : '/src/app/images/clientes/plusexpress.png'},
      {'url' : '/src/app/images/clientes/zoombalive.png'},
      {'url' : '/src/app/images/clientes/naturalia.png'},
      {'url' : '/src/app/images/clientes/maximaseguros.png'},
      {'url' : '/src/app/images/clientes/gastrolab.png'},
      {'url' : '/src/app/images/clientes/ciajema.png'},
      {'url' : '/src/app/images/clientes/allcargo.png'}

    ];
  }
}
