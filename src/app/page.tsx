import Input from "@/components/input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800/80 border-gray-600 border-2 p-8 rounded-lg shadow-lg w-96">
        <h1 className="font-bold text-center text-2xl mb-6 text-indigo-600">Inovatec@2024</h1>
        <div className="space-y-7 mt-10 ">
          <Input label="nome de úsuario" name="username" type="text" />
          <Input label="senha" name="password" type="password" />
        </div>
        <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded mt-6">
          Entrar
        </button>
        <div className="text-center mt-4">
          <a href="#" className="text-sm text-gray-500 hover:underline hover:text-indigo-200">
            Esqueci minha senha
          </a>
        </div>
        <div className="text-center mt-4">
          <text className="text-sm text-gray-500">não tem conta {''}</text>
          <a href="#" className="text-gray-400 hover:underline hover:text-indigo-400">
            Registrar
          </a>
        </div>

      </div>
    </div>
  );
}
