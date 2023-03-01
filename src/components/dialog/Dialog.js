import DialogMain from "./container/DialogMain";
import DialogContent from "./item/DialogContent";
import DialogTitle from "./item/DialogTitle";

export const Dialog = Object.assign(DialogMain, {
  Title: DialogTitle,
  Content: DialogContent
})