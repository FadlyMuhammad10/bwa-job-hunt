"use client";
import MenuAuth from "@/components/organisms/MenuAuth";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <header className="px-32 py-5 flex flex-row items-start justify-between">
      <div className="inline-flex items-center gap-12">
        <div>
          <Image
            src="/images/logo2.png"
            alt="/images/logo2.png"
            width={160}
            height={36}
            onClick={() => router.push("/")}
            className="cursor-pointer"
          />
        </div>
        <div>
          <Link
            href={"/find-jobs"}
            className="font-medium text-gray-400 cursor-pointer mr-4"
          >
            Find Jobs
          </Link>
          <Link
            href={"/find-companies"}
            className="font-medium text-gray-400 cursor-pointer "
          >
            Browse Companies
          </Link>
        </div>
      </div>
      <div className="inline-flex items-center gap-4 h-8 ">
        {session ? (
          <MenuAuth />
        ) : (
          <>
            <Button variant="link" onClick={() => router.push("/signin")}>
              Login
            </Button>
            <Button onClick={() => router.push("/signup")}>Sign Up</Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
