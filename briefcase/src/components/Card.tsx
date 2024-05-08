import PropTypes from "prop-types";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  bg?: string;
}

const Card = ({ children }: CardProps) => {
  return <div>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
};

export default Card;
