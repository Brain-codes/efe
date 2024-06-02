import { FC, SVGProps } from "react";
interface Props extends SVGProps<SVGSVGElement> {}

export type heroWhatIDoProp = {
  icon: FC<Props>;
  title: string;
  color: string;
  tColor: string;
}[];

export type skillsProp = {
  icon: FC<Props>;
  color: string;
  category: "stacks" | "frontend" | "backend" | "others";
}[];
