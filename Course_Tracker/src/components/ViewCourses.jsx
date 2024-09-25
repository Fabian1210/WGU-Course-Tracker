import React from "react";
import { Honeycomb, Hexagon } from "react-honeycomb";
import range from "lodash/range";

const items = range(64);
const sideLength = 64;

export default function () {
  return (
    <>
      <Honeycomb
        columns={6}
        size={sideLength}
        items={items}
        renderItem={(item) => (
          // <Hexagon className="awesome-class-name">
          // {renderItem(items)}</Hexagon>
          <Hexagon>
            <div
              style={{ height: "300px", width: "400px", background: "yellow" }}
            ></div>
          </Hexagon>
        )}
      />
    </>
  );
}
