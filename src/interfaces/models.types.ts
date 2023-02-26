export interface IBaseModel {
  id: string;
  name: string;
  descr: string;
  cover: string;
  level: string;
  genre: string;
}

export interface IFilmModel extends IBaseModel {
  year: string;
  country: string;
  director: string;
  duration: string;
  trailer: string;
  pictures: string[];
  watch: {
    ivi: string;
    netflix: string;
  };
}

export interface IBookModel extends IBaseModel {
  year: string;
  author: string;
  pages: string;
  samples: string[];
  read: {
    download?: string;
    labirint?: string;
  };
}

export interface IAudioBookModel extends IBaseModel {
  year: string;
  author: string;
  duration: string;
  listen: {
    download?: string;
  };
}
