import { useState } from "react";
import Button from "../../components/Button";
import PageBanner from "../../components/PageBanner";
import Container from "../../shared/Container";
import { Input, Pagination, Select, Slider } from "antd";
const { Search } = Input;

import item1 from "../../assets/items/apple.jpg";
import item2 from "../../assets/items/banana.jpg";
import item3 from "../../assets/items/grapes.jpg";
import item4 from "../../assets/items/onion.jpg";
import item5 from "../../assets/items/garlic.jpg";
import item6 from "../../assets/items/lettuce.jpg";
import item7 from "../../assets/items/potato.jpg";
import item8 from "../../assets/items/carrot.jpg";
import item9 from "../../assets/items/red_grapes.jpg";
import item10 from "../../assets/items/tomato.jpg";
import ItemCard from "../../components/cards/ItemCard";

export const categories = [
  "Agriculture",
  "Farming",
  "Fresh Vegetables",
  "Harvest",
  "Organic Food",
];

const ShopPage = () => {
  const [min, setMin] = useState(20);
  const [max, setMax] = useState(500);

  const onSearch = (value) => console.log(value);

  const handleChange = (value) => {
    console.log(value);
  };

  const handleRange = (value) => {
    setMin(value[0]);
    setMax(value[1]);
  };

  const [category, setCategory] = useState("Agriculture");

  const items = [
    {
      img: item1,
      name: "Apples",
      price: 50.0,
      rating: 5,
    },
    {
      img: item2,
      name: "Bananas",
      price: 50.0,
      rating: 5,
    },
    {
      img: item3,
      name: "Grapes",
      price: 50.0,
      rating: 5,
    },
    {
      img: item4,
      name: "Onions",
      price: 50.0,
      rating: 5,
    },
    {
      img: item5,
      name: "Garlics",
      price: 50.0,
      rating: 5,
    },
    {
      img: item6,
      name: "Lettuce",
      price: 50.0,
      rating: 5,
    },
    {
      img: item7,
      name: "Potatos",
      price: 50.0,
      rating: 5,
    },
    {
      img: item8,
      name: "Carrots",
      price: 50.0,
      rating: 5,
    },
    {
      img: item9,
      name: "Red Grapes",
      price: 50.0,
      rating: 5,
    },
    {
      img: item10,
      name: "Tomato",
      price: 50.0,
      rating: 5,
    },
  ];

  const [page, setPage] = useState(1);

  return (
    <div className="">
      <PageBanner path={"HOME / SHOP"} title="Our Shop" />
      <Container>
        {/* Top section */}
        <section className="px-5 mt-10 flex items-center justify-between">
          <div className="flex gap-5 items-center">
            <Search
              size="large"
              placeholder="input search text"
              onSearch={onSearch}
              className="hidden sm:block w-60"
            />
            <p className="hidden md:block">Showing 1-9 of 10 Results</p>
          </div>
          <Select
            defaultValue="relevance"
            className="w-60"
            onChange={handleChange}
            options={[
              { value: "relevance", label: "Relevance" },
              { value: "popularity", label: "Short By Popularity" },
              { value: "avg_rating", label: "Short By Average Rating" },
              { value: "latest", label: "Short By Latest" },
              { value: "lth", label: "Short By Price (Low to High)" },
              { value: "htl", label: "Short By Price (High to Low)" },
            ]}
          />
        </section>
        <section className="flex gap-5 p-5">
          <div className="hidden lg:block w-1/3">
            {/* Slider Range */}
            <div className="border border-dark/10 p-5 rounded-lg">
              <p className="font-semibold">Price</p>
              <Slider
                trackStyle={{
                  backgroundColor: "#EDBF44",
                  color: "#FFFFFF",
                }}
                max={1000}
                min={20}
                range
                defaultValue={[min, max]}
                onChange={handleRange}
              />
              <div className="mt-3 flex justify-between items-center">
                <small>
                  ${min} - ${max}
                </small>
                <Button small style={"text-xs"}>
                  Apply
                </Button>
              </div>
            </div>

            {/* Categories */}
            <div className="p-5 border border-dark/10 mt-10 rounded-lg">
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
          </div>

          {/* Items */}
          <div>
            <div className="md:flex-1 grid md:grid-cols-3 gap-5 sm:grid-cols-2 grid-cols-1">
              {items.slice((page - 1) * 9, page * 9).map((item) => (
                <ItemCard item={item} />
              ))}
            </div>
            <Pagination
              className="w-fit p-5 mx-auto"
              defaultCurrent={1}
              onChange={(pageValue) => setPage(pageValue)}
              defaultPageSize={9}
              total={items.length}
            />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default ShopPage;
