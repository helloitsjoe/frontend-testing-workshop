import React from "react";
import { mount } from "enzyme";
import {
  SideBar,
  __ENZYME_IDS
} from "../../challengeComponents/sideBar/sideBar";
import { getEnzymeAttributeSelector } from "../../challengeComponents/utilities/testUtils";

const TITLE = getEnzymeAttributeSelector(__ENZYME_IDS.TITLE);

describe.skip("SideBar", () => {
  it("renders title text", () => {
    const wrapper = mount(<SideBar title="This is a title" />);
    expect(wrapper.find(TITLE).text()).toBe("This is a title");
  });
  it("renders children", () => {
    const MockComponent = () => <p>Child</p>;
    const wrapper = mount(
      <SideBar title="This is a title">
        <MockComponent />
      </SideBar>
    );
    expect(wrapper.find(MockComponent).exists()).toBe(true);
  });
});
