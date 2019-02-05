import React from "react";
import { shallow, mount } from "enzyme";
import LandingPage from "../components/landingPage";
import toJSON from "enzyme-to-json";

describe("<LandingPage>", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<LandingPage />);
    //console.log(wrapper.debug());
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
