const Footer = () => {
  return (
    <div className="py-10 bg-gradient-to-r from-blue-700 to-blue-500">
      <div className="container flex items-center justify-between mx-auto">
        <span className="text-3xl font-bold tracking-tight text-white">
          <span className="text-5xl">ℋℬ𝓢</span>.com
        </span>
        <span className="flex gap-4 font-bold tracking-tight text-white">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
