import { useQuery,useQueryClient } from "@tanstack/react-query";
import { getUserById } from "../../lib/api/user.api";



const useGetUserById = (userId) => {
    const queryClient = useQueryClient()

   const {
    data,
    isLoading,
    error
   } = useQuery({
    queryKey:["userById", userId],
    queryFn: ()=> getUserById(userId),
    enabled:!!userId
   })

   return { userData: data, isLoading, error}
}

export default useGetUserById



