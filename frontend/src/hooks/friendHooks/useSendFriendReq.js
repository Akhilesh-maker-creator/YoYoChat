import { useQuery,useMutation, useQueryClient } from "@tanstack/react-query";
import { sendFriendReq } from "../../lib/api/friend.api";



const useSendFriendReq = () => {
    const queryClient = useQueryClient()

   const {
    mutate: sendFriendReqMutation,
    isPending,
    error
   } = useMutation({
    mutationFn: sendFriendReq,
    onSuccess: ()=> queryClient.invalidateQueries({queryKey:["getAllUsers"]})
   })

   return { sendFriendReqMutation, isPending, error}
}

export default useSendFriendReq