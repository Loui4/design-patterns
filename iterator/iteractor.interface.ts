export interface Iterator {
  current: () => string;
  next: () => void;
  hasNext: () => boolean;
}
