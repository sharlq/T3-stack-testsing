import React from "react";
import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const image = await getImage(parseInt(photoId));
  return (
    <div>
      <img
        className="h-[200px] w-[200px] rounded-lg object-cover"
        src={image.url}
        alt=""
      />
    </div>
  );
}
