import { Hono } from "hono";
import { encodeBase64 } from 'hono/utils/encode'
import sparkinit from "../assets/images/sparkinit.svg";
import background from "../assets/images/background.png";

const router = new Hono();

router.get('/profile.svg', async (c) => {
	const base64Image = encodeBase64(background);
	const injection = `data:image/png;base64,${base64Image}`;
	const modifiedSvg = sparkinit.replace('xlink:href=""', `xlink:href="${injection}"`);
	return c.body(modifiedSvg, 200, {
		'Content-Type': 'image/svg+xml',
		'Cache-Control': 'public, max-age=604800',
	});
});

export default router;