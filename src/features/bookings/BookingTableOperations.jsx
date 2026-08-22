import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter.jsx";
import TableOperations from "../../ui/TableOperations.jsx";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-out", label: "Checked out" },
          { value: "checked-in", label: "Checked in" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-desc", label: "Sort by date (new to old)" },
          { value: "startDate-asc", label: "Sort by date (old to new)" },
          { value: "totalPrice-asc", label: "Sort by amount (low to high)" },
          {
            value: "totalPrice-desc",
            label: "Sort by amount (high to low)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
