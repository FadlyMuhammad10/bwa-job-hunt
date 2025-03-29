"use client";
import { formFilterCompanySchema } from "@/lib/form-schema";
import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CompanyType, filterFormType } from "@/types";
import { CATEGORIES_OPTIONS } from "@/constants";
import ExploreDataContainer from "@/containers/ExploreDataContainer";

interface FindCompaniesPageProps {}
const filterForms: filterFormType[] = [
  {
    label: "Industry",
    name: "industry",
    items: CATEGORIES_OPTIONS,
  },
];

const dataDummy: CompanyType[] = [
  {
    image: "/images/company2.png",
    totalJobs: 10,
    name: "Software Engineer",
    description: "Software Engineer Description",
    categories: "Frontend",
  },
  {
    image: "/images/company2.png",
    totalJobs: 10,
    name: "Software Engineer",
    description: "Software Engineer Description",
    categories: "Frontend",
  },
  {
    image: "/images/company2.png",
    totalJobs: 10,
    name: "Software Engineer",
    description: "Software Engineer Description",
    categories: "Frontend",
  },
];

const FindCompaniesPage: FunctionComponent<FindCompaniesPageProps> = () => {
  const formFilter = useForm<z.infer<typeof formFilterCompanySchema>>({
    resolver: zodResolver(formFilterCompanySchema),
    defaultValues: { industry: [] },
  });
  const onSubmitFilterForm = async (
    val: z.infer<typeof formFilterCompanySchema>
  ) => {
    console.log(val);
  };
  return (
    <>
      <ExploreDataContainer
        formFilter={formFilter}
        onSubmitFilter={onSubmitFilterForm}
        filterForms={filterForms}
        title="dream companies"
        subTitle="Find the dream companies you dream work for"
        loading={false}
        type="company"
        data={dataDummy}
      />
    </>
  );
};

export default FindCompaniesPage;
