import { useQuery,useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../../lib/api/user.api";



const useDeleteUser = () => {
    const queryClient = useQueryClient()

   const {
    mutate: deleteUserMutation,
    isPending,
    error
   } = useMutation({
    mutationFn: deleteUser,
    onSuccess: ()=> queryClient.invalidateQueries({ queryKey:["authUser"]})
   })

   return { deleteUserMutation, isPending, error}
}

export default useDeleteUser