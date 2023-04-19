import React from 'react'
import {SiLeetcode} from 'react-icons/si'
import {SiCodeforces} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {FaHackerrank} from 'react-icons/fa'
import {SiGeeksforgeeks} from 'react-icons/si'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://leetcode.com/abhikumar7248/" target="_blank"><SiLeetcode/></a>
        <a href="https://codeforces.com/profile/abhikumar7248" target="_blank"><SiCodeforces/></a>
        <a href="https://github.com/abhikumr7248" target="_blank"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/abhishek-kumar-056b3421b/" target="_blank">  <BsLinkedin/> </a>
        <a href="https://www.hackerrank.com/h2005282?hr_r=1" target="_blank"><FaHackerrank/></a>
        <a href="https://auth.geeksforgeeks.org/user/abhikumar7248225833/" target="_blank"><SiGeeksforgeeks/></a>
        <a href="https://www.instagram.com/abhikumar56836/" target="_blank"><BsInstagram/></a>

    </div>
  )
}

export default HeaderSocials