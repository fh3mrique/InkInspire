import { Artist } from "./artist";
import { Style } from "./style";

export type Tattoo = {
  id: number;
  name: string;
  description: string;
  style: Style;
  price: number;
  artUrl: string;
  artist: Artist;
};
