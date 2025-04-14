---
title: Интеграция с сервисом edi служебный
---


## УстановитьОписаниеТермина
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Процедура УстановитьОписаниеТермина(Глоссарий, Знач Термин, Знач Значение, Экспорт
```

Пример вызова
```bsl
ИнтеграцияССервисомEDIСлужебный.УстановитьОписаниеТермина(Глоссарий, Термин, Значение, );
```
</details>

## НовыйГлоссарий
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйГлоссарий() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйГлоссарий() 
```
</details>

## ТерминСервиса
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция ТерминСервиса(Знач Глоссарий, Знач Значение) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.ТерминСервиса(Глоссарий, Значение) 
```
</details>

## ЗначениеТермина
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция ЗначениеТермина(Знач Глоссарий, Знач Термин) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.ЗначениеТермина(Глоссарий, Термин) 
```
</details>

## НормализоватьДанныеПоСхеме
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

// Приводит объектную модель к каноническому виду
//
// Параметры:
//   Данные - Структура - обрабатываемый документ.
//   ОписаниеСтруктурыДанных - Структура - описание структуры данных, см. ОписаниеСтруктурыДанныхЗаказа()
//   ПолнаяМодельДанных - Булево - если Истина - в данные будут добавлены все свойства объектов, описанные с модели.
//                                               В противном случае - только обязательные к заполнению.
//
Процедура НормализоватьДанныеПоСхеме(Данные, Знач ОписаниеСтруктурыДанных, Знач ПолнаяМодельДанных = Истина) Экспорт
```

Пример вызова
```bsl
ИнтеграцияССервисомEDIСлужебный.НормализоватьДанныеПоСхеме(Данные, ОписаниеСтруктурыДанных, ПолнаяМодельДанных);
```
</details>

## ПустаяМодельПоСхеме
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция ПустаяМодельПоСхеме(Знач Схема, Знач ПолнаяМодельДанных = Истина, Результат = Неопределено, Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.ПустаяМодельПоСхеме(Схема, ПолнаяМодельДанных, Результат, );
```
</details>

## ОписаниеСтруктурыДанныхЗаказа
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция ОписаниеСтруктурыДанныхЗаказа() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.ОписаниеСтруктурыДанныхЗаказа() 
```
</details>

## УстановитьЗначениеВМодели
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Процедура УстановитьЗначениеВМодели(Модель, Знач СхемаМодели, Знач СвойствоМодели, Знач ЗначениеСвойства, Экспорт
```

Пример вызова
```bsl
ИнтеграцияССервисомEDIСлужебный.УстановитьЗначениеВМодели(Модель, СхемаМодели, СвойствоМодели, ЗначениеСвойства, );
```
</details>

## ЗначениеКоллекцииПоАбсолютномуПути
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция ЗначениеКоллекцииПоАбсолютномуПути(Знач Значение, Знач Путь, ЕстьОшибки = Ложь) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.ЗначениеКоллекцииПоАбсолютномуПути(Значение, Путь, ЕстьОшибки);
```
</details>

## ВариантыСортировкиСпискаЗаказов
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция ВариантыСортировкиСпискаЗаказов() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.ВариантыСортировкиСпискаЗаказов() 
```
</details>

## НовыйПараметрыПолученияРеестраДокументов
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыПолученияРеестраДокументов() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыПолученияРеестраДокументов() 
```
</details>

## НовыйПараметрыСравненияВерсийЗаказаПоставщику
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыСравненияВерсийЗаказаПоставщику() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыСравненияВерсийЗаказаПоставщику() 
```
</details>

## НовыйПараметрыПолученияПечатнойФормыЗаказаПоставщику
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыПолученияПечатнойФормыЗаказаПоставщику() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыПолученияПечатнойФормыЗаказаПоставщику() 
```
</details>

## НовыйПараметрыПолученияСтатусаЗаказаПоставщику
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыПолученияСтатусаЗаказаПоставщику() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыПолученияСтатусаЗаказаПоставщику() 
```
</details>

## НовыйПараметрыИзмененияСтатусаЗаказаПоставщику
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыИзмененияСтатусаЗаказаПоставщику() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыИзмененияСтатусаЗаказаПоставщику() 
```
</details>

## НовыйПараметрыПолученияДанныхЗаказаПоставщику
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыПолученияДанныхЗаказаПоставщику() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыПолученияДанныхЗаказаПоставщику() 
```
</details>

## НовыйПараметрыПолученияСпискаЗаказовПоставщику
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыПолученияСпискаЗаказовПоставщику() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыПолученияСпискаЗаказовПоставщику() 
```
</details>

## НовыйПараметрыСозданияЗаказаПоставщику
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыСозданияЗаказаПоставщику() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыСозданияЗаказаПоставщику() 
```
</details>

## НовыйПараметрыОбновленияЗаказаПоставщику
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыОбновленияЗаказаПоставщику() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыОбновленияЗаказаПоставщику() 
```
</details>

## НовыйПараметрыПолученияПротоколаИзмененияЗаказаПоставщику
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыПолученияПротоколаИзмененияЗаказаПоставщику() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыПолученияПротоколаИзмененияЗаказаПоставщику() 
```
</details>

## НовыйПараметрыПолученияПечатнойФормыЗаказаКлиента
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыПолученияПечатнойФормыЗаказаКлиента() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыПолученияПечатнойФормыЗаказаКлиента() 
```
</details>

## НовыйПараметрыСравненияВерсийЗаказаКлиента
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыСравненияВерсийЗаказаКлиента() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыСравненияВерсийЗаказаКлиента() 
```
</details>

## НовыйПараметрыПолученияСтатусаЗаказаКлиента
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыПолученияСтатусаЗаказаКлиента() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыПолученияСтатусаЗаказаКлиента() 
```
</details>

## НовыйПараметрыИзмененияСтатусаЗаказаКлиента
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыИзмененияСтатусаЗаказаКлиента() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыИзмененияСтатусаЗаказаКлиента() 
```
</details>

## НовыйПараметрыПолученияДанныхЗаказаКлиента
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыПолученияДанныхЗаказаКлиента() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыПолученияДанныхЗаказаКлиента() 
```
</details>

## НовыйПараметрыПолученияСпискаЗаказовКлиента
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыПолученияСпискаЗаказовКлиента() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыПолученияСпискаЗаказовКлиента() 
```
</details>

## НовыйПараметрыОбновленияЗаказаКлиента
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыОбновленияЗаказаКлиента() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыОбновленияЗаказаКлиента() 
```
</details>

## НовыйПараметрыПолученияПротоколаИзмененияЗаказаКлиента
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыПолученияПротоколаИзмененияЗаказаКлиента() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыПолученияПротоколаИзмененияЗаказаКлиента() 
```
</details>

## НовыйПараметрыПолученияНастроекОбменаОрганизации
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыПолученияНастроекОбменаОрганизации() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыПолученияНастроекОбменаОрганизации() 
```
</details>

## НовыйПараметрыОбновленияНастройкиОбменаОрганизации
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыОбновленияНастройкиОбменаОрганизации() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыОбновленияНастройкиОбменаОрганизации() 
```
</details>

## НовыйПараметрыПолученияНастроекОбменаКонтрагентов
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыПолученияНастроекОбменаКонтрагентов() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыПолученияНастроекОбменаКонтрагентов() 
```
</details>

## НовыйПараметрыОбновленияНастроекОрганизации
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыОбновленияНастроекОрганизации() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыОбновленияНастроекОрганизации() 
```
</details>

## НовыйПараметрыПолученияНастроекОрганизации
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыПолученияНастроекОрганизации() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыПолученияНастроекОрганизации() 
```
</details>

## НовыйПараметрыПолученияЛентыСобытийПоОрганизации
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыПолученияЛентыСобытийПоОрганизации() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыПолученияЛентыСобытийПоОрганизации() 
```
</details>

## НовыйПараметрыПолученияСводнойИнформацииПоЛентеСобытийНаДату
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыПолученияСводнойИнформацииПоЛентеСобытийНаДату() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыПолученияСводнойИнформацииПоЛентеСобытийНаДату() 
```
</details>

## НовыйПараметрыПолученияСводнойИнформацииПоЛентеСобытийЗаПериод
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыПолученияСводнойИнформацииПоЛентеСобытийЗаПериод() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыПолученияСводнойИнформацииПоЛентеСобытийЗаПериод() 
```
</details>

## НовыйПараметрыДобавленияМенеджера
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыДобавленияМенеджера() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыДобавленияМенеджера() 
```
</details>

## НовыйПараметрыПолученияРезультатаАсинхроннойОбработкиЗапроса
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НовыйПараметрыПолученияРезультатаАсинхроннойОбработкиЗапроса() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НовыйПараметрыПолученияРезультатаАсинхроннойОбработкиЗапроса() 
```
</details>

## ИдентификаторОрганизацииБизнесСети
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция ИдентификаторОрганизацииБизнесСети(Знач Организация, ЕстьОшибки = Ложь, ТекстОшибки = "") Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.ИдентификаторОрганизацииБизнесСети(Организация, ЕстьОшибки, ТекстОшибки);
```
</details>

## КонтрагентыБизнесСети
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция КонтрагентыБизнесСети(Знач Контрагенты, ЕстьОшибки = Ложь, ТекстОшибки = "", ИспользоватьТолькоКэш = Ложь) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.КонтрагентыБизнесСети(Контрагенты, ЕстьОшибки, ТекстОшибки, ИспользоватьТолькоКэш);
```
</details>

## ОрганизацияБизнесСети
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция ОрганизацияБизнесСети(Знач ИдентификаторОрганизации, ЕстьОшибки = Ложь, ТекстОшибки = "") Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.ОрганизацияБизнесСети(ИдентификаторОрганизации, ЕстьОшибки, ТекстОшибки);
```
</details>

## КонтрагентБизнесСети
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция КонтрагентБизнесСети(Знач ИдентификаторКонтрагента, ЕстьОшибки = Ложь, ТекстОшибки = "") Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.КонтрагентБизнесСети(ИдентификаторКонтрагента, ЕстьОшибки, ТекстОшибки);
```
</details>

## РеестрДокументов
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция РеестрДокументов(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.РеестрДокументов(ПараметрыКоманды) 
```
</details>

## ПечатнаяФормаЗаказаПоставщику
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция ПечатнаяФормаЗаказаПоставщику(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.ПечатнаяФормаЗаказаПоставщику(ПараметрыКоманды) 
```
</details>

## ПечатнаяФормаСравненияВерсийЗаказаПоставщику
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция ПечатнаяФормаСравненияВерсийЗаказаПоставщику(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.ПечатнаяФормаСравненияВерсийЗаказаПоставщику(ПараметрыКоманды) 
```
</details>

## СписокЗаказовПоставщику
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция СписокЗаказовПоставщику(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.СписокЗаказовПоставщику(ПараметрыКоманды) 
```
</details>

## ПротоколИзмененийЗаказаПоставщику
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция ПротоколИзмененийЗаказаПоставщику(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.ПротоколИзмененийЗаказаПоставщику(ПараметрыКоманды) 
```
</details>

## ДанныеЗаказаПоставщику
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция ДанныеЗаказаПоставщику(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.ДанныеЗаказаПоставщику(ПараметрыКоманды) 
```
</details>

## СтатусЗаказаПоставщику
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция СтатусЗаказаПоставщику(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.СтатусЗаказаПоставщику(ПараметрыКоманды) 
```
</details>

## РезультатСозданияЗаказаПоставщику
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция РезультатСозданияЗаказаПоставщику(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.РезультатСозданияЗаказаПоставщику(ПараметрыКоманды) 
```
</details>

## РезультатОбновленияЗаказаПоставщику
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция РезультатОбновленияЗаказаПоставщику(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.РезультатОбновленияЗаказаПоставщику(ПараметрыКоманды) 
```
</details>

## РезультатИзмененияСтатусаЗаказаПоставщику
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция РезультатИзмененияСтатусаЗаказаПоставщику(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.РезультатИзмененияСтатусаЗаказаПоставщику(ПараметрыКоманды) 
```
</details>

## ПечатнаяФормаЗаказаКлиента
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция ПечатнаяФормаЗаказаКлиента(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.ПечатнаяФормаЗаказаКлиента(ПараметрыКоманды) 
```
</details>

## ПечатнаяФормаСравненияВерсийЗаказаКлиента
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция ПечатнаяФормаСравненияВерсийЗаказаКлиента(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.ПечатнаяФормаСравненияВерсийЗаказаКлиента(ПараметрыКоманды) 
```
</details>

## СписокЗаказовКлиента
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция СписокЗаказовКлиента(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.СписокЗаказовКлиента(ПараметрыКоманды) 
```
</details>

## ПротоколИзмененийЗаказаКлиента
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция ПротоколИзмененийЗаказаКлиента(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.ПротоколИзмененийЗаказаКлиента(ПараметрыКоманды) 
```
</details>

## ДанныеЗаказаКлиента
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция ДанныеЗаказаКлиента(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.ДанныеЗаказаКлиента(ПараметрыКоманды) 
```
</details>

## СтатусЗаказаКлиента
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция СтатусЗаказаКлиента(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.СтатусЗаказаКлиента(ПараметрыКоманды) 
```
</details>

## РезультатОбновленияЗаказаКлиента
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция РезультатОбновленияЗаказаКлиента(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.РезультатОбновленияЗаказаКлиента(ПараметрыКоманды) 
```
</details>

## РезультатИзмененияСтатусаЗаказаКлиента
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция РезультатИзмененияСтатусаЗаказаКлиента(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.РезультатИзмененияСтатусаЗаказаКлиента(ПараметрыКоманды) 
```
</details>

## НастройкиОбменаОрганизации
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НастройкиОбменаОрганизации(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НастройкиОбменаОрганизации(ПараметрыКоманды) 
```
</details>

## РезультатОбновленияНастроекОбменаОрганизации
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция РезультатОбновленияНастроекОбменаОрганизации(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.РезультатОбновленияНастроекОбменаОрганизации(ПараметрыКоманды) 
```
</details>

## НастройкиОбменаКонтрагентов
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция НастройкиОбменаКонтрагентов(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.НастройкиОбменаКонтрагентов(ПараметрыКоманды) 
```
</details>

## РезультатОбновленияНастроекОрганизацииВСервисе
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция РезультатОбновленияНастроекОрганизацииВСервисе(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.РезультатОбновленияНастроекОрганизацииВСервисе(ПараметрыКоманды) 
```
</details>

## РезультатПолученияНастроекОрганизации
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция РезультатПолученияНастроекОрганизации(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.РезультатПолученияНастроекОрганизации(ПараметрыКоманды) 
```
</details>

## ЛентаСобытийПоОрганизации
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция ЛентаСобытийПоОрганизации(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.ЛентаСобытийПоОрганизации(ПараметрыКоманды) 
```
</details>

## СводнаяИнформацияПоЛентеСобытийНаДату
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция СводнаяИнформацияПоЛентеСобытийНаДату(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.СводнаяИнформацияПоЛентеСобытийНаДату(ПараметрыКоманды) 
```
</details>

## СводнаяИнформацияПоЛентеСобытийЗаПериод
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция СводнаяИнформацияПоЛентеСобытийЗаПериод(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.СводнаяИнформацияПоЛентеСобытийЗаПериод(ПараметрыКоманды) 
```
</details>

## РезультатДобавленияМенеджера
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция РезультатДобавленияМенеджера(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.РезультатДобавленияМенеджера(ПараметрыКоманды) 
```
</details>

## РезультатАсинхроннойОбработкиКоманды
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция РезультатАсинхроннойОбработкиКоманды(Знач ПараметрыКоманды) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.РезультатАсинхроннойОбработкиКоманды(ПараметрыКоманды) 
```
</details>

## ПараметрыСоединенияССервисом
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция ПараметрыСоединенияССервисом(Знач ИмяСервиса) Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.ПараметрыСоединенияССервисом(ИмяСервиса) 
```
</details>

## СобытиеЖурналаРегистрацииСервисEDI
<details style="margin: 1em 0; padding: 0.5em; border: 1px solid #ccc; border-radius: 6px;">

<summary style="font-weight: bold; cursor: pointer;">Описание, пример вызова</summary>

```bsl

Функция СобытиеЖурналаРегистрацииСервисEDI() Экспорт
```

Пример вызова
```bsl
Результат = ИнтеграцияССервисомEDIСлужебный.СобытиеЖурналаРегистрацииСервисEDI() 
```
</details>

---

© 2024, **ООО 1С-Софт**  
Все права защищены. Эта программа и сопроводительные материалы предоставляются  
в соответствии с условиями лицензии [Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/legalcode).

---
