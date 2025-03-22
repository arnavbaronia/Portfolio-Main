import React, { useContext, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";
import { store } from "../../App";
import toast from "react-hot-toast";
import playAudio from "../../utils/Helpers/playAudio";

export default function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);
  const [state] = useContext(store);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
  
    if (form.current) {
      const formData = new FormData(form.current);
  
      const data = {
        from_name: formData.get("user_name") as string,
        from_email: formData.get("user_email") as string,
        to_name: "Arnav",
        message: `You have received a new message from ${formData.get("user_name")} (${formData.get("user_email")}):\n\n${formData.get("message")}`,
      };
  
      console.log("Sending data:", data);
  
      try {
        const result = await emailjs.send(
          "service_3wn9fwn",
          "template_r6o1ld5", 
          data,
          "e3WBukrIPyg3IFN-T" 
        );
  
        console.log("EmailJS result:", result.text);
        toast.success(
          state.language === "english" ? "Message sent!" : "Message sent!",
          {
            position: "top-left",
            style: {
              border: state.darkmode ? "2px solid hsla(0,0%,51.4%,.16)" : "1px solid #ebebeb",
              boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.225)",
              borderRadius: "14px",
              fontFamily: "Inter",
              color: state.darkmode ? "white" : "#1d1d1f",
              fontSize: "14px",
              backgroundColor: state.darkmode ? "#141414" : "",
            },
          }
        );
  
        form.current.reset();
      } catch (error) {
        console.error("EmailJS error:", error);
        toast.error(
          state.language === "english"
            ? "Failed to send message. Try again."
            : "Failed to send message. Try again."
        );
      }
    }
  };  

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className={`contact-form-container ${
        state.darkmode ? "dark-card" : "light-card"
      } ${state.darkmode ? "dark-shadow" : "light-shadow"}`}
    >
      <div className="input-container">
        <input
          className={`field data ${state.darkmode ? "dark-field" : "light-field"}`}
          type="text"
          name="user_name"
          placeholder={state.language === "english" ? "Your name" : "Your name"}
          required
        />
        <input
          className={`field data ${state.darkmode ? "dark-field" : "light-field"}`}
          type="email"
          name="user_email"
          placeholder={state.language === "english" ? "Your email address" : "Your email address"}
          required
        />
      </div>
      <textarea
        name="message"
        placeholder={state.language === "english" ? "Your message for me" : "Your message for me"}
        className={`field ${state.darkmode ? "dark-field" : "light-field"}`}
        required
      />
      <input
        type="submit"
        value={state.language === "english" ? "Submit" : "Submit"}
        className="submit"
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      />
    </form>
  );
}