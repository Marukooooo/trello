import { z } from "zod";

export const CreateList = z.object({
  title: z
    .string({
      required_error: "须填写标题", //当属性值为空或未定义时显示的错误消息,适用于验证是否存在必填字段的情况
      invalid_type_error: "须填写标题", //当属性值的类型不是有效的字符串时显示的错误消息,适用于验证属性值的数据类型是否符合预期的情况
    })
    .min(3, {
      message: "至少需要三个字母", //只适用于针对最小长度验证规则的情况
    }),
  boardId: z.string(),
});
