import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../store/counter-slice";

type Props = {};

export default function Decrement({}: Props) {
  const dispatch = useDispatch();

  const onDec = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <button onClick={onDec}>Azalt</button>
    </div>
  );
}
