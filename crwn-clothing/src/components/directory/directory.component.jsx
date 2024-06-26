import CategoryItem from "../category-item/category-item.components";
import "./directory.style.scss";
export default function Directory({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
