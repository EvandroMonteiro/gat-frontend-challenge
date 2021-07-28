import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EvaluationComponent implements OnInit {
  events: any[];

  constructor() { }

  ngOnInit(): void {
    this.events = [
      {
        status: 'Enviado para parceiro',
        icon: PrimeIcons.SHOPPING_CART,
        color: '#9C27B0',
        image: 'game-controller.jpg'
      },
      {
        status: 'Respostas Recebidas',
        icon: PrimeIcons.COG,
        color: '#673AB7'
      },
      {
        status: 'Observações e Analises',
        icon: PrimeIcons.ENVELOPE,
        color: '#FF9800'
      },
      {
        status: 'Acordo com Parceiro',
        icon: PrimeIcons.CHECK,
        color: '#607D8B'
      },
      {
        status: 'Concluído',
        icon: PrimeIcons.CHECK,
        color: '#607D8B'
      }
    ];
  }
}
