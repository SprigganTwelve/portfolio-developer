import { useState } from "react";
import Button from "./ui/button";

const ContactForm = () => {
     const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
     const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

     const handleSubmit = (e: React.ChangeEvent) => {
          e.preventDefault();
          setStatus("sending");
          // TODO: implement async message sending here
          setTimeout(() => setStatus("sent"), 1500);
     };

     return (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                         <label htmlFor="contact-name" className="block text-sm font-semibold mb-1">
                              Nom *
                         </label>
                         <input
                              id="contact-name"
                              type="text"
                              required
                              placeholder="Jean Dupont"
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                         />
                    </div>
                    <div>
                         <label htmlFor="contact-email" className="block text-sm font-semibold mb-1">
                              Email *
                         </label>
                         <input
                              id="contact-email"
                              type="email"
                              required
                              placeholder="jean@exemple.fr"
                              value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                         />
                    </div>
               </div>
               <div>
                    <label htmlFor="contact-subject" className="block text-sm font-semibold mb-1">
                         Sujet *
                    </label>
                    <input
                         id="contact-subject"
                         type="text"
                         required
                         placeholder="Opportunité d'alternance, collaboration..."
                         value={form.subject}
                         onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    />
               </div>
               <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold mb-1">
                         Message *
                    </label>
                    <textarea
                         id="contact-message"
                         required
                         className="resize-none"
                         rows={7}
                         placeholder="Bonjour Zouayobo, je vous contacte au sujet de..."
                         value={form.message}
                         onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
               </div>

               {status === "sent" ? (
                    <div
                         className="p-4 font-body font-semibold text-center bg-primary-end border-2 shadow-md"
                         role="status"
                    >
                         ✓ Message envoyé ! Je vous réponds sous 48h.
                    </div>
               ) : (
                    <Button
                         type="submit"
                         disabled={status === "sending"}
                         className="w-full text-base font-bold py-4.5 bg-primary-start"
                    >
                         {status === "sending" ? "⧖ Envoi en cours..." : "✉ Envoyer le message"}
                    </Button>
               )}
          </form>
     );
};

export default ContactForm;
