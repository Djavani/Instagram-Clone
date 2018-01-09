import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

import { Imagem } from './imagem.model';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
      state('escondido', style({
        opacity: 0
      })),
      state('visivel', style({
        opacity: 1
      })),
      transition('escondido <=> visivel', animate('1s ease-in'))
      //transition('visivel => escondido',  animate('2s ease-in')) // <=> indica que é vive-versa a direcao dsa animacao
    ])
  ]
})
export class BannerComponent implements OnInit {

  public estado: string = 'escondido';
  public imagens: Imagem[] = [
    {estado: 'visivel', url: '/assets/banner-acesso/img_1.png'},
    {estado: 'escondido', url: '/assets/banner-acesso/img_2.png'},
    {estado: 'escondido', url: '/assets/banner-acesso/img_3.png'},
    {estado: 'escondido', url: '/assets/banner-acesso/img_4.png'},
    {estado: 'escondido', url: '/assets/banner-acesso/img_5.png'},
    {estado: 'escondido', url: '/assets/banner-acesso/img_6.png'}
  ];

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.logicaRotacao(), 3000);
  }

  public logicaRotacao(): void {
    //console.log(this.imagens);

    // var para auxiliar na exibicao da imagem seguinte
    let idx: number;

    // ocultar imagem
    for (let i: number = 0; i <= 5; i++) {
      if (this.imagens[i].estado === 'visivel') {
        this.imagens[i].estado = 'escondido';
        idx = i === 5 ? 0 : i + 1;
        break;
      }
    }

    // exibir a próxima imagem
    this.imagens[idx].estado = 'visivel';

    setTimeout(() => this.logicaRotacao(), 2000);
  }

}
