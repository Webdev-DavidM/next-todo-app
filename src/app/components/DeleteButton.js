"use client";
import axios from "axios";

export const DeleteButton = ({ DeleteButton }) => {
  return <button onClick={() => DeleteButton()}>delete a todo</button>;
};
