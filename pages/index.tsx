import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import Button from "../src/components/Button";
import Card from "../src/components/Card";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Input from "../src/components/Input";

const Home: NextPage = () => {
  const [dreamDisabled, setDreamDisabled] = useState(false);

  return (
    <div className="p-4 w-full h-full">
      <Header />
      <div className="flex flex-row items-center gap-2">
        <div className="relative h-[16px] w-[16px]">
          <Image
            src="https://career-lunch-storage.s3.eu-central-1.amazonaws.com/v2/layout/logo-mini-color.svg"
            layout="responsive"
            width={40}
            height={40}
            alt="mini logo"
          />
        </div>
        <p className="text-xs text-gray-400">&gt;</p>
        <p className="text-sm">Top Employees</p>
      </div>
      <div className="mb-8"></div>
      <h2 className="text-3xl text-secondary font-bold">
        Your Career - Our Mission
      </h2>
      <div className="mb-12"></div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="w-full col-span-full md:col-span-3 lg:col-span-2 flex flex-col items-start gap-4">
          <p className="text-gray-400 text-sm">Location</p>
          <div className="flex flex-row flex-wrap gap-2 w-full">
            <Button text="All" />
            <Button text="London" selected />
            <Button text="Rome" />
            <Button text="Berlin" />
            <Button text="Riga" />
          </div>
          <p className="text-gray-400 text-sm">Background</p>
          <div className="flex flex-row flex-wrap gap-2 w-full">
            <Button text="All" />
            <Button text="IT" />
            <Button text="Engineering" />
            <Button text="Finance" />
            <Button text="Legal" />
            <Button text="Data Analytics" />
            <Button text="HR" />
            <Button text="Media" />
            <Button text="Marketing" />
          </div>
        </div>
        <div className="w-full col-span-full md:col-span-9 lg:col-span-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {new Array(14).fill(0).map((_, i) => (
            <Card key={i} />
          ))}
          <div className="col-span-full py-24">
            <h2 className="text-3xl text-secondary font-bold">
              Your dream company is not listed yet?
            </h2>
            <p className="text-md mt-8">
              Let us know who we should ask to join.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <Input label="Name of your dream company" />
              <Input label="Your email" />
              <Button
                text={dreamDisabled ? "Fill The Fields" : "Send"}
                secondary
                disabled={dreamDisabled}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
