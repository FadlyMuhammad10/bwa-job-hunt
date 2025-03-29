"use client";
import { Badge } from "@/components/ui/badge";
import { CompanyType } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

interface CompanyCardProps extends CompanyType {}

const CompanyCard: FunctionComponent<CompanyCardProps> = ({
  image,
  totalJobs,
  name,
  description,
  categories,
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/detail/company/1")}
      className="border border-border p-6 cursor-pointer"
    >
      <div className="flex flex-row items-start justify-between">
        <Image src={image} alt={image} width={64} height={64} />
        <Badge>{totalJobs} Jobs</Badge>
      </div>
      <div className="my-4">
        <div className="text-lg font-semibold mb-2">{name}</div>
        <div className="line-clamp-3 text-sm text-muted-foreground">
          {description}
        </div>
      </div>
      <div className="space-x-2">
        <Badge variant={"outline"}>{categories}</Badge>
      </div>
    </div>
  );
};

export default CompanyCard;
