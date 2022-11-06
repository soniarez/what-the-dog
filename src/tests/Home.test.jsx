import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../views/Home";

/**
 * @vitest-environment jsdom
 */

describe("Home view", () => {
  it("renders labnotes title", () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const welcomeText = screen.getByText("What The Dog");
    expect(welcomeText).toBeInTheDocument();
  });

  it("renders dog image", () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const dogImg = screen.getByRole("img", { name: "dog gif" });
    expect(dogImg).toBeInTheDocument();
  });

  it("renders button", () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const startButton = screen.getByRole("button");
    expect(startButton).toBeInTheDocument();
  });
});
