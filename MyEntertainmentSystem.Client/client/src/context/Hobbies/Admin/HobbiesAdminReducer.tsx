export const initialState = {
  dialog: false,
  view: false,
  edit: false,
  delete: false
}


export interface HobbiesAdminState {
  dialog: boolean;
  view: boolean;
  edit: boolean;
  delete: boolean
}

export type HobbiesAdminAction = {
  type: string;
} 

export function HobbiesAdminReducer(state: HobbiesAdminState, action: HobbiesAdminAction) {
  switch (action.type) {
    case "view": {
      const dialog = state.dialog;
      return {dialog: !dialog, view: true, edit: false, delete: false}
    }
    case "edit": {
      const dialog = state.dialog;
      return {dialog: !dialog, view: false, edit: true, delete: false}
    }
    case "delete": {
      const dialog = state.dialog;
      return {dialog: !dialog, view: false, edit: false, delete: true}
    }
    case "close": {
      return {dialog: false, view: false, edit: false, delete: false}
    }
    default:
      throw new Error();
  }
}