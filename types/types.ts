import { LucideIcon } from "lucide-react";

export type SidebarProps = {
  display?: string;
  displaymd?: string;
};

export type SidebarItemProps = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export type SideBottomItemProps = {
  title: string;
  icon: LucideIcon;
};

export type ParishProps = {
  parishName: string;
  hfCentres: string;
};
