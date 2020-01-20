# weather-test-task
test task for Initflow

#Мобильное приложение для отображения погоды.

Макет:
https://www.figma.com/file/1wZvV9gdY8CGTsV7oRZk3p/Weather?node-id=0%3A1

Основные моменты:
Не использовать expo
Сделать навигацию по экранам из макета.
Список выбранных городов должен сохраняться при закрытии приложения.
Поиск по городам реализовать на клиенте, предварительно выгружая список городов по url https://mk-s3-test-bucket.s3.eu-central-1.amazonaws.com/cities.json. Поиск производится по вхождению запрашиваемой строки в поле name у города.
Для подгрузки погоды для выбранного города API Яндекса. Документация: https://yandex.ru/dev/weather/doc/dg/concepts/forecast-test-docpage/
API Key: 198c21cd-59c1-4702-9193-4de89c0cc5d5
