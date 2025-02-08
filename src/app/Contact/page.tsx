"use client";
import { useState } from "react";

const Contact = () => {
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
        <main>
            <div className="top-1/2 p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full p-2 text-black border bg-gray-800 border-gray-900 rounded"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full p-2 border text-black bg-gray-800 border-gray-900 rounded"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="w-full p-2 border text-black bg-gray-800 border-gray-900 rounded"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-indigo-800 text-white py-2 rounded hover:bg-blue-600 transition"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
                {responseMessage && <p className="mt-4 text-center">{responseMessage}</p>}
            </div>
        </main>
    );
}
export default Contact;