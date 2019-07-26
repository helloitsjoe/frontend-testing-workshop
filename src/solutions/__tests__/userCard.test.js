import React from "react";
import {
  UserCard,
  __ENZYME_IDS
} from "../../challengeComponents/userCard/userCard";
import { Card } from "../../challengeComponents/card/card";
import { Button } from "../../challengeComponents/button/button";
import { mount } from "enzyme";
import { getEnzymeAttributeSelector } from "../../challengeComponents/utilities/testUtils";

const PROPS = {
  email: "user@test.com",
  firstName: "User",
  lastName: "McUser",
  age: 100,
  uuid: "sdfsdfsdf"
};

const NAMES = getEnzymeAttributeSelector(__ENZYME_IDS.NAMES);
const AGE = getEnzymeAttributeSelector(__ENZYME_IDS.AGE);
const EMAIL = getEnzymeAttributeSelector(__ENZYME_IDS.EMAIL);

describe.skip("UserCard", () => {
  let wrapper;
  afterEach(() => {
    wrapper.unmount();
  });
  it("Passes the isSelected prop to the base card", () => {
    wrapper = mount(<UserCard {...PROPS} isSelected />);
    expect(wrapper.find(Card).props().isSelected).toBe(true);
  });
  it("Calls the callback with the uuid when the button is clicked", () => {
    const handleClick = jest.fn();
    wrapper = mount(<UserCard {...PROPS} onClick={handleClick} />);
    expect(handleClick).toHaveBeenCalledTimes(0);
    wrapper.find(Button).simulate("click");
    expect(handleClick).toHaveBeenCalledWith(PROPS.uuid);
  });
  it("Renders the first and last name", () => {
    wrapper = mount(<UserCard {...PROPS} />);
    expect(wrapper.find(NAMES).text()).toBe(
      `name :  ${PROPS.firstName} ${PROPS.lastName}`
    );
  });
  it("Renders the email", () => {
    wrapper = mount(<UserCard {...PROPS} />);
    expect(wrapper.find(EMAIL).text()).toBe(`email :  ${PROPS.email}`);
  });
  it("Renders the age", () => {
    wrapper = mount(<UserCard {...PROPS} />);
    expect(wrapper.find(AGE).text()).toBe(`age :  ${PROPS.age}`);
  });
});
