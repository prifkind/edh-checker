export class Card {
  constructor(
    public cardName: string,
    public cardType: string,
    public cardCost: number,
    public cardPrice: number,
    public boughtCard: boolean,
  ) {}

  goodPrice: boolean = this.cardPrice > 40 ? false : true;
}
