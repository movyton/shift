interface Props {
  name: string;
  active: boolean;
  changePostId: any;
  changeActive: () => void;
}

const PostName = ({ name, active, changePostId, changeActive }: Props) => {
  return (
    <div
      className={active === true ? "post_name post_name__active" : "post_name"}
      onClick={() => {
        changePostId();
        changeActive();
      }}
    >
      {name}
    </div>
  );
};

export default PostName;
