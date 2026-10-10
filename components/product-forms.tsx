"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { authService } from "@/lib/services";
import { trackEvent } from "@/lib/analytics";

export function AuthForm({
  mode,
  packageName,
}: {
  mode: "login" | "signup";
  packageName?: string;
}) {
  const [message, setMessage] = useState("");
  const isSignup = mode === "signup";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    trackEvent(isSignup ? "signup_started" : "login_started");
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") || "");
    if (!email) return;
    const result = isSignup
      ? await authService.signUp(email)
      : await authService.signIn(email);
    if (result.status === "demo") {
      setMessage("Accounts aren’t connected in this preview, so no account was created and no email was sent. You can still explore the demo.");
    }
  }

  return (
    <div className="inner-panel">
      <h2>{isSignup ? "Start with a little magic." : "Welcome back."}</h2>
      {packageName && <p>You picked the {packageName}. You can review the one-time price, but checkout isn’t enabled in this preview.</p>}
      <form className="form-stack" onSubmit={submit}>
        <label htmlFor={`${mode}-email`}>Parent or organizer email
          <input autoComplete="email" id={`${mode}-email`} name="email" placeholder="you@example.com" required type="email" />
        </label>
        <button className="button button-dark" type="submit">{isSignup ? "Create my aquarium" : "Continue"} <span>↗</span></button>
        {message && <p className="form-feedback" role="status">{message}</p>}
      </form>
      <p>{isSignup ? "Already have an account?" : "New to Finfolk?"} <Link className="inline-link" href={isSignup ? "/login" : "/signup"}>{isSignup ? "Log in" : "Start your aquarium"} <span>↗</span></Link></p>
    </div>
  );
}
