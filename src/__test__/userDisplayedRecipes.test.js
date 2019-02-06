import React from "react";
import { shallow, mount } from "enzyme";
import { UserDisplayedRecipes } from "../components/userDisplayedRecipes";

//TODO: COULD ADD A FEW MORE SMOKE TESTS

describe("<UserDisplayedRecipes />", () => {
  it("renders without crashing", () => {
    const props = {      
      item: {
        id:2001
      }
    }
    const wrapper = shallow(<UserDisplayedRecipes {...props} />);
    //console.log(wrapper.debug());
  });
});
