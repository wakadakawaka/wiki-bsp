---
title: Работа с лентой событий EDI клиент
slug: erp_uh/rabota-s-lentoy-sobytiy-edi-klient
---


## ОткрытьФормуЛентыСобытий
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Процедура ОткрытьФормуЛентыСобытий(ПараметрыОткрытияФормы = Неопределено, ФормаВладелец = Неопределено, ОписаниеОповещения = Неопределено) Экспорт
```

Пример вызова
```bsl
РаботаСЛентойСобытийEDIКлиент.ОткрытьФормуЛентыСобытий(ПараметрыОткрытияФормы, ФормаВладелец, ОписаниеОповещения);
```
</details>

## НовыйПараметрыОткрытияФормыЛентыСобытий
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыОткрытияФормыЛентыСобытий() Экспорт
```

Пример вызова
```bsl
Результат = РаботаСЛентойСобытийEDIКлиент.НовыйПараметрыОткрытияФормыЛентыСобытий() 
```
</details>

---

© 2024, **ООО 1С-Софт**  
Все права защищены. Эта программа и сопроводительные материалы предоставляются  
в соответствии с условиями лицензии [Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/legalcode).

---
