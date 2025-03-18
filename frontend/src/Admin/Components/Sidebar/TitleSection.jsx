import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { Logo } from "./Logo";
import PropTypes from "prop-types";

export const TitleSection = ({ open }) => {
  return (
    <div className="mb-3 border-b border-slate-300 pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
        <div className="!m-3 flex items-center gap-4">
          <Logo />
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
            >
              <span className="block text-xs font-semibold">PetShop</span>
              <span className="block text-xs text-slate-500">Admin</span>
            </motion.div>
          )}
        </div>
        {open && <FiChevronDown className="mr-2" />}
      </div>
    </div>
  );
};

TitleSection.propTypes = {
  open: PropTypes.bool.isRequired,
};
