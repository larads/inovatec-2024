import React from "react"

interface PropsInput {
    label: string
    type: string
    name: string
}

const Input = ({ label, type, name }: PropsInput) => {
    return (
        <div className="relative mb-6">
            <label htmlFor={name} className="absolute -top-5 left-0 text-indigo-400 font-bold">
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                className="w-full bg-transparent border-0 border-b-2 border-indigo-400 text-white focus:outline-none focus:ring-0 focus:border-indigo-700"
                required
            />
        </div>
    );
};

export default Input;
