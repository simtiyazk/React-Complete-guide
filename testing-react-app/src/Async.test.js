import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async test', () => {
    test('to check if post succeeds and data received & displayed', async () => {
        // Using mock to create a dummmy function, this helps in API call or sessionStorage and such scenarios
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json : async () => [{ id:'p1', title: 'First Post'}]
        })
        // Arrange
        render(<Async />);

        const listitemEleemnt = await screen.findAllByRole('listitem');
        expect(listitemEleemnt).not.toHaveLength(0);
    })
})
