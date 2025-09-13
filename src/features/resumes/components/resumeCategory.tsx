import React from "react";

interface CategoryItem {
  id: string;
  label: string;
  color: string;
  bgColor: string;
}

const categories: CategoryItem[] = [
  {
    id: "software_engineer",
    label: "Software Engineer",
    color: "text-blue-700",
    bgColor: "bg-blue-100 hover:bg-blue-200",
  },
  {
    id: "data_scientist",
    label: "Data Scientist",
    color: "text-green-700",
    bgColor: "bg-green-100 hover:bg-green-200",
  },
  {
    id: "product_manager",
    label: "Product Manager",
    color: "text-purple-700",
    bgColor: "bg-purple-100 hover:bg-purple-200",
  },
  {
    id: "marketing_manager",
    label: "Marketing Manager",
    color: "text-pink-700",
    bgColor: "bg-pink-100 hover:bg-pink-200",
  },
  {
    id: "sales_manager",
    label: "Sales Manager",
    color: "text-orange-700",
    bgColor: "bg-orange-100 hover:bg-orange-200",
  },
  {
    id: "other",
    label: "Other",
    color: "text-gray-700",
    bgColor: "bg-gray-100 hover:bg-gray-200",
  },
];

interface ResumeCategoryProps {
  selectedCategory?: string;
  onCategorySelect?: (categoryId: string) => void;
  displayMode?: 'selector' | 'badge';
}

export const ResumeCategory: React.FC<ResumeCategoryProps> = ({
  selectedCategory,
  onCategorySelect,
  displayMode = 'selector'
}) => {
  // Badge mode - display only the selected category as a colored badge
  if (displayMode === 'badge' && selectedCategory) {
    const category = categories.find(cat => cat.id === selectedCategory);
    if (!category) return null;
    
    return (
      <span className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
        ${category.color} ${category.bgColor.replace('hover:', '')}
      `}>
        {category.label}
      </span>
    );
  }

  // Selector mode - display all categories as clickable buttons
  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Resume Categories
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect?.(category.id)}
            className={`
              p-4 rounded-lg border-2 transition-all duration-200
              ${category.bgColor}
              ${category.color}
              ${
                selectedCategory === category.id
                  ? "border-current shadow-md transform scale-105"
                  : "border-transparent hover:shadow-sm"
              }
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            `}
          >
            <div className="text-center">
              <div className="font-medium text-sm">{category.label}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};