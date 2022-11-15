import { Ingredient } from './ingredient';

export class Pizza {
  public name: string;
  public img: string;
  public desc: string;
  public ingredients: Ingredient[];

  constructor(name: string, img: string, desc: string) {
    this.name = name;
    this.img = img;
    this.desc = desc;
  }
}
