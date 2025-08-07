import { useQuery,useMutation, useQueryClient } from "@tanstack/react-query";
import { getUser } from "../../lib/api/user.api";



const useGetUser = () => {
    const queryClient = useQueryClient()

   const {
    mutate: getUserMutation,
    isPending,
    error
   } = useMutation({
    mutationFn: getUser,
   })

   return { getUserMutation, isPending, error}
}

export default useGetUser