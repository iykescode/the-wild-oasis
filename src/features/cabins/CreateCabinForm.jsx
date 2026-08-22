import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form.jsx";
import Button from "../../ui/Button.jsx";
import FileInput from "../../ui/FileInput.jsx";
import Textarea from "../../ui/Textarea.jsx";
import FormRow from "../../ui/FormRow.jsx";
import { useCreateCabin } from "./useCreateCabin.js";
import { useUpdateCabin } from "./useUpdateCabin.js";

function CreateCabinForm({ cabin = {}, closeModal }) {
  const { createCabin, isCreating } = useCreateCabin();
  const { updateCabin, isUpdating } = useUpdateCabin();
  const { id: editId, ...editValues } = cabin;
  const isEditing = Boolean(editId);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditing ? editValues : {},
  });
  const { errors } = formState;

  const isWorking = isCreating || isUpdating;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditing)
      updateCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset();
            closeModal?.();
          },
        },
      );
    else
      createCabin(
        { newCabinData: { ...data, image } },
        {
          onSuccess: () => {
            reset();
            closeModal?.();
          },
        },
      );
  }

  // function onError(err) {
  //   console.log(err);
  // }

  return (
    // <Form onSubmit={handleSubmit(onSubmit, onError)}>
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={closeModal ? "modal" : "regular"}
    >
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Minimum capacity is 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Regular price must be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount must be less than regular price",
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          disabled={isWorking}
          id="description"
          defaultValue=""
          {...register("description", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          disabled={isWorking}
          {...register("image", {
            required: isEditing ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          disabled={isWorking}
          variation="secondary"
          type="reset"
          onClick={() => closeModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isCreating
            ? "Creating..."
            : isEditing
              ? "Update cabin"
              : "Create new cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
