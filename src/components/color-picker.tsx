import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useDebouncedCallback } from "use-debounce";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { Separator } from "./ui/separator";

const recommentaionColors = [
  '#000000', // Black
  '#FFFFFF', // White
  '#FFFF00', // Yellow
  '#FFB6C1', // Light Pink
  '#87CEFA', // Light Sky Blue
  '#32CD32', // Lime Green
  '#FFD700', // Gold
  '#FFA07A', // Light Salmon
  '#FF4500', // Orange Red
  '#DDA0DD', // Plum
  '#FF69B4', // Hot Pink
  '#ADFF2F', // Green Yellow
  '#00FFFF', // Cyan
  '#FF6347'  // Tomato
];

type Props = {
  color: string,
  onChange: (color: string) => void
  onReset?: () => void

}
const ColorPicker = ({ color = '#000000', onChange, onReset }: Props) => {
  const [currentColor, setCurrentColor] = useState(color)

  function handleSelect(value: string) {
    onChange(value)
    setCurrentColor(value)
  }

  const debounced = useDebouncedCallback(handleSelect, 500);

  return (
    <div className="ink-bg-background ink-shadow ink-inline-flex ink-flex-col ink-border ink-p-2 ink-rounded-lg ink-items-center ink-justify-center ink-space-y-2">
      <HexColorPicker color={currentColor} onChange={debounced} />
      <div className="ink-grid ink-grid-cols-7 ink-gap-1 ink-mt-2">
        {recommentaionColors.map(color => (
          <button key={color} className="ink-size-6 ink-rounded ink-border" style={{ background: color }} onClick={() => handleSelect(color)} />
        ))}
      </div>
      {
        onReset && (
          <>
            <Separator />
            <Button onClick={onReset} className="ink-block ink-w-full">
              <Trash className="ink-mr-2" size={18} />
              Reset
            </Button>
          </>
        )
      }
    </div>
  )
}

export default ColorPicker