import "./styles.css";
import * as go from "gojs";
import { ReactPalette } from "gojs-react";

const Pallete = () => {
  function initPalette() {
    const $ = go.GraphObject.make;
    const myPalette = $(go.Palette, {
      maxSelectionCount: 1,
      // simplify the link template, just in this Palette
      linkTemplate: $(
        go.Link,
        { toShortLength: 8 },
        {
          locationSpot: go.Spot.Left,
          selectionAdornmentTemplate: $(
            go.Adornment,
            "Link",
            { locationSpot: go.Spot.Center },
            $(go.Shape, {
              // isPanelMain 속성은 GraphObject가 다른 패널 하위 개체가 측정하거나 찾아야하는 "주"개체임을 특정 유형의 패널에 나타낸다.
              isPanelMain: true,
              fill: null,
              stroke: "deepskyblue",
              strokeWidth: 0,
              cursor: "pointer",
            }),
            $(
              go.Shape, // the arrowhead
              {
                toArrow: "Standard",
                fill: "deepskyblue",
                stroke: null,
                scale: 2,
                cursor: "pointer",
              }
            )
          ),
        },
        new go.Binding("points"),
        $(
          go.Shape, // the link path shape
          { isPanelMain: true, strokeWidth: 5, cursor: "pointer" }
        ),
        $(
          go.Shape, // the arrowhead
          { toArrow: "Standard", stroke: null, scale: 2, cursor: "pointer" }
        )
      ),
      nodeTemplate: $(
        go.Node,
        "Horizontal",
        $(
          go.Shape,
          { width: 55, height: 25, stroke: "transparent", cursor: "pointer" },
          new go.Binding("fill", "color")
        ),
        $(
          go.TextBlock,
          {
            margin: 8,
            textAlign: "center",
            stroke: "#333333",
            editable: true,
            cursor: "pointer",
          },
          new go.Binding("text", "name")
        )
      ),
      model: new go.GraphLinksModel(
        [
          // specify the contents of the Palette
          // { text: "Red", color: "#E64248" },
          // { text: "Yellow", color: "#F9B62A" },
          // { text: "Blue", color: "#5565FB" },
          // { text: "Purple", color: "#BB3AAC" },
          // { text: "Green", color: "#2BCC5B" },
        ],
        [
          // the Palette also has a disconnected Link, which the user can drag-and-drop
          {
            points: new go.List(/*go.Point*/).addAll([
              new go.Point(0, 0),
              new go.Point(85, 0),
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
      modelData={go.GraphLinksModel}
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
