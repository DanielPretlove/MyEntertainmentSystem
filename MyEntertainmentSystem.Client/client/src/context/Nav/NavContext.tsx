import { createContext, Dispatch, useContext, useReducer } from "react";
import { initialState, NavAction, NavReducer } from "./NavReducer";


export interface INavState {
  state: boolean;
  dispatch: Dispatch<NavAction>
}

export const NavContext = createContext<INavState>({
  state: false,
  dispatch: () => { },
});

export const NavContextProvider = ({children}: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(NavReducer, initialState);

  return (
    <NavContext.Provider value={{state: state.toggle, dispatch: dispatch}}>{children}</NavContext.Provider>
  )
}

export function useNavContext() {
  const nav = useContext(NavContext);
  return nav;
}