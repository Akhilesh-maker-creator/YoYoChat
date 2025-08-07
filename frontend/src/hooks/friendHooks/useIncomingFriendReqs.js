import { useQuery, useMutation } from "@tanstack/react-query";
import { getincomingFriendReqs } from "../../lib/api/friend.api";

const useIncomingFriendReqs = () => {
  const {
    data: incomingFriendReqs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["incomingFriendReqs"],
    queryFn: getincomingFriendReqs,
  });
  return {
    incomingPendingFriendReqs: incomingFriendReqs.incomingPendingFriendReqs,
    incomingAcceptedFriendReqs: incomingFriendReqs.incomingFriendReqs, isLoading,
    error,
  };
};

export default useIncomingFriendReqs;
