import tw from "tailwind-styled-components/dist/tailwind";

export const Container = tw.div`
sm:flex ml-2
`

export const Price = tw.h2`
text-3xl text-[#F73873] underline
`
export const Hr = tw.hr`
my-4 sm:hidden
`
export const DivInfo = tw.div`
mt-8 border-[1.5px] 
sm:w-8/12 
p-2 flex 
justify-evenly 
flex-col 
rounded-lg 
text-zinc-300 
bg-gray-900
`

export const Info = tw.span`
text-xl 
text-zinc-100 
underline 
underline-offset-2
`

export const BuyButton = tw.button`
bg-green-600 
my-2 
text-white 
font-semibold 
p-2 
hover:bg-green-900 
transition-colors 
w-[50%] 
mx-auto 
rounded-lg
`