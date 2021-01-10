function Tag({ title, onClick = () => {} }) {
  return (
    <div className='tag-pill advent-font tag-text' onClick={onClick}>
      {title}
    </div>
  );
}

export default Tag;
