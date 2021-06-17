export class Extra {
  id: number;
  name: string;
  imgUrl: string;
  dailyPrice: number;

  constructor(id: number, name: string, imgUrl: string, dailyPrice: number) {
    this.id = id;
    this.name = name;
    this.imgUrl = imgUrl;
    this.dailyPrice = dailyPrice;
  }
}
