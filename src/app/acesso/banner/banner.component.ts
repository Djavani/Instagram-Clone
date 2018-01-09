import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';


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
      //transition('visivel => escondido', animate('2s ease-in')) // <=> indica que é vive-versa a direcao dsa animacao
    ])
  ]
})
export class BannerComponent implements OnInit {

  public estado: string = 'escondido';

  constructor() { }

  ngOnInit() {
  }

  public toggleEstado(): void {
    this.estado = this.estado === 'visivel' ? 'escondido' : 'visivel';
  }

}
