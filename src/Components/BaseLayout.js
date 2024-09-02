import React from "react";
import { useMachine } from "@xstate/react";
import { bookingMachine } from "../Machines/bookingMachine";

const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine);
  console.log("maquina", state);
  return <div>Base layout</div>;
};

export { BaseLayout };
