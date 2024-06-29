export const initialState = {
  toggle: false
};


type Toggle = {

}
export interface NavState {
  toggle: Toggle;
}

export type NavAction = {
  type: string;
}

export function NavReducer(state: NavState, action: NavAction) {
  switch (action.type) {
    case "toggle": {
      const toggle = state.toggle;
      return { ...state.toggle, toggle: !toggle };
    }
    default:
      throw new Error();
  }
}
