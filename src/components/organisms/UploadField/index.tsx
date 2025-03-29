import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import { ChangeEvent, FunctionComponent, useRef, useState } from "react";

interface UploadFileProps {
  form: any;
  name: string;
}

const UploadFile: FunctionComponent<UploadFileProps> = ({ form, name }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [nameFile, setNameFile] = useState<string>("Attach Resume / CV");
  const handleSelectFile = () => {
    inputRef.current?.click();
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setNameFile(e.target.files[0].name);
      form.setValue(name, e.target.files[0]);
    }
  };
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="font-semibold">Attach your resume</div>
      <div>
        <div>
          <div
            onClick={handleSelectFile}
            className="text-xs text-primary font-semibold p-3 text-center cursor-pointer border-2 border-dashed border-primary"
          >
            {nameFile}
          </div>
        </div>
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormMessage className="mt-2" />
            </FormItem>
          )}
        />
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept="application/pdf"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default UploadFile;
