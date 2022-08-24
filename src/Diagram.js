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
    });

    diagram.nodeTemplate = $(
      go.Node,
      "Spot",
      { locationSpot: go.Spot.Center },
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
        go.Point.stringify
      ),
      new go.Binding("angle").makeTwoWay(),
      // the main object is a Panel that surrounds a TextBlock with a Shape
      $(
        go.Panel,
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
          // new go.Binding("figure"),
        ),
        $(
          go.TextBlock,
          { margin: 5, editable: true },
          new go.Binding("text").makeTwoWay()
        )
      )
    );

    diagram.scale = 1.8;

    // Link templates
    diagram.linkTemplate = $(
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
    );

    return diagram;
  }
  return (
    <ReactDiagram initDiagram={initDiagram} divClassName="diagramComponent" />
  );
};

export default Diagram;
