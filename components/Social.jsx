import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/ashish7355' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/ashish-scott-6a9724215/' },
    { icon: <FaInstagram />, path: 'https://www.instagram.com/ashish._02/' },
    { icon: <FaTwitter />, path: 'https://x.com/scott_ashi2202' },
]

const Social = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index)=> {
        return (
        <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
        );
    })}
  </div>;
};

export default Social;
