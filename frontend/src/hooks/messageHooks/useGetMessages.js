import { useQuery } from "@tanstack/react-query";
import { getMessages } from "../../lib/api/message.api";



const useGetMessages = (userId) => {
  const {
    data: messages,
    isLoading,
    error
  } = useQuery({
    queryKey:["messages", userId],
    queryFn: ()=> getMessages(userId),
    enabled:!!userId
  })
  return { messagesData: messages , isLoading, error}
}

export default useGetMessages
