import { Dispatch, SetStateAction } from 'react'
import Dropdown from './Dropdown'
import Switch from './Switch'

import logo from '../assets/images/logo.svg'
import moonIcon from '../assets/images/icon-moon.svg'
import moonIconDark from '../assets/images/icon-moon-purple.svg'
import useToggler from '../hooks/useToggler'
import fontNames from '../utils/font-names'

interface HeaderProps {
  currentFont: string
  applyFont: Dispatch<SetStateAction<string>>
  theme: string
  toggleTheme: () => void
}

export default function Header({ currentFont, applyFont, theme, toggleTheme }: HeaderProps) {
  const [isDropdownExpanded, toggleDropdown] = useToggler(false)

  function selectItem(value: string) {
    applyFont(value)
    closeDropdown()
  }

  function openDropdown() {
    if (!isDropdownExpanded) toggleDropdown()
  }

  function closeDropdown() {
    if (isDropdownExpanded) toggleDropdown()
  }

  const listItems = Object.entries(fontNames).map(([key, value]) => (
    <li
      key={key}
      className={`${value} cursor-pointer hover:text-purple`}
      onClick={() => selectItem(key)}
    >
      <button>{key}</button>
    </li>
  ))

  return (
    <header className="flex justify-between mt-6 mb-6 tablet:mt-[3.625rem] tablet:mb-[3.25rem]">
      <img src={logo} alt="App logo" className="w-[28px] tablet:w-[32px]" />
      <div className="flex">
        <Dropdown
          currentFont={currentFont}
          open={openDropdown}
          close={closeDropdown}
          isExpanded={isDropdownExpanded}
        >
          {listItems}
        </Dropdown>

        <div className="flex items-center">
          <Switch checked={theme === 'dark'} toggle={toggleTheme} />
          <img
            src={theme === 'dark' ? moonIconDark : moonIcon}
            aria-hidden="true"
            className="ml-3 tablet:ml-5"
            alt="Moon icon"
          />
        </div>
      </div>
    </header>
  )
}
