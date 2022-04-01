import React, {useState, useEffect} from "react";
import "./loader.scss"
export default function Loader() {
       const [isLoading, setIsLoading] = useState(false);
       
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
        <div className="loader">

              <div className="spinner"></div>
        </div>
  );
}
