"use client";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// NEXT UI Components
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  age: z
    .number({
      invalid_type_error: "Age must be a number",
    })
    .positive({ message: "Age must be positive" })
    .gt(18, { message: "Age should be greater than 18" }),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    if (isSubmitSuccessful) {
      onOpen();
    }
  };

  const name = watch("name");

  // NEXT UI MODAL STATES
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="grid justify-center">
      <form
        className="grid gap-y-4 p-10 rounded-xl border border-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <h2 className="text-xl md:text-3xl font-sans font-bold text-center">USER</h2>
        </div>
        <div className="min-h-10 min-w-72">
          <input
            className="w-full px-4 py-2 border border-slate-700 rounded-lg"
            {...register("name")}
            placeholder="Name"
          />
          {errors.name?.message && <p className="text-red-500">{errors?.name?.message as string}</p>}
        </div>
        <div className="mb-6">
          <input
            className="w-full px-4 py-2 border border-slate-700 rounded-lg"
            type="number"
            placeholder="Age"
            {...register("age", { valueAsNumber: true })}
          />
          {errors.age?.message && <p className="text-red-500">{errors?.age?.message as string}</p>}
        </div>
        <input
          className="px-4 py-2 bg-blue-500 text-white w-fit rounded-lg cursor-pointer"
          type="submit"
        />
      </form>

      {/* NEXT UI MODAL */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        hideCloseButton
      >
        <ModalContent className="font-sans">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Hey {name}</ModalHeader>
              <ModalBody>
                <h2 className="text-2xl font-bold">Thank you for filling out the form</h2>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="solid"
                  onPress={() => {
                    onClose();
                    reset(); // Form reset
                  }}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Form;
