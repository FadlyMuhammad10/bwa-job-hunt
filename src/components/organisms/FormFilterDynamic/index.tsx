import { Form } from "@/components/ui/form";
import { FunctionComponent } from "react";
import CheckboxForm from "./CheckboxForm";
import { filterFormType } from "@/types";
import { Button } from "@/components/ui/button";

interface FormFilterDynamicProps {
  formFilter?: any;
  onSubmitFilter?: (val: any) => Promise<void> | undefined;
  filterForms: filterFormType[] | undefined;
}

const FormFilterDynamic: FunctionComponent<FormFilterDynamicProps> = ({
  filterForms,
  onSubmitFilter,
  formFilter,
}) => {
  return (
    <Form {...formFilter}>
      <form onSubmit={formFilter.handleSubmit(onSubmitFilter)}>
        {filterForms?.map((item: filterFormType, i: number) => (
          <CheckboxForm
            key={i}
            formFilter={formFilter}
            items={item.items}
            name={item.name}
            label={item.label}
          />
        ))}
        <Button className="mt-5 w-full">Apply Filter</Button>
        <Button variant={"outline"} className="mt-3 w-full">
          Reset Filter
        </Button>
      </form>
    </Form>
  );
};

export default FormFilterDynamic;
