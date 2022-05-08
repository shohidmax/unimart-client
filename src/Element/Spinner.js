import React from "react";
import { Button } from "react-bootstrap";

const Spinner = () => {
  return (
    <div>
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </div>
  );
};

export default Spinner;
