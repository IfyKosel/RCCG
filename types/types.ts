import { JSX } from "react";

export type SidebarProps = {
	display?: string;
	displaymd?: string;
  };

  export type SidebarItemProps = {
	title: string;
	href: string;
	// icon: (color: any) => JSX.Element;
  };