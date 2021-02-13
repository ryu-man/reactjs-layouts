import React from "react";
import Item from './item'
import Col from './col'
import Grid, { GridProps } from '../grid'

import { classNames } from '../utils'
import { FlexProps } from './props.flex'
import { ItemProps } from './props.item'

import './flex.css'

let Element = "div";

const Row = ({
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
		<div className={classNames(className, { inline, reverse, fluid }, 'row layout')} style={{ ...style, justifyContent, alignItems, alignContent, flexWrap: wrap, gap }}>
			{children}
		</div>
	);
};

Row.item = Item;

Row.grid = ({ className, children, style, as, ...props }: GridProps & ItemProps) => {
	return (
		<Grid className={className} style={{ ...style, ...props }}>
			{children}
		</Grid>
	)
}

Row.row = ({ className, children, style, as, wrap, justifyContent, alignContent, alignItems, inline, reverse, gap, fluid, ...props }: FlexProps & ItemProps) => {
	return (
		<Row className={className} style={{ ...style, ...props, flexWrap: wrap }}>
			{children}
		</Row>
	)
}

Row.col = ({ className, children, style, as, justifyContent, alignContent, alignItems, inline, reverse, wrap, gap, fluid, ...props }: FlexProps & ItemProps) => {
	return (
		<Col className={className} justifyContent={justifyContent} alignContent={alignContent} alignItems={alignItems} inline={inline} reverse={reverse} wrap={wrap} gap={gap} fluid={fluid} style={{ ...style, ...props }}>
			{children}
		</Col>
	)
};

export default Row