import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('Should render same text passed into title prop', async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i)
    expect(headingElement).toBeInTheDocument();
});

// //GET By Role, pass object with prop name
// it('Should render same text passed into title prop', async () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByRole('heading', { name: "My Header" })
//     expect(headingElement).toBeInTheDocument();
// });


// //GET By Test ID
// it('Should render same text passed into title prop', async () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByTestId('header1')
//     expect(headingElement).toBeInTheDocument();
// });


// //FIND BY (Anything Async)

// it('Should render same text passed into title prop', async () => {
//     render(<Header title="My Header" />);
//     const headingElement = await screen.findByText(/my header/i)
//     expect(headingElement).toBeInTheDocument();
// });

// // Query BY
// // The not test for the opposite, elements that are not in the component

// it('Should render same text passed into title prop', async () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.queryByText(/dogs/i)
//     expect(headingElement).not.toBeInTheDocument();
// });
