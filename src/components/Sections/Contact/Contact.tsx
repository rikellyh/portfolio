import { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";

import { SendEmailSchema } from "../../../schemas";
import "./contact.css";

type FormData = z.infer<typeof SendEmailSchema>;

export const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const contactRef = useRef<HTMLDivElement>(null);
  const messageFormRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(SendEmailSchema),
  });

  const sendEmail: SubmitHandler<FormData> = () => {
    if (!messageFormRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        messageFormRef.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          console.log(error);
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="contact__wrapper" ref={contactRef}>
      <form
        className="contact__wrapper--form"
        ref={messageFormRef}
        onSubmit={handleSubmit(sendEmail)}
      >
        <h1>Vamos manter contato ;)</h1>
        <div className="contact__wrapper--formItem">
          <label>Nome</label>
          <input
            type="text"
            placeholder="Ex: Rikelly Mendes"
            {...register("user_username")}
          />
          {errors.user_username && (
            <span className="error">{errors.user_username.message}</span>
          )}
        </div>
        <div className="contact__wrapper--formItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="kelly-m83@gmail.com"
            {...register("user_email")}
          />
          {errors.user_email && (
            <span className="error">{errors.user_email.message}</span>
          )}
        </div>
        <div className="contact__wrapper--formItem">
          <label>Mensagem</label>
          <textarea
            rows={10}
            placeholder="Digite sua mensagem aqui"
            {...register("user_message")}
          ></textarea>
          {errors.user_message && (
            <span className="error">{errors.user_message.message}</span>
          )}
        </div>
        <button className="contact__wrapper--formButton">Enviar</button>
        {success && <span>Sua mensagem foi enviada com sucesso!</span>}
        {error && <span>Ops! Tente novamente.</span>}
      </form>
    </div>
  );
};
