import React from "react";
import { createRoot } from "react-dom/client";
import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";

const initialData = {
  elements: [
    { type: "rectangle", id: "api", x: 120, y: 120, width: 200, height: 90, strokeColor: "#1e1e1e", backgroundColor: "#a5d8ff", fillStyle: "solid", strokeWidth: 2, roughness: 1, roundness: { type: 3 }, seed: 1, version: 1, versionNonce: 1, isDeleted: false, boundElements: [{ type: "text", id: "api-t" }], updated: 1, link: null, locked: false, opacity: 100, angle: 0, groupIds: [] },
    { type: "text", id: "api-t", x: 150, y: 155, width: 140, height: 25, text: "API Gateway", fontSize: 20, fontFamily: 1, textAlign: "center", verticalAlign: "middle", containerId: "api", strokeColor: "#1e1e1e", backgroundColor: "transparent", fillStyle: "solid", strokeWidth: 1, roughness: 1, roundness: null, seed: 2, version: 1, versionNonce: 2, isDeleted: false, boundElements: null, updated: 1, link: null, locked: false, opacity: 100, angle: 0, groupIds: [] },
    { type: "rectangle", id: "svc", x: 460, y: 120, width: 200, height: 90, strokeColor: "#1e1e1e", backgroundColor: "#b2f2bb", fillStyle: "solid", strokeWidth: 2, roughness: 1, roundness: { type: 3 }, seed: 3, version: 1, versionNonce: 3, isDeleted: false, boundElements: [{ type: "text", id: "svc-t" }], updated: 1, link: null, locked: false, opacity: 100, angle: 0, groupIds: [] },
    { type: "text", id: "svc-t", x: 490, y: 155, width: 140, height: 25, text: "Order Service", fontSize: 20, fontFamily: 1, textAlign: "center", verticalAlign: "middle", containerId: "svc", strokeColor: "#1e1e1e", backgroundColor: "transparent", fillStyle: "solid", strokeWidth: 1, roughness: 1, roundness: null, seed: 4, version: 1, versionNonce: 4, isDeleted: false, boundElements: null, updated: 1, link: null, locked: false, opacity: 100, angle: 0, groupIds: [] },
    { type: "rectangle", id: "db", x: 460, y: 300, width: 200, height: 90, strokeColor: "#1e1e1e", backgroundColor: "#ffec99", fillStyle: "solid", strokeWidth: 2, roughness: 1, roundness: { type: 3 }, seed: 5, version: 1, versionNonce: 5, isDeleted: false, boundElements: [{ type: "text", id: "db-t" }], updated: 1, link: null, locked: false, opacity: 100, angle: 0, groupIds: [] },
    { type: "text", id: "db-t", x: 490, y: 335, width: 140, height: 25, text: "Postgres", fontSize: 20, fontFamily: 1, textAlign: "center", verticalAlign: "middle", containerId: "db", strokeColor: "#1e1e1e", backgroundColor: "transparent", fillStyle: "solid", strokeWidth: 1, roughness: 1, roundness: null, seed: 6, version: 1, versionNonce: 6, isDeleted: false, boundElements: null, updated: 1, link: null, locked: false, opacity: 100, angle: 0, groupIds: [] },
    { type: "arrow", id: "a1", x: 320, y: 165, width: 140, height: 0, strokeColor: "#1e1e1e", backgroundColor: "transparent", fillStyle: "solid", strokeWidth: 2, roughness: 1, roundness: { type: 2 }, seed: 7, version: 1, versionNonce: 7, isDeleted: false, boundElements: null, updated: 1, link: null, locked: false, opacity: 100, angle: 0, groupIds: [], points: [[0,0],[140,0]], lastCommittedPoint: null, startBinding: { elementId: "api", focus: 0, gap: 4 }, endBinding: { elementId: "svc", focus: 0, gap: 4 }, startArrowhead: null, endArrowhead: "arrow" },
    { type: "arrow", id: "a2", x: 560, y: 210, width: 0, height: 90, strokeColor: "#1e1e1e", backgroundColor: "transparent", fillStyle: "solid", strokeWidth: 2, roughness: 1, roundness: { type: 2 }, seed: 8, version: 1, versionNonce: 8, isDeleted: false, boundElements: null, updated: 1, link: null, locked: false, opacity: 100, angle: 0, groupIds: [], points: [[0,0],[0,90]], lastCommittedPoint: null, startBinding: { elementId: "svc", focus: 0, gap: 4 }, endBinding: { elementId: "db", focus: 0, gap: 4 }, startArrowhead: null, endArrowhead: "arrow" }
  ],
  appState: { viewBackgroundColor: "#ffffff", gridSize: null, zenModeEnabled: false },
  scrollToContent: true,
};

createRoot(document.getElementById("root")).render(
  React.createElement(Excalidraw, { initialData, zenModeEnabled: false, UIOptions: { canvasActions: { export: false, loadScene: false, saveToActiveFile: false } } })
);
