import Image from "next/image"

import Input from "@/components/input"
import Background from "@/assets/imgSecury.png"
import ImageSignIn from "@/assets/digitalBro.png"

export default function signIn() {
    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center "
            style={{ backgroundImage: `url(${Background.src})`, }}
        >
            <div className="bg-white flex rounded-lg shadow-lg overflow-hidden w-3/4 max-w-4xl">
                <div className="w-1/2 bg-sky-900 p-10 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-white mb-2">Seja bem-vindo ao visionPlus</h2>
                    <div className="mt-10">
                        <Image
                            src={ImageSignIn}
                            alt="imagem de uma pessoa deitada no sofá lendo"
                            className="h-full w-full items-center"
                        />
                    </div>
                </div>
                <div className="w-1/2 py-16 px-12">
                    <h2 className="text-3xl text-center font-bold mb-5 text-gray-800 uppercase">login</h2>
                    <form>
                        <div className="space-y-5">
                            <Input label="Usuário" name="username" type="email" placeholder="email@gmail.com" />
                            <Input label="Senha" name="password" type="password" placeholder="123" />
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <label className="flex items-center text-sm text-gray-600">
                                <input type="checkbox" className="mr-2" />
                                Lembre-me
                            </label>
                            <a href="#" className="text-sm text-blue-500 hover:underline">Esqueceu a senha?</a>
                        </div>
                        <button className="w-full bg-sky-900 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded mt-6">
                            ENTRAR
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
