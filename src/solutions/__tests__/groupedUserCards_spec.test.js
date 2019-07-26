import React from "react";
import { mount } from "enzyme";
import { GroupedUserCards } from "../../challengeComponents/groupedUserCards/groupedUserCards";
import { UserCard } from "../../challengeComponents/userCard/userCard";

const TWO_USERS = {
  "a385dff9-0ff3-49db-abad-1918db5e9dff": {
    age: 23,
    email: "christy.johnson@example.com",
    firstName: "christy",
    lastName: "johnson",
    uuid: "a385dff9-0ff3-49db-abad-1918db5e9dff"
  },
  "b9f2cd17-49a2-4614-af76-cd3e9ed2a51e": {
    age: 64,
    email: "olivia.morgan@example.com",
    firstName: "olivia",
    lastName: "morgan",
    uuid: "b9f2cd17-49a2-4614-af76-cd3e9ed2a51e"
  }
};

const SAVED_USER_IDS = ["a385dff9-0ff3-49db-abad-1918db5e9dff"];

describe.skip("GroupedUserCards", () => {
  it("renders a UserCard for each user provided in the object", () => {
    const wrapper = mount(<GroupedUserCards users={TWO_USERS} />);
    expect(wrapper.find(UserCard).length).toBe(2);
    wrapper.unmount();
  });
  it("renders 'No Users!' text when no users are passed", () => {
    const wrapper = mount(<GroupedUserCards />);
    expect(wrapper.find(UserCard).length).toBe(0);
    expect(wrapper.text()).toBe("No Users!");
    wrapper.unmount();
  });
  it("passes the isSelected prop to every user card with an id that exists in the savedUserIds array", () => {
    const wrapper = mount(
      <GroupedUserCards users={TWO_USERS} savedUserIds={SAVED_USER_IDS} />
    );
    expect(
      wrapper
        .find(UserCard)
        .at(0)
        .props().isSelected
    ).toBe(true);
    wrapper.unmount();
  });
});
