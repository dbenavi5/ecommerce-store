import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      toastOptions={{
        success: {
          style: {
            background: "green",
            border: "1px solid green",
            opacity: 0.6,
          },
        },
        error: {
          style: {
            background: "red",
            border: "1px solid red",
            opacity: 0.6,
          },
        },
      }}
    />
  );
};

export default ToastProvider;
