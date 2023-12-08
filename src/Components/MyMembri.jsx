import { useSelector } from "react-redux";
import MembersImg from "./MembersImg";

const MyMembri = () => {
  const membersFetched = useSelector((state) => state.members.content);
  return (
    <>
      <div className="d-flex justify-content-center">
        {membersFetched.length !== 0 ? (
          membersFetched.map((membroSingolo) => (
            <MembersImg key={membroSingolo.id} imgMembro={membroSingolo.urlAvatar} />
          ))
        ) : (
          <div> caricamento...</div>
        )}
      </div>
    </>
  );
};
export default MyMembri;
