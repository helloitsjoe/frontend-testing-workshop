import React from "react";
import { AsyncApp } from "../../challengeComponents/asyncApp/asyncApp";
import {
  mockUserData,
  formattedUserData
} from "../../challengeComponents/utilities/mockUserData";
import { GroupedUserCards } from "../../challengeComponents/groupedUserCards/groupedUserCards";
import { UserCard } from "../../challengeComponents/userCard/userCard";
import { Button } from "../../challengeComponents/button/button";
import { __ENZYME_IDS } from "../../challengeComponents/savedUsersList/savedUsersList";
import { mount } from "enzyme";
import { ErrorMessage } from "../../challengeComponents/errorMessage/errorMessage";
import waitForExpect from "wait-for-expect";
import { getEnzymeAttributeSelector } from "../../challengeComponents/utilities/testUtils";

const SERVER_RESPONSE = {
  data: {
    results: mockUserData
  }
};

const SAVED_USER_ITEM = getEnzymeAttributeSelector(
  __ENZYME_IDS.SAVED_USER_ITEM
);

describe.skip("AsyncApp API Handling", () => {
  let wrapper;
  afterEach(() => {
    wrapper.unmount();
  });
  it("Formats the API response and passes formatted users to GroupedUserCards", () => {
    const fetchUsers = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve(SERVER_RESPONSE));
    wrapper = mount(<AsyncApp fetchUsers={fetchUsers} />);
    return waitForExpect(() => {
      wrapper.update();
      expect(wrapper.find(GroupedUserCards).props().users).toEqual(
        formattedUserData
      );
    });
  });
  it("Renders an ErrorMessage component if there is a failure to fetch or format the API response", () => {
    const fetchUsers = jest
      .fn()
      .mockImplementationOnce(() => Promise.reject({}));
    wrapper = mount(<AsyncApp fetchUsers={fetchUsers} />);
    return waitForExpect(() => {
      wrapper.update();
      expect(wrapper.find(ErrorMessage).exists()).toBe(true);
    });
  });
});

describe.skip("AsyncApp Tracking", () => {
  it('fires "saveUser" tracking with the user id when clicking the add user button on a UserCard and "removeUser" tracking when clicking the "X" button on the SavedUsersList', () => {
    const fetchUsers = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve(SERVER_RESPONSE));
    const tracking = { track: jest.fn() };
    const wrapper = mount(
      <AsyncApp fetchUsers={fetchUsers} tracking={tracking} />
    );
    return waitForExpect(() => {
      wrapper.update();
      // Select the first user card in the group
      const userCard = wrapper.find(UserCard).at(0);
      // Pull user id from that card
      const userId = userCard.props().uuid;
      // Click the "add user" button
      userCard.find(Button).simulate("click");
      // Expect our mock tracking function to have been called with the
      // right shaped tracking object.
      expect(tracking.track).toHaveBeenCalledWith({
        eventName: "saveUser",
        data: {
          userId
        }
      });
      // Clear the mocks for a clean simulation
      jest.clearAllMocks();
      // Now find the user we just saved with the "add user" button click
      const savedUser = wrapper.find(SAVED_USER_ITEM);
      // Click to remove the user
      savedUser.find(Button).simulate("click");
      // Expect our mock tracking function to have been called with the
      // right shaped tracking object.
      expect(tracking.track).toHaveBeenCalledWith({
        eventName: "removeUser",
        data: {
          userId
        }
      });
      wrapper.unmount();
    });
  });
});
