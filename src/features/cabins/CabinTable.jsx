import Spinner from "../../ui/Spinner.jsx";
import CabinRow from "./CabinRow.jsx";
import { useCabins } from "./useCabins.js";
import Table from "../../ui/Table.jsx";
import Menus from "../../ui/Menus.jsx";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty.jsx";

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!cabins.length) return <Empty resourceName="cabins" />;

  const filter = searchParams.get("discount") || "all";
  let filteredCabins;

  switch (filter) {
    case "all":
      filteredCabins = cabins;
      break;
    case "with-discount":
      filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
      break;
    case "no-discount":
      filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
      break;
    default:
      filteredCabins = cabins;
  }

  const sortBy = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier,
  );

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header role="row">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          // data={cabins}
          // data={filteredCabins}
          data={sortedCabins}
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
