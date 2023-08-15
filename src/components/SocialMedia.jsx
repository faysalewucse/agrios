import SocialMediaIcon from "./SocialMediaIcon";
import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiPinterestLine,
  RiTwitterFill,
} from "react-icons/ri";

const SocialMedia = () => {
  return (
    <div className="flex-center gap-2">
      <SocialMediaIcon>
        <RiTwitterFill />
      </SocialMediaIcon>
      <SocialMediaIcon>
        <RiFacebookCircleFill />
      </SocialMediaIcon>
      <SocialMediaIcon>
        <RiPinterestLine />
      </SocialMediaIcon>
      <SocialMediaIcon>
        <RiInstagramLine />
      </SocialMediaIcon>
    </div>
  );
};

export default SocialMedia;
