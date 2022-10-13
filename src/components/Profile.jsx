import React from "react";
import { Box, Container } from "@mui/system";

export default function Profile() {
  return (
    <div>
      <Container className="d-flex mb-5">
        <Box className="bor shadow p-3 mb-5 bg-body rounded" />
        <h1 className="p-name">Hello, Angela Pearl!</h1>
      </Container>
    </div>
  );
}
