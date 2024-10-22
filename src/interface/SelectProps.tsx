import React from "react";

interface SelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
    defaultValue: string; // input 값
    label?: string; // label
    borderColor?: string; // border 색상 지정
    setStyle?: string; // input 스타일
    setIcon?: [string, string];
    disabled?: boolean | true;
    readOnly ?: boolean | true;
}

export default SelectProps;