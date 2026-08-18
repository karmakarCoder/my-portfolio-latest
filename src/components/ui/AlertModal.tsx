"use client";
import { CheckCircle2, AlertCircle } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type: "success" | "error";
}

export const AlertModal = ({
  isOpen,
  onClose,
  title,
  message,
  type,
}: AlertModalProps) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="bg-white rounded-lg shadow-xl max-w-sm">
        <AlertDialogHeader className="flex flex-col items-center text-center">
          {type === "success" ? (
            <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
          ) : (
            <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
          )}
          <AlertDialogTitle className="text-2xl font-black uppercase tracking-tight mb-2 italic">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="font-bold text-gray-600 mb-6 uppercase text-sm">
            {message}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            onClick={onClose}
            className="w-full bg-black text-white py-4 font-black tracking-widest hover:bg-secondary hover:text-black transition-all rounded-md shadow-md active:scale-95"
          >
            CLOSE
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
