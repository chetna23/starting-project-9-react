import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

jest.mock('./Async', () => () => <div>Mock</div>);

describe('Greeting component', () => {
  // test('renders Hello World as a text', () => {
  //   //Arrange
  //   render(<Greeting />);

  //   //Act
  //   //...nothing

  //   //Assert
  //   const helloWorldElement = screen.getByText('Hello World', {
  //     exact: false,
  //   });
  //   expect(helloWorldElement).toBeInTheDocument();
  // });

  beforeEach(() => {
    // jest.resetModules();
    jest.doMock('./Async', () => {
      const Async = () => <div>Mock</div>;
      return Async;
    });
  });

  test("renders It's good to see you when button was NOT clicked", () => {
    // jest.mock('./Async', () => {
    //   return jest.fn(() => `<div>Mock</div>`);
    // });

    // jest.mock('./Async', () => {
    //   return {
    //     __esModule: true,
    //     default: jest.fn(() => `<div>Mock</div>`),
    //     render: jest.fn(() => `<div>Mock</div>`),
    //   };
    // });

    //Arrange
    render(<Greeting />);

    //Act
    //...nothing

    //Assert
    const outputElement = screen.getByText("It's good to see you!", {
      exact: true,
    });
    const mockElement = screen.getByText('Mock', {
      exact: true,
    });
    expect(mockElement).toBeInTheDocument();
  });

  // test('renders Changed! when button IS clicked', () => {
  //   //Arrange
  //   render(<Greeting />);

  //   //Act
  //   //...nothing
  //   const buttonElement = screen.getByRole('button');
  //   userEvent.click(buttonElement);

  //   //Assert
  //   const outputElement = screen.getByText('Changed!', {
  //     exact: true,
  //   });
  //   expect(outputElement).toBeInTheDocument();
  // });

  // test("does not render It's good to see you when button IS clicked", () => {
  //   //Arrange
  //   render(<Greeting />);

  //   //Act
  //   //...nothing
  //   const buttonElement = screen.getByRole('button');
  //   userEvent.click(buttonElement);

  //   //Assert
  //   const outputElement = screen.queryByText("It's good to see you!", {
  //     exact: false,
  //   });
  //   expect(outputElement).toBeNull();
  // });
});
