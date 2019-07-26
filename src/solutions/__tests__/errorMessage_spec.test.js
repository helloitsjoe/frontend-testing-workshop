import { mount } from "enzyme";
import React from "react";
import {
  ErrorMessage,
  __ENZYME_IDS
} from "../../challengeComponents/errorMessage/errorMessage";
import { getEnzymeAttributeSelector } from "../../challengeComponents/utilities/testUtils";

const ERROR_TEXT = getEnzymeAttributeSelector(__ENZYME_IDS.ERROR_TEXT);

describe.skip("ErrorMessage", () => {
  it("Renders a styled error message given errorText", () => {
    const wrapper = mount(<ErrorMessage errorText="This Is Broken" />);
    expect(wrapper.find(ERROR_TEXT).text()).toBe("This Is Broken");
  });
});
