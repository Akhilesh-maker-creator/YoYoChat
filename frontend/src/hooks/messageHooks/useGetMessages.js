import { useQuery } from "@tanstack/react-query";


const useGetMessages = () => {
  const {
    data: messages,
    isLoading,
    error
  } = useQuery({
    queryKey:["getMessages"],
    queryFn: getMessages
  })
  return {messages, isLoading, error}
}

export default useGetMessages
