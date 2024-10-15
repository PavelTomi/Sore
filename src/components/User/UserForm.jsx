import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UserSignupForm from "./UserSignupForm.jsx";
import { toggleForm } from "../../features/user/userSlice.js";
import styles from "../../styles/styles/User.module.css";

const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm } = useSelector(({ user }) => user);

  const closeForm = () => dispatch(toggleForm(false));

  return showForm ? (
    <>
      <div
        className={styles.overlay}
        onClick={() => dispatch(toggleForm(false))}
      />
      <UserSignupForm closeForm={closeForm} />
    </>
  ) : (
    <></>
  );
};

export default UserForm;
