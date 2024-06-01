import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getMyImages() {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
    where: (model, { eq }) => eq(model.user_Id, user.userId),
  });

  return images;
}
