"use client";
import { Badge } from "@/components/ui/badge";
import { categoryJobType, JobType } from "@/types";
import Image from "next/image";
import { FunctionComponent } from "react";

interface JobItemProps extends JobType {}

const JobItem: FunctionComponent<JobItemProps> = ({
  image,
  jobType,
  name,
  type,
  location,
  desc,
  category,
  skills,
}) => {
  return (
    <div className="border border-border p-6 cursor-pointer">
      <div className="flex flex-row justify-between items-start">
        <Image src={image} alt={image} width={48} height={48} />
        <span className="px-4 py-1 border text-xs font-semibold text-primary border-primary">
          {jobType}
        </span>
      </div>
      <div className="my-4">
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-muted-foreground mb-3">
          {type} . {location}
        </div>
        <div
          className="text-muted-foreground h-12 line-clamp-2 text-ellipsis"
          dangerouslySetInnerHTML={desc ? { __html: desc } : undefined}
        ></div>
      </div>
      <div className="space-x-2">
        {skills.map((item, index) => (
          <Badge
            key={index}
            variant={"outline"}
            className="rounded border-primary bg-primary/5 text-primary"
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default JobItem;
