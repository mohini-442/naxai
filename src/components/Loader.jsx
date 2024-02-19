
import { useState, useEffect } from "react";
import earth from '../assets/images/world2.png'

const Loader = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 3500);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "initial";
        }
    }
    return (
        <div>
            {loder ? (
                <section
                    style={{ zIndex: "999999999" }}
                    className="bg-[#000] top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
                >
                    <div className="preloader flex justify-center items-center gap-4 h-screen">
                        <img src={earth} alt="" className="animate-spins w-[18%] duration-[0.5s]" />
                        <h1 className="ff-recharge text-[38px] font-bold text-[#fff] animate-pulse ">Nexai</h1>
                    </div>
                </section>
            ) : (
                ""
            )}
        </div>
    )
}

export default Loader