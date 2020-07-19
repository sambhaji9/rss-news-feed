export interface INews {
  status: string;
  feed: IFeed;
  items: Item[];
}

export interface Item {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: IEnclosure;
  categories: string[];
}

interface IEnclosure {
  thumbnail: string;
}

interface IFeed {
  url: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
}

export interface Ifeed {
  location: string;
  url: string;
}