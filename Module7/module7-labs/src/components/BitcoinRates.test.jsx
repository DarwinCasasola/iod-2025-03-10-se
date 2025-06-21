import { render, screen, waitFor } from "@testing-library/react";
import BitcoinRates from "./BitcoinRates";
import * as hook from "../hooks/useBitcoinRate";

// Mock the custom hook
jest.mock("../hooks/useBitcoinRate");

describe("BitcoinRates component", () => {
    test("shows loading message", () => {
        hook.useBitcoinRate.mockReturnValue({ rate: null, loading: true, error: "" });
        render(<BitcoinRates />);
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    test("shows rate when loaded", () => {
        hook.useBitcoinRate.mockReturnValue({ rate: 42000, loading: false, error: "" });
        render(<BitcoinRates />);
        expect(screen.getByText(/42000/i)).toBeInTheDocument();
    });

    test("shows error message", () => {
        hook.useBitcoinRate.mockReturnValue({ rate: null, loading: false, error: "Failed to fetch" });
        render(<BitcoinRates />);
        expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
    });
});
