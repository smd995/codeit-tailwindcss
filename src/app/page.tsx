"use client";
import Button from "@/components/button";
import { useState } from "react";

export default function Home() {
  const [isButton, setIsButton] = useState<string>("");

  const handleClick = () => {
    setIsButton(() => {
      return "나는 버튼이야!";
    });
  };

  return (
    <>
      <Button onClick={handleClick}>버튼을 클릭하세요 {isButton}</Button>
    </>
  );
}
