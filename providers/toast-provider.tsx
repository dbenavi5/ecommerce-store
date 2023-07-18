import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      toastOptions={{
        success: {
          style: {
            border: "1px solid #22c55e",
            padding: "10px",
            background: "#86efac",
            color: "#052e16",
            borderRadius: '50px'
          },
        },
        error: {
          style: {
            border: "1px solid #f43f5e",
            padding: "10px",
            color: "#4c0519",
            background: "#fda4af",
            borderRadius: '50px',
          },
        },
      }}
    />
  );
};

export default ToastProvider;
