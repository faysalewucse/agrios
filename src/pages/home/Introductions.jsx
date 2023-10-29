import img from "../../assets/slider1.jpg";
import img2 from "../../assets/rounded2.png";
import Container from "../../shared/Container";
import Button from "../../components/Button";

const Introductions = () => {
  return (
    <Container>
      <div className="p-5 my-10 flex md:flex-row md:justify-center items-center flex-col gap-5">
        <div className="relative flex-1">
          <img
            src={img}
            alt="rounded"
            className="rounded-full lg:w-[600px] lg:h-[600px] h-96 w-96 mx-auto"
          />
          <img
            className="absolute lg:-left-20 left-0 top-1/2 -translate-y-1/2 lg:w-80 w-40"
            src={
              "https://tplabs.co/agrios/wp-content/uploads/2022/07/plants-02.svg"
            }
            alt=""
          />
          <img
            className="absolute left-10 bottom-0 md:-bottom-10 rounded-full object-cover border-8 border-white lg:w-80 lg:h-80 h-40 w-40"
            src={img2}
            alt=""
          />
        </div>
        <div className="md:w-1/2">
          {/* <h5 className="font-cursive text-secondary">Our Introductions</h5> */}
          <h4 className="font-semibold lg:text-4xl mt-2 mb-5">
            Why FARMS Systems Is a Game-Changer for Modern Agriculture
          </h4>
          {/* <h5 className="text-primary font-semibold">
            Agrios is the largest global organic farm.
          </h5> */}
          <p className="my-2 text-sm leading-normal">
            The world of agriculture is rapidly evolving, and with it comes the necessity for reliable, comprehensive farm management software. Enter FARMS Systems, a platform designed to provide modern farmers and ranchers with the tools they need to thrive in today's competitive landscape.
          </p>
          <p className="my-2 text-sm leading-normal">
          From its all-encompassing asset management feature that allows users to monitor everything from livestock health to equipment efficiency, to its robust accounting features designed to provide unparalleled financial insights, FARMS Systems is setting a new standard in farm management software.
          </p>
          <p className="my-2 text-sm leading-normal">
          <span className="font-semibold">Automated Processes</span> <br />
          One of the most revolutionary aspects of FARMS Systems is its capacity for automation. Imagine running low on feed stock and having a Purchase Order automatically generated. These automated processes not only save time but also offer incredible accuracy.
          </p>
          <p className="my-2 text-sm leading-normal">
          <span className="font-semibold">Streamlined Labor Management</span> <br />
          Managing labor can be a herculean task for any farming operation. FARMS Systems simplifies this through its well-structured labor and task management features. Whether it's managing employees, contractors, or even work orders, everything can be handled within the platform.
          </p>
          <p className="my-2 text-sm leading-normal">
          <span className="font-semibold">Financial Oversight</span> <br />
          Understanding your financial standing is crucial for any business. FARMS Systems offers in-depth Profit & Loss reports, automated invoicing, and a chart of accounts that gives you a full picture of your financial health.
          </p>
          <p className="my-3 text-sm">In a nutshell, FARMS Systems isn't just another farm management tool; it's the future of efficient, profitable farming.</p>
          <Button style="text-white">Discover More</Button>
        </div>
      </div>
    </Container>
  );
};

export default Introductions;
