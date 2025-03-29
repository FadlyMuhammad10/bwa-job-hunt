import { Input } from "@/components/ui/input";
import { FunctionComponent } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { LOCATION_OPTIONS } from "@/constants";
import { optionType } from "@/types";

interface FormSearchProps {}

const FormSearch: FunctionComponent<FormSearchProps> = () => {
  return (
    <>
      <div className="mt-6 bg-background p-4 shadow-md inline-flex items-center gap-4 relative w-max z-10">
        <div className="inline-flex items-center gap-3">
          <AiOutlineSearch className="w-6 h-6" />
          <Input
            className="py-8 w-[300px] border-none"
            placeholder="Job Title or keywords"
          />
        </div>
        <div className="inline-flex items-center gap-3">
          <GrLocation className="w-6 h-6" />
          <Select>
            <SelectTrigger className="py-8 text-gray-500 w-[300px] border-none outline-none">
              <SelectValue placeholder="Select a location" />
            </SelectTrigger>
            <SelectContent>
              {LOCATION_OPTIONS.map((item: optionType, i: number) => (
                <SelectItem key={i} value={item.id}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button className="py-8 px-10 text-lg">Search my job</Button>
        </div>
      </div>
      <div className="text-muted-foreground mt-3">
        Popular : UI Designer, UX Researcher, Android, Admin
      </div>
    </>
  );
};

export default FormSearch;
