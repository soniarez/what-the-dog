import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import DogCreeping from "../components/finderView/DogCreeping";

/**
 * @vitest-environment jsdom
 */

describe("Dog animation componet", () => {

  it("renders Courage the dog image", () => {
    render(
      <Router>
        <DogCreeping />
      </Router>
    );
    const dogImg = screen.getByRole("img", { name: "courage the dog" });
    expect(dogImg).toBeInTheDocument();
  });

});