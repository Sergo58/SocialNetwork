import axios from "axios";



const instance=axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    withCredentials:true,
    headers: {'API-KEY': '49002ff0-14a4-442d-95b4-9079087ed1b9'}
});

export const usersAPI={
     getUsers(currentPage:number=1,pageSize:number=10){
        return   instance.get(`users?page=${currentPage}&count=${pageSize}`,).then(response=>{
            return response.data;
        })
    },

    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile(userId:number){
        console.warn('Obsolete method. Please profileAPI object.')
         return instance.get(`profile/` + userId)

    }

}
export const profileAPI={


    getProfile(userId:number){
        return instance.get(`profile/` + userId)

    },
    getStatus(userId:number){
        return instance.get('profile/status/' +userId)
    },
    updateStatus(status:string){
        return instance.put('profile/status/', {status:status})
    }

}
export const authAPI={
    me(){
       return  instance.get(`auth/me`)
    }

}