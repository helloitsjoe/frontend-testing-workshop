import React from "react";
import { mount } from "enzyme";
import { SectionTitle } from "../../challengeComponents/sectionTitle/sectionTitle";

describe.skip("Section Title", () => {
  it("Renders the level of header level given the headingLevel prop", () => {
    const wrapper = mount(<SectionTitle titleText="" />);
    expect(wrapper.find("h2").exists()).toBe(true);
    wrapper.setProps({ headingLevel: 3 });
    expect(wrapper.find("h3").exists()).toBe(true);
  });
  it("renders title text when passed", () => {
    const wrapper = mount(<SectionTitle titleText="This is the title" />);
    expect(wrapper.find("h2").text()).toBe("This is the title");
  });
});
