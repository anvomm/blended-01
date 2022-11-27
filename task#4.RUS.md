# История транзакций

Необходимо создать компонент истории транзакций в личном кабинете
крипто-кошелька.

[![Превью компонента CryptoHistory](https://i.gyazo.com/c40db818fdf62f749f97ab24f1946928.png)](https://gyazo.com/c40db818fdf62f749f97ab24f1946928)

Данные для списка доступны в формате JSON в файле
[transactions.json](./src/data/transactions.json). Это массив объектов, каждый
объект описывает одну транзакцию со следующими свойствами:

- `id` - уникальный идентификатор транзакции
- `price` - остаток на счету
- `amount` – сумма транзакции
- `date` - дата транзакции

## Описание компонента `<CryptoHistory>`

Необходимо создать компонент `<CryptoHistory>`, который принимает один
проп`items` - массив объектов транзакций из `transactions.json`. Компонент
создает разметку таблицы. Каждая транзакция – это строка таблицы. В примере
приведена структура двух транзакций.

```jsx
<BaseTable>
  <THead>
    <tr>
      <Th>№</Th>
      <Th>PRICE</Th>
      <Th>AMOUNT</Th>
      <Th>DATE</Th>
    </tr>
  </THead>

  <tbody>
    <Tr>
      <Td>1</Td>
      <Td>3190</Td>
      <Td>0.24843</Td>
      <Td>02/01/2022, 1:14 PM</Td>
    </Tr>
    <Tr>
      <Td>2</Td>
      <Td>3195</Td>
      <Td>0.088</Td>
      <Td>05/09/2022, 2:24 PM</Td>
    </Tr>
  </tbody>
</BaseTable>
```

> Для форматирования даты используйте метод
> [format](https://date-fns.org/v2.28.0/docs/format) библиотеки **date-fns**

## Пример использования

```js
import transactions from 'data/transactions.json';

<TransactionHistory items={transactions} />;
```
