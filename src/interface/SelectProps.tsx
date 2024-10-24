import React from "react";

interface SelectProps {
    children?: React.ReactNode;
    defaultValue?: null | { id: number; option: string }; // 기본 값
    setDefaultValue?: any; // 선택한 값
    data?: [] | { id: number; option: string; }[]; // option 리스트
    label?: string; // label
    borderColor?: string; // border 색상 지정
    setStyle?: string; // input 스타일
    setIcon?: [string, string];
    disabled?: boolean | true;
    readOnly ?: boolean | true;
}

export default SelectProps;