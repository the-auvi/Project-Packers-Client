export const PrimaryButton = ({ title, className, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center space-x-2  py-2 px-5 bg-secondary text-primary rounded-50 text-sm font-bold ${className}`}
    >
      {icon && <img className="w-6 h-6" src={icon && icon} alt="" />}
      <p>{title && title}</p>
    </button>
  );
};

export const SecondaryButton = ({ title, className, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center space-x-2 border py-2 px-5 bg-primary text-white rounded-50 text-sm ${className}`}
    >
      {icon && <img className="w-6 h-6" src={icon && icon} alt="" />}

      <p>{title && title}</p>
    </button>
  );
};

export const OutlineButton = ({ title, className, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center space-x-2 border py-2 px-5 border-secondary text-primary text-sm rounded-50 ${className}`}
    >
      {icon && <img className="w-6 h-6" src={icon && icon} alt="" />}

      <p>{title && title}</p>
    </button>
  );
};
