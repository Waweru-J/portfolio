// import PropTypes from "prop-types";
// import { ReactNode } from "react";

// interface CardProps {
//   children: ReactNode;
//   bg?: string;
// }

// const Card = ({ children }: CardProps) => {
//   return <div>{children}</div>;
// };

// Card.propTypes = {
//   children: PropTypes.node.isRequired,
//   bg: PropTypes.string,
// };

// export default Card;
import PropTypes from "prop-types";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  bg?: string;
  className?: string; // Add className as an optional prop
}

const Card = ({ children, className, bg }: CardProps) => {
  return (
    <div className={`${className} ${bg ? bg : ''}`}>
      {children}
    </div>
  );
};

// Define PropTypes for validation (optional, especially if using TypeScript)
Card.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
  className: PropTypes.string, // Add className prop to propTypes
};

export default Card;
