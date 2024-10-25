"use client";
import React from "react";
import { Eye, EyeOff } from "lucide-react"

interface PropsInput {
    label: string;
    type: string;
    name: string;
    placeholder: string;
}

const Input = ({ label, type, name, placeholder }: PropsInput) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className="relative mb-6">
            <label htmlFor={name} className="block text-black font-bold mb-2">
                {label}
            </label>
            <div className="relative">
                <input
                    type={showPassword ? "text" : type}
                    id={name}
                    placeholder={placeholder}
                    name={name}
                    className="w-full bg-gray-100 border border-gray-300 rounded-lg p-2 text-black focus:outline-none"
                    required
                />
                {type === "password" && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-2 flex items-center px-2 focus:outline-none"
                    >
                        {showPassword ? (
                            <Eye size={24} className="text-gray-600" />
                        ) : (
                            <EyeOff size={24} className="text-gray-600" />
                        )}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Input;
