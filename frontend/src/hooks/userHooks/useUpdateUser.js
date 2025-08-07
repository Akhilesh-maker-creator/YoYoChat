import { useQuery,useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../../lib/api/user.api";



const useUpdateUser = () => {
    const queryClient = useQueryClient()

   const {
    mutate: updateUserMutation,
    isPending,
    error
   } = useMutation({
    mutationFn: updateUser,
    onSuccess: ()=> queryClient.invalidateQueries({ queryKey:["authUser"]})
   })

   return { updateUserMutation, isPending, error}
}

export default useUpdateUser