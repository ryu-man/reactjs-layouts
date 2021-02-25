import React from "react";
import { Item } from './item'
import { Col } from './col'
import { Grid, GridProps } from '../grid'

import { classNames } from '../utils'
import { FlexProps } from './props.flex'
import { ItemProps } from './props.item'

import './flex.css'


export const Row = ({
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
	return (
		<div className={classNames(className, { inline, reverse, fluid }, 'row layout')} style={{ ...style, justifyContent, alignItems, alignContent, flexWrap: wrap, gap }}>
			{children}
		</div>
	);
};

Row.item = Item;

Row.grid = ({ className, children, style, alignSelf, basis, grow, order, shrink, ...props }: GridProps & ItemProps) => {
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

Row.row = ({ className, children, style, alignSelf, basis, grow, order, shrink, ...props }: FlexProps & ItemProps) => {
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

Row.col = ({ className, children, style, alignSelf, basis, grow, order, shrink, ...props }: FlexProps & ItemProps) => {
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