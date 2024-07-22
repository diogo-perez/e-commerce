import { IconBrandAmazon } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex flex-col items-center mt-3 hover:text-green-600 transition-colors duration-300">
        <div className="text-xl leading-4 text-white">D P</div>
        <IconBrandAmazon size={40} stroke={1} />
      </div>
    </Link>
  );
}
