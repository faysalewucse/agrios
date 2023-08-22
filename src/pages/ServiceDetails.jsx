import { useParams } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import Container from "../shared/Container";
import img from "../assets/project1.webp";

import Accordion from "../components/Accordion";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
];

const ServiceDetails = () => {
  const { serviceName } = useParams();
  return (
    <div>
      <PageBanner title={"SERVICES"} path={`HOME / ${serviceName}`} />
      <Container>
        <div className="p-5 md:p-10 lg:p-20">
          <img className="rounded-lg" src={img} alt="" />
          <div className="my-10">
            <h2 className="font-semibold">{serviceName}</h2>
            <div className="text-dark/70 leading-8">
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci, quia rerum. Tempora voluptates ratione, sapiente,
                officiis fugit est tempore ipsum velit enim aliquam inventore
                voluptas! Distinctio numquam perferendis, tempore eum dolorem,
                omnis praesentium saepe soluta sunt veritatis dignissimos? Amet,
                id sequi laudantium, officiis animi voluptates quidem repellat
                possimus vel recusandae numquam ab dolorem ullam at, dolor enim
                consequuntur perferendis neque? Ad neque consequuntur saepe a
                repellat quibusdam natus. Corporis veritatis explicabo eveniet.
                Iusto vel praesentium odit cupiditate necessitatibus nostrum,
                atque molestias magnam velit officiis obcaecati quisquam. Ipsum
                sapiente eius officia, est, aliquid odio quae facilis accusamus
                commodi, distinctio excepturi nisi.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                corporis, qui architecto consequatur in distinctio nam a! Odit
                optio quasi dignissimos iure quam necessitatibus nam architecto
                dolorum accusamus iusto impedit quo illum, exercitationem
                cupiditate autem unde omnis magni dolor aliquid atque molestias
                a ullam? Sint, corrupti unde ratione iure consequuntur soluta
                repudiandae atque ipsam provident minima? Non, ratione
                voluptatem! Porro sapiente illum esse nam numquam sunt laborum
                officia non quam blanditiis. Obcaecati accusamus culpa
                blanditiis asperiores maiores sequi nihil recusandae, reiciendis
                sit modi eum. Mollitia tenetur dolore enim tempora id minima
                ullam cumque sunt. Explicabo totam officiis libero non qui?
              </p>
            </div>

            <div className="md:flex gap-5 my-10">
              <div className="flex-1">
                <img
                  className="rounded-xl h-60 object-cover"
                  src={img}
                  alt="benifit"
                />
                <h3 className="my-5 font-semibold">Our Benifits</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magnam illum sequi quae nam. Laudantium expedita recusandae
                  pariatur magni accusamus repellendus?
                </p>
              </div>
              <div className="flex-1">
                <img
                  className="rounded-xl h-60 object-cover"
                  src={img}
                  alt="benifit"
                />
                <ul className="flex flex-col gap-4 font-semibold my-5">
                  <p>Nsectetur cing elit.</p>
                  <p>Suspe ndisse suscipit sagittis leo.</p>
                  <p>Entum estibulum dignissim posuere.</p>
                  <p>Lorem Ipsum on the tend to repeat.</p>
                </ul>
              </div>
            </div>

            <Accordion items={items} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetails;
