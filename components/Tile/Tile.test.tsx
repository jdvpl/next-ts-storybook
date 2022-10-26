import React from "react";
import { render } from "@/test-utils";
import Tile from "./Tile";

describe("Tile test cases", () => {
  it("should render tile", () => {
    const { asFragment } = render(
      <Tile header="Titulo test">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
        consectetur officia provident tempora magnam? Dolor facilis dolorem,
        illo quia, debitis voluptatum deleniti eos expedita reiciendis minus
        nesciunt. Porro, eius expedita.
      </Tile>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
