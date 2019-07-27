import React, { useEffect } from "react";
import { Card } from "../../challengeComponents/card/card";
import { SectionTitle } from "../../challengeComponents/sectionTitle/sectionTitle";
import { Button } from "../../challengeComponents/button/button";
import { navigate } from "@reach/router";
import Highlight from "react-highlight";
import "./exercises.css";

export const Exercises = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main className="Exercises">
      <div className="Layout-header">
        <SectionTitle
          titleText="Testing Exercises for StaticApp"
          headingLevel={1}
        />
      </div>

      <div className="Exercises-cardWrapper">
        <Card>
          <SectionTitle
            titleText="Exercise 1 - Testing Core UI Components"
            headingLevel={2}
          />
          <p className="Exercises-cardCriteria">Link</p>
          <Button type="text" onClick={() => navigate("/exerciseOne")}>
            Save Users App (hydrated with props)
          </Button>
          <p className="Exercises-cardCriteria">Goal</p>
          <p>
            React gives us the power to build and compose small, modular elements
            into larger pieces. Covering these core components with tests has an
            outsized impact because they are re-used so often. Let's build an
            understanding of component testing by writing tests for our most
            basic elements.
          </p>
          <p className="Exercises-cardCriteria">Acceptance Criteria:</p>
          <p>
            Write acceptable test coverage for the following components. It's up
            to you to decide how much to cover of each component. For reference,
            check the solutions folder and see what we felt was important to
            test, and how we tested those things.
          </p>
          <ul className="Exercises-list">
            <li className="Exercises-listItem">Test the Button component</li>
            <li className="Exercises-listItem">Test the Card component</li>
            <li className="Exercises-listItem">Test the Sidebar component</li>
            <li className="Exercises-listItem">Test the Layout component</li>
            <li className="Exercises-listItem">
              Test the SectionTitle component
            </li>
          </ul>
          <p className="Exercises-cardCriteria">Implementation Details:</p>
          <p>
            We've provided a helper for your testing needs called
            getEnzymeAttributeSelector. This helper function, located in the
            testUtils file within utilities, is a shortcut to select
            data-enzyme-ids on components. Heres an example of a data-enzyme-id
            used in a component -
          </p>
          <Highlight language="javascript">
            {`
export const __ENZYME_IDS = {
  TITLE: "Component-Title"
};

export const Component = props => {
  const { title, children } = props;
  return (
    <aside>
      <h2 data-enzyme-id={__ENZYME_IDS.TITLE}>{title}</h2>
      {children}
    </aside>
  );
};`}
          </Highlight>
          <p>And here's how you would use it in a test.</p>
          <Highlight language="javascript">
            {`
import {
  Component,
  __ENZYME_IDS
} from "../../component;
import { getEnzymeAttributeSelector } from "../../challengeComponents/utilities/testUtils";

const TITLE = getEnzymeAttributeSelector(__ENZYME_IDS.TITLE);

test("renders title text", () => {
  const wrapper = mount(<Component title="This is a title" />);
  expect(wrapper.find(TITLE).text()).toBe("This is a title");
});
        `}
          </Highlight>
          <p>
            We use data-enzyme-ids as a stable selector for component tests
            which are agnostic of component implementation details. For example,
            using a className as a selector in a test explictly ties the test to
            the component implementation, which should be able to change without
            breaking the test. Feel free to add as many enzyme id's as you think
            you need while accomplishing these exercises
          </p>
        </Card>

        <Card>
          <SectionTitle
            titleText="Exercise 2 - Testing Larger Pieces"
            headingLevel={2}
          />
          <p className="Exercises-cardCriteria">Link</p>
          <Button type="text" onClick={() => navigate("/exerciseOne")}>
            Save Users App (hydrated with props)
          </Button>
          <p className="Exercises-cardCriteria">Goal</p>
          <p>
            Now that we have test coverage of our core UI elements, it's time to
            test the features composed of those elements.
          </p>
          <p className="Exercises-cardCriteria">Acceptance Criteria:</p>
          <p>
            Write acceptable test coverage for the following components. It's up
            to you to decide how much to cover of each component. For reference,
            check the solutions folder and see what we felt was important to
            test, and how we tested those things.
          </p>
          <ul className="Exercises-list">
            <li className="Exercises-listItem">Test the UserCard component</li>
            <li className="Exercises-listItem">
              Test the SavedUsersList component
            </li>
            <li className="Exercises-listItem">
              Test the GroupedUserCards component
            </li>
          </ul>
          <p className="Exercises-cardCriteria">Implementation Details:</p>
          <p>
            We've provided some mock data for your use in testing, either as a
            reference for data shape, or to use directly. We've provided both a
            mockUserData object, which represents the response object from the
            REST api, and a formattedUserData object, which represents the data
            after we have reshaped it for component consumption with the
            `formatUserData` function.
          </p>
          <Highlight language="javascript">
            {`
import {formattedUserData, mockUserData} from '../../utilities/mockUserData'
          `}
          </Highlight>
        </Card>

        <Card>
          <SectionTitle
            titleText="Exercise 3 - Testing The Entire App"
            headingLevel={2}
          />
          <p className="Exercises-cardCriteria">Link</p>
          <Button type="text" onClick={() => navigate("/exerciseOne")}>
            Save Users App (hydrated with props)
          </Button>
          <p className="Exercises-cardCriteria">Goal</p>
          <p>
            We have testing coverage for all of our pieces. Now it's time to put
            it all together and write something closer to an integration test.
            This exercise will require you to mount the app, perform simulated
            exercises, and assert the proper user interfaces updated in the
            proper way.
          </p>
          <p className="Exercises-cardCriteria">Acceptance Criteria:</p>
          <p>
            Write test coverage for the following actions. Be sure to stay as
            close to the client experience as possible, and stay away from
            testing component instances and/or component methods directly.
          </p>
          <ul className="Exercises-list">
            <li className="Exercises-listItem">
              Test that clicking "save user" on a UserCard component adds that
              user to the SavedUsersList.
            </li>
            <li className="Exercises-listItem">
              Test that clicking the "X" button on a SavedUsersList user item
              removes that user from the SavedUsersList.
            </li>
            <li>
              Test that GroupedUserCards recieves the savedUserIds prop with the
              right saved user ids once you have a saved user.
            </li>
          </ul>
          <p className="Exercises-cardCriteria">Implementation Details:</p>
          There's a saying in frontend testing - "Don't test internals". This is
          another way of saying not to test component internals. The excellent
          Kent C. Dodds wrote an excellent article{" "}
          <a
            href="https://kentcdodds.com/blog/testing-implementation-details"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{" "}
          that dives deep into that concept. Please read this article before you
          work on this larger scale integration-like test.
          <p />
        </Card>
      </div>

      <div className="Layout-header">
        <SectionTitle
          titleText="Testing Exercises for AsyncApp"
          headingLevel={1}
        />
      </div>
      <div className="Exercises-cardWrapper">
        <Card>
          <SectionTitle
            titleText="Exercise 1 - Testing the Data Fetching"
            headingLevel={2}
          />
          <p className="Exercises-cardCriteria">Link</p>
          <Button type="text" onClick={() => navigate("/exerciseTwo")}>
            Save Users App (hydrated with a fetch call)
          </Button>
          <p className="Exercises-cardCriteria">Goal</p>
          <p>
            We are now testing the async version of the Save Users App. If you
            click the link above, you'll notice this async version looks exactly
            the same as the previous static version (except for the heading
            text) but it has a few key differences. This version feeds in it's
            user data from an external API,and uses a withTracking higher order
            component to track the user behavior of adding and removing users.
            You are tasked with writing tests for AsyncApp that test the
            component can fetch and format data properly.
          </p>
          <p className="Exercises-cardCriteria">Acceptance Criteria:</p>
          <p>
            Since we have tested the addUser and removeUser methods in our
            previous exercises, we will be focusing only on the data fetching
            portion for this exercise.
          </p>
          <ul className="Exercises-list">
            <li className="Exercises-listItem">
              Test that AsyncApp, using the fetchUsers function, formats the API
              response and passes formatted user data to GroupedUserCards to
              render cards"
            </li>
            <li className="Exercises-listItem">
              Test that a failure to fetch or format data results in the
              appearance of the ErrorMessage component.
            </li>
          </ul>
          <p className="Exercises-cardCriteria">Implementation Details:</p>
          <p>
            We're now entering the tricky world of async JS testing. We now have
            to consider issues like network calls leaking out of our jest tests,
            deterministic vs non-deterministic assertions, and more. Don't
            worry, we've provided some tools and leveraged techniques to make
            this as straightforward as possible.
          </p>
          <p className="Exercises-cardCriteria">New Techniques and Methods: </p>
          <ul className="Exercises-list">
            <li className="Exercises-listItem">
              Dependency Injection: We've passed in our fetch call as a prop to
              >Dependency Injection: We've passed in our fetch call as a prop to
              the AsyncApp component. This gives us the power to test AsyncApp
              with a mock version of fetchUsers that we can control. You will
              need to leverage this, and Jest mocks to write a successful test
              the first part of this exercise. More info on jest mocks{" "}
              <a
                href="https://jestjs.io/docs/en/mock-function-api.html#mockfnmockresolvedvaluevalue"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
            </li>
            <li className="Exercises-listItem">
              Wait-for-expect: We've provided this library to help you test
              AsyncApp's data fetching component. Because this component relies
              on async actions to fetch data, we need a way to wait for the
              promise to resolve before we can make any assertions. This library
              helps us do that in a controlled way. More info{" "}
              <a
                href="https://github.com/TheBrainFamily/wait-for-expect"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
            </li>
            <li className="Exercises-listItem">
              Multiple exports: If you look at the AsyncApp exports, you will
              notice we have exported a default version of the component which
              is wrapped in the withTracking higher order component. We have
              also name-exported the non-wrapped version of the component as
              well. This gives you the option of testing the non-wrapped version
              of the component and not have to worry about mocking the tracking
              HoC.
            </li>
          </ul>
        </Card>

        <Card>
          <SectionTitle
            titleText="Exercise 2 - Testing Tracking"
            headingLevel={2}
          />
          <p className="Exercises-cardCriteria">Link</p>
          <Button type="text" onClick={() => navigate("/exerciseTwo")}>
            Save Users App (hydrated with a fetch call)
          </Button>
          <p className="Exercises-cardCriteria">Goal</p>
          <p>
            User tracking is a critical function of many websites - we use this
            information to pinpoint how our users are interacting with features
            and the results drive development choices. To protect this critical
            business function, we need to write tests for our tracking
            implementations.
          </p>
          <p className="Exercises-cardCriteria">Acceptance Criteria:</p>
          <p>
            Write tests to ensure the tracking fired when saving and removing
            users is fired with the proper data and event names.
          </p>
          <ul className="Exercises-list">
            <li className="Exercises-listItem">
              Test that clicking the "add user" button on a UserCard calls the
              tracking function with an object of the following shape:
              <Highlight language="javascript">
                {`
{
  eventName: "saveUser",
  data: {
    userId
  }
}
          `}
              </Highlight>
            </li>
            <li className="Exercises-listItem">
              Test that clicking the "X" button on a saved user calls the
              tracking function with an object of the following shape:
              <Highlight language="javascript">
                {`
{
  eventName: "removeUser",
  data: {
    userId
  }
}
          `}
              </Highlight>
            </li>
          </ul>
          <p className="Exercises-cardCriteria">Implementation Details:</p>
          <p>
            We've implemented tracking using a withTracking higher order
            component. This HoC injects a tracking object into the component it
            wraps of the following shape:
          </p>
          <Highlight language="javascript">
            {`
tracking: {
  track: (args) => {
    console.log(args);
    return args
  }
}
          `}
          </Highlight>
          <p>
            This is obviously not a real tracking function, but the shape and
            HoC mimic many production tracking setups. This raises an issue
            though, how do we test tracking was called with a wrapped component?
            You don't necessarily have to.
          </p>
          <p>
            Similar to the async exercise, you can test the non-wrapped version
            of the component and pass in a mocked tracking function of the same
            shape as the one the HoC passes in.
          </p>
        </Card>
      </div>
    </main>
  );
};
