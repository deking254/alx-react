import { render, screen } from '@testing-library/react';
import App from './App';

test("checking that div with class App-header exists", ()=>{
  render(<App />);
  expect(screen.getByRole('header-div')).toHaveClass("App-header");
})

test("checking that div with class App-body exists", ()=>{
  render(<App />);
  expect(screen.getByRole("body-div")).toHaveClass("App-body");
});

test("checking that div with class App-footer exists", ()=>{
  render(<App />);
  expect(screen.getByRole("footer-div")).toHaveClass("App-footer");
})
