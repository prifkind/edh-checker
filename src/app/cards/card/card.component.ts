import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  public card!: Card;
  public cardClasses = {};

  constructor() {}

  ngOnInit() {
    this.card = new Card('Force of Will', 'Instant', 5, 40, false);
    this.cardClasses = {
      "col-sm-4 cheap" : this.card.cardPrice < 50 ? true : false,
      "col-sm-4 expensive" : this.card.cardPrice >= 50 ? true : false,
    }
  }

  buyCard(event: Event) {
    this.card.boughtCard = !this.card.boughtCard;
    console.log(this.card.boughtCard, event);
  }
}
