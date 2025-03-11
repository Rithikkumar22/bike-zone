import React, { useState, useEffect } from "react";
import axios from "axios";
import ktmData from "./KTM.json";
import KTM from "./KTM";

function KTMDisplay({ onAddToCart, userId,  }) {
  return (
    <div style={{ backgroundColor: "#E2E3D2" }} className="App">
      {ktmData.map((data) => {
        return (
          <KTM
            key={data.name}
            product={data}
            onAddToCart={onAddToCart}
          />
        );
      })}
    </div>
  );
}

export default KTMDisplay;
