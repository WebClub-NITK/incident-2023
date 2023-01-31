import { useEffect, useState } from "react";

const EventDetails = (props) => {
    console.log(props.data.info)

    useEffect(() => {
        const closePopUp = (e) => {
            console.log(e)
            if (e.target.id == "background") {
                props.closeHandler(false)
            }
        }

        document.body.addEventListener("click", closePopUp)

        return () => document.body.removeEventListener("click", closePopUp)


    })


    return (
        <div id="background" className="fixed top-0 left-0 w-full min-h-screen bg-slate-900/20 flex justify-center items-center backdrop-blur-md " >
            <div className="fixed left-30% z-20 bg-slate-800 text-lg flex gap-2 rounded-xl ">
                <div>
                    <img src={props.data.src} className="w-56 h-80 object-cover rounded-lg " />
                </div>
                <div className="text-orange-600">
                    event info ${props.data.info}
                </div>

            </div>
        </div>

    )
}

export default EventDetails;