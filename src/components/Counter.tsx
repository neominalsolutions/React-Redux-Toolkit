import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type Props = {};

export default function Counter({}: Props) {
  const counterState = useSelector((state: RootState) => state.counter);

  return <div>Counter: {counterState.counter}</div>;
}
