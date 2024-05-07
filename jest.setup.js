// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

const originalConsoleError = console.error;
const originalConsoleWarning = console.warn;

// Esse erro é um problema de incompatibilidade entre as versões do Next, React e Jest. Muitas pessoas estão reclamando desse mesmo problema, e não encontrei nenhuma solução definitiva. Então, criei isso para ignorar a mensagem de erro.
beforeEach(() => {
  console.error = (message) => {

    if (
      !message.includes("React does not recognize the `fetchPriority` prop")
    ) {
      console.error = jest.fn();
    }
  };

  console.warn = (message) => {
    if (!message.includes("Warning: Prop `className` did not match")) {
      console.warn = jest.fn();
    }
  };
});

// Após cada teste, restaura console.error original
afterEach(() => {
  console.error = originalConsoleError;
  console.warn = originalConsoleWarning;
});
