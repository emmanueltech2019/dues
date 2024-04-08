import { StaticImport } from "next/dist/shared/lib/get-img-props"

export type customImageType = {
  img: string | StaticImport
  classvalues?: string
}