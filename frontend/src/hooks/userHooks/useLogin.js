import { useQuery,useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../lib/api/user.api";
import useSocketHook from "../socketHook/useSocketHook";



const useLogin = () => {
    const { connectSocket } = useSocketHook()
    const queryClient = useQueryClient()

   const {
    mutate: loginMutation,
    isPending,
    error
   } = useMutation({
    mutationFn: login,
    onSuccess: (data)=> {
        connectSocket(data.user._id)
        queryClient.invalidateQueries({ queryKey:["authUser"]})
    }
   })

   return { loginMutation, isPending, error}
}

export default useLogin