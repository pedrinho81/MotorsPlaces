import tw from "tailwind-styled-components/dist/tailwind";

export const ContainerCard = tw.div`
my-2
mx-auto
flex
flex-col
w-[300px]
h-[400px]
bg-white
border-[1px]
rounded-lg
`

export const DivImg = tw.div`
my-auto
mx-auto
w-[280px]
h-[230px]

`

export const DivIcon = tw.div`
bg-white
border-[2px]
w-10 
absolute
p-1  
mt-[.2rem] 
ml-60 
rounded-full
`
export const Icon = tw.img`
mx-auto
`
export const DivInfo = tw.div`
flex
justify-between 

mb-1
mx-auto
w-[280px]
h-[100px]

`

export const DivInfoLeft = tw.div`
flex 
flex-col 
w-[180px]
`

export const Name = tw.p`
font-bold
`

export const Info = tw.p`
text-gray-400
`

export const DivInfoRight = tw.div`
flex flex-col align-middle  my-auto
`
export const Price = tw.p`
text-[#F73873] 
font-semibold 
text-[21px]
`
export const Symbol = tw.span`
absolute leading-3 text-[14px] text-[#F73873] font-semibold -ml-[18.5px]
`
export const Miles = tw.p`
text-gray-400 
text-[12.5px] 
ml-auto
`

export const DivFooter = tw.div`
cursor-pointer
flex
justify-center
gap-2
mb-1
mx-auto
rounded-lg
w-[180px]
h-[50px]
bg-zinc-200
font-serif
hover:bg-zinc-100
transition-colors
`

