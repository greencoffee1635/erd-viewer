import "./styles.css";
import * as go from "gojs";
import { ReactPalette } from "gojs-react";

const Pallete = () => {
  function initPalette() {
    const $ = go.GraphObject.make;
    const myPalette = $(go.Palette, {
      maxSelectionCount: 1,
      linkTemplate: $(
        go.Link,
        { toShortLength: 8 },
        {
          locationSpot: go.Spot.Center,
          selectionAdornmentTemplate: $(
            go.Adornment,
            "Link",
            { locationSpot: go.Spot.Center },
            $(go.Shape, {
              isPanelMain: true,
              fill: null,
              stroke: "deepskyblue",
              strokeWidth: 0,
            }),
            $(
              go.Shape, // the arrowhead
              { toArrow: "Standard", stroke: null }
            )
          ),
        },
        new go.Binding("points"),
        $(
          go.Shape, // the link path shape
          { isPanelMain: true, strokeWidth: 5 }
        ),
        $(
          go.Shape, // the arrowhead
          { toArrow: "Standard", stroke: null, scale: 2 }
        )
      ),
      nodeTemplate: $(
        go.Node,
        "Horizontal",

        $(
          go.Shape,
          { width: 55, height: 25, stroke: "transparent" },
          new go.Binding("fill", "color")
        ),
        $(
          go.TextBlock,
          {
            margin: 8,
            textAlign: "center",
            stroke: "#333333",
            editable: true,
          },
          new go.Binding("text", "name")
        )
      ),
      model: new go.GraphLinksModel(
        [
          // specify the contents of the Palette
          { text: "Red", color: "#E64248" },
          { text: "Yellow", color: "#F9B62A" },
          { text: "Blue", color: "#5565FB" },
          { text: "Purple", color: "#BB3AAC" },
          { text: "Green", color: "#2BCC5B" },
        ],
        [
          // the Palette also has a disconnected Link, which the user can drag-and-drop
          {
            points: new go.List(/*go.Point*/).addAll([
              new go.Point(0, 0),
              new go.Point(70, 0),
            ]),
          },
        ]
      ),
    });

    return myPalette;
  }

  return (
    <ReactPalette
      initPalette={initPalette}
      divClassName="paletteComponent"
      nodeDataArray={[
        { text: "R", color: "#E64248", name: "Red" },
        { text: "Y", color: "#F9B62A", name: "Yellow" },
        { text: "B", color: "#5565FB", name: "Blue" },
        { text: "P", color: "#BB3AAC", name: "Purple" },
        { text: "G", color: "#2BCC5B", name: "Green" },
      ]}
    />
  );
};

export default Pallete;
