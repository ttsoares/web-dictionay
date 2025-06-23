import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import useClickOutside from "../hooks/useOutside";
import arrowDown from "../assets/images/icon-arrow-down.svg?inline";

interface DropdownProps {
  isExpanded: boolean;
  open: () => void;
  close: () => void;
  currentFont: string;
  children: React.ReactNode;
}

/**
 * A dropdown component that renders a button and a ul of children.
 *
 * @prop {boolean} isExpanded - Whether the dropdown is expanded or not.
 * @prop {() => void} open - A function to open the dropdown.
 * @prop {() => void} close - A function to close the dropdown.
 * @prop {string} currentFont - The currently selected font.
 * @prop {React.ReactNode} children - The children of the dropdown, usually a list of fonts.
 */
export default function Dropdown({
  isExpanded,
  open,
  close,
  currentFont,
  children,
}: DropdownProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(wrapperRef, close, isExpanded);

  return (
    <main className="relative h-full" ref={wrapperRef}>
      <button
        className="h-full font-bold text-body-s tablet:text-[1.125rem] flex items-center px-4 tablet:px-[1.625rem] border-r-gray-2 border-r-[1px]"
        onClick={open}
        aria-expanded={isExpanded}
      >
        <span className="mr-4">{currentFont}</span>
        <img src={arrowDown} alt="Arrow down" aria-hidden="true" className="w-[12px]" />
      </button>

      <CSSTransition
        in={isExpanded}
        timeout={200}
        unmountOnExit
        classNames="select-box-body"
      >
        <ul className="select-box-body absolute p-6 font-bold shadow-dropdown dark:shadow-dropdown-dark rounded-2xl min-w-[183px] mt-[0.625rem] right-0 flex flex-col gap-4 bg-white dark:bg-black-2">
          {children}
        </ul>
      </CSSTransition>
    </main>
  );
}
