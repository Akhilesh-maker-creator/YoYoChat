import { useMutation, useQueryClient } from "@tanstack/react-query";


const useSendMessage = () => {
  const queryClient = useQueryClient()

  const {} = useMutation({
    mutationFn:sendMessage,
    onSuccess: ()=> queryClient.invalidateQueries({queryKey:["getMessages"]})
  })
}

export default useSendMessage
