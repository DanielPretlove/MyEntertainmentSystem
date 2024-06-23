import { createContext, useContext, useReducer, useState } from "react";
import { initialState, NavReducer } from "./NavReducer";


export interface ActiveStateType {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  toggleActive: () => void;
}

export const ActiveModeContext = createContext<ActiveStateType>({
  active: false,
  setActive: () => { },
  toggleActive: () => void 0
});

export const NavContextProvider = ({children}: React.PropsWithChildren<{}>) => {
  const [active, dispatch] = useReducer(NavReducer, initialState);
  
  const toggleActive = () => {
    console.log(active);
    dispatch({type: "toggle"});
  };

  return (
    <ActiveModeContext.Provider value={{active: active, setActive: dispatch, toggleActive: toggleActive}}>{children}</ActiveModeContext.Provider>
  )
}
