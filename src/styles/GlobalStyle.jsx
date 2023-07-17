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
	.contador-carrinho{
		user-select: none;
		font-weight: 700;
		color: red;
		border-radius: 6px;
		padding: 0.2em;
		background-color: white;
		
	}
	#imgCar{
			width: 40px;
	}
	#total{
		font-weight: 700;
	}
	#swal-input3{
		height: 2.625em;
    	padding: 0 0.75em;
		box-sizing: border-box;
		width: auto;
		transition: border-color .1s,box-shadow .1s;
		border: 1px solid #d9d9d9;
		border-radius: 0.1875em;
		background: rgba(0,0,0,0);
		box-shadow: inset 0 1px 1px rgba(0,0,0,.06), 0 0 0 3px rgba(0,0,0,0);
		color: inherit;
		font-size: 1.125em;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
		margin: 1em 2em 3px;
		word-wrap: break-word;
    	word-break: break-word;
		font-family: system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
	}
`

export default GlobalStyle