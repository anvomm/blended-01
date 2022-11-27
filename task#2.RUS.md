# Секция статистики

Создать компонент `<Statistics>`, показывающий статистику из переданных
пропсов - основная статистика интернет-магазина по зарегистрированным
пользователей, отзывов и т.д. Данные о статистике лежат в файле
[data.json](./src/data/data.json).

[![Превью компонента Statistics](https://i.gyazo.com/a75d617620bdb0805e19d5a394699dea.png)](https://gyazo.com/a75d617620bdb0805e19d5a394699dea)

## Описание компонента

Компонент должен принимать два пропа `title` и `stats`, в которых указывается
заглавие и объект статистики.

- `title` - не обязателен, и если он не передан, не должна рендериться разметка
  заголовка `<h3>`.
- `stats` – массив объектов, содержащих информацию об элементе статистики. Может
  иметь любое количество элементов.

Компонент должен создавать следующую структуру.

```jsx
<StatisticTitle>Main Statistics</StatisticTitle>

<StatisticsList>
  <StatisticBox>
    {/* Тут має бути іконка */}
    <StatisticCounter>2147</StatisticCounter>
    <StatisticText>Happy Customers</StatisticText>
  </StatisticBox>

  <StatisticBox>
    {/* Тут має бути іконка */}
    <StatisticCounter>3275</StatisticCounter>
    <StatisticText>Registered Members</StatisticText>
  </StatisticBox>

  <StatisticBox>
    {/* Тут має бути іконка */}
    <StatisticCounter>289</StatisticCounter>
    <StatisticText>Available Products</StatisticText>
  </StatisticBox>

  <StatisticBox>
    {/* Тут має бути іконка */}
    <StatisticCounter>1563</StatisticCounter>
    <StatisticText>Saved Trees</StatisticText>
  </StatisticBox>
</StatisticsList>
```

> Задание с иконкой делать по желанию. Надо продумать логику, как динамично
> отрисовать из библиотеки
> [**react-icons**](https://github.com/react-icons/react-icons) и изменить
> дефолтный размер

## Пример использования

```js
import data from '/путь/к/data.json';

<Statistics title="Main Statistics" stats={data} />;
<Statistics stats={data} />;
```
