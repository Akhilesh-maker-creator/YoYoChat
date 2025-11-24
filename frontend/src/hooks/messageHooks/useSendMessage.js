import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendMessage } from "../../lib/api/message.api";

const useSendMessage = (Id) => { 
 const queryClient = useQueryClient();

 const {
  mutate: sendMessageMutation,
     isLoading,
    error
 } = useMutation({
   mutationFn: sendMessage,
     onSuccess: (data) => {
      queryClient.setQueryData(["messages", Id], (oldData) => {
        return [...(oldData || []), data];
      });
    }
   });
  return { sendMessageMutation, isLoading, error };
};

export default useSendMessage;
