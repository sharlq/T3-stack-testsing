"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="modal-backdrop">
      <dialog
        ref={dialogRef}
        className="modal box-border flex flex-col items-center justify-center gap-3  overflow-hidden  rounded-lg p-4"
        onClose={onDismiss}
      >
        {children}
        <button
          onClick={onDismiss}
          className="close-button  h-16 w-28 rounded-lg bg-slate-800 text-white"
        >
          Close
        </button>
      </dialog>
    </div>,
    document.getElementById("modal-root")!,
  );
}
