import React, {useState} from 'react';
import '../../style/input/input_common.css';
import '../../style/input/select.css';
import SelectProps from "../../interface/SelectProps";
import open from '../../assets/images/open.svg';
import basic from "../../assets/images/icon.svg";

const Select: React.FC<SelectProps> = ({ defaultValue, setDefaultValue, data,  label, setStyle, borderColor, setIcon, ...props }) => {

    // state
    const [toggle, setToggle] = useState(false);

    // toggle
    const handleToggle = () => {
        const newToggle = !toggle; // 새로운 토글 값 저장
        setToggle(newToggle);
        animationToggle(newToggle); // 새로운 토글 값을 인자로 전달
    }
    // animation
    const animationToggle = (isOpen: boolean) => {
        const list = document.getElementById('list');
        const dataList = document.getElementById('dataList');
        const selected = document.getElementById('selected');
        if (list && dataList && selected) {
            if (isOpen) {
                requestAnimationFrame(() => {
                    // 4 = border 위, 아래 px 값
                    list.style.height = String(selected.offsetHeight + 4 + dataList.offsetHeight) + 'px';
                    list.style.borderColor = `${borderColor}`;
                });
            } else {
                setTimeout(() => {
                    list.style.height = '2.5rem';
                    list.style.borderColor = '';
                }, 0);
            }
        }
    }

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

    // option click
    const handleSelectOption = (id: number, option: string): void => {
        setDefaultValue({ id: id, option: option });
    }

    return (
        <>
            <div className={`textContainer ${appliedStyle}`}>
                {
                    appliedStyle === "outside" || appliedStyle === "outsideLeft" ?
                        <label className="label">{label}</label>
                        : <></>
                }
                <div className="selectContainer">
                    <div
                        id="list"
                        className={`selectWrap ${toggle ? "active" : ""}`}
                        onClick={handleToggle}
                        style={appliedStyle === "outside" || appliedStyle === "outsideLeft" ? { flexDirection: "column" } : {}}
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
                        <div className="listWrap">
                            <div id="selected" className="selected">
                                <p className="option">{defaultValue?.option}</p>
                                <img src={open} alt="open" className="open" />
                            </div>
                            <ul id="dataList" className="dataList">
                                <li
                                    className={`list ${defaultValue?.id === 0 ? 'on' : ''}`}
                                    onClick={() => handleSelectOption(0, 'None')}
                                >
                                    <p className="option">None</p>
                                </li>
                                {
                                    data ? data.map((item) => {
                                            return (
                                                <>
                                                    <li
                                                        key={item.id}
                                                        className={`list ${defaultValue?.id === item.id ? 'on' : ''}`}
                                                        onClick={() => handleSelectOption(item.id, item.option)}
                                                    >
                                                        <p className="option">{item.option}</p>
                                                    </li>
                                                </>
                                            )
                                        })
                                        : <></>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Select;