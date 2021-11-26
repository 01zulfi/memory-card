const uniqueId = () => Math.floor(Math.random() * Date.now());

const Ball = (name) => {
  return {
    name,
    id: uniqueId(),
    clicked: false,
  };
};

const balls = [
  Ball("Football"),
  Ball("Cricket Ball"),
  Ball("Rugby"),
  Ball("Volley Ball"),
  Ball("Ping Pong Ball"),
];

const ballsCopy = [...balls];

export { ballsCopy };
