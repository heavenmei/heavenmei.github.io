---
title: SpringBoot
subtitle: 
layout: post
date: 2021-11-11
author: heavenmei
categories:
  - Note
description: 
tags:
  - Java
image:
---


## Hello，SpringBoot

Spring官方提供了非常方便的工具让我们快速构建应用
Spring Initializr：https://start.spring.io/

**项目创建**

- 使用官网Spring Initializr 的 Web页面创建项目
- 使用 IDEA 直接创建项目，选择spring initalizr ，选择初始化的组件（初学勾选 Web 即可）

**项目结构分析**

1. 程序的主启动类（<u>一定要在同级目录下建包，否则识别不到</u>）

2. 一个 application.properties 配置文件

3. 一个 测试类

4. 一个 pom.xml

	

**打包**

<img src="https://gitee.com/heavenmei/java-study/raw/master/img/20210927091805.png" alt="image-20210927091805046" style="zoom:50%;" />

<u>错误：</u>![image-20210927091907229](https://gitee.com/heavenmei/java-study/raw/master/img/20210927091907.png)

如果遇到以上错误，可以配置打包时 跳过项目运行测试用例

```xml
<!--
    在工作中,很多情况下我们打包是不想执行测试用例的
    可能是测试用例不完事,或是测试用例会影响数据库数据
    跳过测试用例执
    -->
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-surefire-plugin</artifactId>
    <configuration>
        <!--跳过项目运行测试用例-->
        <skipTests>true</skipTests>
    </configuration>
</plugin>
```

如果打包成功，则会在target目录下生成一个 jar 包。任何地方都可以运行，在cmd中输入`java -jar 包名`



 **banner 图案**

如何更改启动时显示的字符拼成的字母，SpringBoot呢？也就是 banner 图案；
只需一步：到项目下的 resources 目录下新建一个`banner.txt `即可
图案可以到：https://www.bootschool.net/ascii 这个网站生成，然后拷贝到文件中即可！
<img src="https://gitee.com/heavenmei/java-study/raw/master/img/20210927093256.png" alt="image-20210927093255935" style="zoom:67%;" />



## 运行原理初探

### pom.xml

```xml
<!-- 父依赖 主要是管理项目的资源过滤及插件-->
<!--点进去，发现还有一个父依赖-->
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.2.5.RELEASE</version>
    <relativePath/>
</parent>

<dependencies>
    <!-- web场景启动器 web依赖：tomcat,dispatcherServlet, xml-->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <!-- springboot单元测试 -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
        <!-- 剔除依赖 -->
        <exclusions>
            <exclusion>
                <groupId>org.junit.vintage</groupId>
                <artifactId>junit-vintage-engine</artifactId>
            </exclusion>
        </exclusions>
    </dependency>
</dependencies>

<build>
    <plugins>
        <!-- 打jar包插件 -->
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
        </plugin>
    </plugins>
</build>
```



#### 父依赖

spring-boot-starter-paren点进去，发现还有一个父依赖。

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-dependencies</artifactId>
    <version>2.5.5</version>
</parent>
```

这里才是真正管理SpringBoot应用里面所有依赖版本的地方，SpringBoot的版本控制中心；
**以后我们导入依赖默认是不需要写版本；但是如果导入的包没有在依赖中管理着就需要手动配置版本了；**



#### 启动器 spring-boot-starter

```xml
<!-- web场景启动器 -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

**springboot-boot-starter-xxx**：就是spring-boot的场景启动器
**spring-boot-starter-web**：帮我们导入了web模块正常运行所依赖的组件；
SpringBoot将所有的功能场景都抽取出来，做成一个个的starter （启动器），只需要在项目中引入这些starter即可，所有相关的依赖都会导入进来 ， 我们要用什么功能就导入什么样的场景启动器即可 ；我们未来也可以自己自定starter；



### @SpringBootApplication 注解

**@SpringBootApplication**：主配置类，运行这个类的main方法来启动SpringBoot应用

- `@SpringBootConfiguration` : 	SpringBoot的配置类

  - @Configuration ：	spring配置类

- `@ComponentScan` ： 自动扫描,将这个bean定义加载到IOC容器中。它对应XML配置中的元素

- `@EnableAutoConfiguration `：开启自动配置功能

  - @AutoConfigurationPackage ：  自动配置包

    ```java
    @Import({Registrar.class})
    public @interface AutoConfigurationPackage {}
    // @import ：Spring底层注解@import ， 给容器中导入一个组件
    // Registrar.class 作用：将主启动类的所在包及包下面所有子包里面的所有组件扫描到Spring容器 ；
    ```

  - @Import({AutoConfigurationImportSelector.class}) ： 给容器导入组件

  	**AutoConfigurationImportSelector** ：自动配置导入选择器，那么它会导入哪些组件的选择器呢？

  	我们点击去这个类看源码：

  	1. 这个类中有一个这样的方法

  		```java
  		// 获得候选的配置
  		protected List<String> getCandidateConfigurations(AnnotationMetadata metadata, AnnotationAttributes attributes) {
  		    //这里的getSpringFactoriesLoaderFactoryClass（）方法
  		    //返回的就是我们最开始看的启动自动导入配置文件的注解类；EnableAutoConfiguration
  		    List<String> configurations = SpringFactoriesLoader.loadFactoryNames(this.getSpringFactoriesLoaderFactoryClass(), this.getBeanClassLoader());
  		    Assert.notEmpty(configurations, "No auto configuration classes found in META-INF/spring.factories. If you are using a custom packaging, make sure that file is correct.");
  		    return configurations;
  		}
  		```

  	2. 这个方法又调用了  SpringFactoriesLoader 类的静态方法！我们进入SpringFactoriesLoader类loadFactoryNames() 方法

  		```java
  		 public static List<String> loadFactoryNames(Class<?> factoryType, @Nullable ClassLoader classLoader) {
  		        ClassLoader classLoaderToUse = classLoader;
  		        if (classLoader == null) {
  		            classLoaderToUse = SpringFactoriesLoader.class.getClassLoader();
  		        }
  		
  		        String factoryTypeName = factoryType.getName();
  		      	//这里它又调用了 loadSpringFactories 方法
  		        return (List)loadSpringFactories(classLoaderToUse).getOrDefault(factoryTypeName, Collections.emptyList());
  		    }
  		```

  		

  	3. 我们继续点击查看 loadSpringFactories 方法

  		```java
  		private static Map<String, List<String>> loadSpringFactories(ClassLoader classLoader) {
  		    //获得classLoader ， 我们返回可以看到这里得到的就是EnableAutoConfiguration标注的类本身
  		        Map<String, List<String>> result = (Map)cache.get(classLoader);
  		        if (result != null) {
  		            return result;
  		        } else {
  		            HashMap result = new HashMap();
  		
  		            try {
  		                //去获取一个资源 "META-INF/spring.factories"
  		                Enumeration urls = classLoader.getResources("META-INF/spring.factories");
  		
  		                //将读取到的资源遍历，封装成为一个Properties
  		                while(urls.hasMoreElements()) {
  		                    URL url = (URL)urls.nextElement();
  		                    UrlResource resource = new UrlResource(url);
  		                    Properties properties = PropertiesLoaderUtils.loadProperties(resource);
  		                    Iterator var6 = properties.entrySet().iterator();
  		
  		                    while(var6.hasNext()) {
  		                        Entry<?, ?> entry = (Entry)var6.next();
  		                        String factoryTypeName = ((String)entry.getKey()).trim();
  		                        String[] factoryImplementationNames = StringUtils.commaDelimitedListToStringArray((String)entry.getValue());
  		                        String[] var10 = factoryImplementationNames;
  		                        int var11 = factoryImplementationNames.length;
  		
  		                        for(int var12 = 0; var12 < var11; ++var12) {
  		                            String factoryImplementationName = var10[var12];
  		                            ((List)result.computeIfAbsent(factoryTypeName, (key) -> {
  		                                return new ArrayList();
  		                            })).add(factoryImplementationName.trim());
  		                        }
  		                    }
  		                }
  		
  		                result.replaceAll((factoryType, implementations) -> {
  		                    return (List)implementations.stream().distinct().collect(Collectors.collectingAndThen(Collectors.toList(), Collections::unmodifiableList));
  		                });
  		                cache.put(classLoader, result);
  		                return result;
  		            } catch (IOException var14) {
  		                throw new IllegalArgumentException("Unable to load factories from location [META-INF/spring.factories]", var14);
  		            }
  		        }
  		    }
  		```

  		

  	4. 发现一个多次出现的文件：**spring.factories**，全局搜索它

  		我们根据源头打开spring.factories ， 看到了很多自动配置的文件；这就是自动配置根源所在！

![image-20220120143730962](https://gitee.com/heavenmei/java-study/raw/master/img/20220120143738.png)

所以，自动配置真正实现是从classpath中搜寻所有的META-INF/spring.factories配置文件 ，并将其中对应的 org.springframework.boot.autoconfigure. 包下的配置项，通过反射实例化为对应标注了 @Configuration的JavaConfig形式的IOC容器配置类 ， 然后将这些都汇总成为一个实例并加载到IOC容器中。



**结论**

1. SpringBoot在启动的时候从类路径下的META-INF/spring.factories中获取EnableAutoConfiguration指定的值
2. 将这些值作为自动配置类导入容器 ， 自动配置类就生效 ， 帮我们进行自动配置工作；
3. 整个J2EE的整体解决方案和自动配置都在springboot-autoconfigure的jar包中；
4. 它会给容器中导入非常多的自动配置类 （xxxAutoConfiguration）, 就是给容器中导入这个场景需要的所有组件 ， 并配置好这些组件 ；
5. 有了自动配置类 ， 免去了我们手动编写配置注入功能组件等的工作；



### SpringApplication.run

分析该方法主要分两部分，一部分是SpringApplication的实例化，二是run方法的执行；

**SpringApplication**

1. 推断应用的类型是普通的项目还是Web项目 

2. 查找并加载所有可用初始化器 ， 设置到initializers属性中

3. 找出所有的应用程序监听器，设置到listeners属性中

4. 推断并设置main方法的定义类，找到运行的主类

	

**run方法流程分析**

![图片](https://gitee.com/heavenmei/java-study/raw/master/img/20220120145031.webp)



## yaml配置注入

### 配置文件

SpringBoot使用一个全局的配置文件 ， <u>配置文件名称是固定的</u>.
**配置文件的作用 ：**修改SpringBoot自动配置的默认值，因为SpringBoot在底层都给我们自动配置好了.

> - application.properties
> 	- 语法结构 ：key=value
> - application.yml
> 	- 语法结构 ：key：空格 value



### yaml语法

说明：语法要求严格！

1. <u>空格不能省略</u>
2. <u>以缩进来控制层级关系，只要是左边对齐的一列数据都是同一个层级的。</u>
3. <u>属性和值的大小写都是十分敏感的。</u>



**字面量：普通的值  [ 数字，布尔值，字符串  ]**

字面量直接写在后面就可以 ， 字符串默认不用加上双引号或者单引号；

```yaml
k: v
```

注意：

- “ ” 双引号，不会转义字符串里面的特殊字符 ， 特殊字符会作为本身想表示的意思；

	比如 ：name: "kuang \n shen"  输出 ：kuang  换行  shen

- '' 单引号，会转义特殊字符 ， 特殊字符最终会变成和普通字符一样输出

	比如 ：name: ‘kuang \n shen’  输出 ：kuang  \n  shen

	

**对象、Map（键值对）**

```yaml
student:
    name: haiwen
    age: 3
    
# 行内写法
student: {name: haiwen,age: 3}
```

**数组（ List、set ）**

用 - 值表示数组中的一个元素,比如：

```yaml
pets:
 - cat
 - dog
 - pig

# 行内写法
pets: [cat,dog,pig]
```



### 注入配置文件

yaml文件更强大的地方在于，他可以给我们的实体类直接注入匹配值！

1. 编写实体类

2. 编写yaml配置（key值和属性值保持一致，否则为null）

	```yaml
	dog:
	  name: ahuang
	  age: 12
	```

3. 实体类+`@ConfigurationProperties(prefix = "dog")`

	```java
	@Component
	@Data
	@ConfigurationProperties(prefix = "dog")
	public class Dog {
	    private String name;
	    private Integer age;
	}
	```

4. 导入配置注解处理器

	```xml
	<dependency>
	    <groupId>org.springframework.boot</groupId>
	    <artifactId>spring-boot-configuration-processor</artifactId>
	    <optional>true</optional>
	</dependency>
	```



**加载配置文件**

- `@ConfigurationProperties`：默认从全局配置文件中获取值

- `@PropertySource`：加载指定的配置文件

	```java
	@PropertySource(value = "classpath:application.yaml")
	public class Dog {
	    @Value("${name}")
	    private String name;
	    @Value("${age}")
	    private Integer age;
	}
	```

**配置文件占位符**

配置文件还可以编写占位符生成随机数

```yaml
person:
  name: qinjiang${random.uuid} # 随机uuid
  age: ${random.int}  # 随机int
  happy: false
  birth: 2000/01/01
  maps: {k1: v1,k2: v2}
  lists:
    - code
    - girl
    - music
  dog:
    name: ${person.name}_旺财
    age: 1
```



### JSR303数据校验

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
```

```java
@Validated //开启数据校验
public class Person {
    @Email(message = "邮件格式错误")
    private String name;
}
```

![image-20220121103502912](https://gitee.com/heavenmei/java-study/raw/master/img/20220121103503.png)

**常见参数**

```java
@Null 验证对象是否为null
@NotNull 验证对象是否不为null, 无法查检长度为0的字符串
@NotBlank 检查约束字符串是不是Null还有被Trim的长度是否大于0,只对字符串,且会去掉前后空格.
@NotEmpty 检查约束元素是否为NULL或者是EMPTY.

Booelan检查
@AssertTrue 验证 Boolean 对象是否为 true
@AssertFalse 验证 Boolean 对象是否为 false

长度检查
@Size(min=, max=) 验证对象（Array,Collection,Map,String）长度是否在给定的范围之内
@Length(min=, max=) string is between min and max included.

日期检查
@Past 验证 Date 和 Calendar 对象是否在当前时间之前
@Future 验证 Date 和 Calendar 对象是否在当前时间之后
@Pattern 验证 String 对象是否符合正则表达式的规则
```



### 多环境切换

**profile**是Spring对不同环境提供不同配置功能的支持，可以通过激活不同的环境版本，实现快速切换环境；

我们在主配置文件编写的时候，文件名可以是 `application-{profile}.properties/yml` , 用来指定多个环境版本；
例如：

- application-test.properties 代表测试环境配置

- application-dev.properties 代表开发环境配置

但是Springboot并不会直接启动这些配置文件，它**默认使用application.properties主配置文件**；
我们需要通过一个配置来选择需要激活的环境：

```properties
#比如在配置文件中指定使用dev环境，我们可以通过设置不同的端口号进行测试；
#我们启动SpringBoot，就可以看到已经切换到dev下的配置了；
spring.profiles.active=dev
```

> yaml的多文档块

和properties配置文件中一样，但是使用yml去实现不需要创建多个配置文件，更加方便了 !
<u>注意：如果yml和properties同时都配置了端口，并且没有激活其他环境 ， 默认会使用properties配置文件的！</u>

```yaml
server:
  port: 8081
#选择要激活那个环境块
spring:
  profiles:
    active: prod

---
server:
  port: 8083
spring:
  profiles: dev #配置环境的名称


---

server:
  port: 8084
spring:
  profiles: prod  #配置环境的名称
```



> 配置文件加载位置

   SpringBoot应用启动时会扫描以下位置的主配置文件(application.properties/application.yml)，作为应用的默认配置文件，且<u>优先级由高到底</u>：

1. 当前项目文件路径下的config文件夹——file/config/
2. 当前项目文件路径下——file/
3. 类路径下的config文件夹——classpath/config/
4. 类路径下——classpath/

 以上四个路径下的配置文件是有优先级的，但是并非低优先级的配置文件不会被加载，而是**全部的配置文件都会被加载**，出现相同配置的时候以高优先级的为准，即**高优先级会覆盖低优先级的配置，不相同的配置项会形成互补**

**例如：**
若在以上四个位置的application.properties文件中都配置了server.servlet.context-path来修改应用的访问根地址，则会先以file/config/的配置为准，若file/config/中没有配置该项或者该文件夹下没有主配置文件则再以file/下的主配置文件为准，以此类推直到类路径下的主配置文件：

```properties
# 配置项目的访问路径
server.servlet.context-path=/springboot
```



> 拓展，运维小技巧

指定位置加载配置文件，我们还可以通过·spring.config.location·来改变默认的配置文件位置

项目打包好以后，我们可以使用命令行参数的形式，启动项目的时候来指定配置文件的新位置；这种情况，一般是后期运维做的多，相同配置，外部指定的配置文件优先级最高。

```bash
java -jar spring-boot-config.jar --spring.config.location=F:/application.properties
```





## 自动配置原理










## 相关注解

### Java注解

```java
//注解定义
public @interface TestAnnotation {
}
//注解使用
@TestAnnotation
public class Test(){
}
```

**元注解**（五种）

- `@Retention(RetentionPolicy.RUNTIME)`：该注解存活时间
	- RetentionPolicy.SOURCE：注解只保留在源码阶段，在编译器进行编译时会被丢弃
	- RetentionPolicy.CLASS：注解被保留到编译进行的时候，而不会被加载到JVM中
	- RetentionPolicy.RUNTIME：注解可以保留到程序运行的时候，会被加载到JVM中
- `@Documented`：注解内容会被Javadoc工具提取成文档
- `@Target({ElementType.TYPE})`：注解用于说什么地方，如类型、方法、域等
	- ElementType.TYPE：对接口、类、枚举、注解等任意类型的注解
	- ElementType.FIELD：对字段、枚举常量的注解
	- ElementType.METHOD：对方法的注解
	- ElementType.PARAMETER：对方法参数的注解
	- ElementType.CONSTRUCTOR：对构造函数的注解
	- ElementType.LOCAL_VARIABLE：对局部变量的注解
	- ElementType.ANNOTATION_TYPE：对注解类型的注解
	- ElementType.PACKAGE：对包的注解
- `@Inherited`：被其注解过的注解作用域父类后，子类会自动继承父类的注解
- `@Repeatable`：java 1.8引入的注解，可以重复多次应用注解

**预置的基本注解**

- `@Deprecated`：标记过时的元素
- `@Suppress Warnings`：阻止警告
- `@Override`：子类重写父类（接口）的对应方法
- `@Safe Varargs`：标识参数安全类型
- `@FunctionalInterface`：指定某个接口必须是函数式接口（只有一个抽象方法），否则会编译错误



### Spring注解

- `@Component`、`@Repository`、`@Service`、`@Controller`：标记类
- `@Autowired`类型、`@Qualifier`配合按名称、`@Resource(name = "",type="")`名称、`@scope`作用域
- `@RequestMapping(value="",method=RequestMethod.POST)`、`@RequestParam(value="",required="true")`
- `@ResponesBody`：返回字符串
- `@Transational`：事务
- `@ModelAttribute`：声明在属性上，表示该属性的值来源于model里queryBean，并保存到model里；声明在方法上，表示返回值保存到model里，或者注解一个非请求处理方法



### SpringBoot注解

`@SpringBootApplication`等价于==>

- `@SpringBootConfiguration `: SpringBoot的配置类
	- @Configuration： @Component
- `@EnableAutoConfiguration` ：开启自动配置功能
	- @AutoConfigurationPackage ：  自动配置包	@Import({Registrar.class})： 自动配置“包注册”
	- @Import({AutoConfigurationImportSelector.class}) ： 自动配置导入选择器
- `@ComponentScan` ： 自动扫描


- `@RestController`:注解@Controller和@ResponseBody的合集，表示被注解的对象是REST风格的Bean，将方法返回值直接填入HTTP响应正文中









