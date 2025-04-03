"use client";
import React, { useState } from "react";
import { InstallPrompt } from "./install-prompt";
import InstallButton from "./install-button";

const Install = () => {
  const [open, setOpen] = useState(false);
  const onOpenChange = (open: boolean) => {
    setOpen(open);
  };

  return (
    <>
      <InstallPrompt open={open} onOpenChange={onOpenChange} />
      <InstallButton onOpenChange={onOpenChange} />
    </>
  );
};

export default Install;
