'use server';
const POST = async () => {
  // await 1 second before sending response
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return Response.json({ success: true }, { status: 200 });
};

export { POST };
