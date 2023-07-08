import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InputFile } from "@/components/input-file/input-file";
import { InputPassword } from "@/components/ui/input-password";
import { InputText } from "@/components/ui/input-text";
import { Eye } from "lucide-react";

const colorsPallete = [
  {
    name: "background",
    style: "bg-background",
  },
  {
    name: "foreground",
    style: "bg-foreground",
  },
  {
    name: "border",
    style: "bg-border",
  },
  {
    name: "input",
    style: "bg-input",
  },
  {
    name: "ring",
    style: "bg-ring",
  },
  {
    name: "muted",
    style: "bg-muted",
  },
  {
    name: "muted foreground",
    style: "bg-muted-foreground",
  },
  {
    name: "primary",
    style: "bg-primary",
  },
  {
    name: "primary foreground",
    style: "bg-primary-foreground",
  },
  {
    name: "primary focus",
    style: "bg-primary-focus",
  },
  {
    name: "secondary",
    style: "bg-secondary",
  },
  {
    name: "secondary foreground",
    style: "bg-secondary-foreground",
  },
  {
    name: "secondary focus",
    style: "bg-secondary-focus",
  },
  {
    name: "accent",
    style: "bg-accent",
  },
  {
    name: "accent foreground",
    style: "bg-accent-foreground",
  },
  {
    name: "accent focus",
    style: "bg-accent-focus",
  },
  {
    name: "error",
    style: "bg-error",
  },
  {
    name: "error foreground",
    style: "bg-error-foreground",
  },
  {
    name: "error focus",
    style: "bg-error-focus",
  },
  {
    name: "success",
    style: "bg-success",
  },
  {
    name: "success foreground",
    style: "bg-success-foreground",
  },
  {
    name: "success focus",
    style: "bg-success-focus",
  },
  {
    name: "warning",
    style: "bg-warning",
  },
  {
    name: "warning foreground",
    style: "bg-warning-foreground",
  },
  {
    name: "warning focus",
    style: "bg-warning-focus",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex justify-center w-1/2 gap-3 flex-wrap">
        {colorsPallete.map((color) => (
          <div key={color.style} className="flex flex-col items-center gap-2">
            <h1 className="text-sm">{color.name}</h1>
            <div
              className={`w-12 text-white flex justify-center items-center h-12 rounded-full border-2 border-black ${color.style}`}
            >
              S
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <Button variant="outline" className="border-primary text-primary">
          Test
        </Button>
        <Button variant="ghost" className="text-primary hover:bg-primary/10">
          Test
        </Button>
        <InputFile
          type="file"
          placeholder="jhaj"
          sizes="sm"
          onChange={(e) => console.log(e.target.files)}
        />
        {/* <InputPassword disabled placeholder="Password" icon /> */}
      </div>
    </div>
  );
}
