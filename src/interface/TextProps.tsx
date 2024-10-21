import React from "react";

interface TextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string; // input 값
    borderColor?: string; // border 색상 지정
    setStyle?: string; // input 스타일
    onDelete?: () => void; // 초기화 버튼 활성화
    setIcon?: [string, string];
    disabled?: boolean | true;
    readOnly ?: boolean | true;
}

export default TextProps;