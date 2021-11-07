import Router from "@koa/router";
import { general } from "./controller";

const unprotectedRouter = new Router();

// Hello World route
unprotectedRouter.get("/", general.helloWorld);
unprotectedRouter.get("/screenshot", general.screenshot);
export { unprotectedRouter };
