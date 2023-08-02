import React from "react";

const sizeClasses = {
  txtPoppinsBold2096: "font-bold font-poppins",
  txtPoppinsSemiBold30: "font-poppins font-semibold",
  txtPoppinsBold32: "font-bold font-poppins",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterBold44: "font-bold font-inter",
  txtInterBold68: "font-bold font-inter",
  txtPoppinsRegular28: "font-normal font-poppins",
  txtPoppinsBold58: "font-bold font-poppins",
  txtPoppinsRegular1654: "font-normal font-poppins",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsMedium32: "font-medium font-poppins",
  txtInterSemiBold52: "font-inter font-semibold",
  txtInterBold60: "font-bold font-inter",
  txtInterRegular24Gray100a2: "font-inter font-normal",
  txtInterRegular24: "font-inter font-normal",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtInterBold68Orange400: "font-bold font-inter",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtInterMedium32: "font-inter font-medium",
  txtInterBold68WhiteA700: "font-bold font-inter",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtPoppinsMedium22: "font-medium font-poppins",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtPoppinsRegular1603: "font-normal font-poppins",
  txtPoppinsMedium24Gray800: "font-medium font-poppins",
  txtPoppinsMedium24WhiteA700: "font-medium font-poppins",
  txtPoppinsMedium28Gray700: "font-medium font-poppins",
  txtPoppinsMedium28: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
