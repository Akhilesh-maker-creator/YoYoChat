import { useQuery,useMutation } from "@tanstack/react-query";
import { getUsers } from "../../lib/api/user.api";



const useGetAllUsers = () => {
  const {
     data: getAllUsers,
     isLoading,
     error
  } = useQuery({
    queryKey:["getAllUsers"],
    queryFn: getUsers
  })
  return { getAllUsers, isLoading, error }
}

export default useGetAllUsers
