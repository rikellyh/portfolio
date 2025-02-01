import { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { motion, useInView } from "motion/react";
import emailjs from "@emailjs/browser";

import { SendEmailSchema } from "../../../schemas";

type FormData = z.infer<typeof SendEmailSchema>;

const viewAnimations = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

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

  const isVisible = useInView(contactRef, { margin: "-200px" });

  return (
    <div className="contact" ref={contactRef}>
      <div className="cSection">
        <motion.form
          ref={messageFormRef}
          onSubmit={handleSubmit(sendEmail)}
          variants={viewAnimations}
          animate={isVisible ? "animate" : "initial"}
        >
          <motion.h1 variants={viewAnimations} className="cTitle">
            Vamos manter contato
          </motion.h1>
          <motion.div variants={viewAnimations} className="formItem">
            <label>Nome</label>
            <input
              type="text"
              placeholder="Ex: Rikelly Mendes"
              {...register("user_username")}
            />
            {errors.user_username && (
              <span className="error">{errors.user_username.message}</span>
            )}
          </motion.div>
          <motion.div variants={viewAnimations} className="formItem">
            <label>Email</label>
            <input
              type="email"
              placeholder="kelly-m83@gmail.com"
              {...register("user_email")}
            />
            {errors.user_email && (
              <span className="error">{errors.user_email.message}</span>
            )}
          </motion.div>
          <motion.div variants={viewAnimations} className="formItem">
            <label>Mensagem</label>
            <textarea
              rows={10}
              placeholder="Digite sua mensagem aqui"
              {...register("user_message")}
            ></textarea>
            {errors.user_message && (
              <span className="error">{errors.user_message.message}</span>
            )}
          </motion.div>
          <motion.button variants={viewAnimations} className="formButton">
            Enviar
          </motion.button>
          {success && <span>Sua mensagem foi enviada com sucesso!</span>}
          {error && <span>Ops! Tente novamente.</span>}
        </motion.form>
      </div>
      <div className="cSection">
        <h1>imagem</h1>
      </div>
    </div>
  );
};
