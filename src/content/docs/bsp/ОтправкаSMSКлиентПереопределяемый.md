---
title: Отправка sms клиент переопределяемый
slug: bsp/отправка-sms-клиент-переопределяемый
---


## ПриОтправкеSMS
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

// Вызывается перед открытием формы отправки SMS.
//
// Параметры:
//  НомераПолучателей - Массив из Структура:
//   * Телефон - Строка - номер получателя в формате +<КодСтраны><КодDEF><номер>;
//   * Представление - Строка - представление номера телефона;
//   * ИсточникКонтактнойИнформации - СправочникСсылка - владелец номера телефона.
//
//  Текст - Строка - текст сообщения, длиной не более 1000 символов.
//
//  ДополнительныеПараметры - Структура - дополнительные параметры отправки SMS:
//   * ИмяОтправителя - Строка - имя отправителя, которое будет отображаться вместо номера у получателей;
//   * ПеревестиВТранслит - Булево - Истина, если требуется переводить текст сообщения в транслит перед отправкой.
//
//  СтандартнаяОбработка - Булево -  флаг необходимости выполнения стандартной обработки отправки SMS.
//
Процедура ПриОтправкеSMS(НомераПолучателей, Текст, ДополнительныеПараметры, СтандартнаяОбработка) Экспорт
```

Пример вызова
```bsl
ОтправкаSMSКлиентПереопределяемый.ПриОтправкеSMS(НомераПолучателей, Текст, ДополнительныеПараметры, СтандартнаяОбработка) 
```
</details>

## ПриПолученииАдресаПровайдераВИнтернете
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

// Определяет адрес страницы провайдера в сети Интернет.
//
// Параметры:
//  Провайдер - ПеречислениеСсылка.ПровайдерыSMS - поставщик услуги по отправке SMS.
//  АдресВИнтернете - Строка - адрес страницы провайдера в Интернете.
//
Процедура ПриПолученииАдресаПровайдераВИнтернете(Провайдер, АдресВИнтернете) Экспорт
```

Пример вызова
```bsl
ОтправкаSMSКлиентПереопределяемый.ПриПолученииАдресаПровайдераВИнтернете(Провайдер, АдресВИнтернете) 
```
</details>

---

© 2024, **ООО 1С-Софт**  
Все права защищены. Эта программа и сопроводительные материалы предоставляются  
в соответствии с условиями лицензии [Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/legalcode).

---
