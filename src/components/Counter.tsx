import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type Props = {};

export default function Counter({}: Props) {
  const counter = useSelector((state: RootState) => state.counter.value);

  return <div>Counter: {counter}</div>;
}
