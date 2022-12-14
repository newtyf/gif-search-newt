import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  test("debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({ images: [], isLoading: true });

    const category = "One Punch";
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando...")).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });

  test("dede de mostrar items cuando se cargan las imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https://aaa.com",
      },
      {
        id: "XYZ",
        title: "DB",
        url: "https://bbb.com",
      },
    ];
    useFetchGifs.mockReturnValue({ images: gifs, isLoading: false });
    const category = "One Punch";
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
