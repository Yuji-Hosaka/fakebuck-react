import ActionButton from "./ActionButton";
import { useParams } from "react-router-dom";
import axios from "../../config/axios";

export default function RequesterAction({setStatusWithAuthUser}) {
  const { profileId } = useParams();

  const handleClickCancel = async () => {
    try {
      await axios.delete(`/friend/${profileId}/cancel`);
      setStatusWithAuthUser("UNKNOWN");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ActionButton onClick={handleClickCancel}>Cancel Request</ActionButton>
  );
}
