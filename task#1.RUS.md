# Карта блога

Необходимо создать компонент `<BlogCard/>`, с помощью которого мы могли бы
отображать информацию о пользователе социальной сети. Данные о пользователе
лежат в файле [article.json](./src/data/article.json).

[![Превью компонента BlogCard](https://i.gyazo.com/5ce54e49016220bcde9209b893eb5e62.jpg)](https://gyazo.com/5ce54e49016220bcde9209b893eb5e62)

Компонент должен принимать несколько пропсов с информацией о пользователе:

- `poster` - постер карты
- `tag` - категория статьи
- `title` — заголовок статьи
- `description` — описание
- `name` — имя пользователя
- `avatar` — аватар пользователя
- `postedAt` — время создания (рекомендовано в формате от даты до сегодняшнего
  дня)

  Компонент должен создавать следующую структуру.

  ```jsx
  <Card>
    <CardHeader>
      <CardPoster
        src="https://source.unsplash.com/600x400/?computer"
        alt="card__image"
      />
    </CardHeader>
    <CardBody>
      <Tag>Technology</Tag>
      <CardTitle>What's new in 2022 Tech</CardTitle>
      <CardText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
        perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque
        quidem!
      </CardText>
    </CardBody>
    <CardFooter>
      <UserBox>
        <Avatar src="https://i.pravatar.cc/40?img=1" alt="Jane Doe" />
        <UserInfo>
          <UserName>Jane Doe</UserName>
          <Date>2h ago</Date>
        </UserInfo>
      </UserBox>
    </CardFooter>
  </Card>
  ```

> Для форматирования даты используйте метод
> [formatDistanceToNow](https://date-fns.org/v2.28.0/docs/formatDistanceToNow)
> библиотеки **date-fns**

## Пример использования

```js
import article from 'data/article.json';

<BlogCard
  poster={article.poster}
  tag={article.tag}
  title={article.title}
  description={article.description}
  userName={article.name}
  avatar={article.avatar}
  postedAt={article.postedAt}
/>;
```
