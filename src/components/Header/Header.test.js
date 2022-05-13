import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";

describe("header tests", () => {
  it("renders item options", () => {
    render(<Header />, { wrapper: BrowserRouter });

    const collectionsButton = screen.getByRole("button", {
      name: /collections/i,
    });
    const nftsButton = screen.getByRole("button", { name: /nfts/i });

    expect(collectionsButton).toBeInTheDocument();
    expect(nftsButton).toBeInTheDocument();
  });

  it("renders blockchain options", () => {
    render(<Header />, { wrapper: BrowserRouter });

    const allButton = screen.getByRole("button", {
      name: /all/i,
    });
    const ftxButton = screen.getByRole("button", {
      name: /ftx/i,
    });
    const ethButton = screen.getByRole("button", {
      name: /eth/i,
    });
    const solButton = screen.getByRole("button", {
      name: /sol/i,
    });

    expect(allButton).toBeInTheDocument();
    expect(ftxButton).toBeInTheDocument();
    expect(ethButton).toBeInTheDocument();
    expect(solButton).toBeInTheDocument();
  });
});
