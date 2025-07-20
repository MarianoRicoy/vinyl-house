export const dynamic = "force-static";
// EN LAS API ROUTES NO FUNCIONA BIEN AXIOS

export async function GET() {
  const res = await fetch(process.env.API_URL + "/products");
  const data = await res.json();

  return Response.json(data);
}
