import {ActionTypes, PostDataType, ProfilePageType, RootStateType,} from "./Store";
export type UsersPageType= {
    users:Array<UsersType>
}


export type UsersType={
     id:number,
    photoUrl:string
    followed:boolean,
        fullName:string,
        status:string,
        location:{
            city:string
            country:string
        }

    }


let initial:UsersPageType={
    users:  [


    ]}

export const usersReducer=(state:UsersPageType=initial,action:ActionTypes)=>{
    switch (action.type) {
        case "FOLLOW":
         return {
              ...state,
          users:state.users.map(u=>{
              if(u.id===action.userId){
                  return {...u,followed:true}
              }
              return u;
          })
          }
        case "UNFOLLOW":
            return {
                ...state,
                users:state.users.map(u=>{
                    if(u.id===action.userId){
                        return {...u,followed:false}
                    }
                    return u;
                })
            }
        case "SET USERS":{
            return {...state,users:[...state.users,...action.users]}
        }
        default:
            return state
    }




}

export const followAC=(userId:number)=>{
    return {
        type:"FOLLOW",
        userId
    } as const
}
export const unFollowAC=(userId:number)=>{
    return {
        type:"UNFOLLOW",
        userId
    } as const
}
export const setUsersAC=(users:Array<UsersType>)=>{
    return {
        type:"SET USERS",
        users
    } as const
}
