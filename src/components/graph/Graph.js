import React from "react";
import "../../CSS/App_graph.css";
import ReactFlow from "react-flow-renderer";
import elements from "./Data";
import Node from "./Node";
console.log("inside callin graph")
const graphStyles = { width: "100vw", height: "100vh" };
const nodeTypes = {
  selectorNode: Node
};
const Flow = () => {
  return (
    <>
      <ReactFlow
        elements={elements}
        style={graphStyles}
        nodesDraggable={false}
        nodeTypes={nodeTypes}
        panOnScroll={true}
        preventScrolling={false}
        fitView
        zoomOnDoubleClick={false}
        panOnDrag={false}
        snapToGrid={true}
      />
    </>
  );
};
export default function Graph() {
  return (
    <div className="Graph">
      <Flow />
    </div>
  );
}
