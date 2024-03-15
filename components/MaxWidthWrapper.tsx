import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";


const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <motion.div
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{ duration: 0.5 }}
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20 mt-20 mb-96",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default MaxWidthWrapper;
