import { createGlobalStyle } from 'styled-components';


export const Reset = createGlobalStyle`
* {
	padding: 0;
	margin: 0;
	border: 0;
  }
  
  *,
  *::before,
  *::after {
	box-sizing: border-box;
  }
  
  :focus,
  :active {
	outline: none;
  }
  
  nav,
  footer,
  header,
  aside {
	display: block;
  }
  
  html,
  body {
	width: 100%;
	height: 100%;
	font-size: 100%;
	font-size: 16px;
	line-height: 1;
	text-size-adjust: 100%;
  }
  
  input,
  select,
  button,
  textarea {
	font-family: inherit;
	font-size: inherit;
	font-weight: inherit;
	color: inherit;
	background-color: inherit;
  }
  
  input::-ms-clear {
	display: none;
  }
  
  button,
  a {
	cursor: pointer;
  }
  
  button::-moz-focus-inner {
	padding: 0;
	border: 0;
  }
  
  a,
  a:visited,
  a:link {
	color: inherit;
	text-decoration: none;
  }
  
  a:focus,
  a:active {
	outline: none;
  }
  
  a:hover {
	text-decoration: none;
  }
  
  ul li {
	list-style: none;
  }
  
  img {
	vertical-align: top;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
	font-size: inherit;
	font-weight: 400;
  }
  
  table {
	border-collapse: inherit;
  }
  
  :focus::input-placeholder {
	color: transparent;
  }
  
  :focus::placeholder {
	color: transparent;
  }
  
  :focus:placeholder {
	color: transparent;
  }
  
  :focus:input-placeholder {
	color: transparent;
  }
`;
