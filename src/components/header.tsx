import Image from 'next/image'
import { PersonStanding } from 'lucide-react'

import IconeVisionPlus from '@/assets/iconeVisionPlus.png'

interface PropsHeader {
    userType: string
    profile?: string
}

export default function Header({ userType, profile }: PropsHeader) {
    return (
        <header className="bg-[#18507E] items-center h-16 flex justify-between px-4">
            <div className="flex items-center justify-center h-full">
                <Image
                    src={IconeVisionPlus}
                    alt="Logotipo VisionPlus"
                    className="h-44 w-auto"
                />
            </div>
            <div className="flex items-center space-x-4">
                <span className="text-sm text-white">{userType}</span>
                {profile ? (
                    <Image
                        src={profile}
                        alt="Imagem de Perfil"
                        className="h-10 w-10 rounded-full"
                        width={40}
                        height={40}
                    />
                ) : (
                    <PersonStanding className="h-10 w-10 text-white" />
                )}
            </div>
        </header>
    )
}
