import { useQuery,useMutation } from "@tanstack/react-query";
import { checkUser } from "../../lib/api/user.api";



const useAuth = () => {
  const {
     data: authUser,
     isLoading
  } = useQuery({
    queryKey:["authUser"],
    queryFn: checkUser,
    retry: false
  })
  return { authUser, isLoading }
}

export default useAuth

