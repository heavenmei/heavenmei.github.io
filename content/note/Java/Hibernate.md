---
title: Hibernate
subtitle: 
layout: post
date: 2021-09-08
author: heavenmei
categories:
  - Note
description: 
tags:
  - Java
image:
---

## 简介

- Hibernate是一个面向Java环境的对象/关系数据库映射工具，即ORM（Object-Relation Mapping 对象-关系映射）工具
- 用于把对象模型表示的对象映射到基于SQL的关系模型数据结构中去，采用**完全面向对象的方式来操作数据库**
- 能简化数据持久层编程，封装了JDBC API和所有数据访问细节，**把对对象的操作自动转换为对数据库的SQL语句操作**，从而大幅减少了开发人员编写SQL和JDBC代码的时间。
- 框架主要包括**持久化对象(Persistent Objects)、Hibernate配置文件(一般被命名为*.cfg.xml)、Hibernate映射文件(一般被命名为*.hbm.xml)三部分**
- 由于Hibernate底层是**基于JDBC的**，因此也需要导入相关的JDBC驱动（如MySQL驱动）

## Hello,Hibernate

### 1、导包

```xml
<dependencies>
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>5.1.6</version>
    </dependency>
    <dependency>
        <groupId>org.apache.struts</groupId>
        <artifactId>struts2-core</artifactId>
        <version>2.3.15</version>
    </dependency>
    <dependency>
        <groupId>org.hibernate</groupId>
        <artifactId>hibernate-core</artifactId>
        <version>4.3.5.Final</version>
    </dependency>
    <dependency>
        <groupId>commons-logging</groupId>
        <artifactId>commons-logging</artifactId>
        <version>1.2</version>
    </dependency>

    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <version>1.18.20</version>
    </dependency>
</dependencies>


<build>
    <resources>
        <resource>
            <directory>src/main/java</directory>
            <includes>
                <include>**/*.xml</include>
            </includes>
            <filtering>true</filtering>
        </resource>
    </resources>
</build>
```

### 2、配置文件

`hibernate.cfg.xml`

```xml
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE hibernate-configuration PUBLIC
        "-//Hibernate/Hibernate Configuration DTD 3.0//EN" 
        "http://hibernate.sourceforge.net/hibernate-configuration-3.0.dtd">
<hibernate-configuration>
    <session-factory name="HibernateSessionFactory">
        <property name="hibernate.connection.driver_class"> com.mysql.jdbc.Driver</property>
        <property name="hibernate.connection.url"> jdbc:mysql://localhost:3306/hibernatedb</property>
        <property name="hibernate.connection.username"> root</property>
        <property name="hibernate.connection.password">123456</property>
        <property name="hibernate.dialect"> org.hibernate.dialect.MySQLDialect</property>
        <mapping resource="cn/edu/zjut/po/Customer.hbm.xml" />
    </session-factory>
</hibernate-configuration>
```

### 3、编写PO

```java
package cn.edu.zjut.po;

import lombok.Data;
import java.util.Date;

@Data
public class Customer implements java.io.Serializable {
    private int customerId;
    private String account;
    private String password;
    private String name;
    private Boolean sex;
    private Date birthday;
    private String phone;
    private String email;
    private String address;
    private String zipcode;
    private String fax;
}
```

### 4、映射文件

`Customer.hbm.xml`，配置文件中注册映射文件

```xml
<?xml version="1.0"?>
<!DOCTYPE hibernate-mapping PUBLIC "-//Hibernate/Hibernate Mapping DTD 3.0//EN"
        "http://hibernate.sourceforge.net/hibernate-mapping-3.0.dtd">
<hibernate-mapping>
    <class name="cn.edu.zjut.po.Customer" table="customer" catalog="hibernatedb">
        <id name="customerId" type="int">
            <column name="customerID" />
            <generator class="assigned" />
        </id>
        <property name="account" type="string">
            <column name="account" length="20" unique="true" />
        </property>
        <property name="password" type="string">
            <column name="password" length="20" />
        </property>
        <property name="name" type="string">
            <column name="name" length="20" />
        </property>
        <property name="sex" type="java.lang.Boolean">
            <column name="sex" />
        </property>
        <property name="birthday" type="date">
            <column name="birthday" length="10" />
        </property>
        <property name="phone" type="string">
            <column name="phone" length="20" />
        </property>
        <property name="email" type="string">
            <column name="email" length="100" />
        </property>
        <property name="address" type="string">
            <column name="address" length="200" />
        </property>
        <property name="zipcode" type="string">
            <column name="zipcode" length="10" />
        </property>
        <property name="fax" type="string">
            <column name="fax" length="20" />
        </property>
    </class>
</hibernate-mapping>
```

### 5、dao

`CustomerDAO`

```java
package cn.edu.zjut.dao; 

import java.util.List; 
import org.hibernate.Query;
import org.hibernate.SessionFactory; 
import org.hibernate.Session;
import org.hibernate.cfg.Configuration; 
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class CustomerDAO {
    private Log log = LogFactory.getLog(CustomerDAO.class);

    public List findByHql(String hql) { 
        log.debug("finding LoginUser instance by hql");
        SessionFactory sf= new Configuration().configure().buildSessionFactory();
        Session session=sf.openSession(); try {
            String queryString = hql;
            Query queryObject = session.createQuery(queryString); 
            return queryObject.list();
        } catch (RuntimeException re) { 
            log.error("find by hql failed", re); 
            throw re;
        } finally{
            session.close();
        }
    }
}
```

### 6、service

```java
package cn.edu.zjut.service;

import cn.edu.zjut.dao.CustomerDAO;
import cn.edu.zjut.po.Customer;

import java.util.List;

public class UserService {
    public boolean login(Customer loginUser) {
        String account = loginUser.getAccount();
        String password = loginUser.getPassword();
        String hql = "from Customer as user where account='"
                +account+ "' and password='" + password +"'";
        CustomerDAO dao = new CustomerDAO();
        List list = dao.findByHql(hql);
        if(list.isEmpty())
            return false;
        else
            return true;
    }
}
```

### 7、action

```java
package cn.edu.zjut.action;

import cn.edu.zjut.po.Customer;
import cn.edu.zjut.service.UserService;

public class UserAction {
    private Customer loginUser;

    public Customer getLoginUser() { 
        return loginUser;
    }
    public void setLoginUser(Customer loginUser) { 
        this.loginUser = loginUser;
    }

    public String login() {
        UserService userServ = new UserService(); 
        if (userServ.login(loginUser)) {
            return "success";
        }
        return "fail";
    }
}
```

### 8、`struts.xml `

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE struts PUBLIC
        "-//Apache Software Foundation//DTD Struts Configuration 2.3//EN" 
        "http://struts.apache.org/dtds/struts-2.3.dtd">
<struts>
    <package name="strutsBean" extends="struts-default" namespace="/">
        <action name="login" class="cn.edu.zjut.action.UserAction">
            <result name="success">/loginSuccess.jsp</result>
            <result name="fail">/login.jsp</result>
        </action>
    </package>
</struts>
```

### 9、`web.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
    <!-- 定义 Struts2 的核心 Filter -->
    <filter>
        <filter-name>struts2</filter-name>
        <filter-class> org.apache.struts2.dispatcher.ng.filter.StrutsPrepareAndExecuteFilter
        </filter-class>
    </filter>
    <!-- 让 Struts2 的核心 Filter 拦截所有请求 -->
    <filter-mapping>
        <filter-name>struts2</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>
</web-app>
```

### 10、部署运行（省略视图层）



## 映射文件

- 持久化对象映射数据库中的记录，其映射关系依赖Hibernate框架的映射文件配置，映射文件是XML文件，往往以*.hbm.xml形式命名，其中*是持久化对象的类名
- Hibernate映射文件中，元素`<u>\<id></u>`表示持久化类中的主键，`\<id>`的子元素`<u>\<generator>`表示主键的生成策略`</u>`，其取值可以是“assigned”(用户赋值)、“increment”(自动递增)等等

## class

```xml
<class
        name="ClassName"                              (1)类名
        table="tableName"                             (2)表名
        discriminator-value="discriminator_value"     (3)
        mutable="true|false"                          (4)
        schema="owner"                                (5)
        catalog="catalog"                             (6)
        proxy="ProxyInterface"                        (7)
        dynamic-update="true|false"                   (8)
        dynamic-insert="true|false"                   (9)
        select-before-update="true|false"             (10)
        polymorphism="implicit|explicit"              (11)
        where="arbitrary sql where condition"         (12)
        persister="PersisterClass"                    (13)
        batch-size="N"                                (14)
        optimistic-lock="none|version|dirty|all"      (15)
        lazy="true|false"                             (16)
        entity-name="EntityName"                      (17)
        check="arbitrary sql check condition"         (18)
        rowid="rowid"                                 (19)
        subselect="SQL expression"                    (20)
        abstract="true|false"                         (21)
        node="element-name"
/>
```

### id

```xml
<id
        name="propertyName"                                          (1)属性
        type="typename"                                              (2)Hibernate类型名
        column="column_name"                                         (3)主键列名
        unsaved-value="null|any|none|undefined|id_value"             (4)
        access="field|property|ClassName"                            (5)
        node="element-name|@attribute-name|element/@attribute|.">

        <generator class="generatorClass"/> 主键生成策略 assigned（用户赋值） increment（自动递增）
</id>
```

### generator 

`<generator class="assigned"/> `

- increment 策略：自动递增
	必须保证主键的列是"long"、"integer"或是"short"，必须是一个整数
	系统会自动将主键列最大的值获得之后，加 1，进行赋值
- identity：由数据库根据 identity 生成主键，但是数据库必须支持 identity  (MySql)
- sequence：由数据库根据序列生成主键，但是数据库必须支持 sequence (Oracle)
- native：系统自动选择相应算法生成主键
- uuid.hex 策略：利用 uuid 算法生成主键
	必须保证该列是字符串类型
	系统会自动给定一个随机、唯一的字符串
- hilo：根据 Hibernate 的 hilo 生成主键

### property

```xml
<property
        name="propertyName"                                          (1)属性
        column="column_name"                                         (2)列名
        type="typename"                                              (3)类型
        update="true|false"                                          (4)
        insert="true|false"                                          (4)
        formula="arbitrary SQL expression"                           (5)
        access="field|property|ClassName"                            (6)
        lazy="true|false"                                            (7)
        unique="true|false"                                          (8)
        not-null="true|false"                                        (9)
        optimistic-lock="true|false"                                 (10)
        generated="never|insert|always"                              (11)
        node="element-name|@attribute-name|element/@attribute|."

        index="index_name"
        unique_key="unique_key_id"
        length="L"
        precision="P"
        scale="S"
/>
```



### 复合主键

1. 新建复合类:若表中有多个列组成主键，则为这几个列封装成一个类，作为主键，并增加setter和getter方法
2. 编写PO类，将主键对象作为属性之一
3. 在映射文件中进行配置：将主键类中每个属性和表中的列对应，并指定复合主键的类型
4. 使用复合主键操作数据库

```java
@Data
public class ItemPK implements Serializable {
    private String itemID; 
    private String title;
    
    //省略 setters/getters 方法
}
```

```java
public class Item {
    private ItemPK ipk;
    private String description; 
    private float cost;
    private Blob image;
}
```

```xml
<hibernate-mapping>
    <class name="cn.edu.zjut.po.Item" table="item" >
        <composite-id name="ipk" class="cn.edu.zjut.po.ItemPK">
            <key-property name="itemID" column="ISBN"/>
            <key-property name="title" column="title"/>
        </composite-id>
    </class>
</hibernate-mapping>
```



### 粒度设计

在实际应用中，并不都是一张表与一个实体类映射，往往可能会有一张表跟多个实体类映射的情况，称为粒度设计

**基于设计的粒度设计**

如果表中的某些字段联合起来能表示持久化类中的某一个属性，那么可以进行基于设计的粒度设计：
将表跟多个类映射；类和类之间使用关联关系；只需要一个映射文件，其中使用 <u>component</u> 元素进行映射

```java
@Data
public class ContactInfo {
    private String phone;
    private String email;
    private String address;
    private String zipcode;
    private String fax;
}
```

```java
public class Customer {
    private int customerId;
    private String account;
    private String password;
    //将 ContactInfo 实例作为 Customer 的属性
    private ContactInfo contactInfo;
}
```

修改Hibernate 映射文件Customer.hbm.xml，将 customer 表与两个类（Customer和 ContactInfo）映射

```xml
<hibernate-mapping>
    <class name="cn.edu.zjut.po.Customer" table="customer" catalog="hibernatedb">
       <id name="customerId" type="int"> …… </id>
        <property name="account" type="string">
            <column name="account" length="20" unique="true" />
        </property>
        <component name="contactInfo" class="cn.edu.zjut.po.ContactInfo">
	        <property name="phone" type="string">
                <column name="phone" length="20" /> 
            </property>
            ……
		</component>
    </class>
</hibernate-mapping>
```



**基于性能的粒度设计**

一个表可以映射为多个类，若表中的某些字段不经常使用，而且占有空间较大.
每个类对应一个*.hbm.xml文件，根据实际情况，使用不同的类

```java
//ItemBasic
package cn.edu.zjut.po;
public class ItemBasic {
    private String itemID;          
    private String title;
    private String description;   
    private float cost;
        ……
}
//ItemDetail
package cn.edu.zjut.po;
Import java.sql.Blob
public class ItemDetail extends ItemBasic{
	private Blob image;
        ……
}
```



### 映射文件中的属性

- **cascade**：设置操作中的<u>级联策略</u>，可选值为 all所有操作情况均进行级联、none所有操作情况均不进行级联、save-update执行save和update操作时级联、delete执行删除操作时级联
- **fetch**：设置抓取数据的策略 默认值为select序列选择抓取，可选值为join外连接抓取 ：select方式时先查询返回要查询的主体对象（列表），再根据关联外键id，每一个对象发一个select查询，获取关联的对象，形成n+1次查询；而join方式，主体对象和关联对象用一句外键关联的sql同时查询出来，不会形成多次查询。
- **unique**   (可选): 使用DDL为外键字段生成一个唯一约束。
- **lazy**   (可选 - 默认为  proxy ): 默认情况下，单点关联是经过代理的；lazy="true" 指定此属性应该在实例变量第一次被访问时应该延迟抓取（fetche lazily）；lazy="false" 指定此关联总是被预先抓取。
- **inverse**：是否放弃维护关联关系，在one-to-many和many-to-many的集合定义中使用，inverse="true"表示该对象不维护关联关系。 one-to-many维护关联关系就是更新外键。many-to-many维护关联关系就是在中间表增减记录。



### 关联关系映射

单向关联：一对一

```xml
<many-to-one class="po.PersonAddress"  name="address" unique="true">
    <column name="AddressID" not-null="true"/>
</many-to-one> 
```

单向关联：多对一

```xml
<many-to-one name="country" column="CountryID" class="po.Country" not-null="true" cascade="all"/>
```

单向关联：一对多

```xml
<set name="phones" cascade="save-update" lazy="false">   
    <key column="personid"/>   
    <one-to-many class="po.Phone"/>   
</set>
```

单向关联：多对多

```xml
<set name="flights" table="person_flight"> 
    <key column="personID"/> 
    <many-to-many  column="flightID"   class="po.Flght"/> 
</set>
```

双向关联：一对一

```xml
<!--IDcard.hbm.xml -->
<many-to-one name="person" class="po.Person" fetch="select" unique="true"> 
    <column name="personid"></column>
</many-to-one>

<!--Person.hbm.xml -->
<one-to-one name="cardID" class="po.IDcard" cascade="all"/> 
```

双向关联：一对多/多对一

```xml
<!--Person.hbm.xml -->
<many-to-one name="department"  class="po.Department" fetch="select"  cascade="save-update"> 
    <column name="departmentid" not-null="true"/> 
</many-to-one>

<!--Department.hbm.xml -->
<set name="staffs" inverse="true" cascade="all" > 
    <key column="departmentid" not-null="true"/> 
    <one-to-many class="po.Person"/> 
</set> 
```

双向关联：多对多

```xml
<!--Student.hbm.xml -->
<set name="teachers" table="teacher_student"> 
    <key column="studentid"/> 
    <many-to-many  column="teacherid"   class="po.Teacher"/> 
</set>
<!--Teacher.hbm.xml -->
<set name="students" table="teacher_student"> 
    <key column="teacherid"/> 
    <many-to-many  column="studentid"   class="po.Student"/> 
</set> 
```









## 配置

### Configuration

- 一个Configuration实例代表了一个应用程序中Java类型到SQL数据库映射的完整集合

- 用于构建一个SessionFactory 

- 可以使用Configuration类的configure方法来读取hibernate.cfg.xml文件，并负责管理配置信息
	`Configuration conf = new Configuration().configure();`
	`Configuration conf  = new Configuration().configure("cdb.cfg.xml");`

	

**Configuration类的常见方法**

- `configure(File configFile)`方法，可以指定参数，使之能够使用其它配置文件
- `addResource(String path)`方法，指定一个hbm文件路径，动态添加映射文件 
- `addClass(Class persistentClass)`方法，指定PO类，载入该类对应配置的映射文件
- `setProperty(String propertyName, String propertyValue)`方法，指定配置属性

```java
Configuration conf = new Configuration();
conf.addResource(Student.hbm.xml); 
conf.addClass(dao.Student.class);

conf.setProperty("hibernate.connection.driver_class", "com.mysql.jdbc.Driver");
conf.setProperty("hibernate.dialect","org.hibernate.dialect.MySQLDialect");
conf.setProperty("hibernate.connection.url", "jdbc:mysql://localhost:3306/Testdb");
conf.setProperty("hibernate.connection.username", "root");
```

### SessionFactory

- SessionFactory对象由Configuration对象生成，Configuration对象负责加载Hibernate配置文件，每个Hibernate配置文件对应一个Configuration对象
- Session由SessionFactory工厂产生，SessionFactory是数据库编译后的内存镜像，通常一个应用对应一个SessionFactory对象；

**获取SessionFactory**

````java
//Hibernate3.x
Configuration conf = new Configuration().configure();
SessionFactory sf = conf.buildSessionFactory();

//Hibernate4.x
ServiceRegistry serviceRegistry = new ServiceRegistryBuilder().
applySettings(configuration.getProperties()).buildServiceRegistry();
//StandardServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder().
applySettings(configuration.getProperties()).build();
//创建一个 SessionFactory 对象
SessionFactory  sessionFactory = configuration.buildSessionFactory(serviceRegistry);

//Hibernate5.x
StandardServiceRegistry ssr = new StandardServiceRegistryBuilder().configure().build();
SessionFactory sessionFactory = new MetadataSources(ssr).buildMetadata().buildSessionFactory();
````



### Session

- 代表与数据库之间的一次操作,需要进行数据访问时，从连接池获得一个JDBC连接

- 通过SessionFactory打开；在所有工作完成后，需要关闭

- Session是应用程序与持久储存层之间交互操作的一个单线程对象，它底层封装了JDBC连接，主要用来对PO进行创建、读取、删除等操作

- HibernateSessionFactory把生成Session的过程进行优化，比较高效
	`HibernateSessionFactory.getSession();`
	`HibernateSessionFactory.closeSession();`

	

### XML配置

```xml
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE hibernate-configuration PUBLIC
        "-//Hibernate/Hibernate Configuration DTD 3.0//EN"
        "http://hibernate.sourceforge.net/hibernate-configuration-3.0.dtd">
<hibernate-configuration>
    <session-factory name="HibernateSessionFactory">
        <!-- 属性 -->
        <property name="hibernate.connection.driver_class">driver</property>
        <!-- 映射定义文件 -->
        <mapping resource="org/hibernate/auction/Item.hbm.xml"/>
        <!-- 缓存设置 -->
        <class-cache class="org.hibernate.auction.Item" usage="read-write"/>
    </session-factory>
</hibernate-configuration>
```



### 属性

**jdbc**

- `hibernate.connection.driver_class`：jdbc驱动类
- `hibernate.connection.url`：jdbc URL
- `hibernate.connection.username`数据库用户
- `hibernate.connection.password`数据库用户密码
- `hibernate.connection.pool_size`连接池容量上限数目
- `hibernate.connection.autocommit`:取值true|false，取值true则允许被缓存的JDBC连接开启自动提交，但不建议

**c3p0**

- `hibernate.c3p0.min_size`
- `hibernate.c3p0.max_size`
- ``hibernate.c3p0.timeout``
- `hibernate.c3p0.max_statements`

**数据源**

- `hibernate.connection.datasource`*数据源JNDI名字*
- `hibernate.jndi.url`*JNDI提供者的URL* (可选)
- `hibernate.jndi.class`JNDI *`InitialContextFactory`类* (可选)

**可选属性**

- `hibernate.dialect`：SQL方言。Hibernate Dialect类名允许Hibernate针对特定的关系数据库生成优化的SQL
- `hibernate.show_sql`:true/false
- `hibernate.format_sql`:true/false
- `hibernate.use_sql_comments`:true/false



## HibernateUtil

**Hibernate进行持久化操作的基本步骤：**
（1）开发持久化类和映射文件；
（2）获取Configuration；
（3）获取SessionFactory；
（4）获取Session，打开事务；
（5）用面向对象的方式操作数据库；
（6）关闭事务，关闭Session。

```java
package cn.edu.zjut.dao;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.cfg.Configuration;

public class HibernateUtil {
    private static String configFile = "/hibernate.cfg.xml";
    private static final ThreadLocal<Session> threadLocal = new ThreadLocal<Session>();

    private static Configuration configuration = new Configuration();
    private static org.hibernate.SessionFactory sessionFactory;

    static {
        try {
            configuration.configure(configFile);
            sessionFactory = configuration.buildSessionFactory();		//可换更高版本
        } catch (Exception e) {
            System.err.println("%%%% Error Creating SessionFactory %%%%");
            e.printStackTrace();
        }
    }
    private HibernateUtil() { }

    public static org.hibernate.SessionFactory getSessionFactory() {
        return sessionFactory;
    }
    public static void rebuildSessionFactory() {
        try {
            configuration.configure(configFile);
            sessionFactory = configuration.buildSessionFactory();
        } catch (Exception e) {
                System.err.println("%%%% Error Creating SessionFactory %%%%");
                e.printStackTrace();
        }
    }

    public static void setConfigFile(String configFile) {
        HibernateUtil.configFile = configFile;
        sessionFactory = null;
    }
    public static Configuration getConfiguration() {
        return configuration;
    }

    public static Session getSession() throws HibernateException {
        Session session = (Session) threadLocal.get();
        if (session == null || !session.isOpen()) {
            if (sessionFactory == null) {
                rebuildSessionFactory();
            }
            session = (sessionFactory != null) ? sessionFactory.openSession(): null;
            threadLocal.set(session);
        }
        return session;
    }
    public static void closeSession() throws HibernateException {
        Session session = (Session) threadLocal.get();
        threadLocal.set(null);
        if (session != null) {
            session.close();
        }
    }
}

```

```java
public class CustomerDAO{
     ……	
     public List findByHql(String hql) {
        try {   
            String queryString = hql;
            Query queryObject = HibernateUtil.getSession().createQuery(hql);
            return queryObject.list();
        } catch (RuntimeException re) { …… }
     }
    
    public void save(Customer instance) {
        try {   
            HibernateUtil.getSession().save(instance);
        } catch (RuntimeException re) { …… }
    }   ……
}
```


```java
public class UserService {
     public boolean login(Customer loginUser) {
         String hql = "from Customer as user where account='" + account
				+ "' and password='" + password + "'";
         CustomerDAO dao = new CustomerDAO();
         List list = dao.findByHql(hql);      
         dao.getSession().close();
         if (list.isEmpty())  return false;   
         else{ …… }
     }
    
    public boolean delete(Customer loginUser) {
        CustomerDAO dao = new CustomerDAO();
        Transaction tran = null; 
        try {  
            tran = dao.getSession().beginTransaction();
            dao.delete(loginUser);
            tran.commit();      
            return true;
        } catch (Exception e) { …… } 
        finally {  
            dao.getSession().close();  
        }
    }
}
```



## CRUD

**添加操作**：`session.saveOrUpdate(Object);`若主键在数据库里就修改该条数据，否则保存数据
**删除操作**：`session.delete(Object);`
**修改操作**：`session.saveOrUpdate(Object);` 或者`session.update(Object); `
**查询操作**：`Object session.get(PO对应的类,主键);`  
如Student stu = (Student) session.get(Student.class,"0002");查询学号为 0002 的学生，若该学生不存在，则返回 null

> 批量查询

- HQL查询法：Hibernate配备的强大查询语言，语法结构类似SQL面向对象的查询，可以理解如继承、多态之类的概念 
- Criteria 准则查询法：Hibernate提供的直观、可扩展的条件查询API 
- SQL 查询：因在某种程度上违背ORM的初衷而较少适用

### HQL查询

- `Query session.createQuery(String queryString)`，该方法为HQL查询语句生成一个Query类的对象
- 返回的Query中，有`list()`方法，返回一个List对象，通过遍历这个List对象得到查询的内容
- HQL语句看起来虽然和SQL语句很像，但是面向对象的，避免了程序员需要对数据库结构的了解 

<u>语法</u>

- **from 类名 as 对象名 [ where 属性条件 ]**，“as 对象名”可以省略
- **select 属性 from 类名 as 对象名 [ where 属性条件 ]**，“as 对象名”可以省略 
- 带参数的HQL语句

```java
Session session = HibernateUtil.getSession();

String hql = "from Student where stusex='女'";
String hql = "select stuno, stuname from Student where stusex='女'";
String sex = "女";
String hql = "select stuno,stuname from Student where stusex=:sex";


Query query = session.createQuery(hql);
List list = query.list();
for(int i=0;i<list.size();i++){
	Student stu = (Student)list.get(i);
	System.out.println(stu.getStuname());
}
HibernateUtil.closeSession();

```

### Criteria(准则查询)

- `Criteria Session.createCriteria(Class  persistentClass)`，传入的参数是绑定查询结果需要转换的类型
- 用Critera的`add`函数增加筛选条件
- 筛选条件如：Restrictions.gt(String propertyName, Object value)，某属性必须大于另一个值

```java
Criteria cri = session.createCriteria(Student.class);
cri.add(Restrictions.eq("stusex","女"));
List list = cri.list();
for(int i=0;i<list.size();i++){
	Student stu = (Student)list.get(i);
	System.out.println(stu.getStuno() + " " + stu.getStuname());
}
```







