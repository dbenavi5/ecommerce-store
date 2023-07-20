import { cn } from "@/lib/utils";
import { Billboard } from "@/types";
import Image from "next/image";

interface BillboardProps {
  data: Billboard;
  className?: string;
}

const Billboard: React.FC<BillboardProps> = ({ data, className }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      {/* Optimized Image */}
      <div
        className={cn(
          "rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover",
          className
        )}
      >
        <Image
          src={data?.imageUrl}
          alt={data?.label}
          fill
          className="aspect-square object-cover rounded-md z-[-1]"
          unoptimized // Disables vercel optimization
        />
        <div className="absolute top-24 right-10 h-full w-full flex flex-col justify-center items-left text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
