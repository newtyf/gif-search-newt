import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe("Pruebas en <GifItem />", () => {
  const title = "One Punch Man Gif";
  const url =
    "https://media3.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=ea146d384s28crehs3279gymn9x2qn3vzasxbq9pw0asjjfi&rid=giphy.gif&ct=g";

  test("debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} imgUrl={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifItem title={title} imgUrl={url} />);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("debe de mostrar el titulo en el componente", () => {
    render(<GifItem title={title} imgUrl={url} />);
    expect(screen.getByText(title)).toBeTruthy()
  });
});