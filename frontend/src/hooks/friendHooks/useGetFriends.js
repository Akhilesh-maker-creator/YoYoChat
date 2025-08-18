import { useQuery, useMutation } from "@tanstack/react-query";
import { getMyFriends } from "../../lib/api/friend.api";

const useGetFriends = () => {
  const {
    data: getFriends,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["getFriends"],
    queryFn: getMyFriends,
  });
  return { friends:getFriends || [], isLoading, error };
};

export default useGetFriends;
