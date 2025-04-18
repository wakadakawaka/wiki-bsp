---
title: Работа с excel клиент
slug: erp_uh/rabota-s-excel-klient
---


## ВыгрузитьВExcel
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

// Процедура - Выгрузить в excel
//
// Параметры:
//  Форма		 - ФормаКлиентскогоПриложения	 - Форма документа.
Процедура ВыгрузитьВExcel(Форма) Экспорт
```

Пример вызова
```bsl
РаботаСExcelКлиент.ВыгрузитьВExcel(Форма) 
```
</details>

## ВыбратьПрисоединенныйФайлExcel
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

// Процедура - Выбрать присоединенный файл excel
//
// Параметры:
//  Форма - ФормаКлиентскогоПриложения - Форма документа:
//   * Объект   - ДанныеФормыСтруктура - Структура данных формы документа.
//   * Элементы - ВсеЭлементыФормы     - Элементы формы документа.
//  ИмяЭлементаВыбора - Строка - Имя элемента формы, в который вернется оповещение о выборе.
//
Процедура ВыбратьПрисоединенныйФайлExcel(Форма, ИмяЭлементаВыбора) Экспорт
```

Пример вызова
```bsl
РаботаСExcelКлиент.ВыбратьПрисоединенныйФайлExcel(Форма, ИмяЭлементаВыбора) 
```
</details>

## ЗагрузитьИзExcel
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

// Функция - Загрузить из excel
//
// Параметры:
//  Форма					 - ФормаКлиентскогоПриложения - Форма документа.
//  ПрисоединенныйФайл		 - СправочникСсылка.ПланЗакупокПрисоединенныеФайлы - Ссылка на выбранный присоединенный файл.
//  						 - СправочникСсылка.ПланПродажПрисоединенныеФайлы - Ссылка на выбранный присоединенный файл.
//  						 - СправочникСсылка.ПланОстатковПрисоединенныеФайлы - Ссылка на выбранный присоединенный файл.
//  						 - СправочникСсылка.ПланПроизводстваПрисоединенныеФайлы - Ссылка на выбранный присоединенный файл.
//  						 - СправочникСсылка.ПланСборкиРазборкиПрисоединенныеФайлы - Ссылка на выбранный присоединенный файл.
//  						 - СправочникСсылка.ПланПродажПоКатегориямПрисоединенныеФайлы - Ссылка на выбранный присоединенный файл.
//  						 - СправочникСсылка.ПланВнутреннихПотребленийПрисоединенныеФайлы - Ссылка на выбранный присоединенный файл.
//  ПараметрыЗагрузкиИзExcel - Структура - Параметры загрузки из Excel.
//
Процедура ЗагрузитьИзExcel(Форма, ПрисоединенныйФайл, ПараметрыЗагрузкиИзExcel = Неопределено) Экспорт
```

Пример вызова
```bsl
РаботаСExcelКлиент.ЗагрузитьИзExcel(Форма, ПрисоединенныйФайл, ПараметрыЗагрузкиИзExcel);
```
</details>

---

© 2024, **ООО 1С-Софт**  
Все права защищены. Эта программа и сопроводительные материалы предоставляются  
в соответствии с условиями лицензии [Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/legalcode).

---
