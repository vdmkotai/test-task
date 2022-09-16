import React from "react";
import { observer, useLocalObservable } from "mobx-react-lite";

import Modal from "../Modal";
import Field from "../Field";

import styles from "./App.module.scss";

const App = observer(() => {
  const formState = useLocalObservable(() => ({
    firstName: "",
    lastName: "",
    firstNameError: "",
    lastNameError: "",
    isModalOpen: false,
    setFirstName(value: string) {
      this.firstName = value;
    },
    setLastName(value: string) {
      this.lastName = value;
    },
    setFirstNameError(value: string) {
      this.firstNameError = value;
    },
    setLastNameError(value: string) {
      this.lastNameError = value;
    },
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    },
    resetValues() {
      this.firstName = "";
      this.lastName = "";
    },
  }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let hasError = false;

    if (formState.firstName.trim() === "") {
      hasError = true;
      formState.setFirstNameError("Введите имя");
    }

    if (formState.lastName.trim() === "") {
      hasError = true;
      formState.setLastNameError("Введите фамилию");
    }

    if (hasError) {
      return;
    }

    formState.toggleModal();
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (formState.firstNameError) {
      formState.setFirstNameError("");
    }

    formState.setFirstName(e.currentTarget.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (formState.lastNameError) {
      formState.setLastNameError("");
    }

    formState.setLastName(e.currentTarget.value);
  };

  const handleCloseModal = () => {
    formState.toggleModal();
    formState.resetValues();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <Field
          autoFocus
          label="Имя:"
          name="firstName"
          value={formState.firstName}
          onChange={handleNameChange}
          errorText={formState.firstNameError}
        />

        <Field
          label="Фамилия:"
          name="lastName"
          value={formState.lastName}
          onChange={handleLastNameChange}
          errorText={formState.lastNameError}
        />
        <button className={styles.button} type="submit">
          Готово
        </button>
      </form>

      {formState.isModalOpen && (
        <Modal onClose={handleCloseModal}>
          Здравствуйте, {`${formState.firstName} ${formState.lastName}`}!
        </Modal>
      )}
    </div>
  );
});

export default App;
