import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { LoginForm } from "../pages/Login/LoginForm";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { LoginFormMock } from "../__mocks__/LoginForm.mock";

describe("LoginForm", () => {
  // ejecuta afterEach cuando termina cada prueba
  afterEach(cleanup);
  afterEach(jest.clearAllMocks);

  // comprobar que cargue el componente
  // beforeAll carga antes de cada it
  beforeEach(() => {
    // evitamos repetir varias veces el mismo código
    render(<LoginForm />);
  });

  it("should two input and a submit button exists at the screen", async () => {
    const usernameInput = screen.getByRole("textbox", {
      name: /Nombre de usuario/i,
    });
    const passwordInput = screen.getByRole("textbox", {
      name: /Password/i,
    });
    const submitButton = screen.getByRole("button", {
      name: /Iniciar sesion/i,
    });

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    expect(submitButton).toBeDisabled();

    expect(usernameInput).toHaveValue("");
    expect(passwordInput).toHaveValue("");
  });

  it("should enable the submit button if the form values are valid", async () => {
    const usernameInput = screen.getByRole("textbox", {
      name: /Nombre de usuario/i,
    });
    const passwordInput = screen.getByRole("textbox", {
      name: /Password/i,
    });
    const submitButton = screen.getByRole("button", {
      name: /Iniciar sesion/i,
    });

    // escribir en los inputs con mock
    await userEvent.type(usernameInput, LoginFormMock.username);
    await userEvent.type(passwordInput, LoginFormMock.password);

    // peticiones, esperar respuesta de una accion, etc
    await waitFor(() => {
      expect(usernameInput).toHaveValue(LoginFormMock.username);
      expect(passwordInput).toHaveValue(LoginFormMock.password);
      expect(submitButton).not.toBeDisabled();
    });
  });
});
