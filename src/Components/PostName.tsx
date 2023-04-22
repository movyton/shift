interface Props {
  name: string;
  changePostId: any;
}

const PostName = ({ name, changePostId }: Props) => {
  return (
    <div className="post_name" onClick={changePostId}>
      {name}
    </div>
  );
};

export default PostName;
