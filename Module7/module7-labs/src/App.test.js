import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Bitcoin Exchange Rate heading", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { name: /Bitcoin Exchange Rate/i });
    expect(heading).toBeInTheDocument();
});
