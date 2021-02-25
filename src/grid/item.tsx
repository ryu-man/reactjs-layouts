import React from "react";
import {classNames} from '../utils'
import { ItemProps } from './props.item'


export const Item = ({
	className,
	style,
	children,
	alignSelf, area, col, colEnd, colStart, justifySelf, row, rowEnd, rowStart
}: ItemProps) => {
	return <div className={classNames(className, 'grid-item')} style={{
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