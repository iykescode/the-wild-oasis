import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { updateBooking } from "../../services/apiBookings.js";
import toast from "react-hot-toast";

function useCheckIn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkIn, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} checked in successfully`);
      queryClient.invalidateQueries({
        active: true,
      });
      navigate("/dashboard");
    },

    onError: (err) => toast.error(err.message),
  });

  return { checkIn, isCheckingIn };
}

export default useCheckIn;
