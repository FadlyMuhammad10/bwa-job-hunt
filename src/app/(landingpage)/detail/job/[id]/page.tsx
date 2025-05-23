import FormModalApply from "@/components/organisms/FormModalApply";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { BiCategory } from "react-icons/bi";

interface DetailJobPageProps {}

const DetailJobPage: FunctionComponent<DetailJobPageProps> = () => {
  return (
    <div>
      <div className="bg-slate-100 px-32 pt-10 pb-14">
        <div className="inline-flex gap-2 text-sm text-muted-foreground">
          <Link className="hover:underline hover:text-black" href={"/"}>
            Home
          </Link>{" "}
          /{" "}
          <Link
            className="hover:underline hover:text-black"
            href={"/find-companies"}
          >
            Companies
          </Link>{" "}
          /{" "}
          <Link
            className="hover:underline hover:text-black"
            href={"/detail/company/1"}
          >
            Twitter
          </Link>{" "}
          /{" "}
          <Link
            className="hover:underline hover:text-black"
            href={"/detail/job/1"}
          >
            Fullstack Javascript
          </Link>
        </div>
        <div className="bg-white shadow mt-10 p-5 w-11/12 mx-auto flex flex-row items-center justify-between">
          <div className="inline-flex items-center gap-5">
            <Image
              src="/images/company2.png"
              alt="/images/company2.png"
              width={88}
              height={88}
            />
            <div>
              <div className="text-2xl font-semibold">Fullstack Javascript</div>
              <div className="text-muted-foreground">
                {" "}
                Agency . Jakarta, Indonesia . Full-Time{" "}
              </div>
            </div>
          </div>
          <FormModalApply />
        </div>
      </div>
      <div className="px-32 py-16 flex flex-row gap-10">
        <div className="w-3/4">
          <div className="mb-16">
            <div className="text-3xl font-semibold mb-3">Description</div>
            <div className="text-muted-foreground">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                nostrum ea totam tempora quisquam tenetur, aperiam similique ut
                ipsum, harum temporibus? Velit explicabo itaque, error tempore
                nisi illo quisquam id.
              </p>
            </div>
          </div>
          <div className="mb-16">
            <div className="text-3xl font-semibold mb-3">Responsibilities</div>
            <div className="text-muted-foreground">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                nostrum ea totam tempora quisquam tenetur, aperiam similique ut
                ipsum, harum temporibus? Velit explicabo itaque, error tempore
                nisi illo quisquam id.
              </p>
            </div>
          </div>
          <div className="mb-16">
            <div className="text-3xl font-semibold mb-3">Who You Are</div>
            <div className="text-muted-foreground">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                nostrum ea totam tempora quisquam tenetur, aperiam similique ut
                ipsum, harum temporibus? Velit explicabo itaque, error tempore
                nisi illo quisquam id.
              </p>
            </div>
          </div>
          <div className="mb-16">
            <div className="text-3xl font-semibold mb-3">Nice-To-Haves</div>
            <div className="text-muted-foreground">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                nostrum ea totam tempora quisquam tenetur, aperiam similique ut
                ipsum, harum temporibus? Velit explicabo itaque, error tempore
                nisi illo quisquam id.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div>
            <div className="text-3xl font-semibold">About this role</div>
            <div className="mt-6 p-4 bg-slate-50">
              <div className="mb-2">
                <span className="font-semibold">5 Applied</span>
                <span className="text-gray-600"> of 10 capacity </span>
              </div>
              <Progress value={50} />
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Apply Before</div>
                <div className="font-semibold">Aug 20, 2024</div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Job Posted On</div>
                <div className="font-semibold">Aug 20, 2024</div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Job Type</div>
                <div className="font-semibold">Full - Time</div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Salary</div>
                <div className="font-semibold">$100 - $1000 USD</div>
              </div>
            </div>
          </div>

          <Separator className="my-10" />

          <div>
            <div className="text-3xl font-semibold">Category</div>
            <div className="my-10 gap-4 inline-flex">
              <Badge>Marketing</Badge>
            </div>
          </div>

          <Separator className="my-10" />

          <div>
            <div className="text-3xl font-semibold">Required Skills</div>
            <div className="my-10 gap-4 inline-flex">
              {[1, 2, 3].map((item: number) => (
                <Badge key={item} variant={"outline"}>
                  Marketing
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-32 pb-16">
        <Separator className="mb-14" />
        <div className="mb-6">
          <div className="text-3xl font-semibold">Perks & Benefits</div>
          <div className="text-muted-foreground mt-1">
            This job comes with several perks and benefits
          </div>
        </div>
        <div className="grid grid-cols-5 gap-5">
          {[0, 1, 2].map((item: number) => (
            <div key={item}>
              <BiCategory className="w-12 h-12 text-primary" />
              <div className="font-semibold mt-6 text-xl">Full Healtcare</div>
              <div className="mt-3 text-sm text-muted-foreground">
                We belive in thriving communities and that start with your team
                being healty and happy
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailJobPage;
