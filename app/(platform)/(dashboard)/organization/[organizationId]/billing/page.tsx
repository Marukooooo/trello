/*
 * @Author: Marukooooo 133352243+Marukooooo@users.noreply.github.com
 * @Date: 2024-03-11 17:16:28
 * @LastEditors: Marukooooo 133352243+Marukooooo@users.noreply.github.com
 * @LastEditTime: 2024-03-11 17:23:35
 * @FilePath: \trello-tutorial\app\(platform)\(dashboard)\organization\[organizationId]\billing\page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Info } from "../_components/info";
import { Separator } from "@/components/ui/separator";
import { SubscriptionButton } from "./_components/subscription";

const BillingPage = async () => {
  return (
    <div className="w-full">
      <Info></Info>
      <Separator className="my-2"></Separator>
      <SubscriptionButton></SubscriptionButton>
    </div>
  );
};

export default BillingPage;
