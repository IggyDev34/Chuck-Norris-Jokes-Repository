import './Category.css';

function Category({ content, onClick }) {
  return <button onClick={() => onClick(content)} className="btn">{content}</button>;
}

export default Category;