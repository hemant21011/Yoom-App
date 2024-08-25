"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast
      key={id}
      {...props}
      className="flex items-center justify-between p-4 bg-gray-800 text-white rounded-lg shadow-lg"
    >
      <div className="flex flex-col gap-1">
        {title && (
          <ToastTitle className="text-lg font-semibold text-white">
            {title}
          </ToastTitle>
        )}
        {description && (
          <ToastDescription className="text-sm text-gray-300">
            {description}
          </ToastDescription>
        )}
      </div>
      {action && <div className="ml-4">{action}</div>}
      <ToastClose className="ml-4 text-gray-400 hover:text-white transition-colors">
        &times;
      </ToastClose>
    </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
