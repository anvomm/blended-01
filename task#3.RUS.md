# Список Forbes

Необходимо создать компонент `<ForbesList>`, с помощью которого мы могли бы
отображать информацию об актуальной информации портала **Forbes**. Информация об
актуальном рейтинге [forbes.json](./src/data/forbes.json).

[![Превью компонента ForbesList](https://i.gyazo.com/d860b2fbd570a9eb800917b116fa0423.png)](https://gyazo.com/d860b2fbd570a9eb800917b116fa0423)

## Описание компонента `<ForbesList>`

Компонент должен принимать один проп`list` – массив объектов друзей.

Компонент должен создавать следующую структуру.

```jsx
<LeaderBoard>
  <BoardHeader>
    <BoardTitle>
      <TitleTop>Forbes</TitleTop>
      <TitleBottom>Leader board</TitleBottom>
    </BoardTitle>
  </BoardHeader>

  <LeaderBoardProfiles>
    {/* Довільна кіл-сть FriendListItem */}
  </LeaderBoardProfiles>
</LeaderBoard>
```

## Описание компонента `<ForbesListItem>`

Компонент должен принимать несколько запросов:

- `avatar` - аватар миллионера
- `name` - имя миллионера
- `capital` – состояние миллионера
- `isIncrease` – буль, сигнализирующий о состоянии миллионера: увеличился или
  нет.

В зависимости от пропа `isIncrease`, должна меняться иконка: при увеличении
стада - `<FcBullish/>` или при уменьшении - `<FcBearish/>`

Компонент обязан быть следующей структуры.

```jsx
<ForbesItem>
  <Avatar
    src="https://randomuser.me/api/portraits/men/32.jpg"
    alt="Mark Zuckerberg"
  />
  <Name>Mark Zuckerberg</Name>
  <Capital>
    35.7 <BiDollarCircle color={theme.colors.accent} size={22} />
    {/* Тут має бути необхідна іконка зміни статку */}
  </Capital>
</ForbesItem>
```

## Пример использования

```js
import forbes from 'data/forbes.json';

<FriendList list={forbes} />,
```
