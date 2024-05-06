import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export interface InputWithLabelProps {
    label: string
}
 
export function InputWithLabel(props: InputWithLabelProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={props.label}>Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}