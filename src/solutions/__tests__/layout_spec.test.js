import React from "react";
import { mount } from "enzyme";
import { Layout } from "../../challengeComponents/layout/layout";

const MockHeader = () => <h2>title component</h2>;
const MockRightRail = () => <div>this is the right rail</div>;
const MockLeftRail = () => <div>this is the left rail</div>;

describe.skip("Layout", () => {
  it("renders a header component, a right rail, and a left rail", () => {
    const wrapper = mount(
      <Layout
        header={<MockHeader />}
        rightRail={<MockRightRail />}
        leftRail={<MockLeftRail />}
      />
    );
    expect(wrapper.find(MockHeader).exists()).toBe(true);
    expect(wrapper.find(MockRightRail).exists()).toBe(true);
    expect(wrapper.find(MockLeftRail).exists()).toBe(true);
    wrapper.unmount();
  });
});
