"use client";
import { useState } from "react";
import Image from 'next/image';

const contactMsgTop = `Got a project? Let's chat!`;
const contactMsgBot = `Let's explore how we can bring your vision to life together.`;

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
                <div className="window-frame">
                    <h1 className="window-title">Contact me</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="window-form-input"
                            required
                        />
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="window-form-input"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            className="window-form-input"
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
                <div className="window-frame">
                    <h1 className="window-title-big">{contactMsgTop}</h1>
                    <h2 className="text-center px-5">{contactMsgBot}</h2>
                    <h2 className="border relative mt-2 mb-4 border-[var(--highlight-midsat)]"></h2>
                    <ul className="text-xl">
                        <li className="contactMeSocialSites">
                            <p>Kaufko</p>
                            <Image
                                className="h-auto"
                                src="/images/discord.png"
                                alt="discord logo"
                                width={48}
                                height={48}
                            />

                        </li>
                        <li className="contactMeSocialSites">
                            <p>Instagram handle</p>
                            <Image
                                className="h-auto"
                                src="/images/instagram.png"
                                alt="instagram logo"
                                width={48}
                                height={48}
                            />

                        </li>
                        <li className="contactMeSocialSites">
                            <p>filip.hermanekWebMail@gmail.com</p>
                            <Image
                                className="h-auto"
                                src="/images/mail.png"
                                alt="mail logo"
                                width={48}
                                height={48}
                            />

                        </li>
                        <li className="contactMeSocialSites">
                            <p>Kaufko</p>
                            <div>
                                <Image
                                    src="/images/github-light.png"
                                    alt="Light logo"
                                    width={48}
                                    height={48}
                                    className="block dark:hidden object-contain"
                                />
                                <Image
                                    src="/images/github-dark.png"
                                    alt="Dark logo"
                                    width={48}
                                    height={48}
                                    className="hidden dark:block object-contain"
                                />
                            </div>

                        </li>
                        <li className="contactMeSocialSites">
                            <p>linkedIn</p>
                            <Image
                                className="h-auto"
                                src="/images/mail.png"
                                alt="mail logo"
                                width={48}
                                height={48}
                            />

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
