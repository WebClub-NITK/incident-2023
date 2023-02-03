import { useEffect, useState } from "react";
import { GiCrossedSabres } from 'react-icons/gi';
import "./EventDetails.css"

const EventDetails = (props) => {
    console.log(props.data.info)

    const closePopUp = document.querySelector("#close-button");
    const popUpContent = document.getElementsByClassName("textContent")

    console.log(popUpContent[0])

    useEffect(() => {
        const closePopUp = (e) => {
            if (e.target.id == "background") {
                popUpContent[0].setAttribute("closing", "");

                popUpContent[0].addEventListener(
                    "animationend",
                    () => {
                        popUpContent[0].removeAttribute("closing");
                        props.closeHandler(false)
                    },
                    { once: true }
                );

            }
        }

        document.body.addEventListener("click", closePopUp)

        return () => document.body.removeEventListener("click", closePopUp)

    })

    const onClickHandler = (e) => {

        popUpContent[0].setAttribute("closing", "");

        popUpContent[0].addEventListener(
            "animationend",
            () => {
                popUpContent[0].removeAttribute("closing");
                props.closeHandler(false)
            },
            { once: true }
        );
    }


    return (
        <div id="background" className="fixed top-0 left-0 w-full min-h-screen bg-slate-900/20 flex justify-center items-center backdrop-blur-md z-50 " >
            <div className="fixed left-30% p-6 pt-10 bg-slate-800 text-lg flex gap-2 rounded-xl shadow-md shadow-primary " id="popUp">
                <GiCrossedSabres className="hover:text-primary text-secondary absolute top-3 right-6" id="close-button" onClick={onClickHandler} />
                <div className="image-box">
                    <img src={props.data.src} className="w-56 h-80 object-cover rounded-lg pointer-events-none " id="event-image"/>
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