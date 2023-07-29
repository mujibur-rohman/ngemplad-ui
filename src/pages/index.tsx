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
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));
export default function Home() {
  const [open, setOpen] = React.useState(false);

  return (
    <main>
      <section className="relative p-10">
        <InputText className="w-[210px]" />
        <InputPassword icon={true} className="w-[300px]" />
        <div>
          <Select>
            <SelectTrigger className="w-[210px]" error>
              <SelectValue placeholder="Choose Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* <div className="hero h-screen">test</div> */}
      </section>
    </main>
  );
}
