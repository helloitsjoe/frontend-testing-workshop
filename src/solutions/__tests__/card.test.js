import React from "react";
import { mount } from "enzyme";
import { Card } from "../../challengeComponents/card/card";

describe.skip("Card", () => {
  const MockComponent = () => <p>Mock</p>;
  it("Renders children", () => {
    const wrapper = mount(
      <Card>
        <MockComponent />
      </Card>
    );
    expect(wrapper.find(MockComponent).exists()).toBe(true);
    wrapper.unmount();
  });
});
