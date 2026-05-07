import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App';

describe('App', () => {
  test('muestra Hola Mundo al cargar', () => {
    render(<App />);
    expect(screen.getByText(/hola mundo/i)).toBeInTheDocument();
  });

  test('saluda con el nombre escrito', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByRole('textbox'), 'Ana');
    await user.click(screen.getByRole('button', { name: /saludar/i }));

    expect(screen.getByText(/hola, ana/i)).toBeInTheDocument();
  });

  test('si el campo está vacío mantiene Hola Mundo', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /saludar/i }));

    expect(screen.getByText(/hola mundo/i)).toBeInTheDocument();
  });
});