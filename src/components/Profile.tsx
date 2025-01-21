import ProfileCard from "../types/profileCard";

interface Props {
  data: ProfileCard[];
}

const Profile: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-screen">
      {data.map((member, i) => (
        <div
          key={i}
          className="flex flex-col lg:flex-row md:flex-row font-open-sans text-cyan-950 mx-10 my-10 lg:ml-80 lg:my-20  md:mx-40 md:my-12"
        >
          {/* Image */}
          <img
            src={member.image}
            alt={member.name}
            className="mr-6 mb-2 lg:mr-20 md:mr-10 object-cover w-52 md:w-56 lg:w-64 max-h-64  md:max-h-52 lg:max-h-96"
          ></img>
          {/* Text Portion of Profile */}
          <div>
            {/* Name */}
            <h1 className="pb-1 lg:pb-3 text-3xl lg:text-4xl font-bold tracking-wider">
              {member.name}
            </h1>
            {/* Credentials */}
            <h5 className="py-1 lg:py-3 italic tracking-wide">
              {member.background.split("\n").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </h5>
            {/* Bio*/}
            <p className="py-1 lg:py-3 tracking-wide text-xs lg:text-base md:text-sm ">
              {member.about}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Profile;
