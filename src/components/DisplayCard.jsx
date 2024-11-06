import React from "react";
import Button from "./Button";

const DisplayCard = ({
  title = "Display Card",
  description = "Description",
  imageSrc,
  actionLabel,
  onActionClick,
  variant,
}) => {
  return (
    <div>
      <div>
        <p>{title}</p>
        <p>{description}</p>
        {actionLabel && (
          <Button
            label={actionLabel}
            onClick={onActionClick}
          />
        )}
      </div>
      {imageSrc && (
        <div>
          <img src={imageSrc} />
        </div>
      )}
    </div>
  );
};

export default DisplayCard;
