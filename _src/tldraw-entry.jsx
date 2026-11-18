import React from "react";
import { createRoot } from "react-dom/client";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";
createRoot(document.getElementById("root")).render(React.createElement(Tldraw));
