import React from "react";
import Btn from "../../Utils/Button/btn";
import photo from "../../Assets/images/photo.png";

const Partner = () => {
  return (
    <div className='bg-black py-12 sm:py-28 p-8'>
      <div className='container mx-auto flex flex-col md:flex-row'>
        <div className='text-white p-4 md:p-12 py-12 bg-[#424242] w-full flex flex-col justify-center'>
          <h2 className='text-2xl font-bold'>
            Partnerships and Collaborations
          </h2>
          <p className='font-light my-4'>
            We believe in the power of collaboration. X-agon actively seeks
            partnerships with like-minded organizations and individuals who
            share our vision of a digitally inclusive Africa. Together, we can
            create a more connected and empowered continent.
          </p>
          <Btn className={"bg-pry text-white"} text='Get in Touch' />
        </div>
        <img className='w-full md:w-64 lg:w-[500px]' src={photo} alt='' />
      </div>
    </div>
  );
};

export default Partner;