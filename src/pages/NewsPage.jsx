import PageBanner from "../components/PageBanner";
import news1 from "../assets/news/news-01.webp";
import news2 from "../assets/news/news-03.webp";
import news3 from "../assets/news/news-04.webp";
import news4 from "../assets/news/news-05.webp";
import news5 from "../assets/news/news-06.webp";
import NewsCard from "../components/cards/NewsCard";
import { Pagination } from "antd";
import { useState } from "react";
import Container from "../shared/Container";

export const newses = [
  {
    cover: news1,
    publishedDate: "5 July, 2022",
    writer: "Kevin Martin",
    comments: 1,
    title: "Why FARMS Systems Is a Game-Changer for Modern Agriculture",
    details:
      "Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you",
  },
  {
    cover: news2,
    publishedDate: "5 July, 2022",
    writer: "Kevin Martin",
    comments: 1,
    title: "Why FARMS Systems Is a Game-Changer for Modern Agriculture",
    details:
      "Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you",
  },
  {
    cover: news4,
    publishedDate: "5 July, 2022",
    writer: "Kevin Martin",
    comments: 1,
    title: "Why FARMS Systems Is a Game-Changer for Modern Agriculture",
    details:
      "Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you",
  },
  {
    cover: news3,
    publishedDate: "5 July, 2022",
    writer: "Kevin Martin",
    comments: 1,
    title: "Why FARMS Systems Is a Game-Changer for Modern Agriculture",
    details:
      "Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you",
  },
  {
    cover: news5,
    publishedDate: "5 July, 2022",
    writer: "Kevin Martin",
    comments: 1,
    title: "Why FARMS Systems Is a Game-Changer for Modern Agriculture",
    details:
      "Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you",
  },
];

const NewsPage = () => {
  const [page, setPage] = useState(1);

  return (
    <div>
      <PageBanner title={"OUR BLOGS"} path={"HOME / NEWS"} />

      <Container>
        <div className="lg:p-20 md:p-10 p-5 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {newses.slice((page - 1) * 4, page * 4).map((news, index) => (
            <NewsCard key={index} news={news} />
          ))}
        </div>
        <Pagination
          className="w-fit p-5 mx-auto"
          defaultCurrent={1}
          onChange={(pageValue) => setPage(pageValue)}
          defaultPageSize={9}
          total={newses.length}
        />
      </Container>
    </div>
  );
};

export default NewsPage;
