---
title: Spring
subtitle: 
layout: post
date: 2021-11-07
author: heavenmei
categories:
  - Note
description: 
tags:
  - Java
image:
---


# Spring

## 简介

<img src="https://gitee.com/heavenmei/java-study/raw/master/img/20210917165537.png" alt="image-20210917165536725" style="zoom:80%;" />

> 导包	pom.xml

```xml
<dependencies>
    <!-- spring -->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-webmvc</artifactId>
        <version>5.3.9</version>
    </dependency>
    <!-- spring数据库-->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-jdbc</artifactId>
        <version>5.3.9</version>
    </dependency>
    <!--aspectJ AOP 织入器-->
    <dependency>
        <groupId>org.aspectj</groupId>
        <artifactId>aspectjweaver</artifactId>
        <version>1.9.7</version>
        <scope>runtime</scope>
    </dependency>
    <!--事务管理器-->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-tx</artifactId>
        <version>5.3.8</version>
    </dependency>
    <!--mybatis-->
    <dependency>
        <groupId>org.mybatis</groupId>
        <artifactId>mybatis</artifactId>
        <version>3.5.7</version>
    </dependency>
    <!--mybatis-spring整合包-->
    <dependency>
        <groupId>org.mybatis</groupId>
        <artifactId>mybatis-spring</artifactId>
        <version>2.0.6</version>
    </dependency>
    <!--mysql-->
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>8.0.21</version>
    </dependency>
    <!--junit-->
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>4.12</version>
        <scope>test</scope>
    </dependency>
    <!--lombok-->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <version>1.18.20</version>
        <scope>provided</scope>
    </dependency>
</dependencies>

<!--配置Maven静态资源过滤问题-->
<build>
    <resources>
        <resource>
            <directory>src/main/resources</directory>
            <includes>
                <include>**/*.properties</include>
                <include>**/*.xml</include>
            </includes>
            <filtering>true</filtering>
        </resource>
        <resource>
            <directory>src/main/java</directory>
            <includes>
                <include>**/*.properties</include>
                <include>**/*.xml</include>
            </includes>
            <filtering>true</filtering>
        </resource>
    </resources>
</build>
```

>   优点

1、Spring是一个开源免费的框架 , 容器  .
2、Spring是一个轻量级的框架 , 非侵入式的 .
**3、控制反转 IOC  , 面向切面 AOP**
4、对事物的支持 , 对框架的支持
**Spring是一个轻量级的控制反转(IOC)和面向切面(AOP)的容器（框架）。**



## HelloSpring

1.导入Jar包
2.编写一个Hello实体类

```java
public class Hello {
   private String name;

   public String getName() {
       return name;
  }
   public void setName(String name) {
       this.name = name;
  }
   public void show(){
       System.out.println("Hello,"+ name );
  }
}
```

3.编写我们的spring文件 , 这里我们命名为`beans.xml`（去官网复制）

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd">

   <!--bean就是java对象 , 由Spring创建和管理-->
   <bean id="hello" class="com.kuang.pojo.Hello">
       <property name="name" value="Spring"/>
   </bean>
    
    <bean id="ServiceImpl" class="com.kuang.service.impl.UserServiceImpl">
        <!--注意: 这里的name并不是属性 , 而是set方法后面的那部分 , 首字母小写-->
        <!--引用另外一个bean , 不是用value 而是用 ref-->
        <property name="userDao" ref="OracleImpl"/>
   </bean>

</beans>
```

4.我们可以去进行测试了 .

```java
@Test
public void test(){
   //解析beans.xml文件 , 生成管理相应的Bean对象
   ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
   //getBean : 参数即为spring配置文件中bean的id .
   Hello hello = (Hello) context.getBean("hello");
   hello.show();
}
```



思考

-   Hello 对象是谁创建的 ?  【hello 对象是由Spring创建的]】
-   Hello 对象的属性是怎么设置的 ? 【 hello 对象的属性是由Spring容器设置的】

这个过程就叫**控制反转** :

-   控制 : 谁来控制对象的创建 , 传统应用程序的对象是由程序本身控制创建的 , 使用Spring后 , <u>对象是由Spring来创建的</u>
-   反转 <u>: 程序本身不创建对象 , 而变成被动的接收对象</u> .

<u>依赖注入 : 就是利用set方法来进行注入的.</u>

 IOC是一种编程思想，由主动的编程变成被动的接收
可以通过newClassPathXmlApplicationContext去浏览一下底层源码 .
**所谓的IoC,一句话搞定 : 对象由Spring 来创建 , 管理 , 装配 !** 

## Spring IoC 

### 理论推导

1、先写一个`UserDao`接口
2、再去写Dao的实现类`UserDaoImpl`
3、然后去写`UserService`的接口
4、最后写Service的实现类`UserServiceImpl`
		<u>private UserDao userDao = new UserDaoImpl();</u>
		这是我们原来的方式 , 开始大家也都是这么去写的对吧 . 那我们现在修改一下 .
5、把Userdao的实现类增加一个 `UserDaoMySqlImpl`
6、紧接着我们要去使用MySql的话 , 我们就需要去service实现类`UserServiceImpl`里面修改对应的实现
		<u>private UserDao userDao = new UserDaoMySqlImpl();</u>

那么我们要使用Oracle , 又需要去service实现类里面修改对应的实现 . 假设我们的这种需求非常大 , 这种方式就根本不适用了, 甚至反人类对吧 , 每次变动 , 都需要修改大量代码 . 这种设计的耦合性太高了, 牵一发而动全身 .

**那我们如何去解决呢 ?** 

我们可以在需要用到他的地方 , 不去实现它 , 而是留出一个接口 , 利用set , 我们去代码里修改下 .

```java
public class UserServiceImpl implements UserService {
   private UserDao userDao;
// 利用set实现
   public void setUserDao(UserDao userDao) {
       this.userDao = userDao;
  }
}
```

以前所有东西都是由程序去进行控制创建 , 而现在是由我们自行控制创建对象 , 把主动权交给了调用者 . 程序不用去管怎么创建,怎么实现了 . 它只负责提供一个接口 .
这种思想 , 从本质上解决了问题 , 我们程序员不再去管理对象的创建了 , 更多的去关注业务的实现 . 耦合性大大降低 . 这也就是IOC的原型 !

### IOC本质

**控制反转IoC(Inversion of Control)是一种设计思想，DI(依赖注入)是实现IoC的一种方法**
没有IoC的程序中 , 我们使用面向对象编程 , 对象的创建与对象间的依赖关系完全硬编码在程序中，对象的创建由程序自己控制，控制反转后将对象的创建转移给第三方，个人认为所谓控制反转就是：<u>获得依赖对象的方式反转了</u>。

![图片](https://mmbiz.qpic.cn/mmbiz_png/uJDAUKrGC7KtDiaOqFy5ourlJ8FTVV2FFuYibmavlBHq9e4cDqiclpYSG8VT4EicVsnqKp65yJKQeNibsVdTiahQibJSg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

> 🌰举个例子（翻译人话）

吃面包。没有面包店时，根据口味自己做；有面包店时，告诉店家自己的口味去做，即把制作面包的主动权交给店家。
当某个Java对象（调用者，您）需要调用另一个Java对象（被调用者，即被依赖对象，面包）时。

- 传统情况时，“new被调用者” 来创建对象（您自己做面包）；

- Spring框架下，对象的实例不在有调用者创建，由Spring容器（面包店）来创建。它会负责控制程序之间的关系（面包店负责控制您与面包的关系）。即控制权由调用者转移到Spring容器，发生反转。

​	

**IoC是Spring框架的核心内容**，使用多种方式完美的实现了IoC，可以使用XML配置，也可以使用注解。
Spring容器在初始化时先读取配置文件，根据配置文件或元数据创建与组织对象存入容器中，程序使用时再从Ioc容器中取出需要的对象。

<img src="https://mmbiz.qpic.cn/mmbiz_png/uJDAUKrGC7KtDiaOqFy5ourlJ8FTVV2FF67dfeA6cRT7EiafNcibWyf57SGpkZ01JnpiaaicNB1ibBjGaicAvayKEWJ0A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1" alt="图片" style="zoom:50%;" />

采用XML方式配置Bean的时候，Bean的定义信息是和实现分离的，而采用注解的方式可以把两者合为一体，Bean的定义信息直接以注解的形式定义在实现类中，从而达到了零配置的目的。
**控制反转是一种通过描述（XML或注解）并通过第三方去生产或获取特定对象的方式。在Spring中实现控制反转的是IoC容器，其实现方法是依赖注入DI（Dependency Injection）。**

### Spring IoC容器

主要基于`BeanFactory`和`ApplicationContext`两个接口

**BeanFactory**

接口最常用的实现类`XmlBeanFactory`根据XML配置文件中的定义来装配Bean。【不推荐】

```java
@Test
public void test(){
    //初始或Spring容器，加载配置文件【不建议使用，已废弃】
    //需要提供XML文件绝对路径
    BeanFactory beanFactory = new XmlBeanFactory(new FileSystemResource("E:\\Desktop\\IdeaTest\\Spring\\src\\main\\resources\\beans.xml"));
    //通过容器获取实例
    UserMapper mapper = beanFactory.getBean("UserMapper",UserMapper.class);
    List<User> user = mapper.selectUser();
    System.out.println(user);
}
```

**ApplicationContext**

这是BeanFactory的子接口，也称应用上下文。3种方式创建实例

1. <u>ClassPathXmlApplicationContext 从类路径目录（src目录）中寻找XML配置文件</u>【常用】

	```java
	@Test
	public void test1(){
	    //1、初始或Spring容器，加载配置文件
	    ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
	    //2、通过容器获取实例
	    UserMapper mapper = context.getBean("UserMapper",UserMapper.class);
	    List<User> user = mapper.selectUser();
	    System.out.println(user);
	}
	```

2. FileSystemXmlApplicationContext从绝对路径找XML配置文件

	```java
	//1、初始或Spring容器，加载配置文件
	ApplicationContext context = new FileSystemXmlApplicationContext("E:\\Desktop\\IdeaTest\\Spring\\src\\main\\resources\\beans.xml");
	```

3. Web服务器实例化ApplicationContext容器

	导入spring-web包，在web.xml中配置

	```xml
	<context-param>
	    <!--加载src文件目录下的XML配置文件-->
	    <param-name>contextConfigLocation</param-name>
	    <param-value>classpath:beans.xml</param-value>
	</context-param>
	<!--指定ContextLoaderListener 方式启动Spring容器-->
	<listener>
	    <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
	</listener>
	```

	

### DI 依赖注入

-   依赖注入（Dependency Injection,DI）。
-   依赖 : 指Bean对象的创建依赖于容器 . Bean对象的依赖资源 .
-   注入 : 指Bean对象所依赖的资源 , 由容器来设置和装配 .

#### 构造器注入

ServiceImpl中只用构造方法历来注入Dao接口对象

```java
public class UserServiceImpl implements UserService{
    private UserDao userDao;
    //构造方法，用于实现Dao接口
    public UserServiceImpl(UserDao userDao){
        this.userDao = userDao;
    }
}
```

beans.xml配置文件中首先将DaoImpl托管给Spring，让Spring创建其对象，
然后ServiceImpl托管给Spring，让Spring创建其对象，同时构造方法传递实参。

```xml
<!--指定DaoImpl配置给Spring，让Spring创建实例-->
<bean id="DaoImpl" class="com.huang.dao.UserDaoImpl"/>
<!--指定ServiceImpl配置给Spring，让Spring创建实例-->
<bean id="ServiceImpl" class="com.huang.service.UserServiceImpl">
    <!--使用构造方法注入属性-->
    <!-- 第一种根据index参数下标设置 -->
    <constructor-arg index="0" ref="DaoImpl"/>
</bean>

<!-- 第二种根据参数名字设置 -->
<bean id="ServiceImpl" class="com.huang.service.UserServiceImpl">
   <!-- name指参数名 -->
   <constructor-arg name="userDao" ref="DaoImpl"/>
</bean>

<!-- 第三种根据参数类型设置 不推荐！！-->
<bean id="ServiceImpl" class="com.huang.service.UserServiceImpl">
   <constructor-arg type="com.huang.dao.UserDao" ref="DaoImpl"/>
</bean>
```



#### Set 注入 （重点）

要求被注入的属性 , 必须有**set方法** , set方法的方法名由set + 属性首字母大写 , 如果属性是boolean类型 ,  是 is .

1、**Bean注入** 

serviceImpl

```java
public class UserServiceImpl implements UserService{
    private UserDao userDao;
    // 利用set实现
    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }
}
```

beans.xml	注意点：这里的值是一个引用，ref

```xml
<!--指定DaoImpl配置给Spring，让Spring创建实例-->
<bean id="DaoImpl" class="com.huang.dao.UserDaoImpl"/>
<!--指定ServiceImpl配置给Spring，让Spring创建实例-->
<bean id="ServiceImpl" class="com.huang.service.UserServiceImpl">
    <!--注意: 这里的name并不是属性 , 而是set方法后面的那部分 , 首字母小写-->
    <property name="userDao" ref="DaoImpl"></property>
</bean>
```

2、**常量注入**

```xml
 <bean id="student" class="com.kuang.pojo.Student">
     <property name="name" value="小明"/>
 </bean>
```

3、**数组注入**

```xml
 <bean id="student" class="com.kuang.pojo.Student">
     <property name="books">
         <array>
             <value>西游记</value>
             <value>红楼梦</value>
             <value>水浒传</value>
         </array>
     </property>
 </bean>
```

4、**List注入**

```xml
 <property name="hobbys">
     <list>
         <value>听歌</value>
         <value>看电影</value>
         <value>爬山</value>
     </list>
 </property>
```

5、**Map注入**

```xml
 <property name="card">
     <map>
         <entry key="中国邮政" value="456456456465456"/>
         <entry key="建设" value="1456682255511"/>
     </map>
 </property>
```

6、**set注入**

```xml
 <property name="games">
     <set>
         <value>LOL</value>
         <value>BOB</value>
         <value>COC</value>
     </set>
 </property>
```

7、**Null注入**

```xml
 <property name="wife"><null/></property>
```

8、**Properties注入**

```xml
 <property name="info">
     <props>
         <prop key="学号">20190604</prop>
         <prop key="性别">男</prop>
         <prop key="姓名">小明</prop>
     </props>
 </property>
```



#### p命名和c命名注入

1、P命名空间注入 : 需要在头文件中加入约束文件	
相当于set注入的属性注入

```xml
 导入约束 : xmlns:p="http://www.springframework.org/schema/p"
 <!--P(属性: properties)命名空间 , 属性依然要设置set方法-->
 <bean id="user" class="com.kuang.pojo.User" p:name="狂神" p:age="18"/>
```

2、c 命名空间注入 : 需要在头文件中加入约束文件
相当于构造器注入，把有参构造器加上

```xml
 导入约束 : xmlns:c="http://www.springframework.org/schema/c"
 <!--C(构造: Constructor)命名空间 , 属性依然要设置set方法-->
 <bean id="user" class="com.kuang.pojo.User" c:name="狂神" c:age="18"/>
```



## Spring Bean

在Spring中，那些组成应用程序的主体及由Spring IoC容器所管理的对象，被称之为bean。
简单地讲，<u>bean就是由IoC容器初始化、装配及管理的对象</u> 。bean就是java对象,由Spring创建和管理

### Spring的配置

**别名**
alias 设置别名 , 为bean设置别名 , 可以设置多个别名

```xml
<!--设置别名：在获取Bean的时候可以使用别名获取-->
<alias name="userT" alias="userNew"/>
```

**import**
团队的合作通过import来实现 .

```xml
<import resource="{path}/beans.xml"/>
```



### Bean的配置

- `id`：唯一标识符。如果没有配置id,name就是默认标识符

- `nane`：如果配置id,又配置了name,那么name是别名；可以设置多个别名,可以用逗号,分号,空格隔开

	如果不配置id和name,可以根据applicationContext.getBean(.class)获取对象;

- `class`：是bean的全限定名=包名+类名

- `scope`：作用域

- `<constructor-arg>`：构造方法注入。index指定参数序号，ref指定引用关系，type指定参数类型，value指定参数常量

- `<property>`：设置属性。name指定属性名称，同上

- `<list>`、`<map>`、`<set>`、`<entry>`：依赖注入封装

```xml
<bean id="hello" name="hello2 h2,h3;h4" class="com.kuang.pojo.Hello">
   <property name="name" value="Spring"/>
</bean>
```



### Bean的实例化

<u>结论：在配置文件加载的时候。其中管理的对象都已经初始化了！</u>

**1、构造方法实例化【常用】**
默认是用无参构造创建对象`<bean id="DaoImpl" class="com.huang.dao.UserDaoImpl"/>`即可
参构造创建详见DI构造器注入

2、静态工厂实例化
从工厂类中船舰一个静态方法来创建Bean实例

```java
public class BeanStaticFactory {
    private static UserDaoImpl userDao = new UserDaoImpl();
    public static UserDaoImpl createUserDao(){
        return userDao;
    }
}
```

```xml
<!--factory-method指定静态方法-->
<bean id="ServiceImpl" class="com.huang.service.BeanStaticFactory" factory-method="createInstance"/>
```

3、实例工程实例化
从工厂类中创建一个实例方法来创建Bean实例

```java
public class BeanStaticFactory {
    public UserServiceImpl createInstance(){
        return new UserServiceImpl();
    }
}
```

```xml
<!--配置工厂-->
<bean id="BeanStaticFactory" class="com.huang.service.BeanStaticFactory"/>
<!--factory-bean指定配置的实例工厂-->
<bean id="ServiceImpl" class="com.huang.service.BeanStaticFactory"
      factory-bean="BeanStaticFactory"
      factory-method="createInstance">
    <property name="userDao" ref="DaoImpl"/>
</bean>
```



### Bean的作用域

![图片](https://gitee.com/heavenmei/java-study/raw/master/img/20210817163259.webp)

几种作用域中，request、session作用域仅在基于web的应用中使用（不必关心你所采用的是什么web应用框架），只能用在基于web的Spring ApplicationContext环境。

**Singleton**
当一个bean的作用域为Singleton，那么Spring IoC容器中<u>只会存在一个共享的bean实例</u>，并且所有对bean的请求，只要id与该bean定义相匹配，则<u>只会返回bean的同一实例</u>。Singleton是单例类型，就是在创建起容器时就同时自动创建了一个bean的对象，不管你是否使用，他都存在了，每次获取到的对象都是同一个对象。注意，Singleton作用域是Spring中的缺省作用域。要在XML中将bean定义成singleton，可以这样配置：

```xml
 <bean id="ServiceImpl" class="cn.csdn.service.ServiceImpl" scope="singleton">
```

**Prototype**
当一个bean的作用域为Prototype，表示一<u>个bean定义对应多个对象实例</u>。Prototype作用域的bean会导致在<u>每次对该bean请求（将其注入到另一个bean中，或者以程序的方式调用容器的getBean()方法）时都会创建一个新的bean实例</u>。Prototype是原型类型，它在我们创建容器的时候并没有实例化，而是当我们获取bean的时候才会去创建一个对象，而且我们每次获取到的对象都不是同一个对象。根据经验，对有状态的bean应该使用prototype作用域，而对无状态的bean则应该使用singleton作用域。在XML中将bean定义成prototype，可以这样配置：

```xml
 <bean id="account" class="com.foo.DefaultAccount" scope="prototype"/>  
  或者
 <bean id="account" class="com.foo.DefaultAccount" singleton="false"/>
```

**Request**
当一个bean的作用域为Request，表示在一次HTTP请求中，一个bean定义对应一个实例；即每个HTTP请求都会有各自的bean实例，它们依据某个bean定义创建而成。该作用域仅在基于web的Spring ApplicationContext情形下有效。考虑下面bean定义：

```xml
 <bean id="loginAction" class="cn.csdn.LoginAction" scope="request"/>
```

针对每次HTTP请求，Spring容器会根据loginAction bean的定义创建一个全新的LoginAction bean实例，且该loginAction bean实例仅在当前HTTP request内有效，因此可以根据需要放心的更改所建实例的内部状态，而其他请求中根据loginAction bean定义创建的实例，将不会看到这些特定于某个请求的状态变化。当处理请求结束，request作用域的bean实例将被销毁。

**Session**
当一个bean的作用域为Session，表示在一个HTTP Session中，一个bean定义对应一个实例。该作用域仅在基于web的Spring ApplicationContext情形下有效。考虑下面bean定义：

```xml
 <bean id="userPreferences" class="com.foo.UserPreferences" scope="session"/>
```

针对某个HTTP Session，Spring容器会根据userPreferences bean定义创建一个全新的userPreferences bean实例，且该userPreferences bean仅在当前HTTP Session内有效。与request作用域一样，可以根据需要放心的更改所创建实例的内部状态，而别的HTTP Session中根据userPreferences创建的实例，将不会看到这些特定于某个HTTP Session的状态变化。当HTTP Session最终被废弃的时候，在该HTTP Session作用域内的bean也会被废弃掉。



### Bean的自动装配

-   自动装配是使用spring满足bean依赖的一种方法
-   spring会在应用上下文中为某个bean寻找其依赖的bean。

Spring的自动装配需要从两个角度来实现，或者说是两个操作：

1.  组件扫描(component scanning)：spring会自动发现应用上下文中所创建的bean；
2.  自动装配(autowiring)：spring自动满足bean之间的依赖，也就是我们说的IoC/DI；

组件扫描和自动装配组合发挥巨大威力，使得显示的配置降低到最少。

==推荐不使用自动装配xml配置 , 而使用注解 .==

**1、byName**

- autowire byName (按名称自动装配)

由于在手动配置xml过程中，常常发生字母缺漏和大小写等错误，而无法对其进行检查，使得开发效率降低。
采用自动装配将避免这些错误，并且使配置简单化。
当一个bean节点带有 autowire byName的属性时。

1.  将查找其类中所有的set方法名，例如setCat，获得将set去掉并且首字母小写的字符串，即cat。
2.  <u>去spring容器中寻找是否有此字符串名称id的对象。</u>
3.  如果有，就取出注入；如果没有，就报空指针异常。

**2、byType**

- autowire byType (按类型自动装配)

使用autowire byType首先需要保证：同一类型的对象，<u>在spring容器中唯一</u>。如果不唯一，会报不唯一的异常。
`NoUniqueBeanDefinitionException`

```xml
<bean id="dog" class="com.kuang.pojo.Dog"/>
<bean id="cat" class="com.kuang.pojo.Cat"/>
<bean id="cat2" class="com.kuang.pojo.Cat"/>
<!--不唯一错误！！-->
<bean id="user" class="com.kuang.pojo.User" autowire="byType">
   <property name="str" value="qinjiang"/>
</bean>
```



### Bean的注解装配

Bean的装配可以理解为将Bean依赖注入到Spring容器中，Bean的装配方式及依赖注入的方式：

1.  基于XML配置文件装配；（上文构造器注入和set注入）
2.  基于注解的装配；
3.  隐式的bean发现机制和自动装配。
4.  基于Java类进行装配

> 环境

1.  导aop包
2.  在配置文件当中，还得要引入一个context约束

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:context="http://www.springframework.org/schema/context"
      xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context
       http://www.springframework.org/schema/context/spring-context.xsd">

    <!--开启属性注解支持-->
    <context:annotation-config/>

</beans>
```

> 常用注解

**@Component**：组件对象（Bean）

```java
@Component("user")
// 相当于配置文件中 <bean id="user" class="当前注解的类"/>
public class User {
   @Value("秦疆")
   // 相当于配置文件中 <property name="name" value="秦疆"/>
   public String name;
    //1、可以不用提供set方法，直接在直接名上添加@value("值")
    //2、如果提供了set方法，在set方法上添加@value("值");
    @Value("秦疆")
   public void setName(String name) {
       this.name = name;
  }
}
```

**@Repository**：dao层Impl

**@Service**：service层

**@Controller**：web层

**@Autowired**：标注类成员变量方法及构造方法，按<u>类型自动转配</u>，不支持id匹配。<u>消除setter和getter方法</u>

​	`@Autowired(required=false)`  false说明对象可以为null；true说明对象必须存对象，不能为null。可省

**@Resource**：与@Autowired功能一样，区别在于默认是按<u>名称自动装配</u>，当找不到与名称匹配的Bean才按照类型装配

​	`@Resource(name = "",type="")`name指定Bean实例名称按名称装配，type指定Bean类型按类型装配

**@Qualifier**：与@Autowired配合使用，不能单独使用。<u>@Autowired是根据类型自动装配的，加上@Qualifier则可以根据byName的方式自动装配</u>

**@scope**

-   singleton：默认的，Spring会采用单例模式创建这个对象。关闭工厂 ，所有的对象都会销毁。
-   prototype：多例模式。关闭工厂 ，所有的对象不会销毁。内部的垃圾回收机制会回收

> 小结

**XML与注解比较**

-   XML可以适用任何场景 ，结构清晰，维护方便
-   注解不是自己提供的类使用不了，开发简单方便

**xml与注解整合开发** ：推荐最佳实践

-   <u>xml管理Bean</u>
-   <u>注解完成属性注入</u>
-   使用过程中， 可以不用扫描，扫描是为了类上的注解`<context:annotation-config/>  `

作用：

-   进行注解驱动注册，从而使注解生效

-   用于激活那些已经在spring容器里注册过的bean上面的注解，也就是显示的向Spring注册

-   如果不扫描包，就需要手动配置bean

-   如果不加注解驱动，则注入的值为null！



### Bean的基于Java类进行配置

JavaConfig 原来是 Spring 的一个子项目，它通过 Java 类的方式提供 Bean 的定义信息，在 Spring4 的版本， JavaConfig 已正式成为 Spring4 的核心功能 。

测试：

1、编写一个实体类，Dog

```java
@Component  //将这个类标注为Spring的一个组件，放到容器中！
public class Dog {
   public String name = "dog";
}
```

2、新建一个config配置包，编写一个MyConfig配置类

```java
@Configuration  //代表这是一个配置类
public class MyConfig {
   @Bean //通过方法注册一个bean，这里的返回值就Bean的类型，方法名就是bean的id！
   public Dog dog(){
       return new Dog();
  }
}
```

3、测试

```java
@Test
public void test2(){
   ApplicationContext applicationContext =
           new AnnotationConfigApplicationContext(MyConfig.class);
   Dog dog = (Dog) applicationContext.getBean("dog");
   System.out.println(dog.name);
}
```

4、成功输出结果！

**导入其他配置如何做呢？**

1、我们再编写一个配置类！

```java
@Configuration  //代表这是一个配置类
public class MyConfig2 {
}
```

2、在之前的配置类中我们来选择导入这个配置类

```java
@Configuration
@Import(MyConfig2.class)  //导入合并其他配置类，类似于配置文件中的 inculde 标签
public class MyConfig {
   @Bean
   public Dog dog(){
       return new Dog();
  }

}
```

关于这种Java类的配置方式，我们在之后的SpringBoot 和 SpringCloud中还会大量看到，我们需要知道这些注解的作用即可！

## Spring AOP

### 概念

AOP（Aspect Oriented Programming）意为：**面向切面编程**，通过预编译方式和运行期动态代理实现程序功能的统一维护的一种技术。AOP是OOP的延续，是软件开发中的一个热点，也是Spring框架中的一个重要内容，是函数式编程的一种衍生范型。利用AOP可以对业务逻辑的各个部分进行隔离，从而使得业务逻辑各部分之间的耦合度降低，提高程序的可重用性，同时提高了开发的效率。

![图片](https://gitee.com/heavenmei/java-study/raw/master/img/20210819141917.png)

> 术语

1. 切面（Aspect）：封装横切到系统功能的类
2. 连接点（Joinpoint）：程序运行中的一些时间点，例如方法调用或异常抛出
3. 切入点（Pointcut）：需要处理的连接点
4. 通知（Advice）：切面开启后切面的方法，通知时切面的具体实现
5. 目标对象：所有被通知的对象
6. 代理（Proxy）：通知应用到目标对象之后被动态创建的对象
7. 织入（Weaving）：将切面代码插入到目标对象上，从而生成代理对象的过程



### 代理模式

为什么要学习代理模式，因为==AOP的底层机制就是动态代理！==
代理模式：

-   静态代理
-   动态代理

![图片](https://gitee.com/heavenmei/java-study/raw/master/img/20210818170403.webp)

#### 静态代理

-   抽象角色 : 一般使用接口或者抽象类来实现
-   真实角色 : 被代理的角色
-   代理角色 : 代理真实角色 ; 代理真实角色后 , 一般会做一些附属的操作 .
-   客户  :  使用代理角色来进行一些操作 .

>    代码实现

Rent . java 即抽象角色

```java
//抽象角色：租房
public interface Rent {
   public void rent();
}
```

Host . java 即真实角色

```java
//真实角色: 房东，房东要出租房子
public class Host implements Rent{
   public void rent() {
       System.out.println("房屋出租");
  }
}
```

Proxy . java 即代理角色

```java
//代理角色：中介
public class Proxy implements Rent {
   private Host host;
   public Proxy() { }
   public Proxy(Host host) {
       this.host = host;
  }

   //租房
   public void rent(){
       seeHouse();
       host.rent();
       fare();
  }
   //看房
   public void seeHouse(){
       System.out.println("带房客看房");
  }
   //收中介费
   public void fare(){
       System.out.println("收中介费");
  }
}
```

Client . java 即客户

```java
//客户类，一般客户都会去找代理！
public class Client {
   public static void main(String[] args) {
       //房东要租房
       Host host = new Host();
       //中介帮助房东
       Proxy proxy = new Proxy(host);

       //你去找中介！
       proxy.rent();
  }
}
```

分析：在这个过程中，你直接接触的就是中介，就如同现实生活中的样子，你看不到房东，但是你依旧租到了房东的房子通过代理，这就是所谓的代理模式。

**静态代理的好处:**

-   可以使得我们的真实角色更加纯粹 . 不再去关注一些公共的事情 .
-   公共的业务由代理来完成 . 实现了业务的分工 ,
-   公共业务发生扩展时变得更加集中和方便 .

缺点 :

-   类多了 , 多了代理类 , 工作量变大了 . 开发效率降低 .

我们想要静态代理的好处，又不想要静态代理的缺点，所以 , 就有了动态代理 !

**我们在不改变原来的代码的情况下，实现了对原有功能的增强，这是AOP中最核心的思想**

聊聊AOP：纵向开发，横向开发

<img src="https://gitee.com/heavenmei/java-study/raw/master/img/20210818172718.webp" alt="图片" style="zoom:50%;" />



#### 动态代理

-   动态代理的角色和静态代理的一样 .

-   动态代理的代理类是动态生成的 . 静态代理的代理类是我们提前写好的

-   动态代理分为两类 : 一类是基于接口动态代理 , 一类是基于类的动态代理

-   -   <u>基于接口的动态代理----JDK动态代理（默认）</u>
    -   <u>基于类的动态代理--cglib</u>
    -   现在用的比较多的是 javasist 来生成动态代理 . 百度一下javasist

#### JDK的动态代理

核心 : `InvocationHandler`   和   `Proxy`  ， 打开JDK帮助文档看看

**核心：一个动态代理 , 一般代理某一类业务 , 一个动态代理可以代理多个类，==代理的是接口==！**

TestDao. java 即抽象角色（接口）

```java
public interface TestDao {
    public void save();
    public void modify();
    public void delete();
}
```

TestDaoImpl. java 即真实角色（实现类）

```java
public class TestDaoImpl implements TestDao{
    @Override
    public void save() {
        System.out.println("保存");
    }

    @Override
    public void modify() {
        System.out.println("修改");
    }

    @Override
    public void delete() {
        System.out.println("删除");
    }
}
```

MyAspect.java 切面类，可以定义多个通知，即增强处理方法

```java
public class MyAspect {
    public void check(){
        System.out.println("模拟权限控制");
    }
    public void except(){
        System.out.println("模拟异常处理");
    }
}
```

**ProxyInvocationHandler. java 即代理角色**

```java
public class ProxyInvocationHandler implements InvocationHandler {
    //被代理的接口
    private TestDao testDao;
    public void setTestDao(TestDao testDao) {
        this.testDao = testDao;
    }

    //生成代理类
    public Object getProxy(){
        //参数：1、类加载器 2、被代理对象实现的所有接口  3、InvocationHandler
        return Proxy.newProxyInstance(this.getClass().getClassLoader(), testDao.getClass().getInterfaces(),this);
    }

    /**
      * 处理代理实例，并返回结果
      * proxy ：被代理对象
	  * method ：将要被执行的方法
	  * args ：执行方法是需要的参数
	  */
    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        //创建切面
        MyAspect myAspect = new MyAspect();
        //前增强
        myAspect.check();

        //动态代理的本质就是通过反射机制实现！
        Object result = method.invoke(testDao,args);

        //后增强
        myAspect.except();

        return result;
    }
}
```

DynamicTest. java 客户角色

```java
public class DynamicTest {
    @Test
    public void Test(){
        //创建代理对象
        ProxyInvocationHandler pih = new ProxyInvocationHandler();
        //创建目标对象
        TestDao testDao = new TestDaoImpl();
        //设置要代理的对象 代理的是接口
        pih.setTestDao(testDao);
        //动态生成代理类！
        TestDao proxy = (TestDao) pih.getProxy();
        //执行方法
        proxy.save();
        System.out.println("===================");
        proxy.modify();
        System.out.println("===================");
        proxy.delete();
    }
}
```

结果：<img src="https://gitee.com/heavenmei/java-study/raw/master/img/20210915222429.png" alt="image-20210915222429660" style="zoom: 80%;" />

#### CGLIB 动态代理

 JDK动态代理必须提供接口才能使用，对于没有提供接口的类，只能采用CGLIB动态代理。其对目标类生成一个子类，并对子类增强。

TestDao：类不是接口，方法同上
MyAspect.java 切面类，同上
**CglibDynamicProxy：代理类，实现MethodInterceptor接口**

```java
public class CglibDynamicProxy implements MethodInterceptor {
    //生成代理类 target:目标对象，需要增强的对象
    public Object getProxy(Object target){
        //创建一个动态类对象，即增强类对象。设置其父类即要增强的对象
        Enhancer enhancer = new Enhancer();
        enhancer.setSuperclass(target.getClass());
        //确定代理逻辑对象为当前对象，要求当前对象实现MethodInterceptor接口
        enhancer.setCallback(this);
        return enhancer.create();
    }

    /**
     * intercept 方法会在程序执行目标方法是被调用
     * @param object 根据指定父类生成的代理对象
     * @param method 拦截方法
     * @param args 参数数组
     * @param methodProxy 方法的代理对象 用于执行父类方法
     * @return 返回代理结果
     * @throws Throwable
     */
    @Override
    public Object intercept(Object object, Method method, Object[] args, MethodProxy methodProxy) throws Throwable {
        //创建切面
        MyAspect myAspect = new MyAspect();
        myAspect.check();
        //目标方法执行
        Object obj = methodProxy.invokeSuper(object,args);
        
        myAspect.except();
        return obj;
    }
}
```

Test.java

```java
public void Test2(){
    //创建代理对象
    CglibDynamicProxy cdp = new CglibDynamicProxy();
    //创建目标对象
    TestDao testDao= new TestDao();
    //动态生成代理类！
    TestDao proxy = (TestDao) cdp.getProxy(testDao);
    //执行方法
    proxy.save();
    System.out.println("===================");
    proxy.modify();
    System.out.println("===================");
    proxy.delete();
}
```



### 基于代理类的AOP实现

1.  写我们自己的一个切入类

```java
public class DiyPointcut {
   public void before(){
       System.out.println("---------方法执行前---------");
  }
   public void after(){
       System.out.println("---------方法执行后---------");
  }
   
}
```

 2.去spring中配置【切面定义】

```xml
<!--注册bean-->
<bean id="diy" class="com.huang.DiyPointcut"/>
<!--aop的配置-->
<aop:config>
   <!--第二种方式：使用AOP的标签实现 切面-->
   <aop:aspect ref="diy">
       <!--切入点-->
       <aop:pointcut id="diyPonitcut" expression="execution(* com.huang.*.*(..))"/>
       <!--通知-->
       <aop:before pointcut-ref="diyPonitcut" method="before"/>
       <aop:after pointcut-ref="diyPonitcut" method="after"/>
   </aop:aspect>
</aop:config>
```

> 使用ProxyFactoryBean接口

1、创建切入类,切面类实现`org.aopalliance.intercept.MethodInterceptor`接口或`MethodBeforeAdvice`等

```java
public class LoggingInterceptor implements MethodInterceptor {
    @Override
    public Object invoke(MethodInvocation invocation) throws Throwable {
        Object[] args = invocation.getArguments();

        String date1 = (new Date()).toLocaleString(); System.out.println("Interceptor 信息：[logging before ][" + date1
                + "]用户 " + args[0] + " 尝试修改个人信息...");

        Object returnObject = invocation.proceed();

        String date2 = (new Date()).toLocaleString(); System.out.println("Interceptor 信息：[logging after ]["+date2
                +"]用户 "+args[0]+" 成功修改个人信息...");

        return args;
    }
}
```

2、配置

```xml
<!--target目标-->
<bean id="userService" class="cn.edu.zjut.service.UserService" />

<!-- 增强处理定义 -->
<bean id="logInterceptor" class="cn.edu.zjut.advice.LoggingInterceptor" />

<!--设定代理-->
<bean id="logProxy"  class="org.springframework.aop.framework.ProxyFactoryBean">
    <!--设定代理的是接口-->
    <property name="proxyInterfaces">
        <value>cn.edu.zjut.service.IUserService</value>
    </property>
    <!--设定代理的目标类-->
    <property name="target">
        <ref bean="userService"/>
    </property>

    <!--设定切入的 Advice-->
    <property name="interceptorNames">
        <list>
            <value>logInterceptor</value>
        </list>
    </property>
</bean>
```





### 基于XML的AspectJ实现

> 通知类型

1. 前置通知 before， 在执行目标方法前执行
2. 后置通知 afterReturning(); 在执行目标方法后执行
3. 环绕通知 around(); 在目标方法前后都执行
4. 异常通知 afterThrowing 出线异常时执行
5. 最终通知: after();

> 方法一：单个切面类增强

1、导包一个够用。 spring-aop(注解包), spring-aspect(aspectj框架包） ,weaving.jar 织入包；

```xml
<!-- AspectJ -->
<dependency>
   <groupId>org.aspectj</groupId>
   <artifactId>aspectjweaver</artifactId>
   <version>1.9.4</version>
</dependency>
```

2、切面类

```java
package com.huang;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;

public class MyAspect {
    //前置通知
    public void before(JoinPoint jp){
        System.out.print("前置通知: ");
        System.out.println("目标类对象："+jp.getTarget()+" 被增强处理的方法："+jp.getSignature().getName());
    }
    //后置通知
    public void afterReturning(JoinPoint jp){
        System.out.print("后置通知: ");
        System.out.println(" 被增强处理的方法："+jp.getSignature().getName());
    }

    /**环绕通知
     * ProceedingJoinPoint是JoinPoint的子接口 代表可以执行的目标方法
     * @return 必须返回Object
     * @throws Throwable
     */
    public Object around(ProceedingJoinPoint pjp) throws Throwable {
        System.out.println("环绕开始");
        Object obj = pjp.proceed();
        System.out.println("环绕结束");
        return obj;
    }
    //异常通知
    public void except(Throwable e){
        System.out.println("异常通知： 程序执行异常"+e.getMessage());
    }
    //最终通知
    public void after(){
        System.out.println("最终通知");
    }
}
```

3、xml配置

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:aop="http://www.springframework.org/schema/aop"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/aop https://www.springframework.org/schema/aop/spring-aop.xsd">

    <!--定义目标对象-->
    <bean id="testDao" class="com.huang.TestDaoImpl"/>
    <!--定义切面类-->
    <bean id="MyAspect" class="com.huang.MyAspect"/>
    <!--AOP配置-->
    <aop:config>
        <!--切面-->
        <aop:aspect ref="MyAspect">
      <!--切入点 expression:通知增强哪些方法 execution(访问修饰符 返回值类型 包路径名.类名.方法名(…) 异常)-->
            <aop:pointcut id="pointcut" expression="execution(* com.huang.*.*(..))"/>
            <aop:before method="before" pointcut-ref="pointcut"/>
            <aop:after-returning method="afterReturning" pointcut-ref="pointcut"/>
            <aop:around method="around" pointcut-ref="pointcut"/>
            <aop:after-throwing method="except" pointcut-ref="pointcut" throwing="e"/>
            <aop:after method="after" pointcut-ref="pointcut"/>
        </aop:aspect>
    </aop:config>
</beans>
```

4、测试

```java
public void test1(){
    ApplicationContext appCon = new ClassPathXmlApplicationContext("beans.xml");
    TestDao testDao = (TestDao) appCon.getBean("testDao");
    testDao.save();
}
```

5、若异常处理，导包，检查语法![image-20210916104713819](https://gitee.com/heavenmei/java-study/raw/master/img/20210916104720.png)

6、结果
<img src="https://gitee.com/heavenmei/java-study/raw/master/img/20210916105030.png" alt="image-20210916105030345" style="zoom:80%;" />



> 方法二：多个切面类实现增强

```java
import org.springframework.aop.MethodBeforeAdvice;
import java.lang.reflect.Method;

public class Log implements MethodBeforeAdvice {
    /**
     * method : 要执行的目标对象的方法
     * objects : 被调用的方法的参数
     * Object : 目标对象
     */
    @Override
    public void before(Method method, Object[] objects, Object o) throws Throwable {
        System.out.print("前置通知: ");
        System.out.println("目标类对象："+o.getClass().getName()+" 被增强处理的方法："+method.getName());
    }
}
```

```java
import org.springframework.aop.AfterReturningAdvice;
import java.lang.reflect.Method;

public class AfterLog implements AfterReturningAdvice {
    /**
     * returnValue 返回值
     * method被调用的方法
     * args 被调用的方法的对象的参数
     * target 被调用的目标对象
     */
    @Override
    public void afterReturning(Object returnValue, Method method, Object[] args, Object target) throws Throwable {
        System.out.print("后置通知: ");
        System.out.println("执行了" + target.getClass().getName()
                +"的"+method.getName()+"方法,"
                +"返回值："+returnValue);
    }
}
```

最后去spring的文件中注册 , 并实现aop切入实现 , 注意导入约束 .

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:aop="http://www.springframework.org/schema/aop"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/aop https://www.springframework.org/schema/aop/spring-aop.xsd">

    <!--定义目标对象-->
    <bean id="testDao" class="com.huang.TestDaoImpl"/>
    <!--定义通知类-->
    <bean id="Log" class="com.huang.Log"/>
    <bean id="AfterLog" class="com.huang.AfterLog"/>
    <!--AOP配置-->
    <aop:config>
        <aop:pointcut id="pointcut" expression="execution(* com.huang.*.*(..))"/>
        <aop:advisor advice-ref="Log" pointcut-ref="pointcut"/>
        <aop:advisor advice-ref="AfterLog" pointcut-ref="pointcut"/>
    </aop:config>
</beans>
```

>   Spring的Aop就是将公共的业务 (日志 , 安全等) 和领域业务结合起来 , 当执行领域业务时 , 将会把公共业务加进来 . 实现公共业务的重复利用 . 领域业务更纯粹 , 程序猿专注领域业务 , <u>其本质还是动态代理</u> . 





### 基于注解开发的AspectJ

1.  注解切面类

```java
package com.huang;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class MyAspectAnnotation {
    @Pointcut("execution(* com.huang.*.*(..))")   //切入点
    private void pointcut(){}

    @Before("pointcut()")//前置通知 <aop:before method="before" pointcut-ref="pointcut"/>
    public void before(JoinPoint jp){
        System.out.print("前置通知: ");
        System.out.println("目标类对象："+jp.getTarget()+" 被增强处理的方法："+jp.getSignature().getName());
    }

    @AfterReturning("pointcut()")//后置通知
    public void afterReturning(JoinPoint jp){
        System.out.print("后置通知: ");
        System.out.println(" 被增强处理的方法："+jp.getSignature().getName());
    }

    @Around("pointcut()") //环绕通知
    public Object around(ProceedingJoinPoint pjp) throws Throwable {
        System.out.println("环绕开始");
        Object obj = pjp.proceed();
        System.out.println("环绕结束");
        return obj;
    }

    @AfterThrowing(value = "pointcut()",throwing = "e")//异常通知
    public void except(Throwable e){
        System.out.println("异常通知： 程序执行异常"+e.getMessage());
    }

    @After("pointcut()")//最终通知
    public void after(){
        System.out.println("最终通知");
    }

}

```

3.目标类标注

```java
@Repository("testDao")
public class TestDaoImpl implements TestDao{}
```

2.配置文件

```xml
<!--指定需要扫描的包，使注解生效-->
<context:component-scan base-package="com.huang"/>
<!--启动AspectJ注解支持-->
<aop:aspectj-autoproxy/>
```

**aop:aspectj-autoproxy 说明**

- 通过aop命名空间的<aop:aspectj-autoproxy />声明自动为spring容器中那些配置@aspectJ切面的bean创建代理，织入切面。当然，spring 在内部依旧采用AnnotationAwareAspectJAutoProxyCreator进行自动代理的创建工作，但具体实现的细节已经被<aop:aspectj-autoproxy />隐藏起来了
- <aop:aspectj-autoproxy />有一个proxy-target-class属性，默认为false，表示使用jdk动态代理织入增强，当配为<aop:aspectj-autoproxy  poxy-target-class="true"/>时，表示使用CGLib动态代理技术织入增强。不过即使proxy-target-class设置为false，如果目标类没有声明接口，则spring将自动使用CGLib动态代理。

<img src="https://gitee.com/heavenmei/java-study/raw/master/img/20211207150125.png" alt="image-20211207150118093" style="zoom:50%;" />

## Spring 事务管理

[Spring中的事务](http://mybatis.org/spring/zh/transactions.html)

Spring在不同的事务管理API之上定义了一个抽象层，使得开发人员不必了解底层的事务管理API就可以使用Spring的事务管理机制。Spring支持编程式事务管理和声明式的事务管理。

**编程式事务管理**

-   将事务管理代码嵌到业务方法中来控制事务的提交和回滚
-   缺点：必须在每个事务操作业务逻辑中包含额外的事务管理代码

**声明式事务管理**

-   一般情况下比编程式事务好用。
-   将事务管理代码从业务方法中分离出来，以声明的方式来实现事务管理。
-   将事务管理作为横切关注点，通过aop方法模块化。Spring中通过Spring AOP框架支持声明式事务管理。

### Spring 数据库编程

了解**Spring jdbc Template** 的使用方法，不涉及Mybatis框架。该类常用方法是`update`和`query`：

```java
public int update(String sql,Object args[]);
public List<T> query(String sql,RowMapper<T> rowMapper,Object args[]);
```

1、导入jar包：mysql驱动包，spring-jdbc、spring-tx、spring-webmvc等
2、数据库配置：

```xml
<!--指定扫描包，注解生效-->
<context:component-scan base-package="com.huang"/>

<!--配置数据库-->
<bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
    <property name="driverClassName" value="com.mysql.cj.jdbc.Driver"/>
        <property name="url" value="jdbc:mysql://localhost:3306/yiyu?useSSL=true&amp;useUnicode=true&amp;characterEncoding=utf8&amp;serverTimezone=UTC"/>
    <property name="username" value="root"/>
    <property name="password" value="123456"/>
</bean>

<!--配置JDBC模板-->
<bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
    <property name="dataSource" ref="dataSource"/>
</bean>
```

3、创建实体类、Dao接口、DaoImpl实现类

```java
@Repository("testDao")
public class TestDaoImpl implements TestDao{
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public List<login> query(String sql, Object[] param) {
        RowMapper<login> rowMapper = new BeanPropertyRowMapper<login>(login.class);
        return jdbcTemplate.query(sql,rowMapper,param);
    }
}
```

4、测试

```java
public void test(){
    ApplicationContext appCon = new ClassPathXmlApplicationContext("applicationContext.xml");
    //从容器获取增强后的目标对象
    TestDao testDao = (TestDao) appCon.getBean("testDao");

    String sql1 = "select * from login";
    List<login> list = testDao.query(sql1,null);
    for(login i:list) System.out.println(i);
}
```



### 编程式事务管理

在代码中显示调用beginTrasaction、commit、rollback等与事务处理相关的方法。

> 基于底层API的编程式事务管理

1、在上一节的数据库配置文件基础上使用DataSourceTransactionManager为数据源添加事务管理器

```xml
<!--为数据源添加事务管理器-->
<bean id="txManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
    <property name="dataSource" ref="dataSource"/>
</bean>
```

2、数据访问类

```java
@Repository("TestDaoImpl")
public class TestDaoImpl {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private DataSourceTransactionManager txManager;

    public String test(){
        //默认事务定义
        TransactionDefinition tf = new DefaultTransactionDefinition();
        //开启事务ts
        TransactionStatus ts = txManager.getTransaction(tf);
        String message = "执行成功";
        try {
            String sql = "insert into login value(?,?)";
            Object param[] = {"hhw","123"};
            jdbcTemplate.update(sql,param);
            //重复插入，主键重复
            jdbcTemplate.update(sql,param);
            //提交事务
            txManager.commit(ts);
        }catch (Exception e){
            //出现异常，事务回滚
            txManager.rollback(ts);
            message="事务回滚";
            e.printStackTrace();
        }
        return message;
    }
}
```

3、测试结果：事务回滚

> 基于TransactionTemplate的编程式事务管理

事务处理代码散落在业务逻辑代码中，破坏了原有代码的条理性，因此采用TransactionTemplate的execute方法有一个TransactionCallback接口类型的参数，该接口中定义了一个doInTransaction方法，通常以匿名内部类的方式实现TransactionCallback接口，并在其doInTransaction方法中书写业务逻辑代码。可以使用默认的事务提交和回滚规则，不需要显示调用任何事务处理的API。

1、在上一节的有数据库和事务配置的文件基础上，使用TransactionTemplate为事务管理器添加事务模板。

```xml
<!--为数据源添加事务管理器-->
<bean id="txManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
    <property name="dataSource" ref="dataSource"/>
</bean>
<!--为事务管理器添加事务模板-->
<bean id="transactionTemplate" class="org.springframework.transaction.support.TransactionTemplate">
    <property name="transactionManager" ref="txManager"/>
</bean>
```

2、修改数据访问类

```java
@Repository("TestDaoImpl")
public class TestDaoImpl {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private TransactionTemplate transactionTemplate;
    
    String message = "";
    public String test(){
        //以匿名内部类的方式实现TransactionCallback接口，使用默认的事务提交和回滚规则
        transactionTemplate.execute(new TransactionCallback<Object>() {
            @Override
            public Object doInTransaction(TransactionStatus transactionStatus) {
                String sql = "insert into login value(?,?)";
                Object param[] = {"hhw","123"};
                try{
                    jdbcTemplate.update(sql,param);
                    //重复插入，主键重复
                    jdbcTemplate.update(sql,param);
                    message="执行成功";
                }catch (Exception e){
                    message="事务回滚";
                    e.printStackTrace();
                }
                return message;
            }
        });
        return message;
    }
}
```

3、测试结果：事务回滚



### 声明式事务管理

通过AOP技术实现的事务管理，其本质是对方法前后进行拦截，然后再目标方法开始之前那创建或加入一个事务，子啊执行完目标方法之后根据执行情况提交或者回滚事务。
优点是不用子啊业务逻辑代码中参杂事务处理代码，简单是的纯业务代码不被污染，方便后期代码维护。
唯一不足时最细力度只能作用到方法级别，无法想编程式事务管理那样可以作用到代码块级别。

> 基于XML方式的声明式事务管理

1、Dao，DaoImpl略
2、Controller

```java
@Controller
public class TestController {
    @Autowired
    private TestDao testDao;

    public String test(){
        String sql = "insert into login value(?,?)";
        Object param[] = {"hhw","123"};
        String message = "执行成功";
        try {
            testDao.update(sql,param);
            //重复插入，主键重复
            testDao.update(sql,param);
        }catch (Exception e){
            message="事务回滚";
            e.printStackTrace();
        }
        return message;
    }
}
```

3、配置好事务管理器后我们需要去配置事务的通知，以及AOP

```xml
<!--编写通知声明事务-->
<tx:advice id="txAdvice" transaction-manager="txManager">
    <tx:attributes>
        <!--*表示任意方法 配置哪些方法使用什么样的事务,配置事务的传播特性-->
        <tx:method name="update" propagation="REQUIRED"/>
        <tx:method name="*" propagation="REQUIRED"/>
    </tx:attributes>
</tx:advice>

<!--编写AOP，让Spring 自动对目标对象生成代理，需要使用AspectJ表达式-->
<aop:config>
    <!--定义切入点-->
    <aop:pointcut id="txPointcut" expression="execution(* com.huang.dao.*.*(..))"/>
    <!--切面：将切入点与通知管理-->
    <aop:advisor advice-ref="txAdvice" pointcut-ref="txPointcut"/>
</aop:config>

<!--解决spring aop代理混用-->
<!--<aop:aspectj-autoproxy  proxy-target-class="true"/>-->
```

**spring事务传播特性：**

事务传播行为就是多个事务方法相互调用时，事务如何在这些方法间传播。spring支持7种事务传播行为：

-   <u>propagation_requierd：如果当前没有事务，就新建一个事务，如果已存在一个事务中，加入到这个事务中，这是最常见的选择。</u>
-   propagation_supports：支持当前事务，如果没有当前事务，就以非事务方法执行。
-   propagation_mandatory：使用当前事务，如果没有当前事务，就抛出异常。
-   propagation_required_new：新建事务，如果当前存在事务，把当前事务挂起。
-   propagation_not_supported：以非事务方式执行操作，如果当前存在事务，就把当前事务挂起。
-   propagation_never：以非事务方式执行操作，如果当前事务存在则抛出异常。
-   propagation_nested：如果当前存在事务，则在嵌套事务内执行。如果当前没有事务，则执行与propagation_required类似的操作

Spring 默认的事务传播行为是 PROPAGATION_REQUIRED，它适合于绝大多数的情况。
假设 ServiveX#methodX() 都工作在事务环境下（即都被 Spring 事务增强了），假设程序中存在如下的调用链：Service1#method1()->Service2#method2()->Service3#method3()，那么这 3 个服务类的 3 个方法通过 Spring 的事务传播机制都工作在同一个事务中。
就好比，我们刚才的几个方法存在调用，所以会被放在一组事务当中！

**错误情况：**

- org.springframework.beans.factory.UnsatisfiedDependencyException: org.springframework.beans.factory.NoSuchBeanDefinitionException: No unique bean of type

	或者java.lang.ClassCastException: com.sun.proxy.$Proxy12 cannot be cast to 

**原因：**
	设置<aop:aspectj-autoproxy  proxy-target-class="true"/>那
    `proxy-target-class`属性值决定是基于接口的还是基于类的代理被创建。

- 如果proxy-target-class 属性值被设置为<u>true，那么基于类的代理将起作用（这时需要cglib库）</u>。
- 如果proxy-target-class属值被设置为<u>false或者这个属性被省略，那么标准的JDK 基于接口的代理</u>



> 基于@Transactional注解的声明式事务管理

@Transaction注解可以作用于接口、接口方法、类以及类方法上。当作用域类上时，该类的所有public方法都将具有该类型的事务属性。不建议再接口和接口方法上使用，因为它只有再使用基于接口的代理时才会生效。

1、在配置文件配置注解驱动、数据库、JDBC模板、事务管理器后加上：

```xml
<!--为是事务管理器注册注解驱动器-->
<tx:annotation-driven transaction-manager="txManager"/>
```

2、添加注解

```java
@Repository(
@Transactional
//加上@Transactional注解就可以指定这个类受Spring的事务管理
//注意@Transactional注解只能针对public属性范围内的方法添加
public class TestDaoImpl implements TestDao {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public int update(String sql, Object[] param) {
        return jdbcTemplate.update(sql,param);
    }
}
```





## 整合Mybatis

导包 [MyBatis-Spring](http://mybatis.org/spring/zh/index.html)

![image-20210819151301472](https://gitee.com/heavenmei/java-study/raw/master/img/20210819151301.png)

> 方式一：使用SqlSession

### SqlSessionTemplate

1.  使用spring配置`beans.xml`

	```xml
	<?xml version="1.0" encoding="UTF8"?>
	<beans xmlns="http://www.springframework.org/schema/beans"
	       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
	    <!--dataSource 配置数据源：数据源有非常多，可以使用第三方的，也可使使用Spring的-->
	    <bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
	        <property name="driverClassName" value="com.mysql.cj.jdbc.Driver"/>
	        <property name="url" value="jdbc:mysql://localhost:3306/yiyu?useSSL=true&amp;useUnicode=true&amp;characterEncoding=utf8&amp;serverTimezone=UTC"/>
	        <property name="username" value="root"/>
	        <property name="password" value="123456"/>
	    </bean>
	    <!--配置SqlSessionFactory-->
	    <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
	        <property name="dataSource" ref="dataSource"/>
	        <property name="configLocation" value="classpath:mybatis-config.xml"/>
	    </bean>
	    <!--注册sqlSessionTemplate , 关联sqlSessionFactory-->
	    <bean id="sqlSession" class="org.mybatis.spring.SqlSessionTemplate">
	        <constructor-arg index="0" ref="sqlSessionFactory"/>
	    </bean>
	    <!--注册bean实现，关联sqlSession-->
	    <bean id="UserMapper" class="com.huang.dao.UserMapperImpl">
	        <property name="sqlSession" ref="sqlSession"/>
	    </bean>
	</beans>
	```

2.  编写pojo,Dao接口,Dao.xml，并配置Mybatis，mybatis-config.xml

	```xml
	<mappers>
	    <mapper resource="com/huang/dao/UserMapper.xml"></mapper>
	</mappers>
	```

3.  增加Dao接口的实现类`UserMapperImpl`；私有化sqlSessionTemplate

	```java
	package com.huang.dao;
	
	import com.huang.pojo.User;
	import org.mybatis.spring.SqlSessionTemplate;
	
	import java.util.List;
	
	public class UserMapperImpl implements UserMapper{
	    //sqlSession不用我们自己创建了，Spring来管理
	    private SqlSessionTemplate sqlSession;
	
	    public void setSqlSession(SqlSessionTemplate sqlSession) {
	        this.sqlSession = sqlSession;
	    }
	
	    public List<User> selectUser() {
	        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
	        return mapper.selectUser();
	    }
	}
	```

4.  测试

	```java
	@Test
	public void test(){
	    ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
	    UserMapper mapper = context.getBean("UserMapper",UserMapper.class);
	    List<User> user = mapper.selectUser();
	    System.out.println(user);
	}
	```


**错误**
org.springframework.beans.factory.BeanCreationException:  Cause: java.lang.IllegalArgumentException: Mapped Statements collection already contains value for com.huang.dao.UserMapper.selectUser. 
原因：有可能你的sqlSessionFactory中配置了多个xml的地址。
此外不要忘记dao再spring中的注入！！



### SqlSessionDaoSupport

`SqlSessionDaoSupport` 是一个抽象的支持类，用来为你提供 `SqlSession`。调用 `getSqlSession()` 方法你会得到一个 `SqlSessionTemplate`，之后可以用于执行 SQL 方法，就像下面这样:

1、将我们上面写的UserDaoImpl修改一下

```java
public class UserMapperImpl extends SqlSessionDaoSupport implements UserMapper{
    public List<User> selectUser() {
        UserMapper mapper = getSqlSession().getMapper(UserMapper.class);
        return mapper.selectUser();
    }
}
```

2、修改bean的配置

```xml
<bean id="UserMapper" class="com.huang.dao.UserMapperImpl">
	<property name="sqlSessionFactory" ref="sqlSessionFactory"/>
</bean>
```

3、测试

```java
@Test
public void test(){
    ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
    UserMapper mapper = context.getBean("UserMapper",UserMapper.class);
    List<User> user = mapper.selectUser();
    System.out.println(user);
}
```

**总结** : 整合到spring以后可以完全不要mybatis的配置文件，除了这些方式可以实现整合之外，我们还可以使用注解来实现，这个等我们后面学习SpringBoot的时候还会测试整合！

> 方式二：注入映射器

### MapperScannerConfigurer

与其在数据访问对象（DAO）中手工编写使用 `SqlSessionDaoSupport` 或 `SqlSessionTemplate` 的代码，还不如让 Mybatis-Spring 为你创建一个线程安全的映射器，这样你就可以直接注入到其它的 bean 中了：

1、UserMapper、UserMapper.xml、pojo类、mybatis-config.xml不变同上。UserMapperImpl文件不需要
2、bean.xml

```xml
<?xml version="1.0" encoding="UTF8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">

    <!--开启注解-->
    <context:component-scan base-package="com.huang"/>
    <!--dataSource 配置数据源：数据源有非常多，可以使用第三方的，也可使使用Spring的-->
    <bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
        <property name="driverClassName" value="com.mysql.cj.jdbc.Driver"/>
        <property name="url" value="jdbc:mysql://localhost:3306/yiyu?useSSL=true&amp;useUnicode=true&amp;characterEncoding=utf8&amp;serverTimezone=UTC"/>
        <property name="username" value="root"/>
        <property name="password" value="123456"/>
    </bean>
    <!--配置SqlSessionFactory-->
    <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
        <property name="dataSource" ref="dataSource"/>
        <property name="configLocation" value="classpath:mybatis-config.xml"/>
    </bean>
   <!--Mapper代理开发，使用Spring自动扫码Mybatis接口并装配-->
    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
        <property name="basePackage" value="com.huang.dao"/>
        <property name="sqlSessionFactoryBeanName" value="sqlSessionFactory"/>
    </bean>
</beans>
```

3、Usercontroller

```java
@Controller
public class UserController {
    @Autowired
    private UserMapper userMapper;

    public List<User> selectUser() {
        return userMapper.selectUser();
    }
}
```

4、测试成功。



## Spring源码解读

![image-20210925093358726](https://gitee.com/heavenmei/java-study/raw/master/img/20210925093405.png)

