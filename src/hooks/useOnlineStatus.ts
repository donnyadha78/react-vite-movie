import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(true);
    const [prevOnlineStatus, setPrevOnlineStatus] = useState(true);

    const checkInternetConnection = async () => {
        try {
          await fetch('https://www.google.com', { method: 'HEAD', mode: 'no-cors' });
          setIsOnline(true);
        } catch (error) {
          setIsOnline(false);
        }
      };

  useEffect(() => {
   // Check initially
   checkInternetConnection();

   const intervalId = setInterval(() => {
     checkInternetConnection();

     // Show toast only when the online status changes
     if (isOnline !== prevOnlineStatus) {
       setPrevOnlineStatus(isOnline);

       if (isOnline) {
         toast.info(`You are online sync now.`);
       } else {
         toast.info(`You are offline.`);
       }
     }
   }, 3000);

   return () => clearInterval(intervalId);
 }, [isOnline, prevOnlineStatus]);

  return isOnline;
};

export default useOnlineStatus;
