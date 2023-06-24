import Body from "@/components/Body/Body";
import React from "react";

import { useState } from "react";
import { useRouter } from "next/router";

export default function Shoe() {
  const [shoe, setShoe] = useState(1);
  const handleShoeChange = (id) => {
    setShoe(id);
  };

  const router = useRouter();

  return <Body shoe={router.query.shoe} handleShoeChange={handleShoeChange} />;
}
