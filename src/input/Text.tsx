import React, {useRef} from "react";
import '../style/Text.css';
import basic from '../assets/images/icon.svg';
import TextProps from "../interface/TextProps";

const Text: React.FC<TextProps> = ({value, label, borderColor, setStyle, onDelete, setIcon, disabled, readOnly, ...props}) => {

    // borderColor
    const handleFocus = (event: React.FocusEvent<HTMLDivElement>) => {
        event.currentTarget.style.borderColor = `${borderColor}`;
        event.currentTarget.style.transition = "0.1s ease-in-out";

        const inputElement = event.currentTarget.parentElement?.querySelector('input')
        if (inputElement && (inputElement.readOnly || inputElement.disabled)) {
            event.currentTarget.style.borderColor = "";
        }
    };

    const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
        event.currentTarget.style.borderColor = "";
        event.currentTarget.style.transition = "0.1s ease-in-out";
    };

    const inputRef = useRef<HTMLInputElement>(null);

    const handleButtonClickFocusInput = () => {
        onDelete && onDelete();
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

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
                        <label className="label">{label}</label>
                        : <></>
                }
                <div
                    className="textWrap"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                >
                    {
                        appliedStyle === "inside" ?
                        <label className="label">{label}</label>
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
                        ref={inputRef}
                        disabled={disabled}
                        readOnly={readOnly}
                    />
                    {
                        // value 삭제 버튼
                        !disabled && !readOnly ?
                            onDelete ? value.length <= 0 ? <></> :
                                    <button
                                        className="delete"
                                        onClick={handleButtonClickFocusInput}
                                    >
                                        <svg className="deleteIcon" viewBox="0 0 14 14" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#5A636A"/>
                                            <path d="M4.66663 4.66667L9.33329 9.33334" stroke="white" strokeLinecap="round"/>
                                            <path d="M9.33337 4.66667L4.66671 9.33334" stroke="white" strokeLinecap="round"/>
                                        </svg>
                                    </button>
                                : <></>
                            : <></>
                    }
                </div>
            </div>
        </>
    )
}

export default Text;