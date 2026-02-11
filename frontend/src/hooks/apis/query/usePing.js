import { useQuery } from "@tanstack/react-query";
import { PingServer } from "../../../apis/ping.js";

export default function usePing(){
  const { isLoading, isError, data, error } = useQuery({
    queryFn: PingServer,  // The function that will be called to fetch the data
    queryKey: ['ping'],  // A unique key for this query
    staleTime: 10000,  // Data will be considered fresh for 10 seconds
  });


  return {
    isLoading,
    isError,
    data,
    error
  };
}