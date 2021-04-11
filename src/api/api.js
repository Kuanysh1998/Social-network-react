import * as axios from "axios";

let instance = axios.create(
    {
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers: {"API-KEY": "26f66adc-110c-4e66-9052-87a50836c7e0"},
        withCredentials: true

    }
)

export const  usersAPI = {
    getUsers(currentPage = 1, pageSize = 3)  {     
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    
    unfollowUser(userId) {
        return instance.delete("follow/" + userId)
    },
    followUser(userId) {
        return instance.post("follow/" + userId)
    },
    getUserAuthInfo()  {     
        return instance.get(`auth/me`)
    },
    getProfile(userId) {
        return instance.get("profile/" + userId)
    },
 
    getProfileStatus(userId) {
        return instance.get("profile/status/" + userId)
    },

    setProfileStatus(status) {
        return instance.put("profile/status", {status: status})
    },
    authorize(formData) {
        return instance.post("auth/login", formData)
    }

        

    
    


}
    
