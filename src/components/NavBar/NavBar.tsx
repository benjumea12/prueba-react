import { FC, HTMLAttributes } from "react"
import { Main } from "./NavBar.styled"
import { Link } from "wouter"
import {
  AiOutlineUser,
  AiOutlineMail,
  AiFillCalendar,
  AiOutlinePhone,
} from "react-icons/ai"
import { BiMapAlt } from "react-icons/bi"
import { GiPadlock } from "react-icons/gi"

const Typography: FC<HTMLAttributes<HTMLDivElement>> = () => {
  return (
    <Main>
      <Link href="/" className="link-item">
        <span className="link-label">home</span>
        <AiOutlineUser className="icon" />
        <AiOutlineUser className="icon" />
      </Link>
      <Link href="/" className="link-item">
        <span className="link-label">mail</span>
        <AiOutlineMail className="icon" />
        <AiOutlineMail className="icon" />
      </Link>
      <Link href="/" className="link-item">
        <span className="link-label">calendar</span>
        <AiFillCalendar className="icon" />
        <AiFillCalendar className="icon" />
      </Link>
      <Link href="/" className="link-item">
        <span className="link-label">map</span>
        <BiMapAlt className="icon" />
        <BiMapAlt className="icon" />
      </Link>
      <Link href="/" className="link-item">
        <span className="link-label">map</span>
        <AiOutlinePhone className="icon" />
        <AiOutlinePhone className="icon" />
      </Link>
      <Link href="/" className="link-item">
        <span className="link-label">map</span>
        <GiPadlock className="icon" />
        <GiPadlock className="icon" />
      </Link>
    </Main>
  )
}

export default Typography
