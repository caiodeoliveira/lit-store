"use client";

import React, { useState } from "react";
import Header from "./components/header/Header";
import SideNav from "./components/sidenav/Sidenav";
import Filter from "./components/filter/Filter";
import SearchAndSort from "./components/search-and-sort/SearchAndSort";
import Carousel from "./components/carousel/Carousel";
import NewArrivals from "./components/new-arrivals/NewArrivals";
import Banner from "./components/banner/Banner";
import AppRights from "./components/app-rights/AppRights";
import Mugs from "./components/mugs/Mugs";
import NewBookBanner from "./assets/images/new-book-banner.png";
import Promotions from "./components/promotions/Promotions";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  return (
    <div className="grid grid-cols-[250px_1fr] h-screen">
      <div>
        <SideNav />
      </div>

      <div className="flex flex-col h-full">
        <Header hasItemsInCart={true}/>
        <main className="grid gap-6 p-6 overflow-y-auto">
          <SearchAndSort />

          <div className="w-full">
            {selectedCategory === "Todos" ? (
              <>
                <Carousel />

                <div className="max-w-[900px] mx-auto">
                  <Filter
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                </div>

                <div className="max-w-[900px] mx-auto">
                  <NewArrivals />
                </div>

                <div className="w-full">
                  <Banner type="image" bannerImage={NewBookBanner} />
                </div>

                <Promotions />
                <AppRights />
                <Mugs />
              </>
            ) : (
              <>
                <div className="w-full">
                  <Banner type="solid" solidText={selectedCategory} />
                </div>

                <div className="max-w-[900px] mx-auto flex flex-col items-center gap-6">
                  <Filter
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                  <NewArrivals />
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}