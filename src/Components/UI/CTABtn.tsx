interface CTAButton {
  content: string;
  animate?: boolean;
  className?: string;
  href?: string; // only for CTABtn component
}

const CTABtn1078 = ({ animate, content, className }: CTAButton) => {
  const containerClassName =
    "text-base font-normal py-2 px-5 rounded-full cursor-pointer";
  const spanClassName = `${className && className} select-none`
  if (animate)
    return (
      <div
        className={`${containerClassName} text-[#0071e3] hover:text-white duration-300 bg-transparent border border-[#0071e3] hover:bg-[#0071e3]`}
      >
        <span className={spanClassName}>{content}</span>
      </div>
    );
  return (
    <div className={`${containerClassName} text-white bg-[#0071e3]`}>
      <span className={spanClassName}>{content}</span>
    </div>
  );
};

const CTABtn = ({ animate, content, className, href }: CTAButton) => {
  if (href)
    return (
      <a href={href}>
        <CTABtn1078 animate={animate} content={content} className={className} />
      </a>
    );
  return (
    <CTABtn1078 animate={animate} content={content} className={className} />
  );
};

export default CTABtn;
