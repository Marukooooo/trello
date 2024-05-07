/*
 * @Author: Marukooooo 133352243+Marukooooo@users.noreply.github.com
 * @Date: 2024-03-11 17:24:16
 * @LastEditors: Marukooooo 133352243+Marukooooo@users.noreply.github.com
 * @LastEditTime: 2024-03-11 17:27:27
 * @FilePath: \trello-tutorial\app\(platform)\(dashboard)\organization\[organizationId]\billing\_components\subscription.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client";

import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/use-action";
import { stripeRedirect } from "@/actions/stripe-redirect";
import { error } from "console";
import { toast } from "sonner";
import { useProModal } from "@/hooks/use-pro-modal";

export const SubscriptionButton = () => {
  const proModal = useProModal();

  const { execute, isLoading } = useAction(stripeRedirect, {
    onSuccess: (data) => {
      window.location.href = data;
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onClick = () => {
    proModal.onOpen();
  };
  return (
    <Button disabled={isLoading} onClick={onClick} variant="primary">
      "Upgrade to pro"
    </Button>
  );
};
