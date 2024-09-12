import { render, screen, within } from '@testing-library/react';
import App from './App';
import Crud from './Crud';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('test cases test with heading', () => {
  render(<Crud />);
  const heading = screen.getByRole('heading', {
    name: /manage employees/i
  })
  expect(heading).toBeInTheDocument();
});

test('test cases test with id', () => {
  render(<Crud />);
  const columnheader = screen.getByText(/id/i)
  expect(columnheader).toBeInTheDocument();
});

test('test cases test with name', () => {
  render(<Crud />);
  const columnheader = screen.getAllByText(/name/i)
  for (let i = 0; i < columnheader.length; i++) {
    // const subcolumnheader=within(columnheader).getByText(/name/i)
    expect(columnheader[i]).toBeInTheDocument();
  }
});

test('test cases test with email', () => {
  render(<Crud />);
  const columnheader = screen.getAllByText(/email/i)
  for (let i = 0; i < columnheader.length; i++) {
    expect(columnheader[i]).toBeInTheDocument();
  }
});

test('test cases test with password', () => {
  render(<Crud />);
  const columnheader = screen.getAllByText(/password/i)
  for (let i = 0; i < columnheader.length; i++) {
    expect(columnheader[i]).toBeInTheDocument();
  }
});

test('test cases test with city', () => {
  render(<Crud />);
  const columnheader = screen.getAllByText(/city/i)
  for (let i = 0; i < columnheader.length; i++) {
    expect(columnheader[i]).toBeInTheDocument();
  }
});

test('test cases test with Salery', () => {
  render(<Crud />);
  const columnheader = screen.getAllByText(/Salery/i)
  for (let i = 0; i < columnheader.length; i++) {
    expect(columnheader[i]).toBeInTheDocument();
  }
});

test('test renders "Logged in as"', () => {
  render(<Crud />);
  const text = screen.getByText(/Logged in as/i);
  expect(text).toBeInTheDocument();
})

test('test renders "xample@gmail.com"', () => {
  render(<Crud />);
  const text = screen.getByText(/example@gmail.com/i);
  expect(text).toBeInTheDocument();
})

// test('test cases test with button', () => {
//   render(<Crud />);
//   const button = screen.getAllByRole(/example@gmail.com/i);
//   expect(text).toBeInTheDocument();
// })

test('test renders "Oops, Wrong email or password!" message', () => {
  render(<Crud />);
  const text = screen.getByText(/Oops, Wrong email or password!/i);
  expect(text).toBeInTheDocument();
})

test('button with "OK" renders correctly', () => {
  render(<Crud />);
  const okbutton = screen.getByRole('button', { name: /ok/i });
  expect(okbutton).toBeInTheDocument();
})

test('input with placeholder renders correctly', () => {
  render(<Crud />);
  const placeholdertext = screen.getByPlaceholderText(/name/i);
  expect(placeholdertext).toBeInTheDocument();
})





