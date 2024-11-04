import React from "react";
import { useDispatch, useSelector } from "react-redux";

import UserSignupForm from "./UserSignupForm.jsx";
import UserLoginFrom  from "./UserLoginForm.jsx";

import { toggleForm, toggleFormType} from "../../features/user/userSlice.js";
import styles from "../../styles/styles/User.module.css";

const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm, formType } = useSelector(({ user }) => user);

  const closeForm = () => dispatch(toggleForm(false));
  const toggleCurrentFormType = (type) => dispatch(toggleFormType(type));

  return showForm ? (
    <>
      <div
        className={styles.overlay}
        onClick={() => dispatch(toggleForm(false))}
      />
      {formType === "signup" ? (
        <UserSignupForm
          toggleCurrentFormType={toggleCurrentFormType}
          closeForm={closeForm}
        />
      ) : (
        <UserLoginFrom
          toggleCurrentFormType={toggleCurrentFormType}
          closeForm={closeForm}
        />
      )}
    </>
  ) : (
    <></>
  );
};

export default UserForm;
