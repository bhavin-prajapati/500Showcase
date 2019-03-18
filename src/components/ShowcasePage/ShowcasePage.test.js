import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ShowcaseComponent } from "./ShowcasePage";

configure({ adapter: new Adapter() });

describe("Showcase Page", () => {
  let subject;
  let history;
  let mockGetUser;
  let mockLoadShowcase;

  describe("Load showcase", () => {
    beforeEach(() => {
      history = { push: () => {} };
      mockGetUser = jest.fn();
      mockLoadShowcase = jest.fn();
      subject = shallow(
        <ShowcaseComponent
          history={history}
          getUser={mockGetUser}
          loadShowcase={mockLoadShowcase}
        />
      );
    });

    it("Render", () => {
      expect(subject).toHaveLength(1);
    });
  });

  describe("Render component", () => {
    beforeEach(() => {
      history = { push: () => {} };
      mockGetUser = jest.fn();
      subject = shallow(
        <ShowcaseComponent
          history={history}
          getUser={mockGetUser}
          showcase={{ data: "testing 123" }}
        />
      );
    });

    it("Render", () => {
      expect(subject).toHaveLength(1);
    });
  });

  describe("Get User", () => {
    beforeEach(() => {
      history = { push: () => {} };
      mockGetUser = jest.fn();
      document.cookie = "_sid=12345;max-age=60";
      subject = shallow(
        <ShowcaseComponent
          history={history}
          getUser={mockGetUser}
          showcase={{ data: "testing 123" }}
        />
      );
    });

    it("Render", () => {
      expect(subject).toHaveLength(1);
    });
  });
});
