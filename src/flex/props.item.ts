import { CSSProperties, ReactNode } from "react";

export type ItemProps = {
	order?: CSSProperties["order"];
	grow?: CSSProperties["flexGrow"];
	shrink?: CSSProperties["flexShrink"];
	basis?: CSSProperties["flexBasis"];
	alignSelf?: CSSProperties["alignSelf"];
	className?: string | undefined;
	style?: CSSProperties;
	as?: "div" | "a";
	children?: ReactNode;
};
