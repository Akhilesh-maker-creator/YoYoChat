import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendMessage } from "../../lib/api/message.api";
import useSocketHook from "../socketHook/useSocketHook";



const useSendMessage = () => {
  const { updateMessages } = useSocketHook()
  const queryClient = useQueryClient()

  const {
    mutate: sendMessageMutation,
    isPending,
    error
  } = useMutation({
    mutationFn: sendMessage,
    onSuccess: (data)=> {
      updateMessages(data)
      // queryClient.invalidateQueries({queryKey:["getMessages"]})
    }
  })
  return { sendMessageMutation, isPending, error }
}

export default useSendMessage
