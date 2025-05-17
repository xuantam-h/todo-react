const Social = () => {
  const socialList = [
    {
      name: "GitHub",
      url: "lejlkrklejrjrerer",
    },
    {
      name: "LinkedIn",
      url: "RRRRRRRRRRRRRRRR",
    },
  ];
  return (
    <div className="social">
      {socialList.map((social) => (
        <a href={social.url} className="social" key={social.name}>
          {social.name}
        </a>
      ))}
    </div>
  );
};
export default Social;
