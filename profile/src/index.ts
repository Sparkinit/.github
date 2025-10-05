import { Hono } from "hono";
import assetsRouter from './routes/assets.get';

const app = new Hono();
app.route('/assets', assetsRouter);

export default app;
