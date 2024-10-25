'use client';

import { useState } from "react";
import { MidiaTransmittions } from "@/components/video";
import CardLicensePlate from "@/components/card-license-plate";
import NotificationsPlate from "@/components/notifications-plate";

const licensePlatesData = [
    { licensePlate: "PHE3453", name: "Thiago Felipe", isAuthorized: true },
    { licensePlate: "ABC1234", name: "Fernando Meirelles", isAuthorized: false },
    { licensePlate: "XYZ9876", name: "Mariana Lara", isAuthorized: true },
];

const transmittionUrl = "https://www.youtube.com/live/eh0fBArfRnk?si=BZKeKG4gQvboAyaB";

export default function HomePage() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredLicensePlates = licensePlatesData.filter((plate) =>
        plate.licensePlate.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex h-screen bg-gray-100">
            <div className="flex-1 flex flex-col justify-center items-center bg-gray-200 p-4">

                <div className="relative w-[1076px] h-[574px] mx-auto bg-gray-600">
                    <MidiaTransmittions url={transmittionUrl} />
                </div>

                <NotificationsPlate
                    message="PLACA NÃO REGISTRADA NO BANCO!"
                    isAuthorized={false}
                />
            </div>

            <div className="w-64 bg-gray-200 p-4 shadow-md">
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Pesquise uma placa"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="space-y-4">
                    {filteredLicensePlates.map((plate) => (
                        <CardLicensePlate
                            key={plate.licensePlate}
                            licensePlate={plate.licensePlate}
                            name={plate.name}
                            isAuthorized={plate.isAuthorized}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
