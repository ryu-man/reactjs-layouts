import React from "react";
import Item from './item'
import Row from './row'
import Grid, { GridProps } from '../grid'

import { classNames } from '../utils'
import { FlexProps } from './props.flex'
import { ItemProps } from './props.item'

import './flex.css'

let Element = "div";

const Col = ({
	className,
	as = "div",
	children,
	style,
	justifyContent,
	alignItems,
	alignContent,
	wrap,
	inline = false,
	reverse = false,
	gap,
	fluid = false,
}: FlexProps) => {
	Element = as;
	return (
		<div className={classNames(className, { inline, reverse, fluid }, 'col layout')} style={{ ...style, justifyContent, alignItems, alignContent, flexWrap: wrap, gap }}>
			{children}
		</div>
	);
};

Col.item = Item;

Col.grid = ({ className, children, style, alignSelf, basis, grow, order, shrink, ...props }: GridProps & ItemProps) => {
	return (
		<Grid
			className={className}
			style={{ ...style, alignSelf, flexBasis: basis, flexGrow: grow, flexShrink: shrink, order }}
			{...props}
		>
			{children}
		</Grid>
	)
}

Col.row = ({ className, children, style, alignSelf, basis, grow, order, shrink, ...props }: FlexProps & ItemProps) => {
	return (
		<Row
			className={className}
			style={{ ...style, alignSelf, flexBasis: basis, flexGrow: grow, flexShrink: shrink, order }}
			{...props}
		>
			{children}
		</Row>
	)
}

Col.col = ({ className, children, style, alignSelf, basis, grow, order, shrink, ...props }: FlexProps & ItemProps) => {
	return (
		<Col
			className={className}
			style={{ ...style, alignSelf, flexBasis: basis, flexGrow: grow, flexShrink: shrink, order }}
			{...props}
		>
			{children}
		</Col>
	)
};

export default Col