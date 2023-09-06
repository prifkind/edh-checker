import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  public card!: Card;
  public cards: Card[] = [];
  public cardClasses = {};

  constructor() {}

  ngOnInit() {
    this.cards = [
      new Card('Force of Will', 'Instant', 5, 40, false),
      new Card('Force of Nature', 'Creature', 8, 20, false),
      new Card('Force of Negation', 'Instant', 3, 55, false),
    ];
  }

  getPriceClass(price: number): string {
    return price >= 50 ? 'expensive' : 'cheap';
  }

  buyCard(event: Event, index: number) {
    this.cards[index].boughtCard = !this.cards[index].boughtCard;
    console.log(this.cards[index].boughtCard, event);
  }
}
