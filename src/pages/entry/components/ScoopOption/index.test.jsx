import { render, screen } from "@testing-library/react";

import { rest } from "msw";
import { server } from "../../../../mocks/server";
import ScoopOption from "./index";

describe("Scoop Option Component Test", () => {
  test("이미지가 정상적으로 렌더링되는지 테스트", async () => {
    render(<ScoopOption />);

    const images = await screen.findAllByRole("img", { name: /scoop$/i });
    expect(images).toHaveLength(2);
  });

  test("500에러 발생했을 때 alert 표시 테스트", async () => {
    server.resetHandlers(
      rest.get("http://localhost:3030/scoops", (req, res, ctx) =>
        res(ctx.status(500))
      )
    );

    render(<ScoopOption />);
    const alert = await screen.findByRole("alert");

    expect(alert).toBeInTheDocument();
  });
});
