/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/navbar';
import React from 'react';

// Navbar componentinin, logo ve linkleri içeren bir şekilde render edildiğini kontrol eden test
test('renders Navbar with links and logo', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  // Logo ve linklerin render edilip edilmediğini kontrol etme
  const logoElement = screen.getByText(/clothes story/i);
  const homeLinkElement = screen.getByText(/home/i);
  const productsLinkElement = screen.getByText(/products/i);

  expect(logoElement).toBeInTheDocument();
  expect(homeLinkElement).toBeInTheDocument();
  expect(productsLinkElement).toBeInTheDocument();
});

// Shopping cart ikonunun doğru renkte render edildiğini kontrol eden test
test('renders shopping cart icon with correct style', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  // Alışveriş sepeti ikonunun render edilip edilmediğini ve stilini kontrol etme
  const shoppingCartIcon = screen.getByLabelText(/shopping cart/i);

  expect(shoppingCartIcon).toBeInTheDocument();
  expect(shoppingCartIcon).toHaveStyle({ color: "#EEEEEE" });
});

// Diğer test senaryolarını ekleyebilirsiniz (örneğin, linklere tıklama durumu).

