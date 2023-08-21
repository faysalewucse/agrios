import { BsChatDotsFill, BsPersonCircle } from "react-icons/bs";
import news1 from "../assets/news/news-01.webp";
import PageBanner from "../components/PageBanner";
import { Checkbox, Divider, Input } from "antd";
import SocialMedia from "../components/SocialMedia";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import Button from "../components/Button";
import Search from "antd/es/input/Search";
import Container from "../shared/Container";
import { newses } from "./NewsPage";
import { BiUser } from "react-icons/bi";
import { categories } from "./ShopPage/ShopPage";

const news = {
  cover: news1,
  publishedDate: "5 July, 2022",
  writer: "Kevin Martin",
  comments: 1,
  title: "Bringing Food Production Back To Cities",
  details:
    "Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you",
  tags: ["Hravest", "Vegetables"],
};

const relatedNews = [
  { title: "Agronomy and relation to Other Sciences" },
  { title: "Bringing Food Production Back To Cities" },
];

const NewsDetails = () => {
  const [saveInfo, setSaveInfo] = useState(false);

  return (
    <div>
      <PageBanner title={"NEWS DETAILS"} path={`HOME / NEWS / ${news.title}`} />
      <Container>
        <div className="lg:flex lg:p-20 md:p-10 p-5 gap-10">
          <div className="flex-1">
            <div className="relative">
              <img className="rounded-lg" src={news.cover} alt="cover" />
              <p className="bg-primary text-white py-2 px-6 w-fit rounded-md absolute bottom-5 left-5">
                {news.publishedDate}
              </p>
            </div>
            <div className="my-2 flex items-center gap-5">
              <div className="flex items-center gap-1">
                <BsPersonCircle className="bg-secondary text-white text-lg p-1 rounded-full" />
                <small>{news.writer}</small>
              </div>
              <div className="flex items-center gap-1">
                <BsChatDotsFill className="text-secondary text-2xl p-1 rounded-full" />
                <small>{news.comments} Comment</small>
              </div>
            </div>

            <h4 className="font-semibold">{news.title}</h4>
            <p className="my-10 text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
              odio placeat! Aut maiores, reprehenderit quis ex error earum
              sapiente quasi autem inventore dignissimos, id cumque? Unde,
              labore quia! Neque assumenda doloribus odio, reiciendis corrupti
              aperiam placeat sed sint perferendis voluptatem natus, qui
              dignissimos incidunt vel quaerat in, officiis perspiciatis autem
              inventore ab consequatur. Neque delectus nihil quidem eius
              cupiditate officiis deleniti nisi voluptas repellendus culpa? Quia
              sed animi eligendi ipsum aspernatur et ab, molestiae inventore
              amet temporibus alias quasi suscipit numquam est accusantium
              reprehenderit nemo. Similique libero ratione et praesentium sunt
              tempora, cupiditate perspiciatis laudantium eveniet velit aliquid
              adipisci ea beatae delectus! Debitis necessitatibus, deleniti
              eveniet sunt provident veniam ipsum, ut dicta labore perferendis
              voluptatum, error inventore. Ipsa quidem accusantium velit
              distinctio excepturi earum, blanditiis, neque est ab asperiores
              fugiat quaerat vero, ullam magni doloribus eius. Enim atque
              dolorum similique illo ea voluptatem in sit maxime nihil,
              blanditiis qui eveniet, delectus placeat deleniti amet dolor sed
              vitae quo odio dignissimos debitis dicta. Recusandae, velit
              pariatur. Voluptatum quo corporis quia non quam aliquam, magni
              obcaecati eligendi odit est labore modi provident nesciunt, sed
              quisquam nam dignissimos! Repudiandae pariatur recusandae vitae
              corrupti doloremque modi facere dolore repellat in vel libero,
              debitis fuga.
            </p>

            <Divider />

            <div className="flex justify-between">
              <div className="flex gap-5">
                <h5 className="font-semibold">Tags</h5>
                <div className="flex gap-3">
                  {news.tags.map((tag) => (
                    <div className="bg-primary py-2 px-6 text-white w-fit rounded-md">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <SocialMedia />
            </div>

            <div className="my-5 flex justify-center gap-5">
              {relatedNews.map((news, index) => (
                <h6 className="w-full bg-secondary/10 font-semibold hover:bg-secondary hover:text-white transition-200 p-14 rounded-md">
                  {news.title}
                </h6>
              ))}
            </div>

            {/* Leave Cmment */}
            {/* Add Review */}
            <div className="flex flex-col gap-3">
              <h5 className="font-semibold">Leave a comment</h5>
              <Checkbox
                checked={saveInfo}
                onChange={() => setSaveInfo(!saveInfo)}
              >
                Save my name, email, and website in this browser for the next
                time I comment.
              </Checkbox>

              <div className="flex sm:flex-row flex-col gap-4">
                <Input
                  placeholder="Full Name"
                  size="large"
                  onChange={(value) => setReviewerName(value)}
                />
                <Input
                  placeholder="Email Address"
                  size="large"
                  onChange={(value) => setReviewerEmail(value)}
                />
              </div>
              <TextArea
                placeholder="Write Comment Here"
                size="large"
                onChange={(value) => setReview(value)}
              />

              <Button style={"mt-5"}>Post Comment</Button>
            </div>
          </div>
          <div className="w-96">
            <Search size="large" />
            <div className="my-10 bg-secondary/10 p-5 rounded-md">
              <h6 className="font-semibold">Latest News</h6>
              <div>
                {newses.slice(0, 3).map((news, index) => (
                  <div
                    className={`flex gap-4 ${
                      index % 2 === 1 && "bg-white"
                    } p-5 rounded`}
                    key={index}
                  >
                    <img
                      className="h-20 object-cover w-20 rounded-md"
                      src={news.cover}
                      alt=""
                    />
                    <div>
                      <p className="flex items-center gap-2 text-dark/80">
                        <BiUser className="bg-secondary text-2xl p-1 rounded-full text-white" />
                        by {news.writer}
                      </p>
                      <h6>{news.title}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-secondary/10 p-5 rounded-md">
              <h6 className="font-semibold mb-5">Categories</h6>
              <div className="flex flex-col gap-5">
                {categories.map((catgry) => (
                  <p className="cursor-pointer flex items-center justify-between text-dark/60 transition-300 hover:text-dark">
                    {catgry}
                    <p>{">"}</p>
                  </p>
                ))}
              </div>
            </div>
            <div className="my-5 bg-secondary/10 p-5 rounded-md">
              <h6 className="font-semibold mb-5">Tags</h6>
              <div className="flex flex-wrap gap-5">
                {categories.map((catgry) => (
                  <p className="bg-white py-1 px-6 cursor-pointer flex items-center justify-between text-dark transition-300 hover:bg-primary hover:text-white rounded-md">
                    {catgry}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsDetails;
