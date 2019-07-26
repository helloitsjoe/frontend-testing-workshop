import React from "react";
import { mount } from "enzyme";
import {
  SaveUsersAppLayout,
  __ENZYME_IDS
} from "../../challengeComponents/saveUsersAppLayout/saveUsersAppLayout";
import { SavedUsersList } from "../../challengeComponents/savedUsersList/savedUsersList";
import { GroupedUserCards } from "../../challengeComponents/groupedUserCards/groupedUserCards";
import { getEnzymeAttributeSelector } from "../../challengeComponents/utilities/testUtils";

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
const HEADER = getEnzymeAttributeSelector(__ENZYME_IDS.HEADER);
const PROPS = {
  data: SINGLE_USER,
  removeUser() {},
  saveUser() {}
};

describe.skip("SavedUsersAppLayout", () => {
  let wrapper;
  afterEach(() => {
    wrapper.unmount();
  });
  it("renders the passed header text", () => {
    wrapper = mount(
      <SaveUsersAppLayout headerText="User Interaction" {...PROPS} />
    );
    expect(wrapper.find(HEADER).text()).toBe("User Interaction");
  });
  it("contains SavedUsersList and GroupedUserCards", () => {
    wrapper = mount(
      <SaveUsersAppLayout headerText="User Interaction" {...PROPS} />
    );
    expect(wrapper.find(SavedUsersList).exists()).toBe(true);
    expect(wrapper.find(GroupedUserCards).exists()).toBe(true);
  });
});
