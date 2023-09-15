import Emily from "./../assets/image-emily.jpg";
import Thomas from "./../assets/image-thomas.jpg";
import Jennie from "./../assets/image-jennie.jpg";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-10 lg:flex lg:flex-col lg:justify-center lg:items-center"
    >
      <h2 className="text-xl text-center font-bold lg:text-left lg:text-2xl mb-10">
        CLIENT TESTIMONIALS
      </h2>
      <div className="flex flex-col justify-center items-center gap-10 lg:flex-row lg:w-[80%]">
        <div className="flex flex-col justify-center items-center w-[80%] mb-10 lg:w-[60%]">
          <div className="flex justify-center mb-5">
            <img src={Emily} className="rounded-full w-[75%]"></img>
          </div>
          <p className="text-center mb-5">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <p className="text-xl font-bold">Emily R.</p>
          <p className="text-sm text-gray-400">Marketing Director</p>
        </div>
        <div className="flex flex-col justify-center items-center w-[80%] mb-10 lg:w-[60%]">
          <div className="flex justify-center mb-5">
            <img src={Thomas} className="rounded-full w-[75%]"></img>
          </div>
          <p className="text-center mb-5">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <p className="text-xl font-bold">Thomas S.</p>
          <p className="text-sm text-gray-400">CFO</p>
        </div>
        <div className="flex flex-col justify-center items-center w-[80%] mb-10 lg:w-[60%]">
          <div className="flex justify-center mb-5">
            <img src={Jennie} className="rounded-full w-[75%]"></img>
          </div>
          <p className="text-center mb-5">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <p className="text-xl font-bold">Jennie F.</p>
          <p className="text-sm text-gray-400">Business Owner</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
