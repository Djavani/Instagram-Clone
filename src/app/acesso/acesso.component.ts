import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('animacao-banner', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
        style({ opacity: 0, transform: 'translate(-50px, 0'}),
        animate('500ms 0s ease-in-out') // duração , delay e aceleracao (easing)
      ])
    ]),
    trigger('animacao-painel', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
        style({ opacity: 0, transform: 'translate(50px, 0px'}),

        // 0 void -----X ------------------------X--X--X----------------------------X criado
        animate('1.5s 0s ease-in-out', keyframes([
          style({ offset: 0.15, opacity: 1, transform: 'translateX(0)'}),
          style({ offset: 0.86, opacity: 1, transform: 'translateX(0)'}),

          style({ offset: 0.88, opacity: 1, transform: 'translateY(-10px)'}),
          style({ offset: 0.90, opacity: 1, transform: 'translateY(10px)'}),
          style({ offset: 0.92, opacity: 1, transform: 'translateY(-10px)'}),
          style({ offset: 0.94, opacity: 1, transform: 'translateY(10px)'}),
          style({ offset: 0.96, opacity: 1, transform: 'translateY(-10px)'}),
          style({ offset: 0.98, opacity: 1, transform: 'translateY(10px)'}),

          style({ offset: 1, opacity: 1, transform: 'translateY(0)'})
        ]))
      ])
    ])
  ]
})
export class AcessoComponent implements OnInit {

  public estadoBanner: string = 'criado';
  public estadoPainel: string = 'criado';

  public cadastro: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  public exibirPainel(event: string): void {
    this.cadastro = event === 'cadastro' ? true : false;
  }

  public inicioDaAnimacao(): void {
   // console.log('inicio da animacao');
  }

  public fimDaAnimacao(): void {
    // console.log('fim da animacao');
  }

}
