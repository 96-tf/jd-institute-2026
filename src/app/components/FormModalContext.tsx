import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface FormModalContextType {
  isOpen: boolean;
  title: string;
  openFormModal: (title: string) => void;
  closeFormModal: () => void;
}

const FormModalContext = createContext<FormModalContextType>({
  isOpen: false,
  title: "",
  openFormModal: () => {},
  closeFormModal: () => {},
});

export function useFormModal() {
  return useContext(FormModalContext);
}

export function FormModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");

  const openFormModal = useCallback((t: string) => {
    setTitle(t);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeFormModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
  }, []);

  return (
    <FormModalContext.Provider value={{ isOpen, title, openFormModal, closeFormModal }}>
      {children}
    </FormModalContext.Provider>
  );
}
