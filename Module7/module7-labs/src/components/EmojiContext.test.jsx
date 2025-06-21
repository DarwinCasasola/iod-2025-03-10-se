import { render, screen, fireEvent } from "@testing-library/react";
import { EmojiProvider } from "../context/EmojiContext";
import EmojiChanger from "./EmojiChanger";
import BitcoinRates from "./BitcoinRates";

const renderWithProvider = () => {
    render(
        <EmojiProvider>
            <EmojiChanger />
            <BitcoinRates />
        </EmojiProvider>
    );
};

describe("EmojiContext integration", () => {
    test("default emoji is shown in both components", () => {
        renderWithProvider();

        // Select all <h3> elements on the page
        const headings = screen.getAllByRole("heading", { level: 3 });

        expect(headings[0]).toHaveTextContent("Current Mood: 🙂");
        expect(headings[1]).toHaveTextContent("Bitcoin Exchange Rate 🙂");
    });

    test("clicking a mood button updates emoji across components", () => {
        renderWithProvider();

        // Click the 🤩 button
        fireEvent.click(screen.getByText("🤩"));

        const headings = screen.getAllByRole("heading", { level: 3 });

        expect(headings[0]).toHaveTextContent("Current Mood: 🤩");
        expect(headings[1]).toHaveTextContent("Bitcoin Exchange Rate 🤩");
    });
});
