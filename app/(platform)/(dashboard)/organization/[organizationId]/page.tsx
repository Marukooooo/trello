import { Info } from "./_components/info";
import { Separator } from "@/components/ui/separator";
import { BoardList } from "./_components/board-list";
import { Suspense } from "react";

export default async function OrganizationIdPage() {
  return (
    <div className="w-full mb-20">
      <Info></Info>
      <Separator className="my-4"></Separator>
      <div className="px-2 md:px-4">
        <Suspense fallback={<BoardList.Skeleton></BoardList.Skeleton>}>
          <BoardList></BoardList>
        </Suspense>
      </div>
    </div>
  );
}
