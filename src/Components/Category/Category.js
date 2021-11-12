import './Category.css';

function Category({ content, onClick, className }) {
  return <button onClick={() => onClick(content)} className={className}>{content}</button>;
}

export default Category;