const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    heading2:
      "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph:
      "font-poppins font-normal text-secondary text-[18px] leading-[30.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    flexEnd: "flex md:justify-end items-center",

    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    modal_button: "font-poppins text-lg text-primary border-2 border-primary rounded p-1 mx-2 mb-3 transition-all ease-in-out delay-50 md:hover:scale-105 md:hover:bg-transparent md:hover:border-rose-900 md:hover:text-white duration-150",
    card_button:"rounded-md bg-primary px-3 py-1 text-md font-poppins text-rose-900 transition-all ease-in-out delay-50 md:hover:text-black md:active:scale-105 md:hover:bg-gradient-to-br from-orange-600 via-orange-500 to-transparent duration-150",
    card:"h-auto w-auto max-w-9/10  bg-dimMaroon  shadow-2  shadow-inner  shadow-black  rounded-lg  m-4 transition-all ease-in-out md:hover:translate-x-0.5 md:hover:-translate-y-0.5 md:hover:bg-gradient-to-br from-dimMaroon to-rose-900 duration-150",
  };

  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse items-center ${styles.paddingY}  `,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
    sectionImgReverseEnd: `flex-1 flex ${styles.flexEnd} md:mr-12 ml-4 mb-4 md:mb-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 flex-col`,
  };

  export default styles;
