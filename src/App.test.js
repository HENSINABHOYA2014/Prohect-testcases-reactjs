import { render, screen, within, fireEvent } from '@testing-library/react';
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
  const text = screen.getByText(/Logged in as/i);
  const headingmanage = screen.getByRole('heading', {
    name: /Manage/i
  })
  const headingemployee = screen.getByRole('heading', {
    name: /Employees/i
  })

  expect(heading).toBeInTheDocument();
  expect(text).toBeInTheDocument();
  expect(headingmanage).toBeInTheDocument();
  expect(headingemployee).toBeInTheDocument();

});

test('test cases test with id', () => {
  render(<Crud />);
  const columnheader = screen.getByText(/id/i)
  expect(columnheader).toBeInTheDocument();
});

test('test cases test with label name', () => {
  render(<Crud />);
  const labelname = screen.getAllByText(/name/i)
  const labelemail = screen.getAllByText(/email/i)
  const labelpassword = screen.getAllByText(/password/i)
  const labelcity = screen.getAllByText(/city/i)
  const labelsalery = screen.getAllByText(/Salery/i)
  for (let i = 0; i < labelname.length; i++) {
    expect(labelname[i]).toBeInTheDocument();
  }
  for (let i = 0; i < labelemail.length; i++) {
    expect(labelemail[i]).toBeInTheDocument();
  }
  for (let i = 0; i < labelpassword.length; i++) {
    expect(labelpassword[i]).toBeInTheDocument();
  }
  for (let i = 0; i < labelcity.length; i++) {
    expect(labelcity[i]).toBeInTheDocument();
  }
  for (let i = 0; i < labelsalery.length; i++) {
    expect(labelsalery[i]).toBeInTheDocument();
  }
});


test('test renders with text', () => {
  render(<Crud />);
  const text1 = screen.getByText(/example@gmail.com/i);
  const text2 = screen.getByText(/Oops, Wrong email or password!/i);
  expect(text1).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
})

// test('test cases test with button', () => {
//   render(<Crud />);
//   const button = screen.getAllByRole(/example@gmail.com/i);
//   expect(text).toBeInTheDocument();
// })

test('button with "OK" renders correctly', () => {
  render(<Crud />);
  const okbutton = screen.getByRole('button', { name: /ok/i });
  expect(okbutton).toBeInTheDocument();
})

test('input with placeholder renders correctly', () => {
  render(<Crud />);
  const nameplaceholder = screen.getByPlaceholderText(/name/i);
  const emailplaceholder = screen.getByPlaceholderText(/email@email.com/i);
  const passwordplaceholder = screen.getByPlaceholderText(/Password/i);
  const cityplaceholder = screen.getByPlaceholderText(/City/i);
  const saleryplaceholder = screen.getByPlaceholderText(/Salery/i);

  fireEvent.change(nameplaceholder, { target: { value: 'deviiii,hensi', } });
  // expect(nameplaceholder.value.trim()).toBe('deviiii,hensi');
  fireEvent.change(emailplaceholder, { target: { value: 'shruti@gmail.commmm,sudama@gmail.com' } });
  expect(emailplaceholder).toBeInTheDocument();


  expect(passwordplaceholder).toBeInTheDocument()
  expect(cityplaceholder).toBeInTheDocument();
  expect(saleryplaceholder).toBeInTheDocument();
})

test('should render the modal with correct class names', () => {
  render(<Crud editId={true}/>);
  // Test the modal element
  const modal = screen.getByTestId('modal');
  expect(modal).toBeInTheDocument();
  expect(modal).toHaveClass('modal');

  // const modalId = screen.getByTestId('modal');
  // expect(modalId).toHaveClass('modal');

  // Check the 'Logged in as' text and its parent
  const loggedInText = screen.getByText('Logged in as :');
  expect(loggedInText).toBeInTheDocument();
  expect(loggedInText.parentElement).toHaveClass('modal-content');

  // Check for the logged user's email and its class
  const emailText = screen.getByText('example@gmail.com');
  expect(emailText).toBeInTheDocument();
  expect(emailText).toHaveClass('logged-user');

  // const exampleText = screen.getByText((content, element) => {
  //   return content.includes('logged-user');
  // });
  // expect(exampleText).toBeInTheDocument();
  // expect(exampleText.parentElement).toHaveClass('logged-user');

  // const loggeduser = screen.getByTestId('logged-user');
  // expect(loggeduser).toHaveClass('logged-user');

  // Test the toast element
  const toast = screen.getByTestId('toast');
  expect(toast).toHaveClass('toast');

  // const toastId = screen.getByTestId('toast');
  // expect(toastId).toHaveClass('toast');

  // Test for the exclamation icon (fa-exclamation-circle)
  const exclamationIcon = document.querySelector('i.fas.fa-exclamation-circle');
  expect(exclamationIcon).toBeInTheDocument();
  expect(exclamationIcon).toHaveClass('fa-exclamation-circle');

  // Test for the exclamation icon (fa-exclamation-circle)
  const closeIcon = document.querySelector('i.fas.fa-close');
  expect(closeIcon).toBeInTheDocument();
  expect(closeIcon).toHaveClass('fa-close');

  // Check for the text inside the toast
  const toastText = screen.getByText('Oops, Wrong email or password!');
  expect(toastText).toBeInTheDocument();
  expect(toastText).toHaveClass('toast-text');

  // Check the form text and its parent
  const form = document.querySelector('.form');
  expect(form).toBeInTheDocument();
  expect(form).toHaveClass('form');

  // Get the form-control div by using querySelector based on the class
  const formControlDiv = document.querySelector('.form-control');
  expect(formControlDiv).toBeInTheDocument();
  expect(formControlDiv).toHaveClass('form-control');

  // Test for the input field with placeholder "Name"
  const inputNameFeild = screen.getByPlaceholderText("Name");
  expect(inputNameFeild).toBeInTheDocument();
  // Check that the input has the correct 'name' and 'type' attributes
  expect(inputNameFeild).toHaveAttribute('name', 'name');
  expect(inputNameFeild).toHaveAttribute('type', 'text');

  // Test for the input field with placeholder "Email"
  const inputEmailFeild = screen.getByPlaceholderText("email@email.com");
  expect(inputEmailFeild).toBeInTheDocument();
  // Check that the input has the correct 'name' and 'type' attributes
  expect(inputEmailFeild).toHaveAttribute('name', 'email');
  expect(inputEmailFeild).toHaveAttribute('type', 'text');


  // Get the input field using the label text
  // const inputEmailFor = screen.getByLabelText("Email");
  // expect(inputEmailFor).toBeInTheDocument();

  // Test for the input field with placeholder "Password"
  const inputPasswordFeild = screen.getByPlaceholderText("Password");
  expect(inputPasswordFeild).toBeInTheDocument();
  // Check that the input has the correct 'name' and 'type' attributes
  expect(inputPasswordFeild).toHaveAttribute('name', 'password');
  expect(inputPasswordFeild).toHaveAttribute('type', 'password');

  // Test for the input field with placeholder "City"
  const inputCityFeild = screen.getByPlaceholderText("City");
  expect(inputCityFeild).toBeInTheDocument();
  // Check that the input has the correct 'name' and 'type' attributes
  expect(inputCityFeild).toHaveAttribute('name', 'city');
  expect(inputCityFeild).toHaveAttribute('type', 'text');

  // Test for the input field with placeholder "Salery"
  const inputSaleryFeild = screen.getByPlaceholderText("Salery");
  expect(inputSaleryFeild).toBeInTheDocument();
  // Check that the input has the correct 'name' and 'type' attributes
  expect(inputSaleryFeild).toHaveAttribute('name', 'salery');
  expect(inputSaleryFeild).toHaveAttribute('type', 'text');
})

// test('should render style class', () => {
//   render(<Crud />)
//   const editButton = screen.getAllByText(/Edit/i)
//   for (let i = 0; i < editButton.length; i++) {
//     expect(editButton[i]).toBeInTheDocument();
//   }
  
//   expect(editButton).toHaveStyle('backgroundColor:DimGray')
//   expect(editButton).toHaveStyle('color:white')
//   expect(editButton).toHaveStyle('padding:10px 25px')
//   expect(editButton).toHaveStyle('fontSize:18px')
//   expect(editButton).toHaveStyle('border:none')
//   expect(editButton).toHaveStyle('backgroundColor:SlateGray')
// })
