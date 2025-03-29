"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { JobType } from "@/types";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

interface JobCardProps extends JobType {}

const JobCard: FunctionComponent<JobCardProps> = ({
  applicants,
  needs,
  image,
  jobType,
  name,
  type,
  location,
  categories,
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/detail/job/1}`)}
      className="w-full border border-border mb-5 p-6 flex flex-row items-center justify-between"
    >
      <div className="flex flex-row items-start gap-6">
        <div>
          <Image src={image} alt={image} width={64} height={64} />
        </div>
        <div>
          <div className="text-lg font-semibold">{name}</div>
          <div className="text-sm text-muted-foreground mb-2">
            {type} . {location}
          </div>
          <div className="h-5 inline-flex items-center gap-2">
            <Badge variant={"secondary"}>{jobType}</Badge>
            <Separator orientation="vertical" />
            {categories.map((item: string, i: number) => (
              <Badge key={i}>{item}</Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[200px]">
        <Button className="w-full" size="lg">
          Apply
        </Button>

        <Progress value={(applicants / needs) * 100} className="mt-2" />

        <div className="text-gray-500 text-sm text-center mt-2">
          <span className="text-black font-semibold">{applicants} applied</span>{" "}
          of {needs} capacity
        </div>
      </div>
    </div>
  );
};

export default JobCard;
