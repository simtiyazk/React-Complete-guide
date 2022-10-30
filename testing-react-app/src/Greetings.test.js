import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings"

describe('Greeting component', () => {
    test('Search React word', () => {
        render(<Greetings />)
        // Act
    
        // Assert
        const searcElement = screen.getByText(/React/);
        expect(searcElement).toBeInTheDocument();
    });


    test('check if initial text is present', () => {
        render(<Greetings />)

        const initialText = screen.getByText('initial text', { exact: false });
        expect(initialText).toBeInTheDocument();
    });

    test('check if button is clicked and text changes', () => {
        // Arrange
        render(<Greetings />)

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert
        const changedText = screen.getByText('changed text', { exact: false });
        expect(changedText).toBeInTheDocument();
    })

    test('test - initial text should not render after button clicked', () => {
        // Arrange
        render(<Greetings />)

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert
        const initialTextafterButtonClick = screen.queryByText('initial text', { exact: false });
        expect(initialTextafterButtonClick).toBeNull();
    })
})
