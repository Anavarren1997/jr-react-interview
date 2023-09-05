export interface CatJSON {
  fact: string;
  length: number;
}

export interface CatImgJSON {
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  validated: boolean;
  owner: null;
  file: string;
  mimetype: string;
  size: number;
  _id: string;
  url: string;
}
