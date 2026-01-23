"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

type HireDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormState = "idle" | "loading" | "success" | "error";

export function HireDrawer({ isOpen, onClose }: HireDrawerProps) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [formState, setFormState] = React.useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  // scroll lock
  React.useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Reset form when closing
  React.useEffect(() => {
    if (!isOpen) {
      // Delay reset to allow close animation
      const timeout = setTimeout(() => {
        setName("");
        setEmail("");
        setMessage("");
        setFormState("idle");
        setErrorMessage("");
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  // Escape key to close
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message");
      }

      setFormState("success");
    } catch (error) {
      console.error("Error sending message:", error);
      setFormState("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* OVERLAY */}
          <motion.div
            className="fixed inset-0 z-50 bg-[rgba(2,2,2,0.50)] backdrop-blur-[16px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
          />

          {/* DRAWER */}
          <motion.div
            className="
              fixed z-50 top-0 right-0 bottom-0
              w-full max-w-md
              flex flex-col
              bg-color-bg
              border-l border-color-border
            "
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
          >
            {/* HEADER */}
            <div className="flex items-center justify-between p-6 border-b border-color-border">
              <h2 className="type-h4">Let&apos;s work together</h2>
              <button
                onClick={handleClose}
                className="
                  inline-flex h-8 w-8 items-center justify-center
                  rounded-full
                  bg-color-bg-surface
                  border border-color-border
                  text-color-text-secondary
                  hover:text-color-text-primary hover:border-color-border-secondary
                  transition-colors
                "
                aria-label="Close drawer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* CONTENT */}
            <div className="flex-1 flex flex-col p-6">
              {formState === "success" ? (
                /* SUCCESS STATE */
                <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#18C340]/20 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#18C340" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="type-h4 mb-2">Message sent!</h3>
                    <p className="type-body-sm text-color-text-secondary">
                      Thanks for reaching out, {name}. I&apos;ll get back to you soon.
                    </p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="
                      mt-4 py-2 px-6
                      rounded-full
                      border border-color-border
                      type-body-sm
                      hover:bg-color-bg-surface
                      transition-colors
                    "
                  >
                    Close
                  </button>
                </div>
              ) : (
                /* FORM */
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="hire-name" className="type-label">
                      Name
                    </label>
                    <input
                      id="hire-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      disabled={formState === "loading"}
                      className="
                        w-full px-4 py-3
                        rounded-lg
                        bg-transparent
                        border border-color-border
                        text-color-text-primary
                        placeholder:text-color-60
                        focus:outline-none focus:border-color-border-secondary
                        transition-all duration-300 ease-out
                        hover:border-[rgba(85,90,75,0.6)]
                        type-body-sm
                        disabled:opacity-50
                      "
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="hire-email" className="type-label">
                      Your email
                    </label>
                    <input
                      id="hire-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      disabled={formState === "loading"}
                      className="
                        w-full px-4 py-3
                        rounded-lg
                        bg-transparent
                        border border-color-border
                        text-color-text-primary
                        placeholder:text-color-60
                        focus:outline-none focus:border-color-border-secondary
                        transition-all duration-300 ease-out
                        hover:border-[rgba(85,90,75,0.6)]
                        type-body-sm
                        disabled:opacity-50
                      "
                      required
                    />
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="hire-message" className="type-label">
                      Message
                    </label>
                    <textarea
                      id="hire-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your project..."
                      disabled={formState === "loading"}
                      className="
                        w-full px-4 py-3 flex-1 min-h-[160px]
                        rounded-lg
                        bg-transparent
                        border border-color-border
                        text-color-text-primary
                        placeholder:text-color-60
                        focus:outline-none focus:border-color-border-secondary
                        transition-all duration-300 ease-out
                        hover:border-[rgba(85,90,75,0.6)]
                        type-body-sm
                        resize-none
                        disabled:opacity-50
                      "
                      required
                    />
                  </div>

                  {/* Error Message */}
                  {formState === "error" && (
                    <p className="type-body-sm text-red-400">
                      {errorMessage || "Failed to send message. Please try again."}
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="
                      w-full py-3 px-6
                      rounded-full
                      bg-color-text-primary
                      text-color-bg
                      type-body-sm-strong
                      hover:opacity-90
                      transition-opacity
                      flex items-center justify-center gap-2
                      disabled:opacity-50 disabled:cursor-not-allowed
                    "
                  >
                    {formState === "loading" ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send message</span>
                        <svg width="16" height="16" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2z"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
