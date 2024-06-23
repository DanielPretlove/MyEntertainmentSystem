export const initialState = {
  active: false
};

export function NavReducer(state: any, action: any) {
  switch (action.type) {
    case "toggle": {
      const toggle = state.active;
      return { ...state, active: !toggle };
    }
    default:
      throw new Error();
  }
}
