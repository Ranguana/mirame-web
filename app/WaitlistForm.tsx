"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "duplicate">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const { error } = await supabase
      .from("waitlist")
      .insert({ email: email.toLowerCase().trim() });

    if (error) {
      if (error.code === "23505") {
        setStatus("duplicate");
      } else {
        setStatus("error");
      }
    } else {
      setStatus("success");
      setEmail("");
    }
  }

  if (status === "success") {
    return (
      <p style={{ color: "white", fontSize: 18, fontWeight: 600, fontFamily: "Space Grotesk, sans-serif" }}>
        You&rsquo;re on the list.
      </p>
    );
  }

  return (
    <form className="waitlist-form" onSubmit={handleSubmit}>
      <input
        type="email"
        className="waitlist-input"
        placeholder="Your email address"
        required
        aria-label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading"}
      />
      <button type="submit" className="waitlist-submit" disabled={status === "loading"}>
        {status === "loading" ? "..." : "Join Waitlist"}
      </button>
      {status === "duplicate" && (
        <p style={{ color: "#ff8c42", fontSize: 13, marginTop: 12, position: "absolute", bottom: -32, left: 0, right: 0, textAlign: "center" }}>
          You&rsquo;re already on the list!
        </p>
      )}
      {status === "error" && (
        <p style={{ color: "#ff8c42", fontSize: 13, marginTop: 12, position: "absolute", bottom: -32, left: 0, right: 0, textAlign: "center" }}>
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}
