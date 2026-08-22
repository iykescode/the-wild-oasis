import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as LogoutApi } from "../../services/apiAuth.js";

function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading: isLoggingOut } = useMutation({
    mutationFn: LogoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", {
        replace: true,
      });
    },
  });

  return { logout, isLoggingOut };
}

export default useLogout;
