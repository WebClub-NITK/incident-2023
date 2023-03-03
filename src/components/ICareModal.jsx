import React,{useState} from 'react'
import Carousel from './Carousel'
import { motion } from "framer-motion";
export default  function ICareModal(){
const [showModal,setShowModal]=useState(false);
const open=()=>{
    setShowModal(!showModal);
}
    return (
        <section id="icaremodal">
            <motion.div className="shadow-md  md:flex shadow-secondary overflow-y-auto no-scrollbar "
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 0.5 }}>
           
<div className="basis-full my-2 md:basis-1/2 font-poppins text-primary text-1xl md:text-1xl mx-3 p-4  my-2">
<p>
At Incident, a large-scale cultural fest is not only about fun, but also giving back to the community. i-CARE, the social wing of Incident, focuses on programmes such as social-awareness, health, rural-development, education, child-care and gender-equality. 
</p>
<p>
Through Beach Schooling, underprivileged students near NITK are tutored in the evenings.
</p>
<p>
Through this initiative, students have availed educational essentials such as school bags, stationery,
notebooks etc., and other medical essentials such as sanitisers and masks to keep them safe.
</p>
<p>
Since 2019, i-Care has been quite active and numerous initiatives such as paper recycling, cloth collection drive, 
orphanage visits and multiple workshops have been carried out. We also plan to take up many more such noble initiatives in the future. 
</p>
</div>
{/* carousel */}
<div className="basis-full md:basis-5/12 flex justify-center items-center" 
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          >
      <Carousel autoslide={true}/>
 </div>
 </motion.div>
 </section>
    )
}