"use client";
import React, { ReactElement } from "react";
import { Button } from "@/components/ui/moving-border";


interface buttonProps {
    text:string,
    icon:ReactElement,
    onPress:()=>void
}


function StyleButton({text,icon,onPress}:buttonProps) {
  return (
    <div onClick={onPress}>
      <Button
        className="bg-inherit text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        {text} {" "}
        {icon&&icon}
      </Button>
    </div>
  );
}

export default StyleButton;