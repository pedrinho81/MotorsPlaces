import tw from "tailwind-styled-components/dist/tailwind";
import NavbarOpen from "./"

export const Nav = tw.nav`
relative 
w-full 
flex 
flex-wrap 
items-center 
justify-between 
py-3 
bg-gray-900 
text-gray-200 
shadow-lg 
navbar 
navbar-expand-lg 
navbar-light
`

export const Div = tw.div`
container-fluid w-full flex flex-wrap items-center justify-between px-6
`

export const ButtonToggle = tw.div`
hover:opacity-70
cursor-pointer
navbar-toggler 
text-gray-200 
border-0 
hover:shadow-none 
hover:no-underline 
py-2 px-2.5 
bg-transparent 
focus:outline-none 
focus:ring-0 
focus:shadow-none 
focus:no-underline
`

export const ImgLogo = tw.img`
h-10
`

export const DivLeft = tw.div`


collapse 
navbar-collapse 
flex-grow 
items-center
`

export const NameLogo = tw.a`
text-4xl text-white pr-2 font-semibold
`
export const ListLinksLeft = tw.ul`
navbar-nav 
flex 
flex-col 
pl-0 
list-style-none 
mr-auto
`

export const ItemLinkLeft = tw.li`
nav-item 
p-2
`

export const LinkLeft = tw.a`
nav-link
text-white 
opacity-60 
hover:opacity-80 
focus:opacity-80 
p-0
`

export const DivRight = tw.div`
flex 
items-center 
relative
`

export const Icon = tw.a`
text-white 
opacity-60 
hover:opacity-80 
focus:opacity-80 
mr-4
`