/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
const threshold = 30;
let hasBoost = true;
let prevX = null;
let prevY = null;

function isCloseEnough(x, y, opponentX, opponentY, threshold) {
  let distance = Math.sqrt(
    Math.pow(x - opponentX, 2) + Math.pow(y - opponentY, 2)
  );
  return distance <= threshold;
}

function calculatePlayerAngle(prevX, prevY, x, y) {
  if (prevX == null || prevX == null) return 0;

  const deltaX = x - prevX;
  const deltaY = y - prevY;

  let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

  if (angle < 0) {
    angle += 360;
  }

  return angle;
}

function shouldPushOpponent(
  playerX,
  playerY,
  playerAngle,
  playerSpeed,
  opponentX,
  opponentY
) {
  const isClose = isCloseEnough(
    playerX,
    playerY,
    opponentX,
    opponentY,
    threshold
  );

  if (!isClose) return false;

  const isAligned = calculateRelativeAngle(
    playerAngle,
    playerX,
    playerY,
    opponentX,
    opponentY
  );
  const minSpeedToPush = 50; // Exemple : vitesse minimale pour pousser efficacement

  return isAligned && playerSpeed > minSpeedToPush;
}

function calculateRelativeAngle(
  playerAngle,
  playerX,
  playerY,
  opponentX,
  opponentY,
  threshold
) {
  const deltaX = opponentX - playerX;
  const deltaY = opponentY - playerY;
  const relativeAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  const angleDifference = Math.abs(relativeAngle - playerAngle);

  // Réduire la différence d'angle dans l'intervalle [0, 180]
  const normalizedDifference = Math.min(angleDifference, 360 - angleDifference);

  // Vérifier si l'alignement est suffisant (par exemple, <= seuil)
  return normalizedDifference <= threshold;
}

function determineThrust(
  nextCheckpointAngle,
  nextCheckpointDist,
  opponentCheckpointDist,
  hasBoost
) {
  // Si l'angle est trop large, réduire la puissance pour garder le contrôle
  if (nextCheckpointAngle > 90 || nextCheckpointAngle < -90) {
    thrust = 15; // Réduire la puissance pour tourner efficacement
  } else {
    thrust = 100; // Mettre la puissance maximale sinon
    if (
      hasBoost &&
      nextCheckpointDist > opponentCheckpointDist + 1500 &&
      Math.abs(nextCheckpointAngle) < 10
    ) {
      thrust = `BOOST`;
      hasBoost = false;
    }
  }
  return { thrust, hasBoost }; // Retourner thrust et hasBoost mis à jour
}

// game loop
while (true) {
  var inputs = readline().split(" ");
  const x = parseInt(inputs[0]); // Position actuelle en X
  const y = parseInt(inputs[1]); // Position actuelle en Y
  const nextCheckpointX = parseInt(inputs[2]); // Position X du prochain checkpoint
  const nextCheckpointY = parseInt(inputs[3]); // Position Y du prochain checkpoint
  const nextCheckpointDist = parseInt(inputs[4]); // Distance au prochain checkpoint
  const nextCheckpointAngle = parseInt(inputs[5]); // Angle avec le prochain checkpoint

  var inputs = readline().split(" ");
  const opponentX = parseInt(inputs[0]); // Position X de l'adversaire
  const opponentY = parseInt(inputs[1]); // Position Y de l'adversaire
  const opponentCheckpointDist = Math.sqrt(
    Math.pow(opponentX - nextCheckpointX, 2) +
      Math.pow(opponentY - nextCheckpointY, 2)
  );

  const result = determineThrust(
    nextCheckpointAngle,
    nextCheckpointDist,
    opponentCheckpointDist,
    hasBoost
  );
  const thrust = result.thrust;
  hasBoost = result.hasBoost;

  console.error(
    `Position actuelle: (${x}, ${y}), Checkpoint: (${nextCheckpointX}, ${nextCheckpointY}), Angle: ${nextCheckpointAngle}, Puissance: ${thrust}`
  );

  const playerAngle = calculatePlayerAngle(prevX, prevY, x, y);
  // 2. Vérifier si on est proche de l'adversaire
  const isClose = isCloseEnough(x, y, opponentX, opponentY, threshold);
  // 3. Vérifier si on est aligné avec l'adversaire
  const isAligned = calculateRelativeAngle(
    playerAngle,
    x,
    y,
    opponentX,
    opponentY
  );

  if (thrust === `BOOST`) {
    console.log(`${nextCheckpointX} ${nextCheckpointY} ${thrust}`); // Sortie avec "BOOST"
  } else if (isAligned && isClose) {
    console.log(`${nextCheckpointX} ${nextCheckpointY} ${thrust} `);
  } else {
    console.log(`${nextCheckpointX} ${nextCheckpointY} ${thrust}`); // Sortie avec thrust classique
  }

  prevX = x;
  prevY = y;
}
