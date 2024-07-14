export const initialState = {
  dialog: false,
  create: false,
  view: false,
  edit: false,
  delete: false
}


export interface HobbiesAdminState {
  dialog: boolean;
  create: boolean;
  view: boolean;
  edit: boolean;
  delete: boolean
}

export type HobbiesAdminAction = {
  type: string;
} 

export function HobbiesAdminReducer(state: HobbiesAdminState, action: HobbiesAdminAction) {
  switch (action.type) {
    case "create": {
      const dialog = state.dialog;
      return {dialog: !dialog, create: true, view: false, edit: false, delete: false}
    }
    case "view": {
      const dialog = state.dialog;
      return {dialog: !dialog, create: false, view: true, edit: false, delete: false}
    }
    case "edit": {
      const dialog = state.dialog;
      return {dialog: !dialog, create: false, view: false, edit: true, delete: false}
    }
    case "delete": {
      const dialog = state.dialog;
      return {dialog: !dialog, create: false, view: false, edit: false, delete: true}
    }
    case "close": {
      return {dialog: false, create: false, view: false, edit: false, delete: false}
    }
    default:
      throw new Error();
  }
}