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
		display: flex;
		flex-direction: column;
		gap: 2em;
		padding-top: 1em;
	}
	.containerModalLocacao img{
		width: 80%;
		margin: auto;
		border-radius: 20px;
	}
	.containerModalLocacao .campoValor{
		display: flex;
		justify-content: space-between;
		font-size: 24px;
		padding: 0.5em;
		background-color: #fff8ef;
		border-radius: 6px;
	}
	#valorModalLocacao{
		font-weight: 700;
	}
	.containerCarrinho{
		display: flex;
		flex-direction: column;
		gap: 2em;
		padding-top: 1em;
		width: 100%;
	}
	.containerCarrinho table{
		background-color: #fff8ef;
		padding: 2em;
	}
	.containerCarrinho tr td, .marginBot{
		line-height: 2em;
	}
	.containerCarrinho .delete-btn{
		border: 0;
		background-color: white;
		color: red;
		font-size: 18px;
		cursor: pointer;
	}
	.containerCarrinho .delete-btn:active{
		color: #ff6969;
	}
	.containerCarrinho .delete-btn:hover{
		color:#ffb2b2;
	}

	.linhaValorCarro{
		display: flex;
		gap: 0.5em;
		justify-content: center;
		align-items: center;
	}
`

export default GlobalStyle