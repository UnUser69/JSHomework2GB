/*Задание 3
В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).*/
let day = prompt(`Введите число месяца 1-31:`);
if (day>0 && day<=10) {alert(`Число находятся в первом декаде месяца`)} else 
if (day>10 && day<=20) {alert(`Число находятся во втором декаде месяца`)} else
if (day>20 && day<=31) {alert(`Число находятся в третьем декаде месяца`)} else
{alert('Введенное число не удовлетворяет условию задачи')}