import { useState } from "react";
import Button from "../../components/Button";
import PageBanner from "../../components/PageBanner";
import Container from "../../shared/Container";
import { Input, Select, Slider } from "antd";
const { Search } = Input;

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

  const categories = [
    "Agriculture",
    "Farming",
    "Fresh Vegetables",
    "Harvest",
    "Organic Food",
  ];

  return (
    <div className="">
      <PageBanner path={"Home / Shop"} title="Our Shop" />
      <Container>
        {/* Top section */}
        <section className="p-10 flex items-center justify-between">
          <div className="flex gap-5 items-center">
            <Search
              size="large"
              placeholder="input search text"
              onSearch={onSearch}
              className="w-60"
            />
            <p>Showing 1-9 of 10 Results</p>
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
        <section className="hidden lg:block px-5">
          <div className="w-1/5">
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
        </section>
      </Container>
    </div>
  );
};

export default ShopPage;
