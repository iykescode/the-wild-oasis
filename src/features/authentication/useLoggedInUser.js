import { useQuery } from "@tanstack/react-query";
import { getLoggedInUser } from "../../services/apiAuth.js";

function useLoggedInUser() {
  const { data: user, isLoading: isCheckingAuth } = useQuery({
    queryKey: ["user"],
    queryFn: getLoggedInUser,
  });

  return {
    user,
    isCheckingAuth,
    isAuthenticated: user?.role === "authenticated",
  };
}

export default useLoggedInUser;
