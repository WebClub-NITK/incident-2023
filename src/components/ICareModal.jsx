import React,{useState} from 'react'
import Carousel from './Carousel'
export default  function ICareModal(){
const [showModal,setShowModal]=useState(false);
const open=()=>{
    setShowModal(!showModal);
}
    return (
        <section id="icaremodal">
  <div  className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm justify-center items-center flex font-poppins z-20"
          
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}>
<div className="basis-full my-2 font-poppins text-primary flex-start text-0.5xl md:text-1xl mx-3 my-2">
<p>
At Incident, a large-scale cultural fest is not only about fun, but also giving back to the community. i-CARE, the social wing of Incident, focuses on programmes such as social-awareness, health, rural-development, education, child-care and gender-equality. 
</p>
<br />
<p>
Through Beach Schooling, underprivileged students near NITK are tutored in the evenings.
</p>
<br />
<p>
Through this initiative, students have availed educational essentials such as school bags, stationery,
notebooks etc., and other medical essentials such as sanitisers and masks to keep them safe.
</p>
<br/>
<p>
Since 2019, i-Care has been quite active and numerous initiatives such as paper recycling, cloth collection drive, 
orphanage visits and multiple workshops have been carried out. We also plan to take up many more such noble initiatives in the future. 
</p>
</div>
{/* carousel */}
<div className="basis-full flex display:cover justify-center items-center p-4">
      <Carousel />
 </div>
 </div>
 </section>
    )
}

