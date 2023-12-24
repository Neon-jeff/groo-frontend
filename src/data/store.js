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

export const useModal=create(set=>(
  {
    modal:false,
    showModal:()=>{
      set({modal:true})},
    hideModal:()=>{
      set({modal:false})}
  }
))

export const useLoader = create((set) => ({
  loader: false,
  showLoader: () => {
    set({ modal: true });
  },
  hideLoader: () => {
    set({ modal: false });
  },
}));
const useInvestment=null
