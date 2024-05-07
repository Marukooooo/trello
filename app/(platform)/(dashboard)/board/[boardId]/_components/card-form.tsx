"use client";

import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { FormTextarea } from "@/components/form/form-textarea";
import { FormSubmit } from "@/components/form/form-submit";
import { useAction } from "@/hooks/use-action";
import { createCard } from "@/actions/create-card";
import { useRef, ElementRef, KeyboardEventHandler, forwardRef } from "react";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { useOnClickOutside, useEventListener } from "usehooks-ts";

interface CardFormProps {
  listId: string;
  isEditing: boolean;
  enableEditing: () => void;
  disableEditing: () => void;
}

export const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(
  ({ listId, isEditing, enableEditing, disableEditing }, ref) => {
    const params = useParams();
    const formRef = useRef<ElementRef<"form">>(null);
    const { execute, fieldErrors } = useAction(createCard, {
      onSuccess: (data) => {
        toast.success(`Card "${data.title}" created`);
        formRef.current?.reset();
      },
      onError: (error) => {
        toast.error(error);
      },
    });
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        disableEditing();
      }
    };

    useOnClickOutside(formRef, disableEditing);
    useEventListener("keydown", onKeyDown);

    const onTextareaKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (
      e
    ) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        formRef.current?.requestSubmit();
      }
    };

    const onSubmit = (formData: FormData) => {
      const title = formData.get("title") as string;
      const boardId = params.boardId as string;
      const listId = formData.get("listId") as string;

      execute({ title, boardId, listId });
    };

    if (isEditing) {
      return (
        <form
          action={onSubmit}
          className="m-1 py-0.5 px-1 space-y-4"
          ref={formRef}
        >
          <FormTextarea
            id="title"
            onKeyDown={onTextareaKeyDown}
            ref={ref}
            placeholder="输入卡片标题..."
            errors={fieldErrors}
          ></FormTextarea>
          <input hidden id="listId" name="listId" value={listId} readOnly />
          <div className="flex items-center gap-x-1">
            <FormSubmit>添加卡片</FormSubmit>
            <Button onClick={disableEditing} size="sm" variant="ghost">
              <X className="H-5 W-5"></X>
            </Button>
          </div>
        </form>
      );
    }
    return (
      <div className="pt-2 px-2">
        <Button
          onClick={enableEditing}
          className="h-auto px-2 py-1.5 w-full justify-start text-muted-foreground text-sm"
          size="sm"
          variant="ghost"
        >
          <Plus className="h-4 w-4 mr-2"></Plus>
          添加卡片
        </Button>
      </div>
    );
  }
);

CardForm.displayName = "CardForm";
