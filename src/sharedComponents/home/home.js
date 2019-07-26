import React from "react";
import { navigate } from "@reach/router";
import { Button } from "../../challengeComponents/button/button";
import { SectionTitle } from "../../challengeComponents/sectionTitle/sectionTitle";
import Highlight from "react-highlight";
import "./home.css";

export const Home = () => (
  <div className="Home">
    <div className="Home-section">
      <h1>Welcome to the Testing Workshop!</h1>
      <p>
        This codesandbox is designed to be an open-ended challenge of your
        testing know-how. We've created a few versions of the same application
        to give you a wide breadth of real-world testing challenges. You will
        test user interaction, aync data fetching, and more.
      </p>
    </div>
    <div className="Home-section">
      <SectionTitle titleText="How does it work?" />
      <p>
        We've provided a series of exercises in the form of tickets real-world
        engineers would receive. Each ticket has a goal, acceptance criteria,
        and implementation details to help guide you. The process is simple:
      </p>

      <ol className="Home-list">
        <li className="Home-listItem">Fork this sandbox</li>
        <li className="Home-listItem">
          Take a ticket, and accomplish the acceptance criteria in any way you
          see fit.
        </li>
        <li className="Home-listItem">
          If you have a testing mentor, run your solution through them as a
          light code review. If you do not, you can reference our solutions
          folder.
        </li>
        <li className="Home-listItem">
          Repeat until you've completed every ticket
        </li>
        <li className="Home-listItem">
          Do some freeform testing! Try testing some of our utility functions or
          expanding on the coverage you have already done.
        </li>
      </ol>
    </div>
    <div className="Home-section">
      <SectionTitle titleText="Sandbox Setup" />
      <p>
        All of our testing exercises center around different implementations of
        the SaveUsers application. This app has some basic functionality. Given
        a collection of users, render a user card for each user. If you click
        the add user button on a user card, it adds that user to the SavedUsers
        sidebar. You can then click to remove that user from the SavedUsers
        sidebar. Thats it.
      </p>
      <p>
        We've taken that basic functionality and served it up in two distinct
        ways. One version is hydrated with a static object of users already
        formatted for that app to consume. That's the <strong>StaticApp</strong>{" "}
        component. The second version looks exactly the same but is hydrated
        with an API call and features user tracking for the add and remove user
        actions. That's the <strong>AsyncApp</strong> component.
      </p>
    </div>
    <div className="Home-section">
      <SectionTitle titleText="Writing Tests" />
      <p>
        Let's start with basic structure. All testable code is located under the{" "}
        challengeComponents directory. Anything located in that directory is
        fair game to write tests for.
      </p>
      <p>
        In every component folder, we've included a sub-directory named
        <code>__tests__</code>. This is where you should place your tests. By
        convention, tests should be named after the component or function they
        are testing, followed by <code>_spec.test.js</code>. For example, when
        writing a test for the Card component, you would create a file in the{" "}
        <code>__tests__</code> subdirectory of the Card component, and name it
        something like <code>card_spec.test.js</code>
      </p>
    </div>
    <div className="Home-section">
      <SectionTitle titleText="Our Solutions" />
      <p>
        We've provided "solution" files for the components and utility
        functions. These solutions are not exhaustive, and represent one opinion
        of how to write test coverage for these components and function. In
        general, they follow a few rules:
      </p>
      <ol className="Home-list">
        <li className="Home-listItem">
          Test user paths, not component internals
        </li>
        <li className="Home-listItem">
          Use dependency injection and mock functions where possible.
        </li>
        <li className="Home-listItem">Write deterministic async tests.</li>
      </ol>
    </div>
    <div className="Home-section">
      <SectionTitle titleText="What About Testing Libraries?" />
      <p>
        We are using Jest and Enzyme here. For more information, see the{" "}
        <a
          className="Home-link"
          href="https://jestjs.io/docs/en/using-matchers"
        >
          Jest Docs
        </a>{" "}
        and the{" "}
        <a className="Home-link" href="https://airbnb.io/enzyme/docs/api/">
          Enzyme Docs
        </a>
      </p>
    </div>
    <div className="Home-section">
      <SectionTitle titleText="Getting Started" />
      <p>
        Check out our{" "}
        <Button type="text" onClick={() => navigate("/exercises")}>
          exercises page
        </Button>{" "}
        to get started.
      </p>
    </div>
  </div>
);
