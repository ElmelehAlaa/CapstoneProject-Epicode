const MembersImg = (props) => {
  console.log(props);
  return (
    <>
      <img className="imgMembers" width={150} src={props.imgMembro} alt="foto-member"></img>
    </>
  );
};
export default MembersImg;
