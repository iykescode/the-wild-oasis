import Modal from "../../ui/Modal.jsx";
import CreateCabinForm from "./CreateCabinForm.jsx";
import Button from "../../ui/Button.jsx";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((isOpenModal) => !isOpenModal)}>
//         {isOpenModal ? "Close cabin" : "Add new cabin"}
//       </Button>
//       {isOpenModal && (
//         <Modal closeModal={() => setIsOpenModal(false)}>
//           <CreateCabinForm closeModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
