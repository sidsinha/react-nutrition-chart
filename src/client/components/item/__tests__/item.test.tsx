import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Item from './../item';

const ItemProps = {
  id: 1, 
  name: "Oreo", 
  calories: 319,
  fat: 23,
  carbs: 123,
  protein: 45,
  selected: true
}

afterEach(cleanup);

test('render 1 item', async() => {
    const { getByTestId } = render(<Item {...ItemProps} />);
    expect(screen.getByText(ItemProps.name)).toBeInTheDocument();
    expect(getByTestId("checkbox_nutrition")).toHaveAttribute("checked");
  });

  test('validate style', async() => {
    const { container } = render(<Item {...ItemProps} />);
    expect(container.firstChild).toHaveClass('flex pv3 justify-around bb b--moon-gray');
  });

  test('matches snapshot', async() => {
    const { container } = render(<Item {...ItemProps} />)
    expect(container.firstChild).toMatchSnapshot();
  });