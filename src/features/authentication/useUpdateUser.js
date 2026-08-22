import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateProfile } from "../../services/apiAuth.js";

function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateProfile,
    onSuccess: ({ user }) => {
      toast.success("User account updated successfully");
      queryClient.setQueryData(["user"], user);
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}

export { useUpdateUser };
