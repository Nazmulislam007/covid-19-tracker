import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const Inbox = ({ title, cases, total }) => {
  return (
    <>
      <Card>
        <CardContent>
          {/* title of corona virus cases recovered and deaths */}
          <Typography color="textSecondary">{title}</Typography>
          {/* 120+ number of cases */}
          <h2>{cases}</h2>
          {/* 1.2M total */}
          <Typography color="textSecondary">{total} Total</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Inbox;
