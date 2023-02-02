import { useEffect, useState } from "react";
import { GiCrossedSabres } from 'react-icons/gi';
import "./EventDetails.css"

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

    const onClickHandler = () => {
        props.closeHandler(false)
    }


    return (
        <div id="background" className="fixed top-0 left-0 w-full min-h-screen bg-slate-900/20 flex justify-center items-center backdrop-blur-md z-50 " >
            <div className="fixed left-30% p-6 pt-10 bg-slate-800 text-lg flex gap-2 rounded-xl shadow-md shadow-primary ">
                <GiCrossedSabres className="text-primary absolute top-3 right-6" onClick={onClickHandler} />
                <div className="w-56 h-80 ">
                    <img src={props.data.src} className="w-56 h-80 object-cover rounded-lg " />
                </div>
                <div className="textContent">
                    <div className="popUpText">
                        <p>
                            event info ${props.data.info}
                        </p>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default EventDetails;