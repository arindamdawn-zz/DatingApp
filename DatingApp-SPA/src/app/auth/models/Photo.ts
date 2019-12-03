export interface Photo {
  id: number;
  url: string;
  description: string;
  created: Date;
  isMain?: boolean;
}
