import React, { useState, useRef } from "react";

import classes from "./Form.module.css";

const currentDate = new Date();

const BookingForm = () => {
  const [dataSent, setDataSent] = useState("");

  const nameRef = useRef();
  const emailRef = useRef();
  const arrivalRef = useRef();
  const departRef = useRef();
  const roomRef = useRef();

  const dataSentHandler = () => {
    if (
      formState.name === undefined ||
      formState.email === undefined ||
      formState.arrivalDate === undefined ||
      formState.departureDate === undefined ||
      formState.roomType === undefined
    ) {
      setDataSent("error");
    } else {
      setDataSent("sent");

      nameRef.current.value = "";
      emailRef.current.value = "";
      arrivalRef.current.value = "26/09/2022";
      departRef.current.value = "27/09/2022";
      roomRef.current.value = "14 Bed Dorm";
    }
  };

  const [formState, setFormState] = useState({
    name: undefined,
    email: undefined,
    arrivalDate:
      currentDate.getFullYear() +
      "/" +
      (currentDate.getMonth() + 1) +
      "/" +
      currentDate.getDate(),
    departureDate:
      currentDate.getFullYear() +
      "/" +
      (currentDate.getMonth() + 1) +
      "/" +
      (currentDate.getDate() + 1),
    roomType: "14 Bed Dorm",
  });

  const logFormHandler = (e) => {
    e.preventDefault();

    dataSentHandler();

    console.log(formState);
  };

  const nameChangeHandler = (e) => {
    setFormState({
      ...formState,
      name: e.target.value,
    });
  };

  const emailChangeHandler = (e) => {
    setFormState({
      ...formState,
      email: e.target.value,
    });
  };

  const arrivalDateChangeHandler = (e) => {
    setFormState({
      ...formState,
      arrivalDate: e.target.value,
    });
  };

  const departureDateChangeHandler = (e) => {
    setFormState({
      ...formState,
      departureDate: e.target.value,
    });
  };

  const roomTypeChangeHandler = (e) => {
    setFormState({
      ...formState,
      roomType: e.target.value,
    });
  };

  return (
    <form className={classes["form-wrapper"]} onSubmit={logFormHandler}>
      <label htmlFor="name">Full Name: </label>
      <input onChange={nameChangeHandler} type="text" id="name" ref={nameRef} />
      <label htmlFor="email">Email Address: </label>
      <input
        onChange={emailChangeHandler}
        type="email"
        id="email"
        ref={emailRef}
      />
      <label htmlFor="arrival">Arrival Date: </label>
      <input
        onChange={arrivalDateChangeHandler}
        type="date"
        id="arrival"
        name="arrival-date"
        value="2022-09-26"
        min="2022-09-26"
        max="2023-12-31"
        ref={arrivalRef}
      ></input>
      <label htmlFor="depart">Departure Date: </label>
      <input
        onChange={departureDateChangeHandler}
        type="date"
        id="depart"
        name="depart-date"
        value="2022-09-27"
        min="2022-09-27"
        max="2023-12-31"
        ref={departRef}
      ></input>
      <label htmlFor="room">Room Type: </label>
      <select
        onChange={roomTypeChangeHandler}
        name="room"
        id="room"
        ref={roomRef}
      >
        <option value="14 Bed Dorm">14 Bed Dorm</option>
        <option value="8 Bed Dorm">8 Bed Dorm</option>
        <option value="4 Bed Dorm">4 Bed Dorm</option>
        <option value="Private Room">Private Room</option>
      </select>
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

export default BookingForm;
