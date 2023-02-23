import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import faq from "../assets/faq.png";
import { qnaSrc } from "../constants/faq";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ExpandMore";
// import { ThemeProvider, createTheme } from '@mui/system';
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Player, Controls } from '@lottiefiles/react-lottie-player';
import "../index.css";

const theme = createTheme({
  typography: {
    fontFamily: [
      'ARMBook', // define the custom font family
      'Roboto',
      'Arial',
      'sans-serif',
      'Poppins'
    ].join(','),
  },
  // ...
});

const FAQ = () => {
  // const [selected, setSelected] = useState(null);

  // const toggle = (j) => {
  //   if (selected == j) {
  //     return setSelected(null);
  //   }
  //   setSelected(j);
  // };


  const [open, setOpen] = useState(false);
  
  const accChange = (card) => (e, isOpen) => {
        setOpen(isOpen ? card : false);
    };

  return (
    <section className="mt-12 relative pt-6" id="faq">
      <div className="flex flex-wrap justify-center">
        <div className="w-[1240px] mx-auto grid md:grid-cols-2">
          <img src={faq} className="w-[70%] md:w-[60%] mx-auto mt-4" />
          <motion.div
            className="h-fit rounded-xl shadow-sm flex flex-row flex-wrap my-5"
            initial={{ x: "50%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.75 }}
          >
            <div className="w-full flex flex-col md:mt-9 mt-2">

                <div className="m-1 p-1 px-2 rounded-md w-full">
                  <div>

                  <ThemeProvider theme={theme}>
                  <Accordion
                    expanded={open === "accordionFirst"}
                    onChange={accChange("accordionFirst")}
                    sx={{
                
                      width: '100%',
                      justifyContent: 'space-between',
                      paddingTop: 0,
                      marginBottom: 1,
                      textAlign: 'left',
                      borderTop: '3px solid',
                      fontWeight: 'bold',
                      fontSize: { xl: '1.5rem' },
                      lineHeight: { xl: '2rem' },
                      letterSpacing: 'wider',
                      color: 'rgba(255, 255, 255, 0.7)',
                      backgroundColor: 'transparent', 
                    }}
                >


                  <AccordionSummary expandIcon={<ArrowDropDownIcon sx={{color: '#d4a152'}}/>} aria-controls="panel1a-content"
          id="panel1a-header" 
         
          >

                  <Typography 
                    sx={{width: "100%",
                    fontFamily: 'ARMBook',
                    color: '#d4a152',
                    fontWeight: 'bold',
                    fontSize:  {md: '20px',
                                ss: '16px',
                                sm: "18px" } ,}}>
                      Will accommodation be provided for outstation participants?</Typography>
                  </AccordionSummary>

                  <AccordionDetails sx={{
      
      color: 'rgba(255, 255, 255, 0.7)',
      paddingTop: 1,
      paddingBottom: 1,
      fontSize: { xs: '1rem', sm: '1.5rem' },
    }}>
                        <Typography
                        sx={{fontFamily: 'Poppins',}}
                        >
                            Yes. You can find the details on this link <a href="https://unstop.com/o/IDMuHwt?lb=WCijcz3" target={"_blank"} className= "text-primary hover:text-white">here</a>.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    expanded={open === "accordionSecond"}
                    onChange={accChange("accordionSecond")}
                    sx={{
                      
                      width: '100%',
                      justifyContent: 'space-between',
                      paddingTop: 0,
                      marginBottom: 1,
                      textAlign: 'left',
                      borderTop: '3px solid',
                      fontWeight: 'bold',
                      fontSize: { xl: '1.5rem' },
                      lineHeight: { xl: '2rem' },
                      letterSpacing: 'wider',
                      color: 'rgba(255, 255, 255, 0.7)',
                      backgroundColor: 'transparent', 
                    }}
                >


                  <AccordionSummary expandIcon={<ArrowDropDownIcon sx={{color: '#d4a152'}}/>} aria-controls="panel1a-content"
          id="panel1a-header" 
         
          >

                  <Typography 
                    sx={{width: "100%",
                    fontFamily: 'ARMBook',
                    fontWeight: 'bold',
                    color: '#d4a152',
                    fontSize:  {md: '20px',
                    ss: '16px',
                    sm:"18px" }}}>
                      How do non-NITKians attend the Pro-Shows?</Typography>
                  </AccordionSummary>

                  <AccordionDetails sx={{
      
      color: 'rgba(255, 255, 255, 0.7)',
      paddingTop: 1,
      paddingBottom: 1,
      fontSize: { xs: '1rem', sm: '1.5rem' },
    }}>
                        <Typography
                        sx={{fontFamily: 'Poppins',}}
                        >
                            You can either register on Unstop <a href="https://unstop.com/festival/incident23-national-institute-of-technology-karnataka-nitk-surathkal-103359" target={"_blank"} className= "text-primary hover:text-white">here</a> or get the passes in our campus for each Pro-Show (17th to 19th March).
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                  
                <Accordion
                    expanded={open === "accordionThird"}
                    onChange={accChange("accordionThird")}
                    sx={{
                      
                      width: '100%',
                      justifyContent: 'space-between',
                      paddingTop: 0,
                      marginBottom: 1,
                      textAlign: 'left',
                      borderTop: '3px solid',
                      fontWeight: 'bold',
                      fontSize: { xl: '1.5rem' },
                      lineHeight: { xl: '2rem' },
                      letterSpacing: 'wider',
                      color: 'rgba(255, 255, 255, 0.7)',
                      backgroundColor: 'transparent', 
                    }}
                >


                  <AccordionSummary expandIcon={<ArrowDropDownIcon sx={{color: '#d4a152'}}/>} aria-controls="panel1a-content"
          id="panel1a-header" 
         
          >

                  <Typography 
                    sx={{width: "100%",
                    fontFamily: 'ARMBook',
                    fontWeight: 'bold',
                    color: '#d4a152',
                    fontSize:  {md: '20px',
                    ss: '16px',
                    sm:"18px" } ,}}>
                      Will there be spot registrations for the events?</Typography>
                  </AccordionSummary>

                  <AccordionDetails sx={{
      
      color: 'rgba(255, 255, 255, 0.7)',
      paddingTop: 1,
      paddingBottom: 1,
      fontSize: { xs: '1rem', sm: '1.5rem' },
    }}>
                        <Typography
                        sx={{fontFamily: 'Poppins',}}
                        >
                            Yes. You can register for the events at the Inci Office which will be located at the main gate of the NITK campus.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    expanded={open === "accordionFourth"}
                    onChange={accChange("accordionFourth")}
                    sx={{
                      
                      width: '100%',
                      justifyContent: 'space-between',
                      paddingTop: 0,
                      marginBottom: 1,
                      textAlign: 'left',
                      borderTop: '3px solid',
                      fontWeight: 'bold',
                      fontSize: { xl: '1.5rem' },
                      lineHeight: { xl: '2rem' },
                      letterSpacing: 'wider',
                      color: 'rgba(255, 255, 255, 0.7)',
                      backgroundColor: 'transparent', 
                    }}
                >


                  <AccordionSummary expandIcon={<ArrowDropDownIcon sx={{color: '#d4a152'}}/>} aria-controls="panel1a-content"
          id="panel1a-header" 
         
          >

                  <Typography 
                    sx={{width: "100%",
                    fontFamily: 'ARMBook',
                    fontWeight: 'bold',
                    color: '#d4a152',
                    fontSize:  {md: '20px',
                    ss: '16px',
                    sm: "18px" } ,}}>
                      How to reach NITK?</Typography>
                  </AccordionSummary>

                  <AccordionDetails sx={{
      
      color: 'rgba(255, 255, 255, 0.7)',
      paddingTop: 1,
      paddingBottom: 1,
      fontSize: { xs: '1rem', sm: '1.5rem' },
    }}>
                        <Typography sx={{fontFamily: 'Poppins',}}>
                        The <a href="https://goo.gl/maps/Utk4bbZARK4md6ABA" target={"_blank"} className= "text-primary hover:text-white">NITK campus</a> is located approximately 20 km from Mangalore, Karnataka.It is located right on NH66 so you can hop onto express buses from Mangalore or Udupi and get down at the bus-stop right in front of the NITK main gate.
By Rail, attendees can come till the Surathkal Railway Station which is just 3 km away from the campus.The Mangalore International Airport is about 17 km away from campus so participants can fly over too!
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                </ThemeProvider>

                  </div>
                </div>
            
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
