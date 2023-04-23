import React from "react";
import { Alert } from "flowbite-react";

function Alerter() {
  return (
    <Alert color="info">
      <span>
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again.
      </span>
    </Alert>
  );
}

export default Alerter;
