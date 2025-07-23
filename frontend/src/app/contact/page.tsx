'use client'

import React, { useState } from 'react';

type FormData = {
    name: string;
    email: string;
    message: string;
};

type FormErrors = {
    name?: string;
    email?: string;
    message?: string;
};

export default function Contact() {
    const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState<FormData[]>([]);

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!form.name.trim()) newErrors.name = 'Name is required.';
        if (!form.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
            newErrors.email = 'Email is invalid.';
        }
        if (!form.message.trim()) newErrors.message = 'Message is required.';
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: undefined });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
            return;
        }
        setSubmitted([...submitted, form]);
        setForm({ name: '', email: '', message: '' });
        setErrors({});
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-3xl px-6 py-24 sm:py-32 lg:px-8 rounded-xl relative flex flex-col items-center">
                <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"></div>
                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact me</h2>
                    <p className="mt-2 text-lg/8 text-gray-600">Let's discuss the ideas </p>
                </div>
                <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xs w-full flex flex-col items-center">
                    <div className="w-full flex flex-col gap-6 items-center">
                        <div className="w-96 flex flex-col items-start">
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                autoComplete="given-name"
                                value={form.name}
                                onChange={handleChange}
                                className={`block w-96 h-10 rounded-md border border-gray-800 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 ${errors.name ? 'border-red-500' : ''}`}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div className="w-96 flex flex-col items-start">
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                autoComplete="email"
                                value={form.email}
                                onChange={handleChange}
                                className={`block w-96 h-10 rounded-md border border-gray-800 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 ${errors.email ? 'border-red-500' : ''}`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                        <div className="w-96 flex flex-col items-start">
                            <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={form.message}
                                onChange={handleChange}
                                className={`block w-96 h-24 rounded-md border border-gray-800 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 resize-none ${errors.message ? 'border-red-500' : ''}`}
                            />
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <div style={{ marginTop: '20px' }}>
                            <button type="submit" className="block w-36 h-12 rounded-md bg-indigo-600 text-white text-sm font-semibold shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
                        </div>
                    </div>
                </form>
                {submitted.length > 0 && (
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-2">Submitted Info:</h3>
                        <ul className="space-y-2">
                            {submitted.map((info, idx) => (
                                <li key={idx} className="border p-2 rounded">
                                    <strong>Name:</strong> {info.name}<br />
                                    <strong>Email:</strong> {info.email}<br />
                                    <strong>Message:</strong> {info.message}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}