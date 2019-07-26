import React from "react";
import { mount } from "enzyme";
import { Button } from "../../challengeComponents/button/button";

describe.skip("base button", () => {
  let wrapper;
  afterEach(() => {
    wrapper.unmount();
  });
  it("renders children when passed", () => {
    wrapper = mount(<Button>This is the button</Button>);
    expect(wrapper.props().children).toBe("This is the button");
  });
  it("calls the click handler when clicked", () => {
    const handleClick = jest.fn();
    wrapper = mount(<Button onClick={handleClick}>This is the button</Button>);
    expect(handleClick).toHaveBeenCalledTimes(0);
    wrapper.simulate("click");
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it("removes the click handler when button is disabled", () => {
    const handleClick = jest.fn();
    wrapper = mount(
      <Button onClick={handleClick} isDisabled>
        This is the button
      </Button>
    );
    expect(handleClick).toHaveBeenCalledTimes(0);
    wrapper.simulate("click");
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
