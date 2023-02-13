import React, { useContext, useEffect, useState } from "react";
import BookContext from "../context/book-context";

function QuickViewButton() {
  return (
    <button className="quick-view-btn">
      <span>Quick View</span>
    </button>
  );
}

export default QuickViewButton;
