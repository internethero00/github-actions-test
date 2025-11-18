import { render, screen } from '@testing-library/react'
import App from "./App.tsx";


test('renders hello world', () => {render(<App/>)
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument()
})