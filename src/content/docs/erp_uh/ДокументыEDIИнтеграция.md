---
title: Документы EDI интеграция
slug: erp_uh/dokumenty-edi-integratsiya
---


## ЕстьПравоИспользованияEDI
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

// Определяет право пользователя на использование сервиса EDI
//
// Возвращаемое значение:
//  Булево - Истина - в случае, если используется EDI и у пользователя достаточно прав для использования,
//           Ложь - в ином случае.
Функция ЕстьПравоИспользованияEDI() Экспорт
```

Пример вызова
```bsl
Результат = ДокументыEDIИнтеграция.ЕстьПравоИспользованияEDI() 
```
</details>

## ПриСозданииНаСервере
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

// Обработчик подключения функций сервиса EDI к форме документа
//
// Параметры:
// 	ПараметрыФормыДокумента - Структура - см. ДокументыEDIИнтеграция.ПараметрыПриСозданииФормыДокумента()
Процедура ПриСозданииНаСервере(ПараметрыФормыДокумента) Экспорт
```

Пример вызова
```bsl
ДокументыEDIИнтеграция.ПриСозданииНаСервере(ПараметрыФормыДокумента) 
```
</details>

## ПриЧтенииНаСервере
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

// Обработчик ПриЧтенииНаСервере формы документа, подключаемого к сервису EDI
//
// Параметры:
// 	ФормаДокумента - ФормаКлиентскогоПриложения - форма документа, подключаемого к сервису EDI
Процедура ПриЧтенииНаСервере(ФормаДокумента) Экспорт
```

Пример вызова
```bsl
ДокументыEDIИнтеграция.ПриЧтенииНаСервере(ФормаДокумента) 
```
</details>

## ПриПолученииДанныхНаСервереСписокДокументов
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

// Обработчик события ПриПолученииДанныхНаСервере в формах списков прикладных документов
//
// Параметры:
// 	ТипДокумента - ПеречислениеСсылка.ТипыДокументовEDI - тип документа.
// 	ИмяЭлемента  - Строка - содержит имя таблицы формы, из которой вызван обработчик события.
// 	Настройки    - НастройкиКомпоновкиДанных - содержит копию полных настроек динамического списка.
// 	Строки       - СтрокиДинамическогоСписка - коллекция содержит данные и оформление всех строк, получаемых в списке, кроме строк группировок
//
Процедура ПриПолученииДанныхНаСервереСписокДокументов(ТипДокумента, ИмяЭлемента, Настройки, Строки) Экспорт
```

Пример вызова
```bsl
ДокументыEDIИнтеграция.ПриПолученииДанныхНаСервереСписокДокументов(ТипДокумента, ИмяЭлемента, Настройки, Строки) 
```
</details>

## ПараметрыФормыСпискаПрикладногоДокументаEDI
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

// Конструктор параметров внедрения подсистемы EDI в форму списка прикладных документов
//
// Возвращаемое значение:
//   Структура - содержит:
//     * ИмяГруппыРазмещенияЭлементаПереходВСписокДокументыКЗагрузке - Строка - имя группы, в которой будет размещена декорация перехода в список документов к загрузке.
//     * ОтображатьПереходВСписокДокументыКЗагрузке                  - Булево - необходимость отображения перехода в список документов к загрузке.
//     * СостояниеEDIРазмещатьПередЭлементом                         - Строка - имя колонки списка, перед которой будет размещена колонка "Состояние EDI"
//     * ИмяПсевдонимаОсновнойТаблицы                                - Строка - имя псевдонима основной таблицы.
//     * ИмяГруппыРазмещенияЭлементаБыстрогоОтбора                   - Строка - имя группы, в которой будет размещен элемент быстрого отбора по состоянию EDI.
//     * ТипДокумента                                                - ПеречислениеСсылка.ТипыДокументовEDI - тип документа EDI, соответствующий документу списка.
//     * ИмяЭлементаФормыСписок                                      - Строка - имя элемента формы списка.
//     * ИмяРеквизитаСписок                                          - Строка - имя реквизита формы, в котором содержится динамический список.
//     * ИспользоватьОбменEDI                                        - Булево - признак использования EDI.
//
Функция ПараметрыФормыСпискаПрикладногоДокументаEDI() Экспорт
```

Пример вызова
```bsl
Результат = ДокументыEDIИнтеграция.ПараметрыФормыСпискаПрикладногоДокументаEDI() 
```
</details>

## ФормаСпискаПриСозданииНаСервере
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

// Выполняет внедрение подсистемы EDI при создании форм списков на сервере
//
// Параметры:
// 	Форма                 - ФормаКлиентскогоПриложения - форма, в которой возникло событие.
// 	Отказ                 - Булево                     - признак отказа от создания формы.
// 	СтандартнаяОбработка  - Булево                     - признак выполнения стандартной (системной) обработки события.
// 	ПараметрыИнтеграции   - Структура                  - см.ПараметрыФормыСпискаПрикладногоДокументаEDI
//
Процедура ФормаСпискаПриСозданииНаСервере(Форма, Отказ, СтандартнаяОбработка, ПараметрыИнтеграции) Экспорт
```

Пример вызова
```bsl
ДокументыEDIИнтеграция.ФормаСпискаПриСозданииНаСервере(Форма, Отказ, СтандартнаяОбработка, ПараметрыИнтеграции) 
```
</details>

## ПриЗагрузкеДанныхИзНастроекНаСервере
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

// Выполняет внедрение подсистемы EDI при загрузке данных из настроек на на сервере
//
// Параметры:
// 	Форма     - ФормаКлиентскогоПриложения - форма, в которой возникло событие.
// 	Настройки - Соответствие - загружаемые настройки.
//
Процедура ПриЗагрузкеДанныхИзНастроекНаСервере(Форма, Настройки) Экспорт
```

Пример вызова
```bsl
ДокументыEDIИнтеграция.ПриЗагрузкеДанныхИзНастроекНаСервере(Форма, Настройки) 
```
</details>

## ПриСохраненииДанныхВНастройкахНаСервере
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

//  Выполняет внедрение подсистемы EDI при сохранении данных в настройках на сервере
//
// Параметры:
// 	Форма     - ФормаКлиентскогоПриложения - форма, в которой возникло событие.
// 	Настройки - Соответствие - сохраняемые настройки.
//
Процедура ПриСохраненииДанныхВНастройкахНаСервере(Форма, Настройки) Экспорт
```

Пример вызова
```bsl
ДокументыEDIИнтеграция.ПриСохраненииДанныхВНастройкахНаСервере(Форма, Настройки) 
```
</details>

## ВыполнитьКоманду
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

// Обработчик выполнения подключаемой команды сервиса EDI на сервере.
//
// Параметры:
// 	ФормаДокумента          - ФормаКлиентскогоПриложения - форма документа, подключаемого к сервису EDI
// 	ИмяКоманды              - Строка                     - строковый идентификатор команды документа
// 	ДополнительныеПараметры - Структура                  - дополнительные параметры выполнения команды
Процедура ВыполнитьКоманду(ФормаДокумента, ИмяКоманды, ДополнительныеПараметры) Экспорт
```

Пример вызова
```bsl
ДокументыEDIИнтеграция.ВыполнитьКоманду(ФормаДокумента, ИмяКоманды, ДополнительныеПараметры) 
```
</details>

## ПараметрыПриСозданииФормыДокумента
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

// Конструктор параметров подключения формы к сервису EDI
//
// Возвращаемое значение:
//  Структура - Описание:
//    * ФормаДокумента        - ФормаКлиентскогоПриложения - подключаемая к сервису форма документа
//    * НастройкиФормы        - Структура                  - сведения о настройках формы:
//      * ИмяРеквизитаОрганизация - Строка - путь к данным реквизита организации документа
//      * ИмяРеквизитаКонтрагент  - Строка - путь к данным реквизита контрагента документа
//      * ИмяРеквизитаМенеджер    - Строка - путь к данным реквизита менеджера документа
//      * ИмяГруппыФормыПанельСостояния               - Строка - имя группы для размещения панели состоянияEDI
//      * ИмяГруппыФормыПанельПротоколаВзаимодействия - Строка - имя группы для размещения протокола взаимодействия EDI
//    * МестоРазмещенияКоманд - Строка - имя группы формы для расположения подключаемых команд
Функция ПараметрыПриСозданииФормыДокумента() Экспорт
```

Пример вызова
```bsl
Результат = ДокументыEDIИнтеграция.ПараметрыПриСозданииФормыДокумента() 
```
</details>

---

© 2024, **ООО 1С-Софт**  
Все права защищены. Эта программа и сопроводительные материалы предоставляются  
в соответствии с условиями лицензии [Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/legalcode).

---
