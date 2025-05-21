const logo = require("../assets/img/github.svg") as string;

const Social = () => {
  const socialList = [
    {
      name: "GitHub",
      url: "https://github.com/xuantam-h",
      img: '../assets/img/github.svg',
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/xuantam-hoang/",
      img: logo,
    },
  ];
  return (
    <div className="social">
      {socialList.map((social) => (
        <a href={social.url} className="social" key={social.name} target="_blank">
          <img src={social.img} alt={social.name} />
        </a>
      ))}
    </div>
  );
};

export default Social;
