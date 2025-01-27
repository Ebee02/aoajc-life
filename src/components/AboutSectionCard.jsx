const AboutSectionCard = (props) => {
  return (
    <div className="flex items-center gap-3 bg-gray-50 rounded-md border border-gray-300 shadow-md p-5">
      <img
        src={props.img}
        alt="placement image"
        className="w-20 h-20 rounded-md"
      />
      <div>
        <h4 className="font-bold uppercase mb-1">{props.title}</h4>
        <p className="text-sm">{props.text}</p>
      </div>
    </div>
  );
};

export default AboutSectionCard;
