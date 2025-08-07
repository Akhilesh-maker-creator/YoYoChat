import { useQuery,useMutation, useQueryClient } from "@tanstack/react-query";
import { acceptFriendReq } from "../../lib/api/friend.api";



const useAcceptFriendReq = () => {
    const queryClient = useQueryClient()

   const {
    mutate: acceptFriendReqMutation,
    isPending,
    error
   } = useMutation({
    mutationFn: acceptFriendReq,
    onSuccess: ()=> queryClient.invalidateQueries({ queryKey:["getFriends"]})
   })

   return { acceptFriendReqMutation, isPending, error}
}

export default useAcceptFriendReq