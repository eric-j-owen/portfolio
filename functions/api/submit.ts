import { Request } from "@cloudflare/workers-types";

export async function onRequestPost(context: { request: Request }) {
  try {
    let input = await context.request.formData();
    let pretty = JSON.stringify([...input], null, 2);
    return new Response(pretty, {
      headers: {
        "Content-Type": "application/json;ccharset=utf-8",
      },
    });
  } catch (err) {
    return new Response("error parsing json content", { status: 400 });
  }
}
