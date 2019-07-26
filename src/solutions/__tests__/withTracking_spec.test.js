import React from "react";
import { withTracking } from "../../sharedComponents/withTracking/withTracking";
import { mount } from "enzyme";

test.skip("withTracking adds a track prop to the component", () => {
  /* eslint-disable-next-line */
  class Component extends React.Component {
    render() {
      return <span className="test" />;
    }
  }
  const Tracked = withTracking(Component);
  const wrapper = mount(<Tracked />);

  expect(wrapper.find(Component).props().tracking).toMatchObject({
    track: expect.any(Function)
  });

  wrapper.unmount();
});
