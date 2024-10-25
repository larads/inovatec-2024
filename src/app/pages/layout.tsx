import '@/styles/globals.css';

import Header from '@/components/header';
import Drawer from '@/components/drawer';

export default function LayoutScreens({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen h-screen bg-white flex overflow-hidden">
            <Drawer />

            <div className="flex-1 flex flex-col">
                <Header userType='Úsuario Teste' profile='https://github.com/larads.png' />

                <main className="flex-1 flex flex-col items-center p-4 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}
