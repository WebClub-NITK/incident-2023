import { useEffect, useState } from "react";
import { GiCrossedSabres } from 'react-icons/gi';
import "./EventDetails.css"
import ReactMarkdown from 'react-markdown'

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
            <div className="fixed left-30% p-6 pt-8 bg-slate-800 text-lg flex gap-10 rounded-xl shadow-md shadow-primary " id="popUp">
                <GiCrossedSabres className="hover:text-primary text-secondary absolute top-3 right-6" id="close-button" onClick={onClickHandler} />
                <div className="image-box w-72 ">
                    <img src={props.data.src} className="w-full h-full object-cover rounded-lg pointer-events-none " id="event-image" />
                </div>
                <div className="textContent">
                    <div className="popUpText">
                        <ReactMarkdown className="font-poppins text-4xl text-center font-medium text-primary py-3 border-b-2 border-black">
                            {props.data.heading}
                        </ReactMarkdown>
                        <p className="text-primary text-2xl font-semibold">
                            Date: {props.data.date}
                        </p>
                        <ReactMarkdown className=" text-primary text-left text-lg">
                            {props.data.info}
                        </ReactMarkdown>
                    </div>

                </div>

            </div>
        </div>
        
    )
}

export default EventDetails;