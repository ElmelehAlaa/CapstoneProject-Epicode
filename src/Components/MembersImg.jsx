const MembersImg = (props) => {
  return (
    <>
      <img
        style={{ height: "213px", objectFit: "contain" }}
        className="imgMembers"
        width={150}
        src={props.imgMembro}
        alt="foto-member"
      ></img>
    </>
  );
};
export default MembersImg;
