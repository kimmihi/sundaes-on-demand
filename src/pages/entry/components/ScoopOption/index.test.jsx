import { render, screen } from "@testing-library/react";

import ScoopOption from "./index";

describe("Scoop Option Component Test", () => {
  test("이미지가 정상적으로 렌더링되는지 테스트", async () => {
    render(<ScoopOption />);

    const images = await screen.findAllByRole("img", { name: /scoop$/i });
    expect(images).toHaveLength(2);
  });
});
