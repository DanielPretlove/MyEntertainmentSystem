import { createContext, Dispatch, useReducer } from "react";
import { initialState, NavAction, NavReducer } from "./NavReducer";


export interface INavState {
  state: boolean;
  dispatch: Dispatch<NavAction>
  toggleNav: () => void;
}

export const NavContext = createContext<INavState>({
  state: false,
  dispatch: () => { },
  toggleNav: () => void 0
});

export const NavContextProvider = ({children}: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(NavReducer, initialState);
  
  const toggleNav = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <NavContext.Provider value={{state: state.toggle, dispatch: dispatch, toggleNav: toggleNav}}>{children}</NavContext.Provider>
  )
}