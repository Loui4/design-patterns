import { Iterator } from "./iteractor.interface";

export class Car {
  private _parts: string[];

  constructor(parts: string[]) {
    this._parts = parts;
  }

  public get parts() {
    return this._parts;
  }

  public createIterator(): Iterator {
    return new ListIterator(this);
  }
}

class ListIterator implements Iterator {
  private car: Car;
  private index: number;

  constructor(car: Car) {
    this.car = car;
    this.index = 0;
  }
  hasNext() {
    return this.index < this.car.parts.length;
  }

  current() {
    return this.car.parts[this.index];
  }

  next() {
    this.index++;
  }
}
