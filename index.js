'use strict';
const foregroundColor = '#eff0eb';
const backgroundColor = '#282a36';
const red = '#ff5c57';
const green = '#5af78e';
const yellow = '#f3f99d';
const blue = '#57c7ff';
const magenta = '#ff6ac1';
const cyan = '#9aedfe';

// theming variables
const navHeight = '48px';
const headerColor = '#181a21';
const activeColor = '#292b36';


exports.decorateConfig = config => Object.assign({}, config, {
	backgroundColor,
	foregroundColor,
	borderColor: headerColor,
	cursorColor: '#97979b',
	cursorAccentColor: backgroundColor,
	selectionColor: 'rgba(151, 151, 155, 0.2)',
	colors: {
		black: backgroundColor,
		red,
		green,
		yellow,
		blue,
		magenta,
		cyan,
		white: '#f1f1f0',
		lightBlack: '#686868',
		lightRed: red,
		lightGreen: green,
		lightYellow: yellow,
		lightBlue: blue,
		lightMagenta: magenta,
		lightCyan: cyan,
		lightWhite: foregroundColor
	},
	css: `
		${config.css}
		.terms_terms {
			margin-top: ${navHeight};
		}

		.splitpane_divider, .splitpane_divider_vertical {
			opacity: .9;
		}

		.tabs_nav {
			background: ${headerColor};
		}

		.tabs_borderShim {
			display: none;
		  }

		.tabs_nav {
			height: ${navHeight};
			line-height: ${navHeight};
			display: flex;
			align-items: center;

			.tabs_title {
				width: -webkit-fill-available;
			}
		}

		.tabs_list {
			max-height: ${navHeight};
			margin-left: 100px;
			width: 100%;
		}

		.tab_tab {
			display: grid;
			grid-auto-flow: column;
			justify-content: left;
			width: 100%;
			align-items: center;
			grid-gap: 16px;
			padding: 0 32px;
			
			&.tab_active {
				background: ${activeColor};
			}
		}

		.tab_text {
			width: 100%;
			height: auto;
	  
			.tab_textInner {
			  position: relative;
			  inset: 0;
			}
		}

		.tab_icon {
			height: calc(${navHeight} * .6);
			width: calc(${navHeight} * .6);
			top: 50%;
			transform: translateY(-50%);
			right: 16px;
			background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNlOWU5ZTkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXgiPjxsaW5lIHgxPSIxOCIgeTE9IjYiIHgyPSI2IiB5Mj0iMTgiPjwvbGluZT48bGluZSB4MT0iNiIgeTE9IjYiIHgyPSIxOCIgeTI9IjE4Ij48L2xpbmU+PC9zdmc+");			background-repeat: no-repeat;
			background-position: center;
			background-size: 60%;

			.tab_shape {
			  display: none;
			}
		  }
	
		/* Fade the title of inactive tabs and the content of inactive panes */
		.tab_text,
		.term_term {
			opacity: 0.6;
			will-change: opacity;
		}
		.tab_active .tab_text,
		.term_active .term_term {
			opacity: 1;
			transition: opacity 0.12s ease-in-out;
		}		
	`
});
