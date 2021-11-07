import { Context } from "koa";

import {
  request,
  summary,
  path,
  body,
  responsesAll,
  tagsAll,
  desc,
  description,
} from "koa-swagger-decorator";

@tagsAll(["General"])
export default class GeneralController {
  @request("get", "/")
  @summary("Welcome page")
  @description(
    "A simple welcome message to verify the service is up and running."
  )
  public static async helloWorld(ctx: Context): Promise<void> {
    ctx.body = "Hello World!";
  }

  @request("post", "/screenshot")
  @summary("Capture screenshot")
  @description("Capture a screenshot from browser session.")
  public static async screenshot(ctx: Context): Promise<void> {
    //var body = ctx.request.body;
    //console.log(body);
    ctx.status = 200;
    ctx.body = "Hello World!";
  }
}
