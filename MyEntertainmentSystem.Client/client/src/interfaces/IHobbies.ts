export interface IHobbies {
  id: string;
  name: string;
  categories: string;
  description: ISummary[];
  imagePath: string;
  episodes: string;
  featured: boolean;
  hobbyType: HobbyEnum;
  completionState: CompletionStateEnum;
}

export interface ISummary {
  id: string;
  content: string;
}

export enum CompletionStateEnum {
  Todo = 0,
  Doing = 1,
  OnHold = 2,
  Dropped = 3,
  Done = 4
}

export enum HobbyEnum {
  Movies = 0,
  Anime = 1,
  Manga = 2,
  Games = 3
}