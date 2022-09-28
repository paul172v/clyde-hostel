import React, { useState, useRef } from "react";

import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [dataSent, setDataSent] = useState("");

  const dataSentHandler = () => {
    if (
      contactState.name === undefined ||
      contactState.name === undefined ||
      contactState.message === undefined
    ) {
      setDataSent("error");
    } else {
      setDataSent("sent");
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    }
  };

  const [contactState, setContactState] = useState({
    name: undefined,
    email: undefined,
    message: undefined,
  });

  const logFormHandler = (e) => {
    e.preventDefault();

    dataSentHandler();

    console.log(contactState);
  };

  const nameChangeHandler = (e) => {
    setContactState({
      ...contactState,
      name: e.target.value,
    });
  };

  const emailChangeHandler = (e) => {
    setContactState({
      ...contactState,
      email: e.target.value,
    });
  };

  const messageChangeHandler = (e) => {
    setContactState({
      ...contactState,
      message: e.target.value,
    });
  };

  return (
    <form className={classes["form-wrapper"]} onSubmit={logFormHandler}>
      <label htmlFor="name">Full Name: </label>
      <input ref={nameRef} type="text" id="name" onChange={nameChangeHandler} />
      <label htmlFor="email">Email Address: </label>
      <input
        ref={emailRef}
        onChange={emailChangeHandler}
        type="email"
        id="email"
      />
      <label htmlFor="message">Message:</label>
      <textarea
        className={classes["message-input"]}
        name="message"
        id="message"
        onChange={messageChangeHandler}
        ref={messageRef}
      />
      <input
        className={classes["form-submit-btn"]}
        type="submit"
        value="Submit"
      />
      {dataSent === "sent" && (
        <p className={classes["form-submitted-message"]}>Form submitted</p>
      )}

      {dataSent === "error" && (
        <p className={classes["form-submitted-error"]}>Form incomplete</p>
      )}
    </form>
  );
};

export default ContactForm;
