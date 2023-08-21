import PageBanner from "../components/PageBanner";
import Container from "../shared/Container";

const ContactPage = () => {
  return (
    <div>
      <PageBanner title={"CONTACT"} path={"HOME / CONTACT"} />
      <Container>
        <div className="md:p-10 lg:p-20 p-5">
          <div className="bg-primary rounded-md p-10">
            <h3 className="font-cursive text-white">About</h3>
            <p className="text-white/70 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              corporis? Nam ratione explicabo soluta sed dolorem earum eius
              officia vel.
            </p>
          </div>
          <div className="bg-lime-500 mt-5 rounded-md p-10">
            <h3 className="font-cursive text-white">Contact</h3>
            <div className="text-white">
              <p> +1- (246) 333-0079</p> <p>support@agrios.com</p>
              <p>Mon - Fri: 7:00 am - 6:00 pm</p>
            </div>
          </div>
          <div className="bg-yellow-500 mt-5 rounded-md p-10">
            <h3 className="font-cursive text-white">Address</h3>
            <p className="text-white/70">
              66 Broklun Road Golden Street, New Your United States of Ameriaca
            </p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4967.093295904755!2d-0.1195192!3d51.5031864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sbd!4v1692593710540!5m2!1sen!2sbd"
          width="100%"
          height="600"
          className="mb-20"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
    </div>
  );
};

export default ContactPage;
