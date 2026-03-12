/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function App() {
  const fundoAzul = {background: "blue"};
  const fonte = {color: "red"};
  const tamanho = 30;

  return (
    <>
      <div css={{
        fontSize: 22,
        backgroundColor: "olive"
      }}>
        Cor fundo e tamanho
      </div>

      <br />

      <div css={[fundoAzul, fonte]}>
        Fonte vermelha e fundo azul(Array)
      </div>

      <br />

      <div css={css`
        font-size: ${tamanho}px;
        background-color: green;
      `}>
        Bem-vindos! tamplate string + interpolação!
      </div>
    </>
  )
}

export default App;