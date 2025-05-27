"use client";
import React, { useState } from "react";
import { toast, Toaster } from "sonner";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Please fill in all fields.");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            console.error("Username or password is incorrect.");
            toast.error("Username or password is incorrect.");
        }, 3000);
    };

    return (
        <section className="w-full h-[100dvh] bg-[url('/SS.png')] bg-no-repeat bg-cover">
            <Toaster richColors />
            <div className="w-full h-full flex justify-center items-center bg-primary/50 px-4">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full space-y-4"
                >
                    <img
                        src="/SSGLandscape.svg"
                        alt="SS"
                        width={0}
                        height={0}
                        className="w-1/2 m-auto mb-8"
                    />
                    <h2 className="text-center text-2xl font-bold text-primary">
                        Welcome
                    </h2>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border-b p-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="w-full border-b p-2 pr-10"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="absolute right-2 top-2 text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <IconEyeOff /> : <IconEye />}
                        </button>
                    </div>
                    <label className="flex items-center gap-2 text-sm">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        Remember me
                    </label>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary text-white py-2 rounded"
                    >
                        {loading ? "Please wait..." : "Sign In"}
                    </button>
                    <div className="text-center text-gray-300 flex gap-2 items-center justify-center text-sm md:text-base">
                        Have a problem?
                        <a
                            className="text-primary/70 hover:underline"
                            href="mailto:it@ssgroup.id"
                        >
                            Please contact IT Support
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
}
