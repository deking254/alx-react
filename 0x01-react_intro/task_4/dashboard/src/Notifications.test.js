import {render, screen} from '@testing-library/react';
import Notifications from './Notifications';

test("checking that notifications renders three list items", ()=>{
  render(<Notifications />);
  expect(screen.getByRole('list').children.length).toEqual(3);
})

test("checking that notifications renders the text Here is the list of nofications", ()=>{
  render(<Notifications />);
  expect(screen.getByText("Here is the list of notifications")).toBeInTheDocument();
})
