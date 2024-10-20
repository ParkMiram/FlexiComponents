import React from "react";
import '../style/Text.css';
import basic from '../assets/images/icon.svg';

interface TextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string; // input 값
    setStyle?: string; // input 스타일
    onDelete?: () => void; // 초기화 버튼 활성화
    setIcon?: [string, string];
}

const Text: React.FC<TextProps> = ({value, setStyle, onDelete, setIcon, ...props}) => {

    // setStyle
    const styleType: string[] = ["outside", "outsideLeft", "inside", "icon"];
    let appliedStyle = "outside"; // 기본값 설정
    for (const type of styleType) {
        if (setStyle === type) {
            appliedStyle = type;
            break;
        }
    }

    // setIcon
    const iconSrc = setIcon ? setIcon[0] : basic; // 기본 아이콘 설정
    const iconAlt = setIcon ? setIcon[1] : '기본 아이콘'; // 기본 텍스트 설정

    return (
        <>
            <div className={`textContainer ${appliedStyle}`}>
                {
                    appliedStyle === "outside" || appliedStyle === "outsideLeft" ?
                        <label className="label">outsideText</label>
                        : <></>
                }
                <div className="textWrap">
                    {
                        appliedStyle === "inside" ?
                        <label className="label">insideText</label>
                        : appliedStyle === "icon" ?
                            <img
                                className="label"
                                src={iconSrc}
                                alt={iconAlt}
                            />
                            : <></>
                    }
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