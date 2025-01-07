import { createPreviewHandler } from "@uniformdev/canvas-next";

const handler = createPreviewHandler({
	secret: () => "abcdef",
});

export default handler;
