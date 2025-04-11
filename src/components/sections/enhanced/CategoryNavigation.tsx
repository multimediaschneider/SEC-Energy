import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Types for category options
export interface CategoryOption {
  id: string;
  label: string;
  icon: React.ElementType;
}

// Mobile Category Navigation
export const CategoryNavMobile = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: {
  categories: CategoryOption[];
  selectedCategory: string | null;
  setSelectedCategory: (id: string | null) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Get current selected category label
  const currentCategory = categories.find(
    (c) => c.id === selectedCategory || (c.id === "all" && !selectedCategory)
  );

  return (
    <div className="relative w-full mb-6">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 border rounded-md cursor-pointer bg-white"
      >
        <div className="flex items-center gap-2">
          {currentCategory && (
            <>
              {React.createElement(currentCategory.icon, {
                className: "w-4 h-4",
              })}
              <span>{currentCategory.label}</span>
            </>
          )}
        </div>
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform",
            isOpen && "transform rotate-180"
          )}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute z-30 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 overflow-hidden"
          >
            <div className="py-2">
              {categories.map((category) => {
                const Icon = category.icon;
                const isSelected =
                  category.id === selectedCategory ||
                  (category.id === "all" && !selectedCategory);

                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(
                        category.id === "all" ? null : category.id
                      );
                      setIsOpen(false);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-2 flex items-center gap-2",
                      isSelected
                        ? "bg-primary-50 text-primary-700"
                        : "hover:bg-gray-50"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Desktop Category Navigation
export const CategoryNavDesktop = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: {
  categories: CategoryOption[];
  selectedCategory: string | null;
  setSelectedCategory: (id: string | null) => void;
}) => {
  return (
    <div className="flex overflow-x-auto py-4 gap-4 no-scrollbar">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            onClick={() =>
              setSelectedCategory(category.id === "all" ? null : category.id)
            }
            className={cn(
              "px-4 py-2 rounded-md flex items-center gap-2 whitespace-nowrap transition-colors border",
              selectedCategory === category.id ||
                (category.id === "all" && !selectedCategory)
                ? "bg-primary-700 text-white border-primary-700"
                : "bg-white text-primary-700 border-primary-200 hover:bg-primary-50"
            )}
          >
            <Icon className="w-4 h-4" />
            {category.label}
          </button>
        );
      })}
    </div>
  );
};