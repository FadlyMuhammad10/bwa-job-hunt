"use client";

import TitleSection from "@/components/atoms/TitleSection";
import useFeaturedJobs from "@/hooks/useFeaturedJobs";
import { JobType } from "@/types";
import { FunctionComponent } from "react";
import JobItem from "./JobItem";

interface FeaturedJobProps {}

const FeaturedJob: FunctionComponent<FeaturedJobProps> = () => {
  const { jobs, error, isLoading } = useFeaturedJobs();

  return (
    <div className="mt-32 mb-8">
      <TitleSection word1="Featured" word2="Jobs" />
      <div className="grid grid-cols-4 gap-8 mt-12">
        {jobs.map((item: JobType) => (
          <JobItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJob;
