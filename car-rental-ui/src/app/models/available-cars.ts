export class AvailableCars {
  id: number;
  title: string;
  type: string;
  gearSystem: string;
  img_url: string;
  dailyPrice: number;


  constructor(id: number, title: string,
            type: string, gearSystem: string,
            img_url: string, dailyPrice: number) {
    this.id = id;
    this.title = title;
    this.type = type;
    this.gearSystem = gearSystem;
    this.img_url = img_url;
    this.dailyPrice = dailyPrice;
  }
}
