"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
export default function HireModal() {
  const [open, setOpen] = useState(false);
  return (
    <div className="panel stack-md">
      <div className="flex items-center justify-between">
        <span className="type-body-sm text-color-text-primary/80">
          Available for hire
        </span>
        <button
          onClick={() => setOpen(true)}
          className="rounded-pill border border-color-border bg-color-bg-surface px-4 py-2 type-body-sm-strong text-color-text-primary"
        >
          Tell me about your project
        </button>
      </div>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-color-bg/70" />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 card stack-md w-[92vw] max-w-[520px]">
            <Dialog.Title className="type-h4 text-color-text-primary">
              Tell me about your project
            </Dialog.Title>
            <form className="grid gap-3">
              <input
                className="rounded-surface border border-color-border bg-color-bg px-3 py-2 type-body-sm text-color-text-primary"
                placeholder="Your email"
              />
              <select className="rounded-surface border border-color-border bg-color-bg px-3 py-2 type-body-sm text-color-text-primary">
                <option>Budget: not sure yet</option>
                <option>€3–5k</option>
                <option>€5–10k</option>
                <option>€10k+</option>
              </select>
              <textarea
                rows={4}
                className="rounded-surface border border-color-border bg-color-bg px-3 py-2 type-body-sm text-color-text-primary"
                placeholder="What’s the project about?"
              />
              <button className="rounded-pill border border-color-border bg-color-bg-surface px-4 py-2 type-body-sm-strong text-color-text-primary">
                Send
              </button>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
