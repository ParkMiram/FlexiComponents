import React, {useState} from "react";
import '../style/Text.css'

interface TextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string; // input 값
    setStyle?: string; // input 스타일
    onDelete?: () => void; // 초기화 버튼 활성화
}

const Text: React.FC<TextProps> = ({value, setStyle, onDelete, ...props}) => {

    // style 종류 = ["outside", "outsideLeft", "inside", "icon"];

    return (
        <>
            <div className={`textContainer ${setStyle || "outside"}`}>
                <label className="textLabel">Text</label>
                <div className="textWrap">
                    <input
                        className="textInput"
                        value={value}
                        {...props}
                    />
                    {
                        // value 삭제 버튼
                        onDelete ? value.length <= 0 ? <></> :
                            <button
                                className="delete"
                                onClick={onDelete}
                            >
                                <svg className="deleteIcon" viewBox="0 0 14 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="7" cy="7" r="7" fill="#5A636A"/>
                                    <path d="M4.66663 4.66667L9.33329 9.33334" stroke="white" strokeLinecap="round"/>
                                    <path d="M9.33337 4.66667L4.66671 9.33334" stroke="white" strokeLinecap="round"/>
                                </svg>
                            </button>
                            : <></>
                    }
                </div>
            </div>
        </>
    )
}

export default Text;