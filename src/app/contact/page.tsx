"use client";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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
                setFormData({ name: "", email: "", message: "" });
            } else {
                setResponseMessage(data.error || "Failed to send email.");
            }
        } catch (error) {
            console.error("Error:", error);
            setResponseMessage("Something went wrong. Please try again.");
        }

        setLoading(false);
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-900/50 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center">Contact Me</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-2 text-gray-200 bg-gray-950 rounded focus:outline-none focus:ring-4 focus:ring-cyan-900"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full p-2 text-gray-200 bg-gray-950 rounded focus:outline-none focus:ring-4 focus:ring-cyan-900"
                    required
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full p-2 text-gray-200 bg-gray-950 rounded focus:outline-none focus:ring-4 focus:ring-cyan-900"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-indigo-800 text-white py-2 rounded hover:bg-indigo-700 transition"
                    disabled={loading}
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>
            {responseMessage && <p className="mt-4 text-center">{responseMessage}</p>}
        </div>
    );
}
