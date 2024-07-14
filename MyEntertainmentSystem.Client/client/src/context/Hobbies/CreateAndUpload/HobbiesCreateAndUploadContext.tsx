// const [selectedFile, setSelectedFile] = useState<File | null>(null);
// const [filePath, setFilePath] = useState<string | null>(null);

import { createContext, SetStateAction, useContext, useState } from "react";
import { CompletionStateEnum, HobbyEnum, IHobbies } from "../../../interfaces/IHobbies";
import { v4 as uuid } from 'uuid';

export interface IHobbiesState {
  data: IHobbies;
  dispatch: React.Dispatch<SetStateAction<IHobbies>>;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDescriptionChange: (index: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  addDescription: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  AddNewHobby: (hobby: IHobbies) => Promise<IHobbies>;
}

export const HobbiesCreateAndUpdateAPIContext = createContext<
  IHobbiesState | undefined
>(undefined);

export function HobbiesCreateAndUploadContextProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [data, dispatch] = useState<IHobbies>({
    name: '',
    categories: '',
    description: [{content: ''}],
    imagePath: '',
    episodes: '',
    featured: false,
    hobbyType: HobbyEnum.Anime,
    completionState: CompletionStateEnum.Doing
  } as IHobbies);



  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = event.target;

    if (type === 'checkbox') {
      dispatch((prevState) => ({ ...prevState, [name]: (event.target as HTMLInputElement).checked}));
    } else {
      dispatch((prevState) => ({ ...prevState, [name]: value, hobbyType: HobbyEnum.Anime, completionState: CompletionStateEnum.Doing}));
    }
  }


  const handleDescriptionChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = event.target;
    const newDescriptions = [...data.description];
    newDescriptions[index] = { ...newDescriptions[index], content: value };
    dispatch((prevState) => ({...prevState, description: newDescriptions}))
  };

  const addDescription = () => {
    dispatch((prevState: IHobbies) => ({
      ...prevState,
      description: [...prevState.description, {id: uuid(), content: ''}],
    }));
  };


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      dispatch((prevState) => ({ ...prevState, id: uuid(), imagePath: file.name}));
    }
  };

  async function AddNewHobby(hobby: IHobbies): Promise<IHobbies> {
    const response = await fetch("https://localhost:5000/Hobbies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(data);
    return response.json();
  }

  return (
    <HobbiesCreateAndUpdateAPIContext.Provider
      value={{
        data,
        dispatch,
        handleFileChange,
        handleDescriptionChange,
        addDescription,
        handleChange,
        AddNewHobby,
      }}
    >
      {children}
    </HobbiesCreateAndUpdateAPIContext.Provider>
  );
}

export function useHobbiesCreateContext() {
  const context = useContext(HobbiesCreateAndUpdateAPIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
