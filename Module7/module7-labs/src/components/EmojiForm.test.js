import { render, screen, fireEvent } from "@testing-library/react";
import EmojiForm from "./EmojiForm";

describe("EmojiForm component", () => {
    test("updates input value and displays submitted emoji", () => {
        render(<EmojiForm />);

        const input = screen.getByLabelText(/your favorite emoji/i);
        const button = screen.getByRole("button", { name: /submit/i });

        // Simulate user typing
        fireEvent.change(input, { target: { value: "🔥" } });

        // Submit the form
        fireEvent.click(button);

        // Check that the emoji was submitted and rendered
        expect(screen.getByText(/submitted emoji/i)).toHaveTextContent("🔥");
    });
});
