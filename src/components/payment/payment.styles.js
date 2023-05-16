import styled from "styled-components";

export const SAlertContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 250px;

  .gradient-border {
    --border-width: 3px;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1200px;
    height: 500px;
    font-family: Lato, sans-serif;
    font-size: 2.5rem;
    text-transform: uppercase;
    color: white;
    background: #222;
    border-radius: var(--border-width);

    &::after {
      position: absolute;
      content: "";
      top: calc(-1 * var(--border-width));
      left: calc(-1 * var(--border-width));
      z-index: -1;
      width: calc(100% + var(--border-width) * 2);
      height: calc(100% + var(--border-width) * 2);
      background: linear-gradient(
        60deg,
        hsl(224, 85%, 66%),
        hsl(269, 85%, 66%),
        hsl(314, 85%, 66%),
        hsl(359, 85%, 66%),
        hsl(44, 85%, 66%),
        hsl(89, 85%, 66%),
        hsl(134, 85%, 66%),
        hsl(179, 85%, 66%)
      );
      background-size: 300% 300%;
      background-position: 0 50%;
      border-radius: calc(2 * var(--border-width));
      animation: moveGradient 4s alternate infinite;
    }
  }

  @keyframes moveGradient {
    50% {
      background-position: 100% 50%;
    }
  }
`;