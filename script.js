// Расстояния между городами в километрах
const distances = [45, 120, 25, 180, 15, 210];

// Находим самый длинный перегон
function findMaxDistance(route) {
  return Math.max(...route);
}

// Оставляем только длинные перегоны (больше 100 км)
function filterLongRoutes(route) {
  return route.filter(function (distance) {
    return distance > 100;
  });
}

// Считаем общую длину маршрута
function calculateTotalDistance(route) {
  return route.reduce(function (total, distance) {
    return total + distance;
  }, 0);
}

const longRoutes = filterLongRoutes(distances);
const totalDistance = calculateTotalDistance(distances);
const longRoutesTotal = calculateTotalDistance(longRoutes);

let shortRoutesCount = 0;
let shortRoutesTotal = 0;

// Считаем короткие перегоны (30 км и меньше)
for (let i = 0; i < distances.length; i++) {
  if (distances[i] <= 30) {
    shortRoutesCount++;
    shortRoutesTotal += distances[i];
  }
}

alert(
  "Привет! Ваш маршрут длиной " +
    totalDistance +
    " км, из них " +
    longRoutesTotal +
    " км – длинные перегоны"
);

console.log("Самый длинный перегон: " + findMaxDistance(distances) + " км");
console.log("Количество коротких перегонов: " + shortRoutesCount);
console.log("Суммарная длина коротких перегонов: " + shortRoutesTotal + " км");

if (totalDistance > 500) {
  console.log("Рекомендуется разбить маршрут на 2–3 дня");
}
