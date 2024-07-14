import { CompletionStateEnum, HobbyEnum } from "../interfaces/IHobbies"



export function getHobbyTypeValue(hobby: HobbyEnum) {
  switch (hobby) {
    case HobbyEnum.Movies:
      return "Movie";
    case HobbyEnum.Anime:
      return "Anime"
    case HobbyEnum.Manga:
      return "Manga"
    case HobbyEnum.Games:
      return "Game"
    default: 
      return "Unknown"
  }
}

export function getCompletionStatusValue(status: CompletionStateEnum) {
  switch (status) {
    case CompletionStateEnum.Todo:
      return "Todo";
    case CompletionStateEnum.Doing:
      return "Doing";
    case CompletionStateEnum.OnHold:
      return "On Hold";
    case CompletionStateEnum.Dropped:
      return "Dropped";
    case CompletionStateEnum.Done:
      return "Done";
    default:
      return "Unknown";
  }
}