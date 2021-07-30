import { useState } from "react";

export default function useAlert(): [string, (id:string) => void, () => void] {

    const [alertMessage, setAlertMessage] = useState<string>("");

    const showAlertMessage = (message:string) => {
        setAlertMessage(message);
        setTimeout(function(){
            setAlertMessage("");
       },50000);
    };
    const hideAlertMessage = () => {
        setAlertMessage("");
    };

    return [alertMessage, showAlertMessage, hideAlertMessage];
}