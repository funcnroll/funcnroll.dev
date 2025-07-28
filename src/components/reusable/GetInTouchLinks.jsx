function GetInTouchLinks({ to, icon, text }) {
  return (
    <div className="flex items-start ">
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 underline transition-all duration-300 cursor-pointer  sm:flex-col hover:text-blue-400 underline-offset-4"
      >
        {icon}
        <span>{text}</span>
      </a>
    </div>
  );
}

export default GetInTouchLinks;
