import { CSSProperties, ReactNode } from "react";

export type ItemProps = {
	colStart?: CSSProperties["gridColumnStart"];
	colEnd?: CSSProperties["gridColumnEnd"];
	rowStart?: CSSProperties["gridRowStart"];
	rowEnd?: CSSProperties["gridRowEnd"];
	col?: CSSProperties["gridColumn"];
	row?: CSSProperties["gridRow"];
	area?: CSSProperties["gridArea"];
	justifySelf?: CSSProperties["justifySelf"];
	alignSelf?: CSSProperties["alignSelf"];
    style?: CSSProperties
	className?: string | undefined;
	children?: ReactNode;
};
