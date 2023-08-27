import { useState } from "react";
import { useEffect } from "react";

const WakeLock = () => {
  const [isLocked, setIsLocked] = useState(false);
  const [msg, setMsg] = useState(false);

  useEffect(() => {
    let myWakeLock;
    const wakeLock = async () => {
      try {
        myWakeLock = await navigator.wakeLock.request("screen");
        myWakeLock.addEventListener("release", () => {
          setIsLocked(false);
        });
        setIsLocked(true);
        console.log(myWakeLock);
        return myWakeLock;
      } catch (err) {
        console.log(`${err.name}, ${err.message}`);
        setMsg(`${err.name}, ${err.message}`);
        return false;
      }
    };

    wakeLock();

    return () =>
      myWakeLock?.release().then(() => {
        console.log("wake lock released");
      });
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        padding: 2,
        color: "white",
        fontSize: "small",
      }}
    >
      {isLocked ? <i class="fas fa-lock"></i> : <div> {msg} </div>}
    </div>
  );
};
export default WakeLock;
