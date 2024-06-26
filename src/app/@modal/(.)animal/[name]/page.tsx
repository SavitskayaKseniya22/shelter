import React from "react";
import Animal from "@/app/components/shared/Animal/Animal";
import Popup from "@/app/components/shared/Popup/Popup";

async function Page({
  params,
}: {
  params: {
    name: string;
  };
}) {
  return (
    <Popup>
      <Animal params={params} />
    </Popup>
  );
}

export default Page;
