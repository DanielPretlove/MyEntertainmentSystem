import { createContext, Dispatch, useContext, useReducer } from "react";
import { HobbiesAdminAction, HobbiesAdminReducer, initialState } from "./HobbiesAdminReducer";




export interface IHobbiesAdminState {
  dialog: boolean,
  create: boolean,
  view: boolean,
  edit: boolean,
  delete: boolean,
  dispatch: Dispatch<HobbiesAdminAction>
}

export const HobbiesAdminContext = createContext<IHobbiesAdminState>({
  dialog: false,
  create: false,
  view: false,
  edit: false,
  delete: false,
  dispatch: () => { },
});


export const HobbiesAdminContextProvider = ({children}: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(HobbiesAdminReducer, initialState);

  return (
    <HobbiesAdminContext.Provider value={
      {
        dialog: state.dialog,
        create: state.create,
        view: state.view,
        edit: state.edit,
        delete: state.delete,
        dispatch: dispatch
      }}>
      {children}
    </HobbiesAdminContext.Provider>
  )
}

export function useHobbiesAdminContext() {
  const context = useContext(HobbiesAdminContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}