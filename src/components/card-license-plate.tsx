import { CarFrontIcon } from "lucide-react"

type CardLicensePlateProps = {
    name: string
    licensePlate: string
    isAuthorized: boolean
}

export default function CardLicensePlate({
    name,
    licensePlate,
    isAuthorized,
}: CardLicensePlateProps) {
    return (
        <div className="flex items-center p-2 bg-sky-800 rounded-lg">
            <CarFrontIcon size={24} className="m-4" />

            <div className="flex-1">
                <p className="text-white font-bold">{licensePlate}</p>
                <p className="text-white text-sm font-bold">{name}</p>
            </div>

            <div
                className={`w-4 h-4 rounded-full ${isAuthorized ? "bg-green-500" : "bg-red-500"}`}
            />
        </div>
    )
}
