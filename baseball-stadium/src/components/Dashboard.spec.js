import React from "react";
import { render, fireEvent, getByTestId, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

import App from "../App";

import Dashboard from "./Dashboard";
import Display from "./Display";

afterEach(() => {
  cleanup();
});

describe("baseball button events", () => {
  it("renders strike button and fires up strike button", () => {
    // const { getByText } = render(<App />);
    // getByText(/strikes/i)
    // getByText(/strikes: 0/i)
    // const button = getByText(/strike/i);
    // fireEvent.click(button);
    // getByText(/strikes: 1/i)
    const app = render(<App />);
    expect(app.getByTestId("strike-button").tagName).toBe("BUTTON");
    fireEvent.click(app.getByTestId("strike-button"));
    expect(app.getByTestId("strikes-display").textContent).toBe("Strikes: 1");
  });
  it("renders ball button and fires up ball button", () => {
    // const { getByText } = render(<Dashboard />);
    const app = render(<App />);
    expect(app.getByTestId("ball-button").tagName).toBe("BUTTON");
    fireEvent.click(app.getByTestId("ball-button"));
    expect(app.getByTestId("balls-display").textContent).toBe("Balls: 1");
  });
  it("renders hit button and fires up hit button", () => {
    // const { getByText } = render(<Dashboard />);
    const app = render(<App />);
    expect(app.getByTestId("hit-button").tagName).toBe("BUTTON");
    fireEvent.click(app.getByTestId("ball-button"));
    expect(app.getByTestId("balls-display").textContent).toBe("Balls: 1");
    fireEvent.click(app.getByTestId("hit-button"));
    expect(app.getByTestId("balls-display").textContent).toBe("Balls: 0");
  });
  it("renders foul button and fires up foul button with expected behavior", () => {
    const app = render(<App />);
    expect(app.getByTestId("foul-button").tagName).toBe("BUTTON");
    fireEvent.click(app.getByTestId("foul-button"));
    expect(app.getByTestId("strikes-display").textContent).toBe("Strikes: 1");
    fireEvent.click(app.getByTestId("foul-button"));
    expect(app.getByTestId("strikes-display").textContent).toBe("Strikes: 2");
    fireEvent.click(app.getByTestId("foul-button"));
    expect(app.getByTestId("strikes-display").textContent).toBe("Strikes: 2");
  });
  it("foul button increases strikes by 2 when strike is more than 2", () => {
    const app = render(<App />);
    fireEvent.click(app.getByTestId("strike-button"));
    fireEvent.click(app.getByTestId("strike-button"));
    fireEvent.click(app.getByTestId("strike-button"));
    expect(app.getByTestId("strikes-display").textContent).toBe("Strikes: 3");
    fireEvent.click(app.getByTestId("foul-button"));
    expect(app.getByTestId("strikes-display").textContent).toBe("Strikes: 5");
    fireEvent.click(app.getByTestId("foul-button"));
    expect(app.getByTestId("strikes-display").textContent).toBe("Strikes: 7");
  });
  it("sets balls to 0 after strikes reach 3", () => {
    const app = render(<App />);
    fireEvent.click(app.getByTestId("strike-button"));
    fireEvent.click(app.getByTestId("strike-button"));
    fireEvent.click(app.getByTestId("strike-button"));
    expect(app.getByTestId("strikes-display").textContent).toBe("Strikes: 3");
    expect(app.getByTestId("balls-display").textContent).toBe("Balls: 0");
  });
  it("sets strikes to 0 after balls reach 4", () => {
    const app = render(<App />);
    fireEvent.click(app.getByTestId("ball-button"));
    fireEvent.click(app.getByTestId("ball-button"));
    fireEvent.click(app.getByTestId("ball-button"));
    fireEvent.click(app.getByTestId("ball-button"));
    expect(app.getByTestId("balls-display").textContent).toBe("Balls: 4");
    expect(app.getByTestId("strikes-display").textContent).toBe("Strikes: 0");
  });
});
