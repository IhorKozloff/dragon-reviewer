    Доброго веремени суток. Рад приветствовать на просмотре результатов моей работы по вашему тестовому заданию.

Сразу по пунктам...
1.Базовая задача: Выполнена на 100% согласно всех условий.
2.Реализовать карусель из картинок: Тут все очевидно, коментариев нет.
3.Реализовать кэширование данных: Для этого я использую Redux-toolkit,Redux-persist. Все работает согласно заданию.
4. Дизайн интерфейса: Без макета сложно, надеюсь понравится.
5.Реализовать список и мастер/детали отображение: В этом пункте я не делал "пулл ту рефреш". Все остальное выполнено на 100%.
    Для постраничной загрузки использовал lazy, suspense.
6.Деплой в облако: использовал Netlify... не получилось :(
7.Настройка CI/CD для деплоя: Я использовал готовый шаблон, сделанный в create-react-app, который использовал для обучения. Деплоится автоматически на гитхаб-пейдж.

8.Аутентификация: Аутентификация проходит с логином и паролем. Для этого я использую сервис Firebase, и Redux-toolkit. 
При залогиненом пользователе, в хедере доступен так наз. юзербар. В избранное можно добавлять драконов из списка, кнопкой со звездочкой на каждом драконе. Повторным нажатием можно удалить. Так же удалить можно со страницы избранное(/wishlist), нажатием на значок корзины, на каждом дракое. На данную страницу можно перейти нажатием на звездочку в юзербаре. Избранное сохраняется при:
 -- Перезагрузке страницы.
 -- При релогине пользователя.
 -- При смене имейла, и релогине.
Для этого используется база данных (Firebase-firestore и Redux-toolkit)

    Далее при нажатии на зеленый значок аватарки, мы переходим в личный кабинет.
Тут доступны ф-ции смены имейла, пароля и аватарки. (Firebase, и Redux-toolkit).
Если юзер успешно меняет имейл, то при релогине его избранное и аватарка сохраняется.  

На этом пока все. Спасибо за внимание, надеюсь на дальнейшее сотрудничество.

