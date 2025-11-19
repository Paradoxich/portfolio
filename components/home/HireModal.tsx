"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
export default function HireModal() {
  const [open, setOpen] = useState(false);
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between">
        <span className="text-white/80 text-sm">Available for hire</span>
        <button
          onClick={() => setOpen(true)}
          className="px-3 py-2 rounded-xl bg-olive text-white/90"
        >
          Tell me about your project
        </button>
      </div>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/70" />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 card p-6 w-[92vw] max-w-[520px]">
            <Dialog.Title className="text-white font-semibold mb-3">
              Tell me about your project
            </Dialog.Title>
            <form className="grid gap-3">
              <input
                className="bg-bg border border-line rounded-xl px-3 py-2"
                placeholder="Your email"
              />
              <select className="bg-bg border border-line rounded-xl px-3 py-2">
                <option>Budget: not sure yet</option>
                <option>€3–5k</option>
                <option>€5–10k</option>
                <option>€10k+</option>
              </select>
              <textarea
                rows={4}
                className="bg-bg border border-line rounded-xl px-3 py-2"
                placeholder="What’s the project about?"
              />
              <button className="rounded-xl bg-olive text-white/90 px-4 py-2">
                Send
              </button>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
