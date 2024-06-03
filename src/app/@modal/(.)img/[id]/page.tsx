import React from "react";
import { getImage } from "~/server/queries";
import { Modal } from "./model";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const image = await getImage(parseInt(photoId));
  return (
    <Modal>
      <img
        className="h-[250px] w-[250px] rounded-lg object-cover"
        src={image.url}
        alt=""
      />
    </Modal>
  );
}
