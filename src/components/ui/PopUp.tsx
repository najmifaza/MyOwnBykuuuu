import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

function PopUp() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Some Massage from me</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dear blabalbal</DialogTitle>
          <DialogDescription>
            jksdncjesnckdjcnkndjncjencjcneicuhehbcehb
          </DialogDescription>
        </DialogHeader>
        <div className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-4">
          {Array.from({ length: 1 }).map((_, index) => (
            <p key={index} className="mb-4 leading-normal">
              Gatau anj ak nanti mau nulis apa disini liat ajalah bingung taik,
              ak be masih bingung mau tak pacarin aoa engga, soale males
              pacaraan wleee
            </p>
          ))}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="destructive">Close</Button>
          </DialogClose>
          <Link href="https://web.whatsapp.com/" target="_blank">
            <Button variant="secondary">MAUUUUUUU</Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default PopUp;
