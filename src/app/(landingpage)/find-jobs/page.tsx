"use client";
import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { formFilterSchema } from "@/lib/form-schema";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { filterFormType, JobType } from "@/types";
import { CATEGORIES_OPTIONS } from "@/constants";

const filterForms: filterFormType[] = [
  {
    label: "Categories",
    name: "categories",
    items: CATEGORIES_OPTIONS,
  },
];

const dummyData: JobType[] = [
  {
    applicants: 3,
    needs: 10,
    location: "Jakarta, Indonesia",
    image: "/images/company.png",
    name: "Software Engineer",
    type: "Technology",
    jobType: "Full-Time",
    category: ["Frontend", "Backend"],
  },
  {
    applicants: 3,
    needs: 10,
    location: "Jakarta, Indonesia",
    image: "/images/company.png",
    name: "Software Engineer",
    type: "Technology",
    jobType: "Full-Time",
    category: ["Frontend", "Backend"],
  },
];

export default function FindJobsPage() {
  const formFilter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: { categories: [] },
  });
  const onSubmitFilterForm = async (val: z.infer<typeof formFilterSchema>) => {
    console.log(val);
  };
  return (
    <>
      <ExploreDataContainer
        formFilter={formFilter}
        onSubmitFilter={onSubmitFilterForm}
        filterForms={filterForms}
        title="dream job"
        subTitle="Find your next career at companies like HubSpot, Nike, and Dropbox"
        loading={false}
        type="job"
        data={dummyData}
      />
    </>
  );
}
