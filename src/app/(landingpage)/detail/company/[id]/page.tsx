import LatestJob from "@/components/organisms/LatestJob";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { InstagramIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { AiOutlineFire } from "react-icons/ai";
import { BsFacebook, BsLinkedin, BsPeople, BsTwitter } from "react-icons/bs";
import {
  HiOutlineLocationMarker,
  HiOutlineOfficeBuilding,
} from "react-icons/hi";

interface DetailCompanyPageProps {}

const DetailCompanyPage: FunctionComponent<DetailCompanyPageProps> = () => {
  return (
    <>
      <div className="bg-slate-100 px-32 pt-16 pb-14">
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
        </div>
        <div>
          <div className="mt-10 inline-flex gap-6 items-start">
            <Image
              src="/images/company2.png"
              alt="/images/company2.png"
              width={150}
              height={150}
            />
            <div>
              <div className="inline-flex gap-4 items-center">
                <span className="text-4xl font-semibold">Twitter</span>
                <Badge>10 Jobs</Badge>
              </div>
              <div className="mt-2">
                <Link href={"/"} className="text-primary font-semibold">
                  https://twitter.com
                </Link>
              </div>
              <div className="inline-flex gap-10 items-center mt-6">
                <div className="inline-flex gap-3 items-center">
                  <div>
                    <div className="bg-white p-3 rounded-full">
                      <AiOutlineFire className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Founded</div>
                    <div className="font-semibold">March, 6 2022</div>
                  </div>
                </div>
                <div className="inline-flex gap-3 items-center">
                  <div>
                    <div className="bg-white p-3 rounded-full">
                      <BsPeople className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Employees</div>
                    <div className="font-semibold">151-200</div>
                  </div>
                </div>
                <div className="inline-flex gap-3 items-center">
                  <div>
                    <div className="bg-white p-3 rounded-full">
                      <HiOutlineLocationMarker className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Location</div>
                    <div className="font-semibold">Indonesia</div>
                  </div>
                </div>
                <div className="inline-flex gap-3 items-center">
                  <div>
                    <div className="bg-white p-3 rounded-full">
                      <HiOutlineOfficeBuilding className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Industry</div>
                    <div className="font-semibold">Advertising</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-32 py-16 flex flex-row gap-10">
        <div className="w-3/4">
          <div className="mb-16">
            <div className="text-3xl font-semibold mb-3">Company Profile</div>
            <div className="text-muted-foreground">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                nostrum ea totam tempora quisquam tenetur, aperiam similique ut
                ipsum, harum temporibus? Velit explicabo itaque, error tempore
                nisi illo quisquam id.
              </p>
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold mb-4">Contact</div>
            <div className="flex flex-wrap items-center gap-5 w-[400px]">
              <div className="p-2 border border-primary w-full text-primary inline-flex items-center font-semibold gap-3">
                <BsFacebook />
                <span className="text-sm">https://twitter.com</span>
              </div>
              <div className="p-2 border border-primary w-full text-primary inline-flex items-center font-semibold gap-3">
                <BsTwitter />
                <span className="text-sm">https://twitter.com</span>
              </div>
              <div className="p-2 border border-primary w-full text-primary inline-flex items-center font-semibold gap-3">
                <BsLinkedin />
                <span className="text-sm">https://twitter.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="text-3xl font-semibold mb-4">About this role</div>
          <div className="text-muted-foreground text-sm">
            Learn about the technology and tools the pattern use.
          </div>
          <div className="mt-5 inline-flex gap-5">
            <Badge>HTML</Badge>
            <Badge>CSS</Badge>
          </div>
        </div>
      </div>
      <div className="px-32">
        <Separator />
        <div className="my-16">
          <div className="text-3xl font-semibold mb-4">Teams</div>
          <div className="grid grid-cols-5 gap-5 mt-5">
            {[1, 2, 3, 4, 5].map((i: number) => (
              <div key={i} className="border border-border px-3 py-5">
                <div className="w-16 h-16 rounded-full mx-auto bg-gray-300" />

                <div className="text-center my-4">
                  <div className="font-semibold text-sm">Fadly</div>
                  <div className="text-gray-500 text-xs">CEO & Founder</div>
                </div>

                <div className="mx-auto w-max">
                  <div className="inline-flex gap-2">
                    <InstagramIcon className="w-4 h-4 text-gray-500" />
                    <LinkedinIcon className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Separator />
      </div>
      <div className="px-32 mt-16">
        <LatestJob />
      </div>
    </>
  );
};

export default DetailCompanyPage;
