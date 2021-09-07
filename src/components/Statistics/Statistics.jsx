import PropTypes from "prop-types";

import { Container } from "../Container.styled";
import { Title, StatsList, StatItem, Span } from "./Statistics.styled";

const Statistic = ({ title, stats }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}

      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} style={{ backgroundColor: generateColor() }}>
            <Span>{label}</Span>
            <Span>{percentage}</Span>
          </StatItem>
        ))}
      </StatsList>
    </Container>
  );
};

export default Statistic;

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

const generateColor = () => {
  return `#${Math.random().toString(16).substr(-6)}`;
};
