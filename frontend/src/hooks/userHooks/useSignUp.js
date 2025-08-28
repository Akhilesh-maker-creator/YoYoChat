import { useQuery,useMutation, useQueryClient } from "@tanstack/react-query";
import { signUp } from "../../lib/api/user.api";
import useSocketHook from "../socketHook/useSocketHook";




const useSignUp = () => {
    const { connectSocket } = useSocketHook()
    const queryClient = useQueryClient()

   const {
    mutate: signUpMutation,
    isPending,
    error
   } = useMutation({
    mutationFn: signUp,
    onSuccess: (data)=> {
        connectSocket(data.user._id)
        queryClient.invalidateQueries({ queryKey:["authUser"]})
    }
   })

   return { signUpMutation, isPending, error}
}

export default useSignUp
