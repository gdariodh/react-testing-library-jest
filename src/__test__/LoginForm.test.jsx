import { cleanup, render, screen } from "@testing-library/react";
import { LoginForm } from "../pages/Login/LoginForm";
import "@testing-library/jest-dom";

describe("LoginForm", () => {
  // ejecuta afterEach cuando termina cada prueba
  afterEach(cleanup);
  afterEach(jest.clearAllMocks);

  // comprobar que cargue el componente
  // beforeAll carga antes de cada it
  beforeAll(() => {
    // evitamos repetir varias veces el mismo código
    render(<LoginForm />);
  });

  it("should two input exists at the screen", () => {
    const usernameInput = screen.getByRole("textbox", {
      name: /Nombre de usuario/i,
    });
    const passwordInput = screen.getByRole("textbox", {
      name: /Password/i,
    });

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    expect(usernameInput).toHaveValue("");
    expect(passwordInput).toHaveValue("");
  });
});
