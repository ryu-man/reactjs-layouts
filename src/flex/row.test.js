import { render } from "@testing-library/react";
import Row from "./row";

it("Row test", () => {
	const { container } = render(<Row />);

	expect(container.firstChild.className).toContain("row layout");
});
