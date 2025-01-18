---
title: MySQL
subtitle: 
layout: post
date: 2021-11-04
author: heavenmei
categories:
  - Note
description: 
tags:
  - Java
image:
---


# 数据库概述

> mysql-connector-java-5.1.47.jar

### 结构化查询语句分类

| 名称                | 命令                    |
| ------------------- | ----------------------- |
| DDL（数据定义语言） | CREATE、DROP、ALTER     |
| DML（数据操作语言） | INSERT、UPDATE、DELETE  |
| DQL（数据查询语言） | SELECT                  |
| DCL（数据控制语言） | GRANT、commit、rollback |



# DDL语言-数据定义

### 库的管理

- 创建数据库：`create database [if not exists] 数据库名`
- 删除数据库：`drop database [if exixsts] 数据库名`
- 查看数据库：`show databases`
- 使用数据库：`use 数据库名`



### 表的管理

- **创建**

```sql
create table [if not exists] `表名`(
  	'字段名1' 列类型 [属性][索引][注释],
   	'字段名2' 列类型 [属性][索引][注释],
  	...
  	'字段名n' 列类型 [属性][索引][注释]
)[表类型][表字符集][注释];

-- 说明 :反引号用于区别MySQL保留字与普通字符而引入的 (键盘esc下面的键).
```

- **修改**

```sql
1、添加列
ALTER TABLE 表名 ADD COLUMN 列名 类型 【FIRST|AFTER 字段名】;

2、修改列的类型或约束
ALTER TABLE 表名 MODIFY COLUMN 列名 新类型 【新约束】;

3、修改列名
ALTER TABLE 表名 CHANGE COLUMN 旧列名 新列名 类型;

4、删除列
ALTER TABLE 表名 DROP COLUMN 列名;

5、修改表名
ALTER TABLE 表名 RENAME 【TO】 新表名;

```

- **删除**

```sql
方式一：DROP TABLE 【IF EXISTS】 表名;

方式二：TRUNCATE TABLE 【IF EXISTS】 表名;
```

- **复制**

```sql
1、复制表的结构
CREATE TABLE 表名 LIKE 旧表;

2、复制表的某些字段
CREATE TABLE 表名 
SELECT 字段1,字段2,... FROM 旧表 WHERE 0;

3、复制表的结构+数据
CREATE TABLE 表名 
SELECT 查询列表 FROM 旧表 【WHERE 筛选条件】;

4、复制表的某些字段+数据
CREATE TABLE 表名 
SELECT 字段1,字段2,... FROM 旧表 【WHERE 筛选条件】;

```
- **其他**

```sql
1. 可用反引号（`）为标识符（库名、表名、字段名、索引、别名）包裹，以避免与关键字重名！中文也可以作为标识符！

2. 每个库目录存在一个保存当前数据库的选项文件db.opt。

3. 注释：
  单行注释 # 注释内容
  多行注释 /* 注释内容 */
  单行注释 -- 注释内容       (标准SQL注释风格，要求双破折号后加一空格符（空格、TAB、换行等）)
   
4. 模式通配符：
  _   任意单个字符
  %   任意多个字符，甚至包括零字符
  单引号需要进行转义 \'
   
5. CMD命令行内的语句结束符可以为 ";", "\G", "\g"，仅影响显示结果。其他地方还是用分号结束。delimiter 可修改当前对话的语句结束符。

6. SQL对大小写不敏感 （关键字）

7. 清除已有语句：\c
```




### 数据类型

<font color='red'>**UnSigned**</font>

- 无符号的
- 声明该数据列不允许负数 .

<font color='red'>**ZEROFILL**</font>

- 0填充的
- 不足位数的用0来填充 , 如int(3),5则为005

<font color='red'>**Auto_InCrement**</font>

- 自动增长的 , 每添加一条数据 , 自动在上一个记录数上加 1(默认)

- 通常用于设置**主键** , 且为整数类型

- 可定义起始值和步长

- - 当前表设置步长(AUTO_INCREMENT=100) : 只影响当前表
  - SET @@auto_increment_increment=5 ; 影响所有使用自增的表(全局)

<font color='red'>**NULL 和 NOT NULL**</font>

- 默认为NULL , 即没有插入该列的数值
- 如果设置为NOT NULL , 则该列必须有值

<font color='red'>**DEFAULT**</font>

- 默认的
- 用于设置默认值
- 例如,性别字段,默认为"男" , 否则为 "女" ; 若无指定该列的值 , 则默认值为"男"的值

```sql
-- 目标 : 创建一个school数据库
-- 创建学生表(列,字段)
-- 学号int 登录密码varchar(20) 姓名,性别varchar(2),出生日期(datatime),家庭住址,email
-- 创建表之前 , 一定要先选择数据库

CREATE TABLE IF NOT EXISTS `student` (
`id` int(4) NOT NULL AUTO_INCREMENT COMMENT '学号',
`name` varchar(30) NOT NULL DEFAULT '匿名' COMMENT '姓名',
`pwd` varchar(20) NOT NULL DEFAULT '123456' COMMENT '密码',
`sex` varchar(2) NOT NULL DEFAULT '男' COMMENT '性别',
`birthday` datetime DEFAULT NULL COMMENT '生日',
`address` varchar(100) DEFAULT NULL COMMENT '地址',
`email` varchar(50) DEFAULT NULL COMMENT '邮箱',
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

-- 查看数据库的定义
SHOW CREATE DATABASE school;
-- 查看数据表的定义
SHOW CREATE TABLE student;
-- 显示表结构
DESC student;  -- 设置严格检查模式(不能容错了)SET sql_mode='STRICT_TRANS_TABLES';
```









# DML语言-操作数据

### 插入语句

> INSERT命令

**语法**

```sql
-- 方式一：
INSERT INTO 表名(字段名,...) VALUES(值,...);

-- 方式二：
INSERT INTO 表名 SET 字段名=值,字段名=值,...;

```

**特点** 

- 字段或值之间用英文逗号隔开 .
- ' 字段1,字段2...' 该部分可省略 , 但添加的值务必与表结构,数据列,顺序相对应,且数量一致 .
- 可同时插入多条数据 , values 后用<u>英文逗号</u>隔开 .

**Eg.**

```sql
-- 使用语句如何增加语句
INSERT INTO grade(gradename) VALUES ('大一');

-- 主键自增,那能否省略呢?
INSERT INTO grade VALUES ('大二'); 	

-- 一次插入多条数据
INSERT INTO grade(gradename) VALUES ('大三'),('大四');

INSERT INTO beauty SET 
    id = 19,name = '张倩倩',
    sex = '女',
    borndate = '1997-12-05',
    phone = '15633029014',
    photo = NULL,
    boyfriend_id = 3 ;

```

### 修改语句

> update命令

语法：

```sql
UPDATE 表名 SET 列 = 值,... WHERE 查询条件;
```

> where条件子句

可以简单的理解为 : 有条件地从表中筛选数据

[![26JUEj.md.jpg](https://z3.ax1x.com/2021/06/09/26JUEj.md.jpg)](https://imgtu.com/i/26JUEj)



**Eg.**

```sql
-- 修改年级信息
UPDATE grade SET gradename = '高中' WHERE gradeid = 1;
```



### 删除数据

> DELETE命令

**语法**

```sql
DELETE FROM 表名 [WHERE condition];		--condition为筛选条件 , 如不指定则删除该表的所有列数据
```

**Eg.**

```sql
-- 删除最后一个数据
DELETE FROM grade WHERE gradeid = 5
```



> TRUNCATE命令

作用：用于完全清空表数据 , 但表结构 , 索引 , 约束等不变 ;

语法：

```sql
TRUNCATE [TABLE] table_name;

-- 清空年级表
TRUNCATE grade
```

**注意：区别于DELETE命令**

- 相同 : 都能删除数据 , 不删除表结构 , 但TRUNCATE速度更快

- 不同 :

- - 使用TRUNCATE TABLE 重新设置AUTO_INCREMENT计数器
  - 使用TRUNCATE TABLE不会对事务有影响 （事务后面会说）



**Eg.**

```sql
-- 创建一个测试表
CREATE TABLE `test` (
`id` INT(4) NOT NULL AUTO_INCREMENT,
`coll` VARCHAR(20) NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8

-- 插入几个测试数据
INSERT INTO test(coll) VALUES('row1'),('row2'),('row3');

-- 删除表数据(不带where条件的delete)
DELETE FROM test;
-- 结论:如不指定Where则删除该表的所有列数据,自增当前值依然从原来基础上进行,会记录日志.

-- 删除表数据(truncate)
TRUNCATE TABLE test;
-- 结论:truncate删除数据,自增当前值会恢复到初始值重新开始;不会记录日志.

-- 同样使用DELETE清空不同引擎的数据库表数据.重启数据库服务后
-- InnoDB : 自增列从初始值重新开始 (因为是存储在内存中,断电即失)
-- MyISAM : 自增列依然从上一个自增数据基础上开始 (存在文件中,不会丢失)
```



# DQL语言-查询数据

### 基础查询

**语法**

```sql
SELECT 查询列表 FROM 表名

SELECT 字段名,字段名 FROM 表名;

SELECT 常量值;

SELECT 函数名(实参列表);

SELECT 字段名 AS "别名" FROM 表名;

SELECT DISTINCT 字段名 FROM 表名;	-- 去重复

```

```sql
-- 查询所有学生信息
SELECT * FROM student;
-- 查询指定列(学号 , 姓名)
SELECT studentno,studentname FROM student;
```

> AS 子句作为别名

作用：

- 可给数据列取一个新别名
- 可给表取一个新别名
- 可把经计算或总结的结果用另一个新名称来代替

```sql
-- 这里是为列取别名(当然as关键词可以省略)
SELECT studentno AS 学号,studentname AS 姓名 FROM student;

-- 使用as也可以为表取别名
SELECT studentno AS 学号,studentname AS 姓名 FROM student AS s;

-- 使用as,为查询结果取一个新名字
-- CONCAT()函数拼接字符串
SELECT CONCAT('姓名:',studentname) AS 新姓名 FROM student;
```



> DISTINCT关键字的使用

作用 : 去掉SELECT查询返回的记录结果中重复的记录 ( 返回所有列的值都相同 ) , 只返回一条

```sql
-- # 查看哪些同学参加了考试(学号) 去除重复项
SELECT * FROM result; -- 查看考试成绩
SELECT studentno FROM result; -- 查看哪些同学参加了考试
SELECT DISTINCT studentno FROM result; -- 了解:DISTINCT 去除重复项 , (默认是ALL)
```



> 使用表达式的列

数据库中的表达式 : 一般由文本值 , 列值 , NULL , 函数和操作符等组成

应用场景 :

- SELECT语句返回结果列中使用

- SELECT语句中的ORDER BY , HAVING等子句中使用

- DML语句中的 where 条件语句中使用表达式

  ```sql
  -- selcet查询中可以使用表达式
  SELECT @@auto_increment_increment; -- 查询自增步长
  SELECT VERSION(); -- 查询版本号
  SELECT 100*3-1 AS 计算结果; -- 表达式
  
  -- 学员考试成绩集体提分一分查看
  SELECT studentno,StudentResult+1 AS '提分后' FROM result;
  ```

- 避免SQL返回结果中包含 ' . ' , ' * ' 和括号等干扰开发语言程序.



### 条件查询

**语法**

```sql
SELECT 查询列表 FROM 表名 WHERE 筛选条件;
```

> 逻辑操作符

[![26Q7r9.md.png](https://z3.ax1x.com/2021/06/09/26Q7r9.md.png)](https://imgtu.com/i/26Q7r9)



```sql
-- 满足条件的查询(where)
SELECT Studentno,StudentResult FROM result;

-- 查询考试成绩在95-100之间的
SELECT Studentno,StudentResult
FROM result
WHERE StudentResult>=95 AND StudentResult<=100;

-- AND也可以写成 &&
SELECT Studentno,StudentResult
FROM result
WHERE StudentResult>=95 && StudentResult<=100;

-- 模糊查询(对应的词:精确查询)
SELECT Studentno,StudentResult
FROM result
WHERE StudentResult BETWEEN 95 AND 100;

-- 除了1000号同学,要其他同学的成绩
SELECT studentno,studentresult
FROM result
WHERE studentno!=1000;

-- 使用NOT
SELECT studentno,studentresult
FROM result
WHERE NOT studentno=1000;
```

> 模糊查询 ：比较操作符

[![26Jd5n.md.jpg](https://z3.ax1x.com/2021/06/09/26Jd5n.md.jpg)](https://imgtu.com/i/26Jd5n)

注意：

- 数值数据类型的记录之间才能进行算术运算 ;
- 相同数据类型的数据之间才能进行比较 ;

```sql
-- =============================================
-- LIKE
-- =============================================
-- 查询姓刘的同学的学号及姓名
-- like结合使用的通配符 : % (代表0到任意个字符) _ (一个字符)
SELECT studentno,studentname FROM student
WHERE studentname LIKE '刘%';

-- 查询姓刘的同学,后面只有一个字的
SELECT studentno,studentname FROM student
WHERE studentname LIKE '刘_';

-- 查询姓刘的同学,后面只有两个字的
SELECT studentno,studentname FROM student
WHERE studentname LIKE '刘__';

-- 查询姓名中含有 嘉 字的
SELECT studentno,studentname FROM student
WHERE studentname LIKE '%嘉%';

-- 查询姓名中含有特殊字符的需要使用转义符号 '\'
-- 自定义转义符关键字: ESCAPE ':'

-- =============================================
-- IN
-- =============================================
-- 查询学号为1000,1001,1002的学生姓名
SELECT studentno,studentname FROM student
WHERE studentno IN (1000,1001,1002);

-- 查询地址在北京,南京,河南洛阳的学生
SELECT studentno,studentname,address FROM student
WHERE address IN ('北京','南京','河南洛阳');

-- =============================================
-- NULL 空
-- =============================================
-- 查询出生日期没有填写的同学
-- 不能直接写=NULL , 这是代表错误的 , 用 is null
SELECT studentname FROM student
WHERE BornDate IS NULL;

-- 查询出生日期填写的同学
SELECT studentname FROM student
WHERE BornDate IS NOT NULL;

-- 查询没有写家庭住址的同学(空字符串不等于null)
SELECT studentname FROM student
WHERE Address='' OR Address IS NULL;
```

### 排序查询

**语法**

```sql
SELECT 查询列表 
FROM 表 
[WHERE 筛选条件]
ORDER BY 排序列表 [asc | desc] ;  --asc代表升序(默认)，desc代表降序
```

**Eg.**

```sql
-- 查询 数据库结构-1 的所有考试结果(学号 学生姓名 科目名称 成绩)
-- 按成绩降序排序
SELECT s.studentno,studentname,subjectname,StudentResult
FROM student s
WHERE subjectname='数据库结构-1'
ORDER BY StudentResult DESC
```

### 分组查询

**语法**

```sql
SELECT 
  查询列表 
FROM
  表 
【where 筛选条件】 
GROUP BY 分组的字段 
【having 分组后的筛选】
【order BY 排序的字段】 ;
```

**特点**

1、和分组函数一同查询的字段必须是group by后出现的字段

2、筛选分为两类：分组前筛选和分组后筛选
            	针对的表				 语句位置			   连接的关键字
	分组前筛选	 分组前的原始表			group by前			where
	分组后筛选	 分组后的结果集			group by后			having
	
3、分组可以按单个字段也可以按多个字段

4、分组可以搭配着排序使用



**Eg.**

```sql
-- 查询有奖金的每个领导手下员工的平均工资
SELECT 
  AVG(salary),
  manager_id 
FROM
  employees 
WHERE commission_pct IS NOT NULL 
GROUP BY manager_id ;

-- 查询哪个部门的员工个数>5
SELECT 
  COUNT(*),
  department_id 
FROM
  employees 
GROUP BY department_id 
HAVING COUNT(*) > 5 ;

-- 查询每个工种有奖金的员工的最高工资>6000的最高工资和公众编号，按最高工资升序
SELECT 
  MAX(salary) m,
  job_id
FROM
  employees 
WHERE commission_pct IS NOT NULL 
GROUP BY job_id 
HAVING m > 6000 
ORDER BY m ;

```



### 连接查询

**分类**

1. 按年代分类
   - sql92标准：支持内连接
   - sql99标准：支持内连接、部分外连接（左外、右外）、交叉连接
2. 按功能分类
   - 内连接
     - 等值连接
     - 非等值连接
     - 自连接
   - 外连接
     - 左外连接
     - 右外连接
     - 全外连接
   - 交叉连接



> sql99标准 JOIN

**语法**

```sql
SELECT 
  查询列表 
FROM 表1 别名1 
[连接类型] JOIN 表2 别名2 ON 连接条件 
[where 分组前筛选条件
[group BY 分组列表]
[having 分组后筛选条件]
[order BY 排序列表] ;
```

**连接类型**

- 内连接：inner	查询两个表中的结果集中的交集
- 外连接
  - 左外连接：left 【outer】（以左表作为主表,右边表来一一匹配,匹配不上的,返回左表的记录,右表以NULL填充)
  - 右外连接：right 【outer】 (以右表作为主表,左边表来一一匹配,匹配不上的,返回右表的记录,左表以NULL填充)
  - 全外连接：full 【outer】（两边都是主表，但是MySQL不支持全外连接、Oracle支持）
  - 交叉连接：cross（交叉连接其实是用sql99语法实现笛卡尔乘积）
    

**Eg.**

```sql
-- 内连接：等值连接
SELECT s.studentno,studentname,subjectno,StudentResult
FROM student s
INNER JOIN result r ON r.studentno = s.studentno


--内连接：非等值连接
SELECT 
  salary,
  grade_level 
FROM
  employees e 
INNER JOIN job_grades g ON e.`salary` BETWEEN g.`lowest_sal` AND g.`highest_sal` ;	--查询员工的工资和工资级别


--内连接：自连接
SELECT 
  e.last_name,
  m.last_name 
FROM
  employees e 
INNER JOIN employees m ON e.`manager_id` = m.`employee_id` ;	--查询员工名和它对应上级的名称


-- 外连接：右连接
SELECT s.studentno,studentname,subjectno,StudentResult
FROM student s
RIGHT JOIN result r ON r.studentno = s.studentno


-- 外连接：左连接 (查询了所有同学,不考试的也会查出来)
SELECT s.studentno,studentname,subjectno,StudentResult
FROM student s
LEFT JOIN result r
ON r.studentno = s.studentno


--外连接：交叉连接		使用交叉连接进行笛卡尔乘积查询
SELECT 
  b.*,
  bo.* 
FROM beauty b 
CROSS JOIN boys bo ;

```



### 分页查询

**语法**

```sql
SELECT 
  查询列表 
FROM
  表1 别名1
[连接类型] JOIN 表2 别名2 ON 连接条件 
[WHERE 分组前的筛选]
[GROUP BY 分组字段] 
[HAVING 分组后的筛选 ]
[ORDER BY 排序字段 ASC|DESC]
LIMIT [offset, ]size ;

```

**特点**

1. limit语句放在查询语句的最后

2. offset代表起始索引，起始索引从0开始，size代表条目个数

3. 分页语句：`select 查询列表 from 表 limit (page-1)*size,size`;

   推导:
      第一页 : limit 0,5
      第二页 : limit 5,5
      第三页 : limit 10,5
      ......
      第N页 : `limit (pageNo-1)*pageSzie,pageSzie`
      [pageNo:页码,pageSize:单页面显示条数]

**Eg.**

```sql
--查询前五条员工信息
SELECT * FROM  employees LIMIT 0,5;


-- 查询 JAVA第一学年 课程成绩前10名并且分数大于80的学生信息(学号,姓名,课程名,分数)
SELECT s.studentno,studentname,subjectname,StudentResult
FROM student s
INNER JOIN result r
ON r.studentno = s.studentno
INNER JOIN `subject` sub
ON r.subjectno = sub.subjectno
WHERE subjectname='JAVA第一学年'
ORDER BY StudentResult DESC
LIMIT 0,10
```



### 子查询

```sql
/*============== 子查询 ================
什么是子查询?
   在查询语句中的WHERE条件子句中,又嵌套了另一个查询语句
   嵌套查询可由多个子查询组成,求解的方式是由里及外;
   子查询返回的结果一般都是集合,故而建议使用IN关键字;
*/

-- 查询 数据库结构-1 的所有考试结果(学号,科目编号,成绩),并且成绩降序排列
-- 方法一:使用连接查询
SELECT studentno,r.subjectno,StudentResult
FROM result r
INNER JOIN `subject` sub
ON r.`SubjectNo`=sub.`SubjectNo`
WHERE subjectname = '数据库结构-1'
ORDER BY studentresult DESC;

-- 方法二:使用子查询(执行顺序:由里及外)
SELECT studentno,subjectno,StudentResult
FROM result
WHERE subjectno=(
   SELECT subjectno FROM `subject`
   WHERE subjectname = '数据库结构-1'
)
ORDER BY studentresult DESC;

-- 查询课程为 高等数学-2 且分数不小于80分的学生的学号和姓名
-- 方法一:使用连接查询
SELECT s.studentno,studentname
FROM student s
INNER JOIN result r
ON s.`StudentNo` = r.`StudentNo`
INNER JOIN `subject` sub
ON sub.`SubjectNo` = r.`SubjectNo`
WHERE subjectname = '高等数学-2' AND StudentResult>=80

-- 方法二:使用连接查询+子查询
-- 分数不小于80分的学生的学号和姓名
SELECT r.studentno,studentname FROM student s
INNER JOIN result r ON s.`StudentNo`=r.`StudentNo`
WHERE StudentResult>=80

-- 在上面SQL基础上,添加需求:课程为 高等数学-2
SELECT r.studentno,studentname FROM student s
INNER JOIN result r ON s.`StudentNo`=r.`StudentNo`
WHERE StudentResult>=80 AND subjectno=(
   SELECT subjectno FROM `subject`
   WHERE subjectname = '高等数学-2'
)

-- 方法三:使用子查询
-- 分步写简单sql语句,然后将其嵌套起来
SELECT studentno,studentname FROM student WHERE studentno IN(
   SELECT studentno FROM result WHERE StudentResult>=80 AND subjectno=(
       SELECT subjectno FROM `subject` WHERE subjectname = '高等数学-2'
  )
)
```

### 联合查询

**语法**

```sql
查询语句1
union 【all】
查询语句2
union 【all】
...
```

**特点**

1. 要查询的结果来自于多个表且多个表没有直接的连接关系，但查询的信息一致时，可以使用联合查询
2. 要求多条查询语句的查询列数是一致的
3. 要求多条查询语句的查询的每一列的类型和顺序最好一致
4. union关键字默认去重，如果使用union all可以包含重复项

**Eg.**

```sql
#查询中国用户中男性的信息以及外国用户中年男性的用户信息

SELECT id,cname FROM t_ca WHERE csex='男'
UNION ALL
SELECT t_id,tname FROM t_ua WHERE tGender='male';

```



### MySQL函数

```sql
- ================ 内置函数 ================
 -- 数值函数
 abs(x)            -- 绝对值 abs(-10.9) = 10
 format(x, d)    -- 格式化千分位数值 format(1234567.456, 2) = 1,234,567.46
 ceil(x)            -- 向上取整 ceil(10.1) = 11
 floor(x)        -- 向下取整 floor (10.1) = 10
 round(x)        -- 四舍五入去整
 mod(m, n)        -- m%n m mod n 求余 10%3=1
 pi()            -- 获得圆周率
 pow(m, n)        -- m^n
 sqrt(x)            -- 算术平方根
 rand()            -- 随机数
 truncate(x, d)    -- 截取d位小数
 
 -- 时间日期函数
 now(), current_timestamp();     -- 当前日期时间
 current_date();                    -- 当前日期
 current_time();                    -- 当前时间
 date('yyyy-mm-dd hh:ii:ss');    -- 获取日期部分
 time('yyyy-mm-dd hh:ii:ss');    -- 获取时间部分
 date_format('yyyy-mm-dd hh:ii:ss', '%d %y %a %d %m %b %j');    -- 格式化时间
 unix_timestamp();                -- 获得unix时间戳
 from_unixtime();                -- 从时间戳获得时间
 
 -- 字符串函数
 length(string)            -- string长度，字节
 char_length(string)        -- string的字符个数
 substring(str, position [,length])        -- 从str的position开始,取length个字符
 replace(str ,search_str ,replace_str)    -- 在str中用replace_str替换search_str
 instr(string ,substring)    -- 返回substring首次在string中出现的位置
 concat(string [,...])    -- 连接字串
 charset(str)            -- 返回字串字符集
 lcase(string)            -- 转换成小写
 left(string, length)    -- 从string2中的左边起取length个字符
 load_file(file_name)    -- 从文件读取内容
 locate(substring, string [,start_position])    -- 同instr,但可指定开始位置
 lpad(string, length, pad)    -- 重复用pad加在string开头,直到字串长度为length
 ltrim(string)            -- 去除前端空格
 repeat(string, count)    -- 重复count次
 rpad(string, length, pad)    --在str后用pad补充,直到长度为length
 rtrim(string)            -- 去除后端空格
 strcmp(string1 ,string2)    -- 逐字符比较两字串大小
 
 -- 聚合函数
 count()
 sum();
 max();
 min();
 avg();
 group_concat()
 
 -- 其他常用函数
 md5();
 default();
```



> MD5 加密

**一、MD5简介**

MD5即Message-Digest Algorithm 5（信息-摘要算法5），用于确保信息传输完整一致。是计算机广泛使用的杂凑算法之一（又译摘要算法、哈希算法），主流编程语言普遍已有MD5实现。将数据（如汉字）运算为另一固定长度值，是杂凑算法的基础原理，MD5的前身有MD2、MD3和MD4。

**二、实现数据加密**

新建一个表 testmd5

```sql
 CREATE TABLE `testmd5` (
  `id` INT(4) NOT NULL,
  `name` VARCHAR(20) NOT NULL,
  `pwd` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`)
 ) ENGINE=INNODB DEFAULT CHARSET=utf8
```

插入一些数据

```sql
 INSERT INTO testmd5 VALUES(1,'kuangshen','123456'),(2,'qinjiang','456789')
```

如果我们要对pwd这一列数据进行加密，语法是：

```sql
 update testmd5 set pwd = md5(pwd);
```

如果单独对某个用户(如kuangshen)的密码加密：

```sql
 INSERT INTO testmd5 VALUES(3,'kuangshen2','123456')
 update testmd5 set pwd = md5(pwd) where name = 'kuangshen2';
```

插入新的数据自动加密

```sql
 INSERT INTO testmd5 VALUES(4,'kuangshen3',md5('123456'));
```

查询登录用户信息（md5对比使用，查看用户输入加密后的密码进行比对）

```sql
 SELECT * FROM testmd5 WHERE `name`='kuangshen' AND pwd=MD5('123456');
```

# 视图（View）

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





# 存储过程和触发器

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



# 事务(Transaction)

**要么都成功，要么都失败**

- 事务就是将一组SQL语句放在<u>同一批次</u>内去执行
- 如果一个SQL语句出错,则该批次内的所有SQL都将被取消执行
- MySQL事务处理只支持InnoDB和BDB数据表类型

***

1. SQL执行 A给B转账     A 1000  -->200  B 200
2. SQL执行 B收到A的钱  A 800   --> B 400

***

> [事务的ACID原则](https://blog.csdn.net/dengjili/article/details/82468576)  (脏读、幻读)

**原子性(Atomic)**

- 原子性是指事务是一个不可分割的工作单位，事务中的操作<u>要么都发生，要么都不发生</u>。

**一致性(Consist)**

- 事务前后数据的完整性必须保持一致。

**隔离性(Isolated)**

- 事务的隔离性是多个用户并发访问数据库时，数据库为每一个用户开启的事务，不能被其他事务的操作数据所干扰，多个并发事务之间要相互隔离。

**持久性(Durable)**

- 持久性是指一个事务<u>一旦被提交不可逆</u>，它对数据库中数据的改变就是永久性的，接下来即使数据库发生故障也不应该对其有任何影响

> 隔离所导致的一些问题

**脏读：**指一个事务读取了另外一个事务未提交的数据。

**不可重复读：**在一个事务内读取表中的某一行数据，多次读取结果不同。（这个不一定是错误，只是某些场合不对）

**虚读(幻读)**是指在一个事务内读取到了别的事务插入的数据，导致前后读取数量总量不一致。（一般是行影响）



> 基本语法

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

> 测试

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



# 规范数据库设计



##### 为什么需要数据规范化？

- 信息重复
- 更新异常
- 插入异常
- 删除异常



### 范式

> 第一范式（1NF）

原子性，保证每一列（所有属性）不可再分

>第二范式（2NF）

满足1NF，每一个非主属性完全函数依赖于某个候选键（在1NF基础上消除非主属性对主码的部分函数依赖）

**第二范式需要确保数据库表中的每一列都和主键相关，而不能只与主键的某一部分相关（主要针对联合主键而言）。**

每张表只描述一件事情

>第三范式（3NF）

满足2NF，每一个非主属性不传递函数依赖于候选键（在2NF基础上消除传递依赖）

**第三范式需要确保数据表中的每一列数据都和主键直接相关，而不能间接相关。**

> BC范式（BCNF）

满足3NF，每个属性都不传递于候选键



# JDBC

### 第一个JDBC小程序

1. 导入mysql包，添加到库
2. 编写代码

```java
import java.sql.*;

public class jdbcFirst {
    public static void main(String[] args) throws ClassNotFoundException, SQLException {
        //1. 加载驱动
        Class.forName("com.mysql.jdbc.Driver");//固定写法 加载驱动

        //2. 用户信息和url
        String url = "jdbc:mysql://127.0.0.1:3306/jdbcstudy?useUnicode=true&characterEncoding=utf8&useSSL=true";
        String username = "root";
        String password = "123456";

        //3. 连接成功，数据库对象 Connection 代表数据库
        Connection connection = DriverManager.getConnection(url,username,password);

        //4. 执行SQL的对象 Statement 执行sql的对象 一般使用PreparedStatement
        Statement statement = connection.createStatement();

        //5. 执行SQL的对象 去执行SQL
        String sql = "SELECT * FROM `user`";

        ResultSet resultSet = statement.executeQuery(sql); //返回的结果集

        while (resultSet.next()){
            System.out.println("id = " + resultSet.getObject("id"));
        }

        //6. 释放连接
        resultSet.close();
        statement.close();
        connection.close();
    }
}

```



### statement对象

jdbc中的statement对象用于想数据库发送SQL语句，想要完成增删改查，只需要通过这个对象向数据库发送增删改查语句即可。

`Statement.executeUpdate`方法用于向数据库发送**增、删、改**的SQL语句，返回一个整数（即有几行数据发生了变换）。

`Statement.executeQuery`方法用于向数据库发生**查询**语句，返回代表查询结果的**ResultSet**对象。

```java
 Statement statement = connection.createStatement();
 String sql = "SELECT * FROM `user`";
 ResultSet resultSet = statement.executeQuery(sql);
 
 String sql2 = "insert into user(...) valuse(...)";
 int num = statement.executeUpdate(sql2);
```



### JdbcUtils 工具类

[![26sern.png](https://z3.ax1x.com/2021/06/09/26sern.png)](https://imgtu.com/i/26sern)



`db.properties`

```properties
driver = com.mysql.jdbc.Driver
url = jdbc:mysql://localhost:3306/jdbcstudy?useUnicode=true&characterEncoding=UTF-8&useSSL=true
username=root
password=123456
```

`JdbcUtils.java`

```java
package utils;

import java.io.IOException;
import java.io.InputStream;
import java.sql.*;
import java.util.Properties;

public class JdbcUtils {
    private static String driver = null;
    private static String url = null;
    private static String username = null;
    private static String password = null;

    static {
        try{
            InputStream in = JdbcUtils.class.getClassLoader().getResourceAsStream("db.properties");
            Properties properties= new Properties();
            properties.load(in);

            driver = properties.getProperty("driver");
            url = properties.getProperty("url");
            username = properties.getProperty("username");
            password = properties.getProperty("password");

            //1.驱动只用加载一次
            Class.forName(driver);

        }catch (IOException | ClassNotFoundException e){
            e.printStackTrace();
        }
    }

    //获取连接
    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(url,username,password);
    }

    //释放资源
    public static void release(Connection conn, Statement st, ResultSet rs) throws SQLException {
        if(rs != null) rs.close();
        if(st != null) st.close();
        if(conn != null) conn.close();
    }
}

```

> Eg.使用

```java
import utils.JdbcUtils;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

public class TestInsert {
    public static void main(String[] args) throws SQLException {
        Connection connection = JdbcUtils.getConnection(); //获取数据库连接

        Statement statement = connection.createStatement();//获取SQL的执行对象

        String sql = "INSERT INTO `user`(id) VALUES(4)";

        int i = statement.executeUpdate(sql);
        if(i > 0) System.out.println("插入成功");

        JdbcUtils.release(connection,statement,null);
    }
}

```



### PreparedStatement对象

预编译，防止SQL注入，并且速度更快

**与Statement使用有区别**

```java
import utils.JdbcUtils;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class TestInsert {
    public static void main(String[] args) throws SQLException {
         //1.获取数据库连接
        Connection connection = JdbcUtils.getConnection();

        //区别
        //2.使用？占位符代替参数
        String sql = "INSERT INTO `user`(id) VALUES(?)";
        //3.预编译SQL
        PreparedStatement st = connection.prepareStatement(sql);

        //4.手动给参数赋值
        st.setObject(1,1234);//（下标，值）

        //5.执行
        int i = st.executeUpdate();
        if(i > 0) System.out.println("插入成功");

        JdbcUtils.release(connection,st,null);
    }
}
```





### 使用IDEA连接数据库

[![26JYDg.png](https://z3.ax1x.com/2021/06/09/26JYDg.png)](https://imgtu.com/i/26JYDg)



连接成功后，选择数据库

[![26JaUs.png](https://z3.ax1x.com/2021/06/09/26JaUs.png)](https://imgtu.com/i/26JaUs)



双击数据库、数据表，更新数据

![image-20210606215225096](https://z3.ax1x.com/2021/06/09/26QqV1.png)



### 事务

**要么都成功，要么都失败**

> ACID原则

- 原子性：要么都完成，要么都不完成
- 一致性：总数不变
- 隔离性：多个进程互不干扰
- 持久性：一旦提交不可逆，持久化到数据库



隔离性的问题：

- 脏读：读了没有提交的事务

- 不可重复读：在同一个事务内，重复读取表中数据，表数据发生了改变

- 幻读（虚读）:在一个事务内，读取到了别人插入的数据，导致前后读出来的结果不一致。

  

> 代码实现

1. 开启事务 `conn.setAutoCommit(false);`
2. 一组事务执行完毕，提交事务`conn.commit();`
3. 可以在catch语句钟显示的定义回滚语句，但默认回滚

```java
import utils.JdbcUtils;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class TestTransaction2 {
    public static void main(String[] args) throws SQLException {
        Connection conn = null;
        PreparedStatement st = null;
        try {
            conn = JdbcUtils.getConnection();

            //关闭数据库的自动提交,自动会开启事务
            conn.setAutoCommit(false);//开启事务

            String sql1 = "update account set cash = cash-100 where name ='A'";
            st = conn.prepareStatement(sql1);
            st.executeUpdate();


            int x = 1/0;//报错

            String sql2 = "update account set cash = cash+100 where name ='B'";
            st = conn.prepareStatement(sql2);
            st.executeUpdate();

            //业务完毕，提交事务
            conn.commit();
            System.out.println("操作成功");

        } catch (SQLException e) {
            //不写也会回滚，默认回滚
//            conn.rollback();//如果失败就回滚事务
            e.printStackTrace();
        }finally {
            JdbcUtils.release(conn,st,null);
        }
    }
}

```



### 数据库连接池

数据库连接--执行完毕--释放

连接--释放 十分浪费资源

**池化技术：准备一些预先的资源，过来就连接预先准备好的**

- 最小连接数
- 最大连接数
- 等待超时



编写连接池，实现一个接口`DataSourse`



> 开源数据源实现

DBCP：commons-dbcp-1.4.jar、commons-pool-1.6.jar

C3P0：c3p0-0..5.5.jar、mchange-commons-java-0.2.19.jar

Druid:阿里巴巴



使用了这些数据库池之后，我们在项目开发中就不需要编写连接数据池连接的代码了



> DBCP

`dbcpconfig.properties`

```properties
#连接设置 这里的名字 是DBCP数据源里定义好的
driverClassName=com.mysql.jdbc.Driver
url=jdbc:mysql://localhost:3306/jdbcstudy?useUnicode=true&characterEncoding=utf8&useSSL=true
username=root
password=123456

#!-- 初始化连接 --
initialSize=10

#最大连接数量
maxActive=50

#!-- 最大空闲连接 --
maxIdle=20

#!-- 最小空闲连接 --
minIdle=5

#!-- 超时等待时间以毫秒为单位 6000毫秒/1000等于60秒 --
maxWait=60000
#JDBC驱动建立连接时附带的连接属性属性的格式必须为这样：【属性名=property;】
#注意：user 与 password 两个属性会被明确地传递，因此这里不需要包含他们。
connectionProperties=useUnicode=true;characterEncoding=UTF8

#指定由连接池所创建的连接的自动提交（auto-commit）状态。
defaultAutoCommit=true

#driver default 指定由连接池所创建的连接的只读（read-only）状态。
#如果没有设置该值，则“setReadOnly”方法将不被调用。（某些驱动并不支持只读模式，如：Informix）
defaultReadOnly=

#driver default 指定由连接池所创建的连接的事务级别（TransactionIsolation）。
#可用值为下列之一：（详情可见javadoc。）NONE,READ_UNCOMMITTED, READ_COMMITTED, REPEATABLE_READ, SERIALIZABLE
defaultTransactionIsolation=READ_UNCOMMITTED
```

`JdbcUtils_DBCP.java`

```java
package utils;

import org.apache.commons.dbcp.BasicDataSourceFactory;

import javax.sql.DataSource;
import java.io.InputStream;
import java.sql.*;
import java.util.Properties;

public class JdbcUtils_DBCP {
    private  static DataSource dataSource = null;
    static {
        try{
            InputStream in = JdbcUtils_DBCP.class.getClassLoader().getResourceAsStream("dbcpconfig.properties");
            Properties properties= new Properties();
            properties.load(in);
		
            //创建数据源  工厂模式--> 创建
            dataSource = BasicDataSourceFactory.createDataSource(properties);


        }catch (Exception e) {
            e.printStackTrace();
        }
    }
    //获取连接
    public static Connection getConnection() throws SQLException {
        return dataSource.getConnection(); //从数据源中获取连接
    }

    //释放资源
    public static void release(Connection conn, Statement st, ResultSet rs) throws SQLException {
        if(rs != null) rs.close();
        if(st != null) st.close();
        if(conn != null) conn.close();
    }
}

```



> c3p0

`c3p0config.xml`

````xml
<?xml version="1.0" encoding="UTF-8"?>

<c3p0-config>
<!--
c3p0的缺省（默认）配置
如果在代码中ComboPooledDataSource ds=new ComboPooledDataSource();这样写就表示使用的是c3p0的缺省（默认）
-->

    <default-config>
    <property name="driverClass">com.mysql.cj.jdbc.Driver</property>
    <property name="jdbcUrl">jdbc:mysql://localhost:3306/jdbcstudy?useUnicode=true&amp;characterEncoding=utf8&amp;uesSSL=true&amp;serverTimezone=UTC</property>
    <property name="user">root</property>
    <property name="password">123456</property>

    <property name="acquireIncrement">5</property>
    <property name="initialPoolSize">10</property>
    <property name="minPoolSize">5</property>
    <property name="maxPoolSize">20</property>
    </default-config>
</c3p0-config>
````

`JdbcUtils_c3p0.java`

```java
package utils;

import com.mchange.v2.c3p0.ComboPooledDataSource;
import org.apache.commons.dbcp.BasicDataSourceFactory;

import javax.sql.DataSource;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

public class JdbcUtils_c3p0 {
    private  static DataSource dataSource = null;
    static {
        try{
            //创建数据源  工厂模式--> 创建
            dataSource = new ComboPooledDataSource(); //配置文件写法 

        }catch (Exception e) {
            e.printStackTrace();
        }
    }
    //获取连接
    public static Connection getConnection() throws SQLException {
        return dataSource.getConnection(); //从数据源中获取连接
    }

    //释放资源
    public static void release(Connection conn, Statement st, ResultSet rs) throws SQLException {
        if(rs != null) rs.close();
        if(st != null) st.close();
        if(conn != null) conn.close();
    }
}

```

