import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp />", () => {
  test("debe agregar una categoria", () => {
    render(<GifExpertApp />);
    const form = screen.getByRole("form");
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Valorant" } });
    fireEvent.submit(form);

    fireEvent.input(input, { target: { value: "Dragon ball" } });
    fireEvent.submit(form);

    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(3);
  });

  test("no debe agregar una categoria si ya existe", () => {
    const jsdomAlert = window.alert;
    window.alert = () => {};

    render(<GifExpertApp />);
    const form = screen.getByRole("form");
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "One Punch" } });
    fireEvent.submit(form);
    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(1);

    window.alert = jsdomAlert;
  });
});
