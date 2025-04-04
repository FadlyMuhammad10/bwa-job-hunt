import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LOCATION_OPTIONS } from "@/constants";
import { optionType } from "@/types";
import { FunctionComponent } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

interface FormSearchDinamicProps {}

const FormSearchDinamic: FunctionComponent<FormSearchDinamicProps> = () => {
  return (
    <div className="mx-auto w-max">
      <div className="bg-background p-4 shadow-md inline-flex items-center gap-4 relative w-max z-10 text-center">
        <div className="inline-flex items-center gap-3">
          <AiOutlineSearch className="w-6 h-6" />
          <Input
            className="py-5 w-[350px] border-none"
            placeholder="Job Title or keywords"
          />
        </div>
        <div className="inline-flex items-center gap-3">
          <GrLocation className="w-6 h-6" />
          <Select>
            <SelectTrigger className="py-5 text-gray-500 w-[350px] border-none outline-none">
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
          <Button>Search</Button>
        </div>
      </div>
      <div className="text-muted-foreground mt-3">
        Popular : UI Designer, UX Researcher, Android, Admin
      </div>
    </div>
  );
};

export default FormSearchDinamic;
