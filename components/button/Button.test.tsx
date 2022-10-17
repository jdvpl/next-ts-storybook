import React from "react";
import { render, screen } from "@/test-utils";
import { Button } from "./Button";
import userEvent from "@testing-library/user-event";
describe("Button test cases", () => {
  it("render check", () => {
    const onClick = jest.fn();
    const { asFragment } = render(<Button onClick={onClick}>Buton</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
  it("Check onclick Callcall", async () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Buton</Button>);

    const element = screen.getByRole("button");
    await userEvent.click(element);

    expect(onClick).toHaveBeenCalled();
  });
});
