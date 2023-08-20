import PageBanner from "../../components/PageBanner";
import item1 from "../../assets/items/apple.jpg";
import { Checkbox, Divider, Input, Rate } from "antd";
import { useState } from "react";
import Container from "../../shared/Container";
import Button from "../../components/Button";
import SocialMedia from "../../components/SocialMedia";
import reviewer from "../../assets/avatar-02.webp";
import TextArea from "antd/es/input/TextArea";

const ProductDetails = () => {
  const product = {
    img: item1,
    name: "Apples",
    price: 50.0,
    rating: 5,
    description:
      "voluptatibus a totam vitae odit, neque sint doloremque vero temporibus expedita. Veritatis, exercitationem! Iste sed recusandae cum. Voluptas consequuntur error necessitatibus ea! Laborum, facilis ullam.",
  };

  const [quantity, setQuantity] = useState(1);

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [review, setReview] = useState();
  const [reviewerName, setReviewerName] = useState();
  const [reviewerEmail, setReviewerEmail] = useState();

  const [rate, setRate] = useState(0);
  const [saveInfo, setSaveInfo] = useState(false);

  return (
    <div>
      <PageBanner path={"HOME / SHOP / ORGANIC / APPLES"} title="Our Shop" />
      <Container>
        <div className="md:p-20 p-5">
          <div className="lg:flex gap-5">
            <img
              className="rounded-2xl md:w-96 w-full mb-5 lg:mb-0  h-1/2 object-cover"
              src={product.img}
              alt="product"
            />
            <div className="flex-1">
              <div className="flex gap-10 items-baseline">
                <h2 className="font-semibold">{product.name}</h2>
                <h4 className="text-primary">${product.price}</h4>
              </div>
              <Rate className="my-2" disabled={true} value={product.rating} />
              <p>({1} Comment Review)</p>
              <hr className="border-[0.5px] border-dark/10 my-3" />
              <p>{product.description}</p>
              <div className="flex items-center gap-5">
                <h6 className="font-semibold">Choose Quantity</h6>
                <div className="flex">
                  <Input
                    type="number"
                    value={quantity}
                    className="border font-semibold w-28 text-3xl rounded-none rounded-l-lg"
                  />
                  <div className="flex flex-col">
                    <p
                      onClick={() => setQuantity(quantity + 1)}
                      className="cursor-pointer py-0 px-2 border rounded-tr-lg"
                    >
                      +
                    </p>
                    <p
                      onClick={handleQuantityDecrease}
                      className="cursor-pointer py-0 px-2 border rounded-br-lg"
                    >
                      -
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 mt-5">
                <Button style="hover:bg-dark transition-300">
                  Add to Cart
                </Button>
                <Button style="bg-secondary hover:bg-dark transition-300">
                  Add to Wishlist
                </Button>
              </div>
              <div className="mt-5 lg:flex items-center">
                <h5 className="font-semibold">Share With Friends</h5>
                <div className="lg:mt-0 mt-2">
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="my-10">
            <h3 className="font-semibold mb-5">Description</h3>
            <p className="text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
              sit doloremque provident quis, non odio distinctio, quam earum
              sunt in, ipsam totam aliquam maiores. Repudiandae alias quia
              veritatis, accusamus maiores porro laudantium incidunt laborum
              amet deleniti aliquid voluptatum quod odio molestiae eligendi.
              Quasi alias, iste inventore ipsa temporibus et rerum.
            </p>
          </div>

          {/* Reviews */}
          <div>
            <h5 className="font-semibold">{1} Review for Apples</h5>
            <div className="my-5 sm:flex gap-10">
              <img
                className="w-40 h-40 mb-5 sm:mb-0 rounded-full"
                src={reviewer}
                alt="reviewer"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h5 className="font-semibold">Kevin Martin</h5>
                  <Rate value={5} />
                </div>
                <p className="text-primary">July 10, 2022</p>
                <p className="my-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sapiente qui eaque odio, vitae tempore dolorum beatae alias
                  delectus laudantium, molestiae sint doloribus eligendi nostrum
                  dolore. Neque dignissimos assumenda eum sequi?
                </p>
              </div>
            </div>
          </div>

          <Divider />

          {/* Add Review */}
          <div className="flex flex-col gap-3">
            <h5 className="font-semibold">Add a Review</h5>
            <Checkbox
              checked={saveInfo}
              onChange={() => setSaveInfo(!saveInfo)}
            >
              Save my name, email, and website in this browser for the next time
              I comment.
            </Checkbox>
            <div>
              Your Rating{" "}
              <Rate value={rate} onChange={(rate) => setRate(rate)} />
            </div>
            <TextArea
              placeholder="Write Your Review Here"
              size="large"
              onChange={(value) => setReview(value)}
            />
            <div className="flex sm:flex-row flex-col gap-4">
              <Input
                placeholder="Your Name"
                size="large"
                onChange={(value) => setReviewerName(value)}
              />
              <Input
                placeholder="Your Email"
                size="large"
                onChange={(value) => setReviewerEmail(value)}
              />
            </div>

            <Button style={"mt-5"}>Submit Review</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
