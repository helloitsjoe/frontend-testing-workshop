import React from "react";
import { mount } from "enzyme";
import { Button } from "../../challengeComponents/button/button";
import { formattedUserData } from "../../challengeComponents/utilities/mockUserData";
import { getEnzymeAttributeSelector } from "../../challengeComponents/utilities/testUtils";
import {
  SavedUsersList,
  __ENZYME_IDS
} from "../../challengeComponents/savedUsersList/savedUsersList";

const SAVED_USER_ITEM = getEnzymeAttributeSelector(
  __ENZYME_IDS.SAVED_USER_ITEM
);

const USER_ID = "a385dff9-0ff3-49db-abad-1918db5e9dff";
const SINGLE_USER = {
  [USER_ID]: {
    age: 23,
    email: "christy.johnson@example.com",
    firstName: "christy",
    lastName: "johnson",
    uuid: USER_ID
  }
};

describe.skip("SavedUserList", () => {
  it("renders a list item for each user passed", () => {
    const wrapper = mount(<SavedUsersList savedUsers={SINGLE_USER} />);
    expect(wrapper.find(SAVED_USER_ITEM).length).toBe(1);
    wrapper.unmount();
  });
  it("doesn't render when no users are passed", () => {
    const wrapper = mount(<SavedUsersList />);
    expect(wrapper.html()).toBe(null);
  });
  it("each list item has a first name, last name, and x button", () => {
    const wrapper = mount(<SavedUsersList savedUsers={SINGLE_USER} />);
    expect(wrapper.find(SAVED_USER_ITEM).text()).toBe("christy johnson X");
    expect(wrapper.find(Button).exists()).toBe(true);
    wrapper.unmount();
  });
  it("calls the callback with the user id when the x button clicked", () => {
    const handleClick = jest.fn();
    const wrapper = mount(
      <SavedUsersList savedUsers={SINGLE_USER} onClick={handleClick} />
    );
    expect(handleClick).toHaveBeenCalledTimes(0);
    wrapper.find(Button).simulate("click");
    expect(handleClick).toHaveBeenCalledWith(USER_ID);
    wrapper.unmount();
  });
});
