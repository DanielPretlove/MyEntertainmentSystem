import { createContext, SetStateAction, useContext, useEffect, useState } from "react";
import { IHobbies } from "../../../interfaces/IHobbies";

// const HobbiesAPIContext = createContext();


export interface IHobbiesState {
  data: IHobbies[];
  dispatch: React.Dispatch<SetStateAction<IHobbies[]>>
}

export const HobbiesAPIContext = createContext<IHobbiesState>({
  data: [],
  dispatch: () => { },
});


export function HobbiesListContextProvider({children}: React.PropsWithChildren<{}>) {
  const [data, dispatch] = useState<IHobbies[]>([]);
  
  async function fetchHobbiesList() {
    const respoonse = await fetch("https://localhost:5000/Hobbies/list");
    const data = await respoonse.json();
    dispatch(data);
  }


  useEffect(() => {
    fetchHobbiesList();
  }, []);

  return (
    <HobbiesAPIContext.Provider value={{data, dispatch}}>
      {children}
    </HobbiesAPIContext.Provider>
  )
}

export function useHobbiesListAPI() {
  const context = useContext(HobbiesAPIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}