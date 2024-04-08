type ClickButtonType = {
   children: React.ReactNode
   x: number
   y: number
   fontSize: number | string
   values?: string
   handleClick: () => (void | unknown)
}

export default function ClickButton({children, x, y, fontSize, values = '', handleClick}:ClickButtonType) {
  return (
   <button type="submit" className={"bg-[#1f1f1f] text-[#fff] border-0 block w-[inherit] rounded " + values} style={{
      paddingBlock: y,
      paddingInline: x,
      fontSize: fontSize
   }} onClick={handleClick}>{children}</button>
  )
}
