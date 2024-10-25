import { CarFrontIcon } from "lucide-react";

type NotificationsPlateProps = {
    message: string;
    isAuthorized: boolean;
};

export default function NotificationsPlate({
    message,
    isAuthorized,
}: NotificationsPlateProps) {
    return (
        <div
            className={`flex items-center justify-start w-[1076px] h-[100px] mx-auto p-4 my-2 rounded-lg ${isAuthorized ? "bg-green-600" : "bg-red-600"}`}
        >
            <CarFrontIcon size={48} className="text-white mr-4" />
            <div className="text-left">
                <p className="text-white text-lg font-bold">
                    ATENÇÃO
                </p>
                <p className="text-white text-center text-sm">{message}</p>
            </div>
        </div>
    );
}
