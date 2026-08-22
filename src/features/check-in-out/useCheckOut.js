import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings.js";
import toast from "react-hot-toast";

function useCheckOut() {
  const queryClient = useQueryClient();

  const { mutate: checkOut, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} checked out successfully`);
      queryClient.invalidateQueries({
        active: true,
      });
    },

    onError: (err) => toast.error(err.message),
  });

  return { checkOut, isCheckingOut };
}

export default useCheckOut;
