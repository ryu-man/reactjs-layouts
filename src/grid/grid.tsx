import React from "react";
import {Item} from './item'
import { classNames } from "../utils";
import { GridProps } from './props.grid'
import { ItemProps } from './props.item'
import { Col } from "../flex";
import { Row } from "../flex";
import { FlexProps } from "../flex/props.flex";
import './grid.css'


export const Grid = ({
	className,
	as = "div",
	children,
	templateRows,
	templateCols,
	templateAreas,
	colGap,
	rowGap,
	autoCols,
	autoRows,
	justifyContent,
	alignItems,
	alignContent,
	wrap,
	inline = false,
	reverse = false,
	fluid,
	style
}: GridProps) => {
	return <div className={classNames(className, { inline, reverse, fluid }, 'grid layout')} style={{ ...style, gridTemplateRows: templateRows, gridTemplateColumns: templateCols, gridTemplateAreas: templateAreas, columnGap: colGap, rowGap, gridAutoColumns: autoCols, gridAutoRows: autoRows, justifyContent, alignItems, alignContent, flexWrap: wrap }}>{children}</div>;
};

Grid.item = Item

Grid.grid = ({ className, children, style, col, colStart, colEnd, row, rowStart, rowEnd, alignSelf, justifySelf, area, ...props }: GridProps & ItemProps) => {
	return (
		<Grid
			className={className}
			{...props}
			style={{
				...style,
				gridColumn: col,
				gridColumnStart: colStart,
				gridColumnEnd: colEnd,
				gridRow: row,
				gridRowStart: rowStart,
				gridRowEnd: rowEnd,
				alignSelf,
				gridArea: area
			}}>
			{children}
		</Grid>
	)
}

Grid.row = ({ className, children, style, col, colStart, colEnd, row, rowStart, rowEnd, alignSelf, justifySelf, area, justifyContent, ...props }: FlexProps & ItemProps) => {
	return (
		<Row
			className={className}
			{...props}
			style={{
				...style,
				gridColumn: col,
				gridColumnStart: colStart,
				gridColumnEnd: colEnd,
				gridRow: row,
				gridRowStart: rowStart,
				gridRowEnd: rowEnd,
				alignSelf,
				gridArea: area
			}}>
			{children}
		</Row>
	)
}

Grid.col = ({ className, as, children, style, col, colStart, colEnd, row, rowStart, rowEnd, alignSelf, justifySelf, area, ...props }: FlexProps & ItemProps) => {
	return (
		<Col
			className={className}
			{...props}
			style={{
				...style,
				gridColumn: col,
				gridColumnStart: colStart,
				gridColumnEnd: colEnd,
				gridRow: row,
				gridRowStart: rowStart,
				gridRowEnd: rowEnd,
				alignSelf,
				gridArea: area
			}}>
			{children}
		</Col>
	)
}