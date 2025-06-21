import { render, screen } from "@testing-library/react";
import BitcoinRates from "./BitcoinRates";
import * as hook from "../hooks/useBitcoinRate";
import { EmojiProvider } from "../context/EmojiContext";

// Mock the custom hook
jest.mock("../hooks/useBitcoinRate");

// Helper to render with EmojiProvider
const renderWithEmojiProvider = () => {
    return render(
        <EmojiProvider>
            <BitcoinRates />
        </EmojiProvider>
    );
};

describe("BitcoinRates component", () => {
    test("shows loading message", () => {
        hook.useBitcoinRate.mockReturnValue({
            rate: null,
            loading: true,
            error: ""
        });

        renderWithEmojiProvider();
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    test("shows rate when loaded", () => {
        hook.useBitcoinRate.mockReturnValue({
            rate: 42000,
            loading: false,
            error: ""
        });

        renderWithEmojiProvider();
        expect(screen.getByText(/42000/i)).toBeInTheDocument();
    });

    test("shows error message", () => {
        hook.useBitcoinRate.mockReturnValue({
            rate: null,
            loading: false,
            error: "Failed to fetch"
        });

        renderWithEmojiProvider();
        expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
    });
});
