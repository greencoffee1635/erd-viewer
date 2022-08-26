import "./styles.css";
import * as go from "gojs";
import { ReactDiagram } from "gojs-react";

const Diagram = () => {
  function initDiagram() {
    const $ = go.GraphObject.make;
    const diagram = $(go.Diagram, {
      "draggingTool.dragsLink": true,
      "draggingTool.isGridSnapEnabled": true,
      "linkingTool.isUnconnectedLinkValid": true,
      "linkingTool.portGravity": 20,
      "relinkingTool.isUnconnectedLinkValid": true,
      "relinkingTool.portGravity": 20,
      "undoManager.isEnabled": true,
      scale: 1.8,
      linkTemplate: $(
        go.Link, // the whole link panel
        { toShortLength: 8 },
        { relinkableFrom: true, relinkableTo: true, reshapable: true },
        new go.Binding("points").makeTwoWay(),
        $(
          go.Shape, // the link path shape
          {
            isPanelMain: true,
            stroke: "#00AAAA",
            strokeWidth: 1.5,
          }
        ),
        $(
          go.Shape, // the arrowhead
          {
            toArrow: "Standard",
            stroke: null,
            fill: "#00AAAA",
            scale: 1,
          }
        )
      ),
      nodeTemplate: $(
        go.Node,
        "Auto",
        $(
          go.Shape,
          "Circle", // default figure
          new go.Binding("fill", "color"),
          {
            portId: "", // the default port: if no spot on link data, use closest side
            fromLinkable: true,
            toLinkable: true,
            cursor: "pointer",
          }
        ),
        $(
          go.TextBlock,
          { margin: 5, editable: true },
          new go.Binding("text").makeTwoWay()
        )
      ),
    });

    return diagram;
  }
  return (
    <ReactDiagram initDiagram={initDiagram} divClassName="diagramComponent" />
  );
};

export default Diagram;
