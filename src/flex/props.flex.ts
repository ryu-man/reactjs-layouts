import { CSSProperties } from "react";
import { ShorthandPropertyAssignment } from "typescript";

export type FlexProps = {
	className?:string|undefined
	as?: "div" | "a";
	children?: React.ReactNode;
	justifyContent?: CSSProperties["justifyContent"];
	alignItems?: CSSProperties["alignItems"];
	alignContent?: CSSProperties["alignContent"];
	wrap?: CSSProperties["flexWrap"];
	inline?: boolean;
	reverse?: boolean;
	gap?: CSSProperties["gap"];
    style?: CSSProperties
	fluid?: boolean | "width" | "height";
};
