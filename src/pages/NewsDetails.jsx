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
  title: "Why FARMS Systems Is a Game-Changer for Modern Agriculture",
  details:
    "The world of agriculture is rapidly evolving, and with it comes the necessity for reliable, comprehensive farm management software. Enter FARMS Systems, a platform designed to provide modern farmers and ranchers with the tools they need to thrive in today's competitive landscape. From its all-encompassing asset management feature that allows users to monitor everything from livestock health to equipment efficiency, to its robust accounting features designed to provide unparalleled financial insights, FARMS Systems is setting a new standard in farm management software.  One of the most revolutionary aspects of FARMS Systems is its capacity for automation. Imagine running low on feed stock and having a Purchase Order automatically generated. These automated processes not only save time but also offer incredible accuracy. Managing labor can be a herculean task for any farming operation. FARMS Systems simplifies this through its well-structured labor and task management features. Whether it's managing employees, contractors, or even work orders, everything can be handled within the platform. Understanding your financial standing is crucial for any business. FARMS Systems offers in-depth Profit & Loss reports, automated invoicing, and a chart of accounts that gives you a full picture of your financial health. In a nutshell, FARMS Systems isn't just another farm management tool; it's the future of efficient, profitable farming.",
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
            The world of agriculture is rapidly evolving, and with it comes the necessity for reliable, comprehensive farm management software. Enter FARMS Systems, a platform designed to provide modern farmers and ranchers with the tools they need to thrive in today's competitive landscape.

From its all-encompassing asset management feature that allows users to monitor everything from livestock health to equipment efficiency, to its robust accounting features designed to provide unparalleled financial insights, FARMS Systems is setting a new standard in farm management software.

Automated Processes
One of the most revolutionary aspects of FARMS Systems is its capacity for automation. Imagine running low on feed stock and having a Purchase Order automatically generated. These automated processes not only save time but also offer incredible accuracy.

Streamlined Labor Management
Managing labor can be a herculean task for any farming operation. FARMS Systems simplifies this through its well-structured labor and task management features. Whether it's managing employees, contractors, or even work orders, everything can be handled within the platform.

Financial Oversight
Understanding your financial standing is crucial for any business. FARMS Systems offers in-depth Profit & Loss reports, automated invoicing, and a chart of accounts that gives you a full picture of your financial health.

In a nutshell, FARMS Systems isn't just another farm management tool; it's the future of efficient, profitable farming.
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
