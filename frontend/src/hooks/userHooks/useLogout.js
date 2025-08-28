import { useQuery,useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../lib/api/user.api";
import useSocketHook from "../socketHook/useSocketHook";



const useLogout = () => {
    const { disconnectSocket } = useSocketHook()
    const queryClient = useQueryClient()

   const {
    mutate: logoutMutation,
    isPending,
    error
   } = useMutation({
    mutationFn: logout,
    onSuccess: ()=> {
        disconnectSocket()
        queryClient.invalidateQueries({ queryKey:["authUser"]})
    }
   })

   return { logoutMutation, isPending, error}
}

export default useLogout