"use client";
import { useState } from "react";
import Image from 'next/image';

const contactMsgTop = `Got a project? Let's chat!`;
const contactMsgBot = `"Let's explore how we can bring your vision to life together."`;

export default function ContactPage() {
    const [formData, setFormData] = useState({ email: "", subject: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage("");

        try {
            const response = await fetch("/api/sendEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setResponseMessage("Email sent successfully!");
                setFormData({ email: "", subject: "", message: "" });
            }
            else {
                setResponseMessage(data.error || "Failed to send email.");
            }
        }
        catch (error) {
            console.error("Error:", error);
            setResponseMessage("Something went wrong. Please try again.");
        }

        setLoading(false);

        setTimeout(() => {
            setResponseMessage("");
        }, 5000);
    };

    return (
        <div className="relative">
            <div className="flex min-h-screen flex-col items-start justify-center pl-20 lg:float-left">
                <div className="bg-[var(--background)] mx-auto mt-10 max-w-lg rounded-lg p-6 shadow-2xl">
                    <h1 className="mb-4 text-center text-2xl font-bold">Contact me</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="contactMeFormInput"
                            required
                        />
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="contactMeFormInput"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            className="contactMeFormInput"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-[var(--highlight)] text-[var(--foreground)] w-full rounded py-2 text-lg font-bold transition hover:bg-[var(--background-light)]"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                    <p className={`mt-4 text-center font-bold transition-all duration-1000 ease-in-out overflow-hidden ${responseMessage ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                        {responseMessage}
                    </p>
                </div>
            </div>
            <div className="flex min-h-screen flex-col items-start justify-center pr-20 lg:float-right">
                <h1 className="mb-4 text-5xl font-bold">{ contactMsgTop}</h1>
                <h2 className="">{contactMsgBot}</h2>
                <ul className="mx-auto justify-between text-right text-2xl">
                    <li className="flex items-center">
                        <p className="">Kaufko</p>
                        <Image
                            className="mr-2 h-auto"
                            src="/images/discord.png"
                            alt="discord logo"
                            width={48} // Set width to 512px
                            height={48} // Set height to 512px
                        />
                        
                    </li>
                    <li className="flex items-center">
                        <p className="">Instagram handle</p>
                        <Image
                            className=" h-auto"
                            src="/images/instagram.png"
                            alt="instagram logo"
                            width={48} // Set width to 512px
                            height={48} // Set height to 512px
                        />

                    </li>
                    <li className="flex items-center">
                        <p className="">filip.hermanekWebMail@gmail.com</p>
                        <Image
                            className="h-auto"
                            src="/images/mail.png"
                            alt="mail logo"
                            width={48} // Set width to 512px
                            height={48} // Set height to 512px
                        />
                        
                    </li>
                </ul>
            </div>
        </div>
    );
}
