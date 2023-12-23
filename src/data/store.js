import { create } from "zustand";


 export const userStore=create(set=>({
    user:JSON.parse(localStorage.getItem("user")),
    setUser:(user)=>set(()=>({user}))
}))



export const useAccountType = create((set) => ({
  isIndividual: true,
  setCustodial: () => {
    set({ isIndividual: false });
  },
  setIndividual: () => {
    set({ isIndividual: true });
  },
}));


export const useAuth=create(set=>({
    isAuthenticated:localStorage.getItem('user')?true:false,
    setAuth:()=>{set({ isAuthenticated: true })},
    unSet:()=>{set({ isAuthenticated: false })}
}))


export const useProfileUpdate=create(set=>(
  {
    profile:{},
    setProfile:(data)=>{
      set(state=>{
        return { profile:{...state.profile, ...data} };
      })}
  }
))

export const useToken=create(set=>(
  {
    token:"",
    setProfile:(data)=>{
      set({token:data})}
  }
))
const useInvestment=null