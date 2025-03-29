"use client";
import TitleSection from "@/components/atoms/TitleSection";
import { FunctionComponent } from "react";
import JobItem from "./JobItem";
import useFeaturedJobs from "@/hooks/useFeaturedJobs";
import { JobType } from "@/types";

interface LatestJobProps {}

const LatestJob: FunctionComponent<LatestJobProps> = () => {
  const { jobs, error, isLoading } = useFeaturedJobs();

  return (
    <div className="mt-32 mb-10 py-16 relative">
      <TitleSection word1="Latest" word2="Jobs Open" />
      <div className="mt-12 grid grid-cols-3 gap-8">
        {jobs.map((item: JobType) => (
          <JobItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default LatestJob;
