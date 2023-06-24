import { describe, it, expect } from "vitest";
import Footer from "../src/components/Footer/Footer.jsx";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
  it("renders footer", () => {
    render(<Footer />);
    screen.debug();
  });
});
