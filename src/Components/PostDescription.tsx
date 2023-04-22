interface Prop {
  id: number;
  title: string;
  content: string;
}

const PostDescription = ({ id, title, content }: Prop) => {
  return (
    <>
      <div className="post_container">
        <span className="header">{title}</span>
        <span className="description">{content}</span>
      </div>
    </>
  );
};

export default PostDescription;
