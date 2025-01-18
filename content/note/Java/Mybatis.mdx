---
title: Mybatis
subtitle: 
layout: post
date: 2021-10-04
author: heavenmei
categories:
  - Note
description: 
tags:
  - Java
image:
---


# [Mybatis](https://mybatis.org/mybatis-3/zh/getting-started.html)

## 开发入门

### 介绍&环境

是一款优秀的<u>持久层框架</u>
它支持自定义 SQL、存储过程以及高级映射。
MyBatis 免除了几乎所有的 JDBC 代码以及设置参数和获取结果集的工作。
MyBatis 可以通过简单的 XML 或注解来配置和映射原始类型、接口和 Java POJO（Plain Old Java Objects，普通老式 Java 对象）为数据库中的记录。

> 环境

 ```xml
 <!--mybatis-->
 <dependency>
     <groupId>org.mybatis</groupId>
     <artifactId>mybatis</artifactId>
     <version>3.5.7</version>
 </dependency>
 <!--log4j-->
 <dependency>
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>
    <version>1.2.17</version>
 </dependency>
 ```

### 工作原理

<img src="https://gitee.com/heavenmei/java-study/raw/master/img/20210917180602.png" alt="image-20210917180602396" style="zoom:80%;" />

<img src="https://gitee.com/heavenmei/java-study/raw/master/img/20210806124312.png" alt="图片" style="zoom:67%;" />

### 作用域理解

**SqlSessionFactoryBuilder**

作用在于创建 SqlSessionFactory，创建成功后，SqlSessionFactoryBuilder 就失去了作用，所以它只能存在于创建 SqlSessionFactory 的方法中，而不要让其长期存在。因此 **SqlSessionFactoryBuilder 实例的最佳作用域是方法作用域**（也就是局部方法变量）。

**SqlSessionFactory**

可以被认为是一个数据库连接池，它的作用是创建 SqlSession 接口对象。<u>SqlSessionFactory 一旦被创建就应该在应用的运行期间一直存在</u>，没有任何理由丢弃它或重新创建另一个实例。 使用 SqlSessionFactory 的最佳实践是在应用运行期间不要重复创建多次，多次重建 SqlSessionFactory 被视为一种代码“坏习惯”。因此 **SqlSessionFactory 的最佳作用域是应用作用域**。有很多方法可以做到，最简单的就是使用单例模式或者静态单例模式。

**SqlSession**

如果说 SqlSessionFactory 相当于数据库连接池，那么 Sq<u>lSession 就相当于一个数据库连接（Connection 对象）</u>，你可以在一个事务里面执行多条 SQL，然后通过它的 commit、rollback 等方法，提交或者回滚事务。所以它应该存活在一个业务请求中，<u>处理完整个请求后，应该关闭这条连接，让它归还给 SqlSessionFactory</u>，否则数据库资源就很快被耗费精光，系统就会瘫痪，所以用 try...catch...finally... 语句来保证其正确关闭。**所以 SqlSession 的最佳的作用域是请求或方法作用域。**

<img src="https://gitee.com/heavenmei/java-study/raw/master/img/20210806125041.webp" alt="图片" style="zoom:67%;" />

### Mybatis执行流程

![Mybatis执行流程](https://gitee.com/heavenmei/java-study/raw/master/img/20210814115937.png)



-   



## Hello Mybatis

### 步骤

![image-20210805145733777](https://gitee.com/heavenmei/java-study/raw/master/img/20210805145733.png)

1、搭建数据库、导入MyBatis相关 jar 包
2、创建日志**log4j.properties**（可以从官网日志一节复制）

```properties
# 全局日志配置
log4j.rootLogger=ERROR, stdout
# MyBatis 日志配置
log4j.logger.org.mybatis.example.BlogMapper=TRACE
# 控制台输出
log4j.appender.stdout=org.apache.log4j.ConsoleAppender
log4j.appender.stdout.layout=org.apache.log4j.PatternLayout
log4j.appender.stdout.layout.ConversionPattern=%5p [%t] - %m%n
```

3、创建实体类pojo
4、编写Mapper接口类 （相当于Dao接口）
5、编写**Mapper.xml**配置文件（相当于接口实现类DaoImpl）<u>namespace 十分重要，不能写错！</u>

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.huang.mapper.UserMapper">
    <select id="selectUser" resultType="com.huang.pojo.User">
        select * from login
    </select>
</mapper>
```

6、编写MyBatis核心配置文件**mybatis-config.xml**

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <!--配置环境-->
    <environments default="development">
        <environment id="development">
            <!--使用JDBC事务管理-->
            <transactionManager type="JDBC"/>
            <!--配置数据源-->
            <dataSource type="POOLED">
                <property name="driver" value="com.mysql.cj.jdbc.Driver"/>
                <property name="url" value="jdbc:mysql://localhost:3306/yiyu?useSSL=true&amp;userUnicode=true&amp;characterEncoding=UTF-8&amp;serverTimezone=UTC "/>
                <property name="username" value="root"/>
                <property name="password" value="123456"/>
            </dataSource>
        </environment>
    </environments>
    <!--映射文件位置-->
    <mappers>
        <mapper resource="com/huang/mapper/UserMapper.xml"/>
    </mappers>
</configuration>
```

7、编写MyBatis工具类**MybatisUtils.java**

```java
public class MybatisUtils {
    private static SqlSessionFactory sqlSessionFactory;

    static {
        try {
            //读取配置文件
            InputStream inputStream = Resources.getResourceAsStream("mybatis-config.xml");
            //获取sqlSessionFactory对象
            sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    //获取SqlSession连接
    public static SqlSession getSqlSession(){
        return sqlSessionFactory.openSession();
    }
}
```

8、编写测试类

```java
public void test(){
        //获得SqlSession对象
        SqlSession sqlSession = MybatisUtils.getSqlSession();
        //执行SQL
        //方式一：getMapper
        UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
        List<User> userList = userMapper.selectUser();

        //方式二： 不推荐
        //List<User> userList = sqlSession.selectList("com.huang.dao.UserMapper.getUserList");

        for(User user:userList){
            System.out.println(user);
        }
        //提交事务 y
        sqlSession.commit();
        //关闭SqlSession
        sqlSession.close();
    }
```

### 错误点

1.  **错误：org.apache.ibatis.binding.BindingException: Type interface com.huang.dao.UserMapper is not known to the MapperRegistry.**

    解决：每一个Mapper.xml都需要在Mybatis核心配置文件中注册，`mybatis-config.xml`

    ```xml
     <!--每一个Mapper.xml都需要在Mybatis核心配置文件中注册-->
    <mappers>
        <mapper resource="com/huang/dao/UserMapper.xml"/>
    </mappers>
    ```

    

2.  **错误：java.lang.ExceptionInInitializerError**

    1.  解决：Maven静态资源过滤问题（**经常遇到**）

        ```xml
        <!--在build中配置resources，来防止我们资源导出失败的问题-->
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

3.  **错误：org.apache.ibatis.exceptions.PersistenceException**

    解决：异常的原因是因为pom.xml引入的mysql版本和系统安装的mysql版本时序是不一样的

    只需要在写url的时候，在最后面加上 <u>serverTimezone=UTC</u> 可以可以了.

    



## 配置解析

-   `mybatis-config.xml`【顺序不能错】

	```xml
	<?xml version="1.0" encoding="UTF-8" ?>
	<!DOCTYPE configuration
	        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
	        "http://mybatis.org/dtd/mybatis-3-config.dtd">
	<configuration>
	    <!--属性-->
	    <properties resource="db.properties"/> 
	    <!--设置-->
	    <settings>
	        <setting name="logImpl" value="STDOUT_LOGGING"/><!--标准日志工厂-->
	    </settings>
	    <!--别名-->
	    <typeAliases/> 
	    <!--类型处理器-->
	    <typeHandlers/>
	    <!--对象工厂-->
	    <objectFactory type=""/>
	    <!--插件-->
	    <plugins>
	        <plugin interceptor=""></plugin>
	    </plugins>
	    <!--配置环境-->
	    <environments default="development">
	        <environment id="development"><!--环境变量-->
	            <transactionManager type="JDBC"/><!--事务管理器-->
	            <dataSource type="POOLED"><!--数据源-->
	                <property name="driver" value="${driver}"/>
	            </dataSource>
	        </environment>
	    </environments>
	    <!--数据库厂商标识-->
	    <databaseIdProvider type=""/>
	    <!--映射器-->
	    <mappers>
	        <mapper class="com.UserMapper"/>
	    </mappers>
	</configuration>
	```

	

### 1、环境配置（environments）

MyBatis 可以配置成适应多种环境，<u>**尽管可以配置多个环境，但每个 SqlSessionFactory 实例只能选择一种环境。**</u>

```xml
<environments default="development">
 <environment id="development">
   <transactionManager type="JDBC">
     <property name="..." value="..."/>
   </transactionManager>
   <dataSource type="POOLED">
     <property name="driver" value="${driver}"/>
     <property name="url" value="${url}"/>
     <property name="username" value="${username}"/>
     <property name="password" value="${password}"/>
   </dataSource>
 </environment>
</environments>
```

-   配置MyBatis的多套运行环境，将SQL映射到多个不同的数据库上，必须指定其中一个为默认运行环境（通过default指定）

-   子元素节点：**environment**

-   -   dataSource 元素使用标准的 JDBC 数据源接口来配置 JDBC 连接对象的资源。

    -   数据源是必须配置的。

    -   有三种内建的数据源类型

        ```xml
        type="[UNPOOLED|POOLED|JNDI]"）
        ```

    -   unpooled：这个数据源的实现只是每次被请求时打开和关闭连接。

    -   **pooled**：这种数据源的实现利用“池”的概念将 JDBC 连接对象组织起来 , 这是一种使得并发 Web 应用快速响应请求的流行处理方式。

    -   jndi：这个数据源的实现是为了能在如 Spring 或应用服务器这类容器中使用，容器可以集中或在外部配置数据源，然后放置一个 JNDI 上下文的引用。

    -   数据源也有很多第三方的实现，比如dbcp，c3p0，druid等等....

    -   这两种事务管理器类型都不需要设置任何属性。

    -   具体的一套环境，通过设置id进行区别，id保证唯一！

    -   子元素节点：**transactionManager - [ 事务管理器 ]**

        ```xml
        <!-- 语法 -->
        <transactionManager type="[ JDBC | MANAGED ]"/>
        ```

    -   子元素节点：**数据源（dataSource）**

### 2、属性（properties）

实现引用配置文件。数据库这些属性都是可外部配置且可动态替换的，既可以在典型的 Java 属性文件[db.properties]中配置，亦可通过 properties 元素的子元素来传递。

**我们来优化我们的配置文件**

第一步 :在资源目录下新建一个`db.properties`

```properties
driver=com.mysql.cj.jdbc.Driver
url=jdbc:mysql://localhost:3306/mybatis?useSSL=true&userUnicode=true&characterEncoding=UTF-8&serverTimezone=UTC
username=root
password=123456
```

第二步 : 将文件导入properties 配置文件

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<!--configuration核心配置文件-->
<configuration>
    <!--引入外部配置文件-->
    <properties resource="db.properties"/>

    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"/>
            <dataSource type="POOLED">
                <!--属性配置-->
                <property name="driver" value="${driver}"/>
                <property name="url" value="${url}"/>
                <property name="username" value="${username}"/>
                <property name="password" value="${password}"/>
            </dataSource>
        </environment>
    </environments>

    <!--每一个Mapper.xml都需要在Mybatis核心配置文件中注册-->
    <mappers>
        <mapper resource="com/huang/dao/UserMapper.xml"/>
    </mappers>
</configuration>
```

-   配置文件优先级问题,优先使用外部文件

### 3、类型别名（typeAliases）

类型别名可为 Java 类型设置一个缩写名字。 它仅用于 XML 配置，意在降低冗余的全限定类名书写。

也可以指定一个包名，MyBatis 会在包名下面搜索需要的 Java Bean。每一个在包 `com.huang.pojo` 中的 Java Bean，在没有注解的情况下，会使用 Bean 的<u>首字母小写的非限定类名</u>来作为它的别名。 比如 `com.huang.pojo.User` 的别名为 `user`。

```xml
<typeAliases>
     <typeAlias type="com.huang.pojo.User" alias="User"/>
     <package name="com.huang.pojo"/>
</typeAliases>
```

若有注解，则别名为其注解值。见下面的例子：

```java
@Alias("user")
public class User {
  ...
}
```



### 4、设置（settings）

这是 MyBatis 中极为重要的调整设置，它们会改变 MyBatis 的运行时行为。

[查看帮助文档](https://mybatis.org/mybatis-3/zh/configuration.html#settings)

一个配置完整的 settings 元素的示例如下：

```xml
<settings>
  <setting name="cacheEnabled" value="true"/>
  <setting name="lazyLoadingEnabled" value="true"/>
  <setting name="multipleResultSetsEnabled" value="true"/>
  <setting name="useColumnLabel" value="true"/>
  <setting name="useGeneratedKeys" value="false"/>
  <setting name="autoMappingBehavior" value="PARTIAL"/>
  <setting name="autoMappingUnknownColumnBehavior" value="WARNING"/>
  <setting name="defaultExecutorType" value="SIMPLE"/>
  <setting name="defaultStatementTimeout" value="25"/>
  <setting name="defaultFetchSize" value="100"/>
  <setting name="safeRowBoundsEnabled" value="false"/>
  <setting name="mapUnderscoreToCamelCase" value="false"/>
  <setting name="localCacheScope" value="SESSION"/>
  <setting name="jdbcTypeForNull" value="OTHER"/>
  <setting name="lazyLoadTriggerMethods" value="equals,clone,hashCode,toString"/>
</settings>
```

### 5、映射器（mappers）

这些配置会告诉 MyBatis 去哪里找映射文件

```xml
<!-- 使用相对于类路径的资源引用 -->
<mappers>
  <mapper resource="org/mybatis/builder/AuthorMapper.xml"/>
</mappers>

<!-- 使用映射器接口实现类的完全限定类名
 	需要配置文件名称和接口名称一致，并且位于同一目录下
推荐使用-->
<mappers>
  <mapper class="org.mybatis.builder.AuthorMapper"/>
</mappers>

<!-- 将包内的映射器接口实现全部注册为映射器
 	但是需要配置文件名称和接口名称一致，并且位于同一目录下-->
<mappers>
  <package name="org.mybatis.builder"/>
</mappers>
```



## 映射器

**Mapper文件**

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
       PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
       "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.kuang.mapper.UserMapper">
   
</mapper>
```

-   namespace中文意思：命名空间，作用如下：

-   -   namespace的命名必须跟某个接口同名
    -   接口中的方法与映射文件中sql语句id应该一一对应

-   1.  namespace和子元素的id联合保证唯一  , 区别不同的mapper
    2.  绑定DAO接口
    3.  namespace命名规则 : 包名+类名

### \<select>

```xml
<select id="selectPerson" parameterType="int" resultType="hashmap">
  SELECT * FROM PERSON WHERE ID = #{id}
</select>
```

- `parameterType`:将会传入这条语句的参数的类全限定名或别名。这个属性是可选的，因为 MyBatis 可以通过类型处理器（TypeHandler）推断出具体传入语句的参数，默认值为未设置（unset）
- `resultType`:返回结果的类全限定名或别名。<u>如果返回的是集合，那应该设置为集合包含的类型</u>，而不是集合本身的类型。 resultType 和 resultMap 之间只能同时使用一个。
- `resultMap`:对外部 resultMap 的命名引用。 resultType 和 resultMap 之间只能同时使用一个。
- `flushCache`:将其设置为 true 后，只要语句被调用，都会导致本地缓存和二级缓存被清空，默认值：false。
- `useCache`:将其设置为 true 后，将会导致本条语句的结果被二级缓存缓存起来，默认值：对 select 元素为 true。
- `timeout`:这个设置是在抛出异常之前，驱动程序等待数据库返回请求结果的秒数。默认值为未设置（unset）（依赖数据库驱动）。
- `fetchSize`:这是一个给驱动的建议值，尝试让驱动程序每次批量返回的结果行数等于这个设置值。 默认值为未设置（unset）（依赖驱动）。
- `statementType`:可选 STATEMENT，PREPARED 或 CALLABLE。这会让 MyBatis 分别使用 Statement，PreparedStatement 或 CallableStatement，默认值：PREPARED。
- `resultSetType`:FORWARD_ONLY，SCROLL_SENSITIVE, SCROLL_INSENSITIVE 或 DEFAULT（等价于 unset） 中的一个，默认值为 unset （依赖数据库驱动）。

**传参方式**

1. Map接口：`Map<String,Object>`,参数用`map`	`#{key }`即可	`parameterType="map"`
2. Java Bean传递：利用pojo的Bean类传递



### 模糊查询

1.  Java代码执行的时候，传递通配符% %

	```java
	List<User> userList = userMapper.getUserLike("%李%");
	```

2.  在sql拼接中使用通配符

	```xml
	<!--考虑sql注入问题-->
	<select id="getUserLike" resultType="com.huang.pojo.User">
	    select * from user where name like "%"#{value}"%"
	</select>
	```

3.  **连接函数**

	```xml
	<select id="getProviderList" resultType="Provider">
	    select * from smbms_provider
	    <where>
	        <if test="proName != null and proName.length>0">
	            and proName like concat('%',#{proName},'%')
	        </if>
	        <if test="proCode != null and proCode.length>0">
	            and proCode like concat('%',#{proCode},'%')
	        </if>
	    </where>
	</select>
	```

​	

### 增删改

**注意：增删改需要提交事务**

```xml
<!--User实体类对象中的属性可以直接取出来	需要一一对应-->
<insert id="addUser" parameterType="com.huang.pojo.User">
    insert into user (id,name,pwd) value (#{id},#{name },#{pwd});
</insert>
<!--修改-->
<update id="updateUser" parameterType="com.huang.pojo.User">
    update user set name = #{name},pwd=#{pwd} where id=#{id};
</update>
<!--删除-->
<delete id="deleteUser" parameterType="int">
    delete from user where id = #{id};
</delete>
```

```java
//增删改需要提交事务
int res = userMapper.addUser(new User(4,"哈哈","12323"));
if(res > 0) System.out.println("插入成功");
sqlSession.commit();	//提交事务
```

- `keyProperty`:(仅适用于 insert 和 update）指定能够唯一识别对象的属性，MyBatis 会使用 getGeneratedKeys 的返回值或 insert 语句的 selectKey 子元素设置它的值，默认值：未设置（`unset`）。如果生成列不止一个，可以用逗号分隔多个属性名称。
- `keyColumn`:（仅适用于 insert 和 update）设置生成键值在表中的列名，在某些数据库（像 PostgreSQL）中，当主键列不是表中的第一列的时候，是必须设置的。如果生成列不止一个，可以用逗号分隔多个属性名称。
- `useGeneratedKeys`:（仅适用于 insert 和 update）这会令 MyBatis 使用 JDBC 的 getGeneratedKeys 方法来取出由数据库内部生成的主键（比如：像 MySQL 和 SQL Server 这样的关系型数据库管理系统的自动递增字段），默认值：false。

> 主键（自动递增）回填 & 自定义主键

如果数据库支持自动生成主键的字段（比如 MySQL 和 SQL Server）
那么你可以设置 useGeneratedKeys=”true”，然后再把 keyProperty 设置为目标属性就 OK 了。

```xml
<insert id="insertAuthor" useGeneratedKeys="true" keyProperty="id">
  insert into Author (username,password,email,bio)
  values (#{username},#{password},#{email},#{bio})
</insert>
```

对于不支持自动生成主键列的数据库和可能不支持自动生成主键的 JDBC 驱动,可以使用\<selectKey>。

```xml
<insert id="insertAuthor">
  <!--order设置BEFORE先执行设置主键语句-->
  <selectKey keyProperty="id" resultType="int" order="BEFORE">
    select if(max(id) is null ,1,max(id)+1) as newId from Author
  </selectKey>
  insert into Author
    (id, username, password, email,bio, favourite_section)
  values
    (#{id}, #{username}, #{password}, #{email}, #{bio}, #{favouriteSection,jdbcType=VARCHAR})
</insert>
```



### \<sql>

```xml
<sql id="userColumns"> ${alias}.id,${alias}.username,${alias}.password </sql>
<select id="selectUsers" resultType="map">
  select
    <include refid="userColumns"><property name="alias" value="t1"/></include>,
    <include refid="userColumns"><property name="alias" value="t2"/></include>
  from some_table t1
    cross join some_table t2
</select>
```



### \<resultMap>

ResultMap 的设计思想是，对于简单的语句根本不需要配置显式的结果映射，而对于复杂一点的语句只需要描述它们的关系就行了。

```xml
<resultMap id="UserMap" type="User">
   <!-- id为主键 -->
   <id column="id" property="id"/>
   <!-- column是数据库表的列名 , property是对应实体类的属性名 -->
   <result column="name" property="name"/>
   <result column="pwd" property="password"/>
</resultMap>

<select id="selectUserById" resultMap="UserMap">
  select id , name , pwd from user where id = #{id}
</select>
```

- `constructor`\- 用于在实例化类时，注入结果到构造方法中
	- `idArg` - ID 参数；标记出作为 ID 的结果可以帮助提高整体性能
	- `arg` - 将被注入到构造方法的一个普通结果
- `id` – 一个 ID 结果；标记出作为 ID 的结果可以帮助提高整体性能
- `result` – 注入到字段或 JavaBean 属性的普通结果
- `association`– 用于一对一、多对一关联
- `collection`– 用于一对多、多对多关联
- `discriminator`– 使用结果值来决定使用哪个 `resultMap`
	- `case`– 基于某些值的结果映射
		- 嵌套结果映射 – `case` 也是一个结果映射，因此具有相同的结构和元素；或者引用其它的结果映射

**自动映射**

你已经见过简单映射语句的示例了，但并没有显式指定 `resultMap`。比如：

```xml
<select id="selectUserById" resultType="map">
select id , name , pwd
  from user
  where id = #{id}
</select>
```

上述语句只是简单地将所有的列映射到 `HashMap` 的键上，这由 `resultType` 属性指定。虽然在大部分情况下都够用，但是 HashMap 不是一个很好的模型。你的程序更可能会使用 JavaBean作为模型。



## 嵌套查询

### 多对一（association）

- `property`:指定映射到实体类的对象属性
- `column`:数据库中的列名
- `javaType`:指定映射到实体对象属性的类型
- `select`:指定引入嵌套查询的SQL语句

#### 子查询

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
       PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
       "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.kuang.mapper.StudentMapper">

   <!--
   需求：获取所有学生及对应老师的信息
   思路：
       1. 获取所有学生的信息
       2. 根据获取的学生信息的老师ID->获取该老师的信息
       3. 思考问题，这样学生的结果集中应该包含老师，该如何处理呢，数据库中我们一般使用关联查询？
           1. 做一个结果集映射：StudentTeacher
           2. StudentTeacher结果集的类型为 Student
           3. 学生中老师的属性为teacher，对应数据库中为tid。
              多个 [1,...）学生关联一个老师=> 一对一，一对多
           4. 查看官网找到：association – 一个复杂类型的关联；使用它来处理关联查询
   -->
   <select id="getStudents" resultMap="StudentTeacher">
    select * from student
   </select>
   <resultMap id="StudentTeacher" type="Student">
       <!--association关联属性 property属性名 javaType属性类型 column在多的一方的表中的列名-->
       <association property="teacher"  column="tid" javaType="Teacher" select="getTeacher"/>
   </resultMap>
   <!--
   这里传递过来的id，只有一个属性的时候，下面可以写任何值
   association中column多参数配置：
       column="{key=value,key=value}"
       其实就是键值对的形式，key是传给下个sql的取值名称，value是片段一中sql查询的字段名。
   -->
   <select id="getTeacher" resultType="teacher">
      select * from teacher where id = #{id}
   </select>

</mapper>
```

#### 联表查询

```xml
<!--
按查询结果嵌套处理
思路：
   1. 直接查询出结果，进行结果集的映射
-->
<select id="getStudents2" resultMap="StudentTeacher2" >
  select s.id sid, s.name sname , t.name tname
  from student s,teacher t
  where s.tid = t.id
</select>

<resultMap id="StudentTeacher2" type="Student">
   <id property="id" column="sid"/>
   <result property="name" column="sname"/>
   <!--关联对象property 关联对象在Student实体类中的属性-->
   <association property="teacher" javaType="Teacher">
       <result property="name" column="tname"/>
   </association>
</resultMap>
```



### 一对多（collection）

#### 联表查询

```xml
<mapper namespace="com.kuang.mapper.TeacherMapper">

   <!--
   思路:
       1. 从学生表和老师表中查出学生id，学生姓名，老师姓名
       2. 对查询出来的操作做结果集映射
           1. 集合的话，使用collection！
               JavaType和ofType都是用来指定对象类型的
               JavaType是用来指定pojo中属性的类型
               ofType指定的是映射到list集合属性中pojo的类型。
   -->
   <select id="getTeacher" resultMap="TeacherStudent">
      select s.id sid, s.name sname , t.name tname, t.id tid
      from student s,teacher t
      where s.tid = t.id and t.id=#{id}
   </select>

   <resultMap id="TeacherStudent" type="Teacher">
       <result  property="name" column="tname"/>
       <collection property="students" ofType="Student">
           <result property="id" column="sid" />
           <result property="name" column="sname" />
           <result property="tid" column="tid" />
       </collection>
   </resultMap>
</mapper>
```

#### 子查询

```xml
<select id="getTeacher2" resultMap="TeacherStudent2">
select * from teacher where id = #{id}
</select>
<resultMap id="TeacherStudent2" type="Teacher">
   <!--column是一对多的外键 , 写的是一的主键的列名-->
   <collection property="students" javaType="ArrayList" ofType="Student" column="id" select="getStudentByTeacherId"/>
</resultMap>
<select id="getStudentByTeacherId" resultType="Student">
  select * from student where tid = #{id}
</select>
```



### 小结

1、关联-association
2、集合-collection
3、所以association是用于一对一和多对一，而collection是用于一对多的关系
4、JavaType和ofType都是用来指定对象类型的

-   JavaType是用来指定pojo中属性的类型
-   ofType指定的是映射到list集合属性中pojo的类型。

**注意说明：**

1、保证SQL的可读性，尽量通俗易懂
2、根据实际要求，尽量编写性能更高的SQL语句
3、注意属性名和字段不一致的问题
4、注意一对多和多对一 中：字段和属性对应的问题
5、尽量使用Log4j，通过日志来查看自己错误



## 动态SQL

**动态SQL指的是根据不同的查询条件 , 生成不同的Sql语句.**

### if 

```xml
<!--需求1：
根据作者名字和博客名字来查询博客！
如果作者名字为空，那么只根据博客名字查询，反之，则根据作者名来查询
select * from blog where title = #{title} and author = #{author}
-->
<select id="queryBlogIf" parameterType="map" resultType="blog">
  select * from blog where
   <if test="title != null">
      title = #{title}
   </if>
   <if test="author != null">
      and author = #{author}
   </if>
</select>
```

这样写我们可以看到，如果 author 等于 null，那么查询语句为 select * from user where title=#{title},
但是如果title为空呢？那么查询语句为 select * from user where and author=#{author}，这是错误的 SQL 语句，
如何解决呢？请看下面的 where 语句！

### trim、where、set

`prefixOverrides` 属性会忽略通过管道符分隔的文本序列（注意此例中的空格是必要的）.

```xml
<!--和 where 元素等价的自定义-->
<trim prefix="WHERE" prefixOverrides="AND |OR ">
  ...
</trim>
<!--和 set 元素等价的自定义-->
<trim prefix="SET" suffixOverrides=",">
  ...
</trim>
```

修改上面的SQL语句；

```xml
<select id="queryBlogIf" parameterType="map" resultType="blog">
  select * from blog
   <where>
       <if test="title != null">
          title = #{title}
       </if>
       <if test="author != null">
          and author = #{author}
       </if>
   </where>
</select>
```

这个“where”标签会知道如果它包含的标签中有返回值的话，它就插入一个‘where’。
此外，如果标签返回的内容是以AND 或OR 开头的，则它会剔除掉。

同理，上面的对于查询 SQL 语句包含 where 关键字，如果在进行更新操作的时候，含有 set 关键词.
set 元素会动态地在行首插入 SET 关键字，并会删掉额外的逗号（这些逗号是在使用条件语句给列赋值时引入的）。

```xml
<!--注意set是用的逗号隔开-->
<update id="updateBlog" parameterType="map">
  update blog
     <set>
         <if test="title != null">
            title = #{title},
         </if>
         <if test="author != null">
            author = #{author}
         </if>
     </set>
  where id = #{id};
</update>
```



### choose、when、otherwise

我们不想用到所有的查询条件，只想选择其中的一个，查询条件有一个满足即可，使用 choose 标签可以解决此类问题，类似于 Java 的 switch 语句

```xml
<select id="queryBlogChoose" parameterType="map" resultType="blog">
  select * from blog
   <where>
       <choose>
           <when test="title != null">
                title = #{title}
           </when>
           <when test="author != null">
              and author = #{author}
           </when>
           <otherwise>
              and views = #{views}
           </otherwise>
       </choose>
   </where>
</select>
```



### SQL片段

抽取<u>公共</u>的sql代码

**提取SQL片段：**

```xml
<sql id="if-title-author">
   <if test="title != null">
      title = #{title}
   </if>
   <if test="author != null">
      and author = #{author}
   </if>
</sql>
```

**引用SQL片段：**

```xml
<select id="queryBlogIf" parameterType="map" resultType="blog">
  select * from blog
   <where>
       <!-- 引用 sql 片段，如果refid 指定的不在本文件中，那么需要在前面加上 namespace -->
       <include refid="if-title-author"></include>
       <!-- 在这里还可以引用其他的 sql 片段 -->
   </where>
</select>
```

**注意：**
①、最好基于 单表来定义 sql 片段，提高片段的可重用性
<u>②、在 sql 片段中不要包括 where</u>



### foreach

将数据库中前三个数据的id修改为1,2,3；
需求：我们需要查询 blog 表中 id 分别为1,2,3的博客信息

```xml
<select id="queryBlogForeach" parameterType="map" resultType="blog">
  select * from blog
   <where>
       <!--
       collection:指定输入对象中的集合属性
       item:每次遍历生成的对象
       open:开始遍历时的拼接字符串
       close:结束时拼接的字符串
       separator:遍历对象之间需要拼接的字符串
       select * from blog where 1=1 and (id=1 or id=2 or id=3)
     -->
       <foreach collection="ids"  item="id" open="and (" close=")" separator="or">
          id=#{id}
       </foreach>
   </where>
</select>
```



### bind

在进行模糊查询时，如果使用`${}`拼接字符串，则无法防止SQL注入问题。如果使用字符串拼接函数或链接符合，但不同数据库的函数不同，MySql时`concat`，Oracle的链接符合`||`,因此提供bind解决这类问题。
`bind` 元素允许你在 OGNL 表达式以外创建一个变量，并将其绑定到当前的上下文。比如：

```xml
<select id="selectBlogsLike" resultType="Blog">
    <!--uname时pojo的属性名-->
  <bind name="pattern" value="'%' + uname + '%'" />
  SELECT * FROM BLOG
  WHERE title LIKE #{pattern}
</select>
```



## 使用注解开发

**本质：反射机制实现**
**底层：动态代理**

```java
public interface UserMapper {
    @Select("select * from user")
    List<User> getUser();

}
```

```xml
 <!--绑定接口-->
<mappers>
    <mapper class="com.huang.dao.UserMapper"/>
</mappers>
```

**自动提交事务**

```java
  //获取SqlSession连接
  public static SqlSession getSession(){
      return getSession(true); //事务自动提交
  }
 
  public static SqlSession getSession(boolean flag){
      return sqlSessionFactory.openSession(flag);
  }
```

【注意】确保实体类和数据库字段对应

### @Param

```java
//根据id查询用户
@Select("select * from user where id = #{id}")
User selectUserById(@Param("id") int id);
```

@Param注解用于给方法参数起一个名字。以下是总结的使用原则：

-   在方法只接受一个参数的情况下，可以不使用@Param。
-   在方法接受多个参数的情况下，建议一定要使用@Param注解给参数命名。
-   如果参数是 JavaBean ， 则不能使用@Param。
-   不使用@Param注解时，参数只能有一个，并且是Javabean。

### #与$的区别

-   \#{} 的作用主要是替换预编译语句(PrepareStatement)中的**占位符**? 【推荐使用】

	```sql
	INSERT INTO user (name) VALUES (#{name});
	INSERT INTO user (name) VALUES (?);
	```

-   ${} 的作用是直接**进行字符串替换**

	```sql
	INSERT INTO user (name) VALUES ('${name}');
	INSERT INTO user (name) VALUES ('kuangshen');
	```





## 分页

### limit实现分页

```sql
语法
SELECT * FROM table LIMIT stratIndex，pageSize

SELECT * FROM table LIMIT 5,10; // 检索记录行 6-15  

#为了检索从某一个偏移量到记录集的结束所有的记录行，可以指定第二个参数为 -1：   
SELECT * FROM table LIMIT 95,-1; // 检索记录行 96-last.  

#如果只给定一个参数，它表示返回最大的记录行数目：   
SELECT * FROM table LIMIT 5; //检索前 5 个记录行  

#换句话说，LIMIT n 等价于 LIMIT 0,n。 
```

**步骤：**

1、修改Mapper文件

```xml
<select id="selectUser" parameterType="map" resultType="user">
  select * from user limit #{startIndex},#{pageSize}
</select>
```

2、Mapper接口，参数为map

```xml
//选择全部用户实现分页
List<User> selectUser(Map<String,Integer> map);
```

3、在测试类中传入参数测试

-   推断：起始位置 =  （当前页面 - 1 ） * 页面大小

```java
//分页查询 , 两个参数startIndex , pageSize
@Test
public void testSelectUser() {
   SqlSession session = MybatisUtils.getSession();
   UserMapper mapper = session.getMapper(UserMapper.class);

   int currentPage = 1;  //第几页
   int pageSize = 2;  //每页显示几个
   Map<String,Integer> map = new HashMap<String,Integer>();
   map.put("startIndex",(currentPage-1)*pageSize);
   map.put("pageSize",pageSize);

   List<User> users = mapper.selectUser(map);

   for (User user: users){
       System.out.println(user);
  }

   session.close();
}
```



### RowBounds分页

我们除了使用Limit在SQL层面实现分页，也可以使用RowBounds在Java代码层面实现分页，当然此种方式作为了解即可。我们来看下如何实现的！

**步骤：**

1、mapper接口

2、mapper文件

3、测试类

在这里，我们需要使用`RowBounds类`

```java
@Test
public void testUserByRowBounds() {
   SqlSession session = MybatisUtils.getSession();

   int currentPage = 2;  //第几页
   int pageSize = 2;  //每页显示几个
   RowBounds rowBounds = new RowBounds((currentPage-1)*pageSize,pageSize);

   //通过session.**方法进行传递rowBounds，[此种方式现在已经不推荐使用了]
   List<User> users = session.selectList("com.kuang.mapper.UserMapper.getUserByRowBounds", null, rowBounds);

   for (User user: users){
       System.out.println(user);
  }
   session.close();
}
```



### PageHelper分页插件

了解即可，可以自己尝试使用

官方文档：https://pagehelper.github.io/



## 日志

Mybatis内置的**日志工厂**提供日志功能，具体的日志实现有以下几种工具：

-   SLF4J
-   Apache Commons Logging
-   Log4j 2
-   Log4j
-   JDK logging

具体选择哪个日志实现工具由MyBatis的内置日志工厂确定。它会使用最先找到的（按上文列举的顺序查找）。如果一个都未找到，日志功能就会被禁用。

### 标准日志实现

指定 MyBatis 应该使用哪个日志记录实现。如果此设置不存在，则会自动发现日志记录实现。

![image-20210806134015733](https://gitee.com/heavenmei/java-study/raw/master/img/20210806134022.png)

```xml
<settings>
    <setting name="logImpl" value="STDOUT_LOGGING"/><!--标准日志工厂-->
</settings>
```

测试，可以看到控制台有大量的输出！我们可以通过这些输出来判断程序到底哪里出了Bug

### Log4j

**简介：**

-   Log4j是Apache的一个开源项目
-   通过使用Log4j，我们可以控制日志信息输送的目的地：控制台，文本，GUI组件....
-   我们也可以控制每一条日志的输出格式；
-   通过定义每一条日志信息的级别，我们能够更加细致地控制日志的生成过程。最令人感兴趣的就是，这些可以通过一个配置文件来灵活地进行配置，而不需要修改应用的代码。

**使用步骤：**

1、导入log4j的包

2、配置文件编写`log4j.properties`

```properties
#将等级为DEBUG的日志信息输出到console和file这两个目的地，console和file的定义在下面的代码
log4j.rootLogger=DEBUG,console,file

#控制台输出的相关设置
log4j.appender.console = org.apache.log4j.ConsoleAppender
log4j.appender.console.Target = System.out
log4j.appender.console.Threshold=DEBUG
log4j.appender.console.layout = org.apache.log4j.PatternLayout
log4j.appender.console.layout.ConversionPattern=[%c]-%m%n

#文件输出的相关设置
log4j.appender.file = org.apache.log4j.RollingFileAppender
log4j.appender.file.File=./log/huang.log
log4j.appender.file.MaxFileSize=10mb
log4j.appender.file.Threshold=DEBUG
log4j.appender.file.layout=org.apache.log4j.PatternLayout
log4j.appender.file.layout.ConversionPattern=[%p][%d{yy-MM-dd}][%c]%m%n

#日志输出级别
log4j.logger.org.mybatis=DEBUG
log4j.logger.java.sql=DEBUG
log4j.logger.java.sql.Statement=DEBUG
log4j.logger.java.sql.ResultSet=DEBUG
log4j.logger.java.sql.PreparedStatement=DEBUG
```

3、setting设置日志实现

```xml
<settings>
   <setting name="logImpl" value="LOG4J"/>
</settings>
```

4、在程序中使用Log4j进行输出！

```java
//注意导包：org.apache.log4j.Logger
static Logger logger = Logger.getLogger(MyTest.class);

@Test
public void selectUser() {
   logger.info("info：进入selectUser方法");
   logger.debug("debug：进入selectUser方法");
   logger.error("error: 进入selectUser方法");
   SqlSession session = MybatisUtils.getSession();
   UserMapper mapper = session.getMapper(UserMapper.class);
   List<User> users = mapper.selectUser();
   for (User user: users){
       System.out.println(user);
  }
   session.close();
}
```

5、测试，看控制台输出！

-   使用Log4j 输出日志
-   可以看到还生成了一个日志的文件 【需要修改file的日志级别】







## 缓存

-   MyBatis系统中默认定义了两级缓存：**一级缓存**和**二级缓存**

-   -   默认情况下，只有一级缓存开启。（SqlSession级别的缓存，也称为本地缓存）
    -   二级缓存需要手动开启和配置，他是基于namespace级别的缓存。
    -   为了提高扩展性，MyBatis定义了缓存接口Cache。我们可以通过实现Cache接口来自定义二级缓存

### 一级缓存

一级缓存也叫本地缓存，类似一个map。

-   与数据库同一次会话期间查询到的数据会放在本地缓存中。
-   以后如果需要获取相同的数据，直接从缓存中拿，没必须再去查询数据库；

![图片](https://gitee.com/heavenmei/java-study/raw/master/img/20210815092917.png)

**一级缓存失效的四种情况**

一级缓存是SqlSession级别的缓存，是一直开启的，我们关闭不了它；
一级缓存失效情况：没有使用到当前的一级缓存，效果就是，还需要再向数据库中发起一次查询请求！

1.  sqlSession不同。<u>每个sqlSession中的缓存相互独立</u>
2.  sqlSession相同，查询条件不同。<u>当前缓存中，不存在这个数据</u>
3.  sqlSession相同，两次查询之间执行了增删改操作！<u>为增删改操作可能会对当前数据产生影响</u>
4.  sqlSession相同，手动清除一级缓存`session.clearCache();//手动清除缓存`



### [二级缓存](https://mybatis.org/mybatis-3/zh/sqlmap-xml.html#cache)

-   二级缓存也叫全局缓存，一级缓存作用域太低了，所以诞生了二级缓存

-   基于namespace级别的缓存，一个名称空间，对应一个二级缓存；

-   工作机制

-   -   一个会话查询一条数据，这个数据就会被放在当前会话的一级缓存中；
    -   如果当前会话关闭了，这个会话对应的一级缓存就没了；但是我们想要的是，会话关闭了，一级缓存中的数据被保存到二级缓存中；
    -   新的会话查询信息，就可以从二级缓存中获取内容；
    -   不同的mapper查出的数据会放在自己对应的缓存（map）中；

-   >   使用步骤

-   1、开启全局缓存 【mybatis-config.xml】

	`<setting name="cacheEnabled" value="true"/>`

-   2、去每个mapper.xml中配置使用二级缓存，这个配置非常简单；【xxxMapper.xml】

	```xml
	<cache/>
	
	官方示例=====>查看官方文档
	<cache
	 eviction="FIFO"
	 flushInterval="60000"
	 size="512"
	 readOnly="true"/>
	这个更高级的配置创建了一个 FIFO 缓存，每隔 60 秒刷新，最多可以存储结果对象或列表的 512 个引用，而且返回的对象被认为是只读的，因此对它们进行修改可能会在不同线程中的调用者产生冲突。
	```

注意：所有的实体类先实现序列化接口

>    结论

-   只要开启了二级缓存，我们在同一个Mapper中的查询，可以在二级缓存中拿到数据
-   查出的数据都会被默认先放在一级缓存中
-   只有会话提交或者关闭以后，一级缓存中的数据才会转到二级缓存中

### 缓存原理图

先二级缓存，找不到则一级缓存，否则找数据库并保存到一级缓存。

<img src="https://gitee.com/heavenmei/java-study/raw/master/img/20210815094606.png" alt="图片" style="zoom:67%;" />



### EhCache

Ehcache是一种广泛使用的java分布式缓存，用于通用缓存；

要在应用程序中使用Ehcache，需要引入依赖的jar包

```xml
<!-- https://mvnrepository.com/artifact/org.mybatis.caches/mybatis-ehcache -->
<dependency>
   <groupId>org.mybatis.caches</groupId>
   <artifactId>mybatis-ehcache</artifactId>
   <version>1.1.0</version>
</dependency>
```

在mapper.xml中使用对应的缓存即可

```xml
<mapper namespace = “org.acme.FooMapper” >
   <cache type = “org.mybatis.caches.ehcache.EhcacheCache” />
</mapper>
```

编写`ehcache.xml`文件，如果在加载时未找到/ehcache.xml资源或出现问题，则将使用默认配置。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ehcache xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="http://ehcache.org/ehcache.xsd"
        updateCheck="false">
   <!--
      diskStore：为缓存路径，ehcache分为内存和磁盘两级，此属性定义磁盘的缓存位置。参数解释如下：
      user.home – 用户主目录
      user.dir – 用户当前工作目录
      java.io.tmpdir – 默认临时文件路径
    -->
   <diskStore path="./tmpdir/Tmp_EhCache"/>
   
   <defaultCache
           eternal="false"
           maxElementsInMemory="10000"
           overflowToDisk="false"
           diskPersistent="false"
           timeToIdleSeconds="1800"
           timeToLiveSeconds="259200"
           memoryStoreEvictionPolicy="LRU"/>

   <cache
           name="cloud_user"
           eternal="false"
           maxElementsInMemory="5000"
           overflowToDisk="false"
           diskPersistent="false"
           timeToIdleSeconds="1800"
           timeToLiveSeconds="1800"
           memoryStoreEvictionPolicy="LRU"/>
   <!--
      defaultCache：默认缓存策略，当ehcache找不到定义的缓存时，则使用这个缓存策略。只能定义一个。
    -->
   <!--
     name:缓存名称。
     maxElementsInMemory:缓存最大数目
     maxElementsOnDisk：硬盘最大缓存个数。
     eternal:对象是否永久有效，一但设置了，timeout将不起作用。
     overflowToDisk:是否保存到磁盘，当系统当机时
     timeToIdleSeconds:设置对象在失效前的允许闲置时间（单位：秒）。仅当eternal=false对象不是永久有效时使用，可选属性，默认值是0，也就是可闲置时间无穷大。
     timeToLiveSeconds:设置对象在失效前允许存活时间（单位：秒）。最大时间介于创建时间和失效时间之间。仅当eternal=false对象不是永久有效时使用，默认是0.，也就是对象存活时间无穷大。
     diskPersistent：是否缓存虚拟机重启期数据 Whether the disk store persists between restarts of the Virtual Machine. The default value is false.
     diskSpoolBufferSizeMB：这个参数设置DiskStore（磁盘缓存）的缓存区大小。默认是30MB。每个Cache都应该有自己的一个缓冲区。
     diskExpiryThreadIntervalSeconds：磁盘失效线程运行时间间隔，默认是120秒。
     memoryStoreEvictionPolicy：当达到maxElementsInMemory限制时，Ehcache将会根据指定的策略去清理内存。默认策略是LRU（最近最少使用）。你可以设置为FIFO（先进先出）或是LFU（较少使用）。
     clearOnFlush：内存数量最大时是否清除。
     memoryStoreEvictionPolicy:可选策略有：LRU（最近最少使用，默认策略）、FIFO（先进先出）、LFU（最少访问次数）。
     FIFO，first in first out，这个是大家最熟的，先进先出。
     LFU， Less Frequently Used，就是上面例子中使用的策略，直白一点就是讲一直以来最少被使用的。如上面所讲，缓存的元素有一个hit属性，hit值最小的将会被清出缓存。
     LRU，Least Recently Used，最近最少使用的，缓存的元素有一个时间戳，当缓存容量满了，而又需要腾出地方来缓存新的元素的时候，那么现有缓存元素中时间戳离当前时间最远的元素将被清出缓存。
  -->

</ehcache>
```



## MyBatis Generator插件自动生成映射文件

自动生成Dao接口、pojo、mapping映射文件

1、maven配置

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.mybatis.generator</groupId>
            <artifactId>mybatis-generator-maven-plugin</artifactId>
            <version>1.3.2</version>
            <configuration>
                <!--配置文件的位置-->
                <configurationFile>src/main/resources/generator.xml</configurationFile>
                <verbose>true</verbose>
                <overwrite>true</overwrite>
            </configuration>
        </plugin>
    </plugins>
</build>
```

2、**generator.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE generatorConfiguration
        PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
        "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">
<generatorConfiguration>
    <!-- 数据库驱动:选择你的本地硬盘上面的数据库驱动包-->
    <classPathEntry  location="C:\Users\hhw13\.m2\repository\mysql\mysql-connector-java\8.0.22\mysql-connector-java-8.0.22.jar"/>
    <context id="mysqlTables"  targetRuntime="MyBatis3">
        <commentGenerator>
            <property name="suppressDate" value="true"/>
            <!-- 是否去除自动生成的注释 true：是 ： false:否 -->
            <property name="suppressAllComments" value="true"/>
        </commentGenerator>
        <!--数据库链接URL，用户名、密码 -->
        <jdbcConnection driverClass="com.mysql.cj.jdbc.Driver"
                        connectionURL="jdbc:mysql://localhost:3306/yiyu?useSSL=true&amp;useUnicode=true&amp;characterEncoding=utf8&amp;serverTimezone=UTC"
                        userId="root" password="123456">
        </jdbcConnection>
        <javaTypeResolver>
            <property name="forceBigDecimals" value="false"/>
        </javaTypeResolver>
        <!-- 生成模型的包名和位置-->
        <javaModelGenerator targetPackage="com.huang.pojo" targetProject="src/main/java">
            <property name="enableSubPackages" value="true"/>
            <property name="trimStrings" value="true"/>
        </javaModelGenerator>
        <!-- 生成映射文件的包名和位置-->
        <sqlMapGenerator targetPackage="mybatis" targetProject="src/main/resources">
            <property name="enableSubPackages" value="true"/>
        </sqlMapGenerator>
        <!-- 生成mapper位置-->
        <javaClientGenerator type="XMLMAPPER" targetPackage="com.huang.mapper" targetProject="src/main/java">
            <property name="enableSubPackages" value="true"/>
        </javaClientGenerator>
        <!-- 要生成的表 tableName是数据库中的表名或视图名 domainObjectName是实体类名 更改这两个即可-->
        <table tableName="login" domainObjectName="User"
               enableCountByExample="false" enableUpdateByExample="false" enableDeleteByExample="false" enableSelectByExample="false" selectByExampleQueryId="false"/>
    </context>
</generatorConfiguration>
```

3、运行插件
![image-20210922164325238](https://gitee.com/heavenmei/java-study/raw/master/img/20210922164325.png)







