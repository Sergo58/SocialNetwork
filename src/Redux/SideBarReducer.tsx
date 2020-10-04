import {RootStateType, SideBarType} from "./Store";
let initial={
    names:[
        {id: 1, name: "Sergo"},
        {id: 2, name: "Pedro"},
        {id: 3, name: "Vito"},
        {id: 4, name: "Mikele"},
        {id: 5, name: "Fredo"},
        {id: 6, name: "Santino"}
    ]}
export const sideBarReducer=(state:SideBarType=initial,action:any)=>{
    return state
}