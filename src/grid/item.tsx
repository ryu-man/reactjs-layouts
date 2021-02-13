import React from "react";
import { ItemProps } from './props.item'

let Element = "div";

const Item = ({
	className,
	style,
	children,
	alignSelf, area, col, colEnd, colStart, justifySelf, row, rowEnd, rowStart
}: ItemProps) => {
	// Element = as;
	return <div className={className} style={{
		...style,
		alignSelf,
		justifySelf,
		gridRow: row,
		gridRowStart: rowStart,
		gridRowEnd: rowEnd,
		gridColumn: col,
		gridColumnStart: colStart,
		gridColumnEnd: colEnd,
		gridArea: area
	}}>
		{children}
	</div>;
};

export default Item