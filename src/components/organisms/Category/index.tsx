"use client";
import TitleSection from "@/components/atoms/TitleSection";
import { FunctionComponent, useMemo } from "react";
import CategoryItem from "./CategoryItem";
import useSWR from "swr";
import { fetcher, parsingCategories } from "@/lib/utils";
import { categoryJobType } from "@/types";

interface CategoryProps {}

const Category: FunctionComponent<CategoryProps> = () => {
  const { data, error, isLoading } = useSWR("/api/jobs/categories", fetcher);

  const categories = useMemo(
    () => parsingCategories(data, isLoading, error),
    [data, error, isLoading]
  );

  return (
    <div className="mt-32 mb-8">
      <TitleSection word1="Explore by" word2="Category" />
      <div className="grid grid-cols-5 gap-9 mt-12">
        {categories.map((item: categoryJobType) => (
          <CategoryItem
            key={item.id}
            name={item.name}
            totalJobs={item.totalJobs}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
