export const GetInitialState = (myKey: string) => {
  if(typeof window !== 'undefined'){
    return JSON.parse(window.localStorage.getItem(myKey) || "[]");
  }
}

export default class ChangeAdvancedSearchesState {
  readonly ToggleValueInArray = (state: string[], payload: string): string[] => {
    if(!state.includes(payload)){
      return [...state, payload];
    }
    return state.filter(type => type !== payload);
  }
}
