import React, {useState} from 'react';
import '../../style/input/input_common.css';
import '../../style/input/select.css';
import SelectProps from "../../interface/SelectProps";
import open from '../../assets/images/open.svg';

const Select: React.FC<SelectProps> = ({ defaultValue, label, setStyle, ...props }) => {

    // state
    const [toggle, setToggle] = useState(false);

    // toggle
    const handleToggle = () => {
        const newToggle = !toggle; // 새로운 토글 값 저장
        setToggle(newToggle);
        animationToggle(newToggle); // 새로운 토글 값을 인자로 전달
    }

    const animationToggle = (isOpen: boolean) => {
        const list = document.getElementById('list');
        if (list) {
            if (isOpen) {
                // 다음 프레임에서 높이 계산
                requestAnimationFrame(() => {
                    const height = list.scrollHeight + 4 + 'px'; // 실제 높이 계산
                    list.style.height = height; // 높이를 애니메이션으로 변경
                });
                // setTimeout(() => {
                //     list.style.height = height;
                // }, 0);
            } else {
                setTimeout(() => {
                    list.style.height = '2.5rem';
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

    return (
        <>
            <div className={`textContainer ${appliedStyle}`}>
                {
                    appliedStyle === "outside" || appliedStyle === "outsideLeft" ?
                        <label className="label">{label}</label>
                        : <></>
                }
                <div
                    id="list"
                    className={`selectWrap ${toggle ? "active" : ""}`}
                    onClick={handleToggle}
                >
                    <div className="selected">
                        <p className="option">None</p>
                        <img src={open} alt="open" className="open" />
                    </div>
                    <ul className="dataList">
                        <li className="list">
                            <p className="option">엄홍광</p>
                        </li>
                        <li className="list">
                            <p className="option">강지원</p>
                        </li>
                        <li className="list">
                            <p className="option">김민수</p>
                        </li>
                        <li className="list">
                            <p className="option">박미람</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Select;