const redColor = "#f00";
const yellowColor = "#fc3";
const greenColor = "#6c3";

export const RatingColors = (ratingPercentAtMax: number): string => {
  if(ratingPercentAtMax < 5) {
    return redColor;
  } else if(ratingPercentAtMax >= 5 && ratingPercentAtMax < 8) {
    return yellowColor;
  } else {
    return greenColor;
  }
}
