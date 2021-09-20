import { Car } from "./car";

const car = new Car(["ball joint", "head lump", "oil filter"]);
const iterator = car.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.current());
  iterator.next();
}
