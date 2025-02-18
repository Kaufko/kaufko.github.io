"use client";
import { useState } from "react";

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
        <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-900/50 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center">Contact Me</h1>
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
                    className="w-full bg-[var(--maincolor)] text-slate-900 font-bold text-lg py-2 rounded hover:bg-[var(--secondarycolor)] transition"
                    disabled={loading}
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>
        <p className={`mt-4 text-center font-bold transition-all duration-1000 ease-in-out overflow-hidden ${responseMessage ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
            {responseMessage}
        </p>
    </div>
    );
}
