import React from "react";
import NintendoSwitch from "./NintendoSwitch";
import NintendoSwitchBanner from "./NintendoSwitchBanner";

function NintendoProducts({ gameNintendo }) {
  return (
    <>
      <NintendoSwitchBanner />
      <NintendoSwitch gameNintendo={gameNintendo} />
    </>
  );
}

export default NintendoProducts;
