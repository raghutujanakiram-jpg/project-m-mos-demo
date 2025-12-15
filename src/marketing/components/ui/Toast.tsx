import React, { createContext, useContext, useState } from "react";

type Toast = { id: number; message: string; type: "success" | "error" };

const ToastContext = createContext<any>(null);

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }: any) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: Toast["type"]) => {
    const id = Date.now();
    setToasts((t) => [...t, { id, message, type }]);

    setTimeout(() => {
      setToasts((t) => t.filter((toast) => toast.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`px-4 py-2 rounded-lg text-sm shadow-lg ${
              t.type === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
