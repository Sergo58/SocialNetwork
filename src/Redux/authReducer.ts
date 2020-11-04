
export type authPageType= {
    userid: number|null,
    email: string|null,
    login: string|null
    isAuth:boolean
}





let initial:authPageType={
   userid:null,
    email:null,
    login:null,
    isAuth:false


}

export const authReducer=(state:authPageType=initial,action:ActionTypes)=>{
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                 isAuth:true
                }


        default:
            return state
    }




}

export const setUserDataAC=(id: number, email: string, login: string)=>{
    return {
        type:"SET-USER-DATA",
        data: {
            id, email, login
        }
    } as const
}
  type ActionTypes=setUserDataActionType
type setUserDataActionType=ReturnType<typeof setUserDataAC>