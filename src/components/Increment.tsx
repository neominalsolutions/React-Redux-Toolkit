import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmount } from "../store/counter-slice";
import { RootState } from "../store/store";

type Props = {};

export default function Increment({}: Props) {
  const dispatch = useDispatch();
  const counterState = useSelector((state: RootState) => state.counter);

  const onInc = () => {
    dispatch(increment());
  };

  return (
    <div>
      <input
        value={counterState.counter}
        onChange={(event) => {
          dispatch(incrementByAmount(Number(event.target.value)));
        }}
      />
      <button onClick={onInc}> Arttır </button>
    </div>
  );
}
