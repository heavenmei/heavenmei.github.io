---
title: MySQL 原理
subtitle: 
layout: post
date: 2021-11-05
author: heavenmei
categories:
  - Note
description: 
tags:
  - Java
image:
---
## 视图（View）

### 概念

- 是一种*虚拟存在的表*，同真实表一样，视图也由列和行构成，但视图并不实际存在于数据库中。行和列的数据来自于定义视图的查询中所使用的表，并且还是在使用视图时*动态生成*的。
- 数据库中只存放了*视图的定义*，并没有存放视图中的数据，这些数据都存放在定义视图查询所引用的真实表中。使用视图查询数据时，数据库会从真实表中取出对应的数据。因此，视图中的数据是依赖于真实表中的数据的。一旦真实表中的数据发生改变，显示在视图中的数据也会发生改变。
- 作用类似于*筛选*

### 基本语法

```sql
--创建
CREATE VIEW <视图名> AS <SELECT语句>
WITH CHECK OPTION 的意思是，修改视图时，检查插入的数据是否符合 WHERE 设置的条件。
--修改视图
ALTER VIEW <视图名> AS <SELECT语句>
--删除视图
DROP VIEW <视图名1> [ , <视图名2> …]
```

**修改视图内容**

视图是一个虚拟表，实际的数据来自于基本表，所以通过插入、修改和删除操作更新视图中的数据，实质上是在更新视图所引用的基本表的数据。

> 注意：对视图的修改就是对基本表的修改，因此在修改时，要满足基本表的数据定义。

某些视图是可更新的。也就是说，可以使用 `UPDATE`、`DELETE` 或 `INSERT` 等语句更新基本表的内容。对于可更新的视图，视图中的行和基本表的行之间必须具有一对一的关系。






## 存储过程

### 概念

- 存储过程是一组为了完成特定功能的 SQL 语句集合。使用存储过程的目的是将常用或复杂的工作预先用 SQL 语句写好并用一个指定名称存储起来，这个过程经编译和优化后存储在数据库服务器中，因此称为存储过程。当以后需要数据库提供与已定义好的存储过程的功能相同的服务时，只需调用“**CALL存储过程名字**”即可自动完成。

- 一个存储过程是一个**可编程的函数**，它在数据库中创建并保存，一般由 SQL 语句和一些特殊的控制结构组成。当希望在不同的应用程序或平台上执行相同的特定功能时，存储过程尤为合适。

### 基本语法

**创建**

```sql
CREATE PROCEDURE <过程名> ( [过程参数[,…] ] ) <过程体>

[过程参数[,…] ] 格式
[ IN | OUT | INOUT ] <参数名> <类型>
MySQL 存储过程支持三种类型的参数，即输入参数、输出参数和输入/输出参数，分别用 IN、OUT 和 INOUT 三个关键字标识

--通常使用 DELIMITER 命令将结束命令修改为其他字符
DELIMITER $$ 	--$$ 是用户定义的结束符，通常这个符号可以是一些特殊的符号，如两个“?”或两个“￥”等。


DELIMITER //
CREATE PROCEDURE GetScoreByStu
(IN name VARCHAR(30))
BEGIN
SELECT student_score FROM tb_students_score
WHERE student_name=name;
END //

```

**查看**

```sql
SHOW PROCEDURE STATUS LIKE 存储过程名;
SHOW CREATE PROCEDURE 存储过程名; 	--查看存储过程定义
mysql> SHOW PROCEDURE STATUS LIKE 'showstuscore' \G
```



## 触发器

### 概念

- 触发器和存储过程一样，都是嵌入到 MySQL 中的一段*程序*，是 MySQL 中管理数据的有力工具。不同的是执行存储过程要使用 CALL 语句来调用，而触发器的执行不需要使用 CALL 语句来调用，也*不需要手工启动*，而是通过对数据表的相关操作来触发、激活从而实现执行。比如当对 student 表进行操作（INSERT，DELETE 或 UPDATE）时就会激活它执行。
- 那么为什么要使用触发器呢？比如，在实际开发项目时，我们经常会遇到以下情况：
  - 在学生表中添加一条关于学生的记录时，学生的总数就必须同时改变。
  - 增加一条学生记录时，需要检查年龄是否符合范围要求。
  - 删除一条学生信息时，需要删除其成绩表上的对应记录。
  - 删除一条数据时，需要在数据库存档表中保留一个备份副本。

### 基本语法

**创建**

```sql
CREATE TRIGGER <触发器名> < BEFORE | AFTER >
<INSERT | UPDATE | DELETE >
ON <表名> FOR EACH Row<触发器主体>

触发器主体
-- 触发器动作主体，包含触发器激活时将要执行的 MySQL 语句。如果要执行多个语句，可使用 BEGIN…END 复合语句结构。

FOR EACH ROW
-- 一般是指行级触发，对于受触发事件影响的每一行都要激活触发器的动作。例如，使用 INSERT 语句向某个表中插入多行数据时，触发器会对每一行数据的插入都执行相应的触发器动作。
```




## 事务(Transaction)

**要么都成功，要么都失败**

- 事务就是将一组SQL语句放在<u>同一批次</u>内去执行
- 如果一个SQL语句出错,则该批次内的所有SQL都将被取消执行
- MySQL事务处理只支持InnoDB和BDB数据表类型

***

SQL执行 A给 B 转账     A 1000  -->200  B 200

SQL执行 B 收到 A的钱  A 800   --> B 400

***

####  [事务的ACID原则](https://blog.csdn.net/dengjili/article/details/82468576)  

**原子性(Atomic)**

- 原子性是指事务是一个不可分割的工作单位，事务中的操作<u>要么都发生，要么都不发生</u>。

**一致性(Consist)**

- 事务前后数据的完整性必须保持一致。

**隔离性(Isolated)**

- 事务的隔离性是多个用户并发访问数据库时，数据库为每一个用户开启的事务，不能被其他事务的操作数据所干扰，多个并发事务之间要相互隔离。

**持久性(Durable)**

- 持久性是指一个事务<u>一旦被提交不可逆</u>，它对数据库中数据的改变就是永久性的，接下来即使数据库发生故障也不应该对其有任何影响
#### 隔离所导致的一些问题

**脏读**：指一个事务读取了另外一个事务未提交的数据。

**不可重复读**：在一个事务内读取表中的某一行数据，多次读取结果不同。（这个不一定是错误，只是某些场合不对）

**虚读(幻读)**： 是指在一个事务内读取到了别的事务插入的数据，导致前后读取数量总量不一致。（一般是行影响）


####  基本语法

```sql
-- 使用set语句来改变自动提交模式
SET autocommit = 0;   /*关闭*/
SET autocommit = 1;   /*开启*/

-- 注意:
--- 1.MySQL中默认是自动提交
--- 2.使用事务时应先关闭自动提交

-- 开始一个事务,标记事务的起始点
START TRANSACTION  

-- 提交一个事务给数据库 持久化（成功）
COMMIT

-- 将事务回滚,数据回到本次事务的初始状态（失败）
ROLLBACK

-- 还原MySQL数据库的自动提交
SET autocommit =1;

-- 保存点 了解
SAVEPOINT 保存点名称 -- 设置一个事务保存点
ROLLBACK TO SAVEPOINT 保存点名称 -- 回滚到保存点
RELEASE SAVEPOINT 保存点名称 -- 删除保存点
```

 测试

```sql
/*
课堂测试题目

A在线买一款价格为500元商品,网上银行转账.
A的银行卡余额为2000,然后给商家B支付500.
商家B一开始的银行卡余额为10000

创建数据库shop和创建表account并插入2条数据
*/

CREATE DATABASE `shop`CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `shop`;

CREATE TABLE `account` (
`id` INT(11) NOT NULL AUTO_INCREMENT,
`name` VARCHAR(32) NOT NULL,
`cash` DECIMAL(9,2) NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8

INSERT INTO account (`name`,`cash`)
VALUES('A',2000.00),('B',10000.00)

-- 转账实现
SET autocommit = 0; -- 关闭自动提交
START TRANSACTION;  -- 开始一个事务,标记事务的起始点
UPDATE account SET cash=cash-500 WHERE `name`='A';
UPDATE account SET cash=cash+500 WHERE `name`='B';
COMMIT; -- 提交事务
# rollback;
SET autocommit = 1; -- 恢复自动提交
```



## 规范数据库设计

为什么需要数据规范化？

- 信息重复
- 更新异常
- 插入异常
- 删除异常

#### 范式

**第一范式（1NF）**：原子性，保证每一列（所有属性）不可再分

**第二范式（2NF）**：满足1NF，每一个非主属性完全函数依赖于某个候选键（在1NF基础上消除非主属性对主码的部分函数依赖）
- **第二范式需要确保数据库表中的每一列都和主键相关，而不能只与主键的某一部分相关（主要针对联合主键而言）。**
- 每张表只描述一件事情

**第三范式（3NF）**：满足2NF，每一个非主属性不传递函数依赖于候选键（在2NF基础上消除传递依赖）
- **第三范式需要确保数据表中的每一列数据都和主键直接相关，而不能间接相关。**

**BC范式（BCNF）**：满足3NF，每个属性都不传递于候选键


