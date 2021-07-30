import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Listing from './../listing';

const items = [
    {
        "id": 1,
        "name": "Oreo",
        "protein": 4,
        "fat": 18,
        "calories": 437,
        "carbs": 63
    },
    {
        "id": 2,
        "name": "Nougat",
        "protein": 37,
        "fat": 19,
        "calories": 308,
        "carbs": 9
    },
    {
        "id": 3,
        "name": "Marshmallow",
        "protein": 2,
        "fat": 0,
        "calories": 318,
        "carbs": 81
    }
]

afterEach(cleanup);

test('should render all todos', async() => {
    const { getByText } = render(<Listing itemList={items} status="sucess" />);
    for (const item of items) {
      expect(getByText(item.name)).toBeInTheDocument();
    }
  });

test('matches snapshot', async() => {
    const { container } = render(<Listing itemList={items} status="sucess" />)
    expect(container.firstChild).toMatchSnapshot();
  });