export const GetInitialState = (myKey: string) => {
  if(typeof window !== 'undefined'){
    return JSON.parse(window.localStorage.getItem(myKey) || "[]");
  }
}
