export interface IHobbies {
  id: string;
  name: string;
  description: ISummary[];
  imagePath: string;
  episodes: string;
  featured: boolean;
  hobbyType: TypeEnum;
  completionState: CompletionStateEnum;
}

export interface ISummary {
  id: string;
  content: string;
}

enum CompletionStateEnum {
  Todo = "Todo",
  Doing = "Doing",
  OnHold = "OnHold",
  NotFinishing = "Not Finishing",
  Done = "Done"
}

enum TypeEnum {
  Movies = 0,
  Anime = 1,
  Manga = 2,
  Games = 3
}