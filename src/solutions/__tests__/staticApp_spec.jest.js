import React from "react";
import { mount } from "enzyme";
import { StaticApp } from "../../challengeComponents/staticApp/staticApp";
import { SavedUsersList } from "../../challengeComponents/savedUsersList/savedUsersList";
import { GroupedUserCards } from "../../challengeComponents/groupedUserCards/groupedUserCards";
import { Button } from "../../challengeComponents/button/button";

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

describe.skip("Exercise One", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<StaticApp data={SINGLE_USER} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it("Adds a user to the SavedUsersList when a user clicks 'add user' on a UserCard", () => {
    // Null to start
    expect(wrapper.find(SavedUsersList).props().savedUsers).toBe(null);
    // Add the user
    wrapper
      .find(GroupedUserCards)
      .find(Button)
      .simulate("click");
    expect(wrapper.find(SavedUsersList).props().savedUsers).toEqual(
      SINGLE_USER
    );
  });
  it("Removes a user from the SavedUsersLists when a user clicks the 'X' button on the SavedUserItem", () => {
    // Add the user
    wrapper
      .find(GroupedUserCards)
      .find(Button)
      .simulate("click");
    expect(wrapper.find(SavedUsersList).props().savedUsers).toEqual(
      SINGLE_USER
    );
    // Remove the user
    wrapper
      .find(SavedUsersList)
      .find(Button)
      .simulate("click");
    expect(wrapper.find(SavedUsersList).props().savedUsers).toEqual({});
  });
  it("passes the right saved user ids to the GroupedUserCards component", () => {
    wrapper
      .find(GroupedUserCards)
      .find(Button)
      .simulate("click");
    expect(wrapper.find(GroupedUserCards).props().savedUserIds).toEqual([
      USER_ID
    ]);
  });
});
