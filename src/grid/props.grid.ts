import { CSSProperties, ReactNode } from "react";

export type GridProps = {
	children?: ReactNode;
	templateRows?: CSSProperties["gridTemplateRows"];
	templateCols?: CSSProperties["gridTemplateColumns"];
	templateAreas?: CSSProperties["gridTemplateAreas"];
	colGap?: CSSProperties["columnGap"];
	rowGap?: CSSProperties["rowGap"];
	autoCols?: CSSProperties["gridAutoColumns"];
	autoRows?: CSSProperties["gridAutoRows"];
	justifyContent?: CSSProperties["justifyContent"];
	alignItems?: CSSProperties["alignItems"];
	alignContent?: CSSProperties["alignContent"];
	wrap?: CSSProperties["flexWrap"];
	style?: CSSProperties;
	inline?: boolean;
	reverse?: boolean;
	className?: string | undefined;
	as?: "div" | "a";
	fluid?: boolean | "width" | "height";
};
