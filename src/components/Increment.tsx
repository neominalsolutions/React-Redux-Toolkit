import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../store/counter-slice";

type Props = {};

export default function Increment({}: Props) {
  const dispatch = useDispatch();

  const onInc = () => {
    dispatch(increment());
  };

  return (
    <div>
      <button onClick={onInc}> Arttır </button>
    </div>
  );
}
