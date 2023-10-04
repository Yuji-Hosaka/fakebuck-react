import Avatar from "../../components/Avatar";
import CoverImage from "./CoverImage";
import PictureForm from "./PictureForm";
import { useAuth } from "../../hooks/use-auth";
import { useState } from "react";
import Loading from "../../components/Loading";

export default function EditProfileForm() {
  const [loading, setLoading] = useState(false);
  const { authUser, updateProfile } = useAuth();

  const uploadProfileImage = async (input) => {
    try {
      const formData = new FormData();
      // console.log(input)
      formData.append("profileImage", input);
      setLoading(true);
      await updateProfile(formData);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const uploadCoverImage = async (input) => {
    try {
      const formData = new FormData();
      // console.log(input)
      formData.append("coverImage", input);
      setLoading(true);
      await updateProfile(formData);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" flex flex-col gap-4">
      {loading && <Loading />}
      <PictureForm
        title="Profile picture"
        initialSrc={authUser.profileImage}
        onSave={uploadProfileImage}
      >
        {(src, onClick) => (
          <div onClick={onClick}>
            <Avatar className=" h-40" src={src} />
          </div>
        )}
      </PictureForm>
      <PictureForm
        title="Cover picture"
        initialSrc={authUser.coverImage}
        onSave={uploadCoverImage}
      >
        {(src, onClick) => (
          <div
            className=" aspect-[3/1] overflow-hidden rounded-md flex items-center justify-center"
            onClick={onClick}
          >
            <CoverImage src={src} />
          </div>
        )}
      </PictureForm>
    </div>
  );
}
