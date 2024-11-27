import styled from '@emotion/styled'
import { useState } from 'react';

/** 헤더 (메뉴버튼, 날짜, 토글버튼) */
function Header() {
    const [isToggle, setToggle] = useState(true);
    const [isShowMenu, setShowMenu] = useState(false);

    const handleToggle = () => {
        setToggle(!isToggle);
    }

    const handleShowMenu = () => {
        setShowMenu(!isShowMenu);
    }

    return (
        <Wrap>
            <Menu onClick={handleShowMenu} />
            <Day>November 2024</Day>
            <Toggle onClick={handleToggle} isToggle={isToggle}  />
        </Wrap>
    )
}

export default Header;

const Wrap = styled.div`
    width: 524.5px;
    height: 40px;
    display: flex;
    gap: 16px;
    justify-content: space-between;
`

const Menu = styled.button`
  background: url('assets/menu_icon.png');
  background-position: center;
  background-size: cover;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
`

const Day = styled.div`
    font-family: Inter;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    flex-grow: 1;
`

const Toggle = styled.button<{ isToggle: boolean }>`
    background: url(${(props) => props.isToggle ? 'assets/list_icon.png' : 'assets/calendar_icon.png'});
    background-position: center;
    background-size: cover;
    width: 40px;
    height: 40px;
    border: none;
    cursor: pointer;
`