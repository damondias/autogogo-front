import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

	padding: 0;
	margin: 0;
	box-sizing: border-box;

	body, html {
		width: 100vw;
		height: 100vh;

		font-family: 'Raleway', sans-serif;
		color: #ffffff;
		
	}
	:root{
		width: 100%;
  		height: auto;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		
		box-sizing: border-box;
		display: flex;
  		justify-content: center;
        align-items: center;
  	    background: #eeeae4;
	}
	.containerModalLocacao{
		background-color: #fda3a3;
	}
`

export default GlobalStyle