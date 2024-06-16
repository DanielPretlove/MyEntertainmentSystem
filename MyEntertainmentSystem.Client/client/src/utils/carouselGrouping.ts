import { IHobbies } from "../interfaces/IHobbies";

export function groupIntoChunks(array: Array<IHobbies>, size: number) {
  const output: any = [];
  let currentChunk: any = [];

  array.forEach((item, index: number) => {
    currentChunk.push(item);
    if ((index + 1) % size === 0 || index === array.length - 1) {
      output.push(currentChunk);
      currentChunk = [];
    }
  });

  return output;
}