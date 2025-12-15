import { render } from '@testing-library/react';
import App from './App';

test('renders the app', () => {
  const { container } = render(<App />);
  const appElement = container.querySelector('.App');
  expect(appElement).toBeInTheDocument();
});
