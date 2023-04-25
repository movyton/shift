interface Prop {
  title: string;
  content: string[][];
}

const PostDescription = ({ title, content }: Prop) => {
  console.log(content);

  return (
    <>
      <div className="post_container">
        <span className="header">{title}</span>
        {content.map((part, partIndex) => (
          <span className="description" key={partIndex}>
            {part}
          </span>
        ))}
      </div>
    </>
  );
};

export default PostDescription;
