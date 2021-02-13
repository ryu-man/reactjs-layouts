import React from "react";
import { ItemProps } from './props.item'
let Element = "div";

const Item = ({
	className,
	as = "div",
	children,
	style,
	...props
}: ItemProps) => {
	Element = as;
	return <div className={className} style={{ ...style, ...props }}>{children}</div>;
};

export default Item