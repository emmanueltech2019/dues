import Image from "next/image"
import { customImageType } from "@/types/images"

export default function CustomImage({img, classvalues}:customImageType) {
  return <Image src={img} alt="" className={classvalues} style={{
    position: 'relative',
    objectFit: 'cover',
    width: '100%',
    overflow: 'hidden'
  }} />
}
