import { css } from "@emotion/react"

export function ButtonEmotion({ children }) {
    return <button css={css`
    background: #FDD207;
    border-radius: 81.5275px;
    width: 390px;
    height: 110px;
    font-style: normal;
    font-weight: bold;
    font-size: 48.9165px;
    line-height: 57px;
    color: #371548;
    margin: 50px 150px;
    `}>
        {children}
    </button>
}