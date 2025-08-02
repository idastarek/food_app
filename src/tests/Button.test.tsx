import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../components/Button';

describe(Button, () => {
    const buttonText = "Get recipes!";
    
    it('renders with correct text', () => {
        render(<Button type="button" text={buttonText} />);
        const button = screen.getByText(buttonText);
        expect(button).toBeInTheDocument();
    })  
  
    it('calls onClick handler when clicked', async() => {
        const handleClick = vi.fn();
        render(<Button type="button" text={buttonText} onClick={handleClick} />);
        await userEvent.click(screen.getByText(buttonText));
        expect (handleClick).toHaveBeenCalled();
    })

    it('has the correct type attribute', () => {
        render(<Button type="button" text={buttonText}/>);
        const button = screen.getByText(buttonText);
        expect(button).toHaveAttribute('type', 'button');
    })
})