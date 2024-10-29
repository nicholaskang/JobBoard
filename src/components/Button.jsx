import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Spinner from "./Spinner";

/**
 * @prop label, variant, isDisabled, isLoading, onClick
 * @returns Button
 */

const Button = ({
  label,
  variant = "primary",
  isDisabled = false,
  isLoading = false,
  onClick,
}) => {
  const baseStyles =
    "inline-flex items-center px-4 py-2 font-semibold rounded transition-colors duration-300";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };
  const buttonClasses = classNames(baseStyles, variantStyles[variant], {
    "opacity-50 cursor-not-allowed": isDisabled,
  });
  return (
    <button
      className={buttonClasses}
      variant={variant}>
      {isLoading && (
        <div className="mr-3">
          <Spinner
            size="20"
            inline
          />
        </div>
      )}
      {label}
    </button>
  );
};

export default Button;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};
