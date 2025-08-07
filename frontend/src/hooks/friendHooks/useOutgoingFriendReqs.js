import { useQuery,useMutation } from "@tanstack/react-query";
import { getOutgoingFriendReqs } from "../../lib/api/friend.api";



const useOutgoingFriendReqs = () => {
  const {
     data: outgoingFriendReqs,
     isLoading,
     error
  } = useQuery({
    queryKey:["outgoingFriendReqs"],
    queryFn: getOutgoingFriendReqs
  })
  return { outgoingFriendReqs, isLoading, error }
}

export default useOutgoingFriendReqs

