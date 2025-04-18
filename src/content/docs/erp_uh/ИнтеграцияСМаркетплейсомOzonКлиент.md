---
title: Интеграция с маркетплейсом ozon клиент
slug: erp_uh/integratsiya-s-marketpleysom-ozon-klient
---


## ОчисткаНастроекАвторизацииВопрос
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

// Вызывает диалог вопроса по очистке настроек авторизации.
//
// Параметры:
//   Форма - ФормаКлиентскогоПриложения - форма, из которой инициирована очистка настроек авторизации.
//
Процедура ОчисткаНастроекАвторизацииВопрос(Форма) Экспорт
```

Пример вызова
```bsl
ИнтеграцияСМаркетплейсомOzonКлиент.ОчисткаНастроекАвторизацииВопрос(Форма) 
```
</details>

## ВывестиСостояние
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

// Показывает состояние выполнения действия.
//
// Параметры:
//   Результат                - Структура - любая структура, ожидаются ключи "КодОшибки", "ОписаниеОшибки".
//   ДополнительныеПараметры  - см. ИнтеграцияСМаркетплейсомOzonКлиент.НовоеОписаниеПараметровДействия.
//   ВывестиСообщениеОбОшибке - Булево - признак вывода сообщения.
//
Процедура ВывестиСостояние(Результат, ДополнительныеПараметры, ВывестиСообщениеОбОшибке = Ложь) Экспорт
```

Пример вызова
```bsl
ИнтеграцияСМаркетплейсомOzonКлиент.ВывестиСостояние(Результат, ДополнительныеПараметры, ВывестиСообщениеОбОшибке);
```
</details>

## НовоеОписаниеПараметровДействия
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

// Возвращает новую структуру с описанием параметров действия.
//
// Возвращаемое значение:
//   Структура - структура с описанием параметров действия.
//
Функция НовоеОписаниеПараметровДействия() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияСМаркетплейсомOzonКлиент.НовоеОписаниеПараметровДействия() 
```
</details>

## ПечатьЭтикетокПоставкиНаСклады
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

// Открывает форму печати этикеток поставки на склады Ozon.
//
// Параметры:
//   ОписаниеКоманды - Структура - сведения о выполняемой команде.
//
// Возвращаемое значение:
//   Неопределено
//
Функция ПечатьЭтикетокПоставкиНаСклады(ОписаниеКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияСМаркетплейсомOzonКлиент.ПечатьЭтикетокПоставкиНаСклады(ОписаниеКоманды) 
```
</details>

---

© 2024, **ООО 1С-Софт**  
Все права защищены. Эта программа и сопроводительные материалы предоставляются  
в соответствии с условиями лицензии [Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/legalcode).

---
