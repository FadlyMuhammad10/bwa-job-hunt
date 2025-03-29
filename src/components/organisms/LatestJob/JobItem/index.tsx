import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { JobType } from "@/types";
import Image from "next/image";
import { FunctionComponent } from "react";

interface JobItemProps extends JobType {}

const JobItem: FunctionComponent<JobItemProps> = ({
  category,
  image,
  jobType,
  name,
  type,
  location,
  skills,
}) => {
  return (
    <div className="border border-border p-8 flex flex-row items-start gap-6 cursor-pointer">
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
    </div>
  );
};

export default JobItem;
