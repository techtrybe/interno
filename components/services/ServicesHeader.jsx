import { FaArrowRight } from "react-icons/fa";

const SERVICES_ARR = [
    {
        name: "Project Plan"
    },
    {
        name: "Interior Work"
    },
    {
        name: "Retail Design"
    },
    {
        name: "2d/3d Work"
    },
    {
        name: "Interior Work"
    },
    {
        name: "Decoration Work"
    },
]

const ServicesHeader = () => {
  return (
    <section className="space-y-20 w-full">
      <div className="w-full min-h-[300px] relative">
        <img
          src="/assets/services-banner.jpg"
          alt="Our Services"
          className="absolute h-full -z-10 inset-0 w-full"
        />
        <div className="bg-white rounded-t-3xl absolute left-[50%] translate-x-[-50%] p-4 py-6 w-full z-0 bottom-0 flex flex-col items-center gap-4 max-w-xs">
          <h2 className="text-dark">Services</h2>
          <p className="text-secondary">Home / Services</p>
        </div>
      </div>
      <ServiceGrid />

    </section>
  );
};


const ServiceGrid = () => {
    return (
      <div className="grid py-[100px] px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1158px] mx-auto">
        {SERVICES_ARR.map((service, index) => (
          <div key={index} className="py-[80px] hover:bg-lightGray rounded-[30px] transition duration-300">
            <div className="flex flex-col gap-[46px] items-center justify-between h-full">
              <div className="flex flex-col gap-[13px] items-center">
                <h3>{service.name}</h3>
                <p className="text-secondary text-center text-sm max-w-xs">
                  There are many variations of the passages of lorem Ipsum from
                  available, majority.
                </p>
              </div>
              <button className="flex items-center gap-2">
                <span className="text-[#4D5053] font-bold">Read More</span>
                <FaArrowRight className="text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
    );
}

export default ServicesHeader;
