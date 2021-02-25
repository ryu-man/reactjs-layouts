import React from "react";
import { classNames } from '../utils'
import { ItemProps } from './props.item'

export const Item = ({
	className,
	as = "div",
	children,
	style,
	...props
}: ItemProps) => {
	return <div className={classNames(className, 'flex-item')} style={{ ...style, ...props }}>{children}</div>;
};