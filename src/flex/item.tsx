import React from "react";
import { classNames } from '../utils'
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
	return <div className={classNames(className, 'flex-item')} style={{ ...style, ...props }}>{children}</div>;
};

export default Item