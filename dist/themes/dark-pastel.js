import {createTheme} from 'thememirror';
import {tags as t} from '@lezer/highlight';

const darkPastel = createTheme({
	variant: 'dark',
	settings: {
		background: '#0d0d0d',
		foreground: '#ffffff',
		caret: '#b070ff',
		selection: '#392640',
		lineHighlight: '#101f23',
		gutterBackground: '#000000',
		gutterForeground: '#7d7d7d',
	},
	styles: [
		{
			tag: t.comment,
			color: '#f7b373',
		},
		{
			tag: t.variableName,
			color: '#61b0ff',
		},
		{
			tag: [t.string, t.special(t.brace)],
			color: '#76f99d',
		},
		{
			tag: t.number,
			color: '#e8f25f',
		},
		{
			tag: t.bool,
			color: '#ff94eb',
		},
		{
			tag: t.null,
			color: '#ff8f8f',
		},
		{
			tag: t.keyword,
			color: '#ff94eb',
		},
		{
			tag: t.operator,
			color: '#61b0ff',
		},
		{
			tag: t.className,
			color: '#e8f25f',
		},
		{
			tag: t.definition(t.typeName),
			color: '#ff8f8f',
		},
		{
			tag: t.typeName,
			color: '#96ff70',
		},
		{
			tag: t.angleBracket,
			color: '#ff94eb',
		},
		{
			tag: t.tagName,
			color: '#859dff',
		},
		{
			tag: t.attributeName,
			color: '#ff94eb',
		},
	],
});