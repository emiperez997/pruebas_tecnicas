"use client";

import { useState } from "react";
import { Button } from "../Common/Button/Button";
import style from "./contact.module.css";

export function Contact() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (
      !name ||
      name.trim() === "" ||
      !email ||
      email.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      setError("Please fill in all fields");

      setTimeout(() => {
        setError("");
      }, 2000);

      return;
    }

    e.currentTarget.reset();

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  return (
    <aside className={style.contact}>
      <h2>Contact</h2>

      {error && (
        <span className={style.errorContainer}>
          <p>{error}</p>
        </span>
      )}

      {success && (
        <span className={style.successContainer}>
          <p onClick={() => setSuccess(false)}>Message sent!</p>
        </span>
      )}

      <form action="" onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" type="text" placeholder="John Doe" required />

        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="john@example.com"
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          placeholder="Hi! I would like to contact you..."
          required
        ></textarea>

        <Button bg="primary">Send</Button>
      </form>
    </aside>
  );
}
