---
title: JavaSE
subtitle: 
layout: post
date: 2021-10-01
author: heavenmei
categories:
  - Note
description: 
tags:
  - Java
image:
---


# Java基础

### JDK切换

1. 下载jdk： https://www.oracle.com/java/technologies/javase-downloads.html

2. 更改注册表 

	快捷键window + r ,输入regedit,回车进入注册表编辑器。找到这个目录：HKEY_LOCAL_MACHINE\SOFTWARE\JavaSoft\Java Runtime Environment ，右击CurrentVersion，选择修改。

3. 将jdk\bin中的 Java、javaw、javaws三个文件复制替换到C:\Windows\System32目录和 C:\Windows\SysWOW64 

4. 修改JAVA_HOME路径。



## Date 日期类

- 包：`java.util.Date`中的Date类而<u>不是java.sql.Date</u>
- 时间原点是1970年1月1日 8点0分0秒，每过一毫秒，就+1。
- `getTime()`:一个long型整数，代表从从1970.1.1 08:00:00:000 开始 每经历一毫秒，增加1
- `System.currentTimeMillis() `当前日期的毫秒数,和getTime() 和是一样的

```java
Date date = new Date();
System.out.println("当前时间："+date);
//当前时间：Tue Jul 27 10:39:09 CST 2021

Date date1 = new Date(5000);
System.out.println("从1970年1月1日 早上8点0分0秒 开始经历了5秒的时间:"+date1);
//从1970年1月1日 早上8点0分0秒 开始经历了5秒的时间:Thu Jan 01 08:00:05 CST 1970

System.out.println("getTime()返回值："+date.getTime());
//getTime()返回值：1627354643843

System.out.println("System.currentTimeMillis() 返回值: "+System.currentTimeMillis());
//System.currentTimeMillis() 返回值: 1627354741952
```



### SimpleDateFormat 日期格式化类

- 日期转字符串`format()` 模式（**yyyy-MM-dd HH:mm:ss SSS**）

```java
//y 代表年
//M 代表月
//d 代表日
//H 代表24进制的小时
//h 代表12进制的小时
//m 代表分钟
//s 代表秒
//S 代表毫秒
SimpleDateFormat sdf =new SimpleDateFormat("yyyy-MM-dd HH:mm:ss SSS" );
Date d= new Date();
String str = sdf.format(d);
System.out.println("当前时间通过 yyyy-MM-dd HH:mm:ss SSS 格式化后的输出: "+str);
//当前时间通过 yyyy-MM-dd HH:mm:ss SSS 格式化后的输出: 2021-07-27 11:05:08 801

SimpleDateFormat sdf1 =new SimpleDateFormat("yyyy-MM-dd" );
Date d1= new Date();
String str1 = sdf1.format(d1);
System.out.println("当前时间通过 yyyy-MM-dd 格式化后的输出: "+str1);
//当前时间通过 yyyy-MM-dd 格式化后的输出: 2021-07-27
```

- 字符串转日期`parse()`

  模式（yyyy/MM/dd HH:mm:ss）需要和字符串格式<u>保持一致</u>，如果不一样就会抛出解析异常ParseException

```java
SimpleDateFormat sdf =new SimpleDateFormat("yyyy/MM/dd HH:mm:ss" );
String str = "2016/1/5 12:12:12";

try {
    Date d = sdf.parse(str);
    System.out.printf("字符串 %s 通过格式  yyyy/MM/dd HH:mm:ss %n转换为日期对象: %s",str,d.toString());
    //字符串 2016/1/5 12:12:12 通过格式  yyyy/MM/dd HH:mm:ss 	
    //转换为日期对象: Tue Jan 05 12:12:12 CST 2016
} catch (ParseException e) {
    // TODO Auto-generated catch block
    e.printStackTrace();
}
```



### Calendar 日历类

常用于进行“翻日历”，比如**下个月的今天是多久**

- `getInstance()`:获取日历对象
- `getTime()`、`setTime(日期对象)`：获取日期，设置时期
- `add(年月日,数字)`：Calendar.YEAR/MONTH/DATE，

**Calendar与Date转换**

```java
SimpleDateFormat sdf = new SimpleDateFormat("yyy-MM-dd HH:mm:ss");
Date now = new Date();

//采用单例模式获取日历对象Calendar.getInstance();
Calendar c = Calendar.getInstance();
//通过日历对象得到日期对象
Date d = c.getTime();

//当前时间
c.setTime(now); //把这个日历，调成当前日期
System.out.println("当前日期："+sdf.format(c.getTime()));

// 下个月的今天
c.setTime(now);
c.add(Calendar.MONTH, 1);
System.out.println("下个月的今天:\t" +sdf.format(c.getTime()));

// 去年的今天
c.setTime(now);
c.add(Calendar.YEAR, -1);
System.out.println("去年的今天:\t" +sdf.format(c.getTime()));

// 上个月的第三天
c.setTime(now);
c.add(Calendar.MONTH, -1);
c.set(Calendar.DATE, 3);
System.out.println("上个月的第三天:\t" +sdf.format(c.getTime()));
```



## Lambda表达式

**函数式接口**：只包含<u>唯一一个</u>抽象方法的接口,可以用lambda表达式来创建该接口的对象

例如：多线程Runnable接口

`(参数) -> {表达式}`

### 推导过程

```java
/*
推导lambda表达式
 */
public class TestLambda {
    //3、静态内部类
    static class Like2 implements ILike{
        @Override
        public void lambda() {
            System.out.println("I like lambda2");
        }
    }


    public static void main(String[] args) {
        ILike like = new Like();
        like.lambda();

        like = new Like2();
        like.lambda();

        //4、局部内部类
        class Like3 implements ILike{
            @Override
            public void lambda() {
                System.out.println("I like lambda3");
            }
        }

        like = new Like3();
        like.lambda();


        //5、匿名内部类 没有类的名称，必须借助接口或者父类
        like = new ILike() {
            @Override
            public void lambda() {
                System.out.println("I like lambda4");
            }
        };
        like.lambda();


        //6、用lambda简化
        like = () ->{
            System.out.println("I like lambda5");
        };
        like.lambda();

    }
}


//1、定义一个函数式接口
interface ILike{
    void lambda();
}

//2、实现类
class Like implements ILike{
    @Override
    public void lambda() {
        System.out.println("I like lambda");
    }
}
```



### 简化总结

```java
/*
总结：
    1、lambda表达式只能有一行代码的情况下才能简化成一行
    2、如果有多好就用代码块{花括号}
    3、前提是函数式接口
    4、多个参数也可以去掉参数类型，要去掉就都去掉，必须加括号
 */
public class TestLambda2 {
    public static void main(String[] args) {

        //1、lambda表达式简化
        ILove love =  (int a)->{
            System.out.println("I Love you --> "+a);
        };

        //简化1：参数类型
        love = (a) ->{
            System.out.println("I Love you --> "+a);
        };
        //简化2：括号
        love = a -> {
            System.out.println("I Love you --> "+a);
        };
        //简化3：花括号
        love = a -> System.out.println("I Love2 you --> "+a);

        love.love(520);

    }
}
interface ILove{
    void love(int a);
}

```







# IO



![IO体系](https://gitee.com/heavenmei/java-study/raw/master/img/20210805114950.png)

## 字符流&字节流 区别

- 读写单位不同：字节流以<u>字节（8bit）</u>为单位，字符流以<u>字符</u>为单位，根据码表映射字符，一次可能读多个字节。

- 处理对象不同：字节流能处理所有类型的数据（如图片、avi等），而字符流只能处理字符类型的数据。

- 字节流：一次读入或读出是8位二进制。使用字节流时，即使流没有关闭，最终也可以输出到文件；

- 字符流：一次读入或读出是16位二进制<u>。使用字符流时，流关闭时 会强制性的将缓冲区内容写到文件中，如果没有关闭流，文件中就不会有内容输出。</u>


字符流的由来： 因为数据编码的不同，而有了对字符进行高效操作的流对象。本质其实就是基于字节流读取时，去查了指定的码表。

设备上的数据无论是图片或者视频，文字，它们都以二进制存储的。二进制的最终都是以一个8位为数据单元进行体现，所以计算机中的最小数据单元就是字节。意味着，字节流可以处理设备上的所有数据，所以字节流一样可以处理字符数据。

**结论：只要是处理纯文本数据，就优先考虑使用字符流。 除此之外都使用字节流。**



## InputStream & OutStream

### InputStream	

| 常用方法                                     | 描述                                                         |
| -------------------------------------------- | ------------------------------------------------------------ |
| public abstract int read( )                  | 读取一个byte的数据，返回值是高位补0的**int类型值**。<br /><u>若返回值=-1说明没有读取到任何字节读取工作结束</u>。 |
| public int read(byte b[ ])                   | 读取数据放到b数组中。返回值是读取的字节数。                  |
| public int read(byte b[ ], int off, int len) | 从输入流中最多读取len个字节的数据，存放到偏移量为off的b数组中 |
| public int available( )                      | 返回输入流中可以读取的字节数。                               |
| public int close( )                          | 使用完后，必须对我们打开的流进行关闭                         |

**主要子类**

-   FileInputStream：把一个文件作为InputStream，实现对文件的读取操作     

-   ByteArrayInputStream：把内存中的一个缓冲区作为InputStream使用 

-   StringBufferInputStream：把一个String对象作为InputStream 

-   PipedInputStream：实现了pipe的概念，主要在线程中使用 

-   SequenceInputStream：把多个InputStream合并为一个InputStream 



### OutputStream

| 常用方法                                       | 描述                                          |
| ---------------------------------------------- | --------------------------------------------- |
| public void write(byte b[ ])                   | 将参数b中的字节写到输出流                     |
| public void write(byte b[ ], int off, int len) | 将参数b的从偏移量off开始的len个字节写到输出流 |
| public abstract void write(int b)              | 先将int转换为byte类型，把低字节写入到输出流中 |
| public void flush( )                           | 将数据缓冲区中数据全部输出，并清空缓冲区      |
| public void close( )                           | 关闭输出流并释放与流相关的系统资源            |

**主要子类**

-  ByteArrayOutputStream：把信息存入内存中的一个缓冲区中 

-  FileOutputStream：把信息存入文件中 

-  PipedOutputStream：实现了pipe的概念，主要在线程中使用 

-  SequenceOutputStream：把多个OutStream合并为一个OutStream 



**注：流结束的判断：方法read()的返回值为-1时；readLine()的返回值为null时。**



## 文件流

### 文件类 File

> 创建文件

```java
// 绝对路径
File f1 = new File("d:/LOLFolder");
// 相对路径,相对于工作目录，如果在eclipse中，就是项目目录
File f2 = new File("LOL.exe");
// 把f1作为父目录创建文件对象
File f3 = new File(f1, "LOL.exe");

System.out.println("f3的绝对路径：" + f3.getAbsolutePath());
```

> 文件常用方法

```java
//文件名
String name = f1.getName();
//绝对路径字符串
String absolutePath = f1.getAbsolutePath();
//绝对路径
File absoluteFile = f1.getAbsoluteFile();
//获取文件大小
long length = f1.length();
//父文件路径
File parentFile = f1.getParentFile();
//父文件路径字符串
String parent = f1.getParent();
//获取文件夹大小
long totalSpace = f1.getTotalSpace();
//文件最后修改时间
long time = f.lastModified();
Date d = new Date(time);
System.out.println("获取文件的最后修改时间："+d);
//设置文件修改时间为1970.1.1 08:00:00
f.setLastModified(0);
//文件重命名	renameTo方法用于对物理文件名称进行修改，但是并不会修改File对象的name属性
f.renameTo(f2);
// 以字符串数组的形式，返回当前文件夹下的所有文件（不包含子文件及子文件夹）
String[] list = f.list();
for (String s : list)  System.out.println(s);
// 以文件数组的形式，返回当前文件夹下的所有文件（不包含子文件及子文件夹）
File[] files = f.listFiles();
for (File file : files)  System.out.println(file.getName());
// 创建文件夹，如果父文件夹skin不存在，创建就无效
f.mkdir();
// 创建文件夹，如果父文件夹skin不存在，就会创建父文件夹
f.mkdirs();
// 创建一个空文件,如果父文件夹skin不存在，就会抛出异常
f.createNewFile();
// 所以创建一个空文件之前，通常都会创建父目录
f.getParentFile().mkdirs();
// 列出所有的盘符c: d: e: 等等
f.listRoots();
// 刪除文件
f.delete();
// JVM结束的时候，刪除文件，常用于临时文件的删除
f.deleteOnExit();
```



### FileInputStream

> FileInputStream

```java
import java.io.FileInputStream;
import java.io.IOException;

public class A1 {
    public static void main(String[] args) throws IOException {
        String filePath = "a.txt";
        FileInputStream fis = new FileInputStream(filePath);
        int a;
        String result = "";
        // 流结束的判断：方法read()的返回值为-1时；readLine()的返回值为null时。
        while ((a = fis.read()) != -1) {
            result += a;
        }
        System.out.println(result);
        /*返回值是 int 类型的，会将取出来的一个字节高位会补 0 成一个 int 型。所以输出来的应该这个数据的 ASCII 码。*/
    }
}

```

结果：

[![26rcNT.md.png](https://gitee.com/heavenmei/java-study/raw/master/img/20210805115009.png)](https://imgtu.com/i/26rcNT)

分析：

1.我们看到输入哈，输出?，但这并不是我们想要的。为什么会这样呢？我们来看一下 ? 的 ASCII 码，刚好是 229，这我们就知道它只取了第一字节ASCII码对应的字符。

2.<u>会输出一些整数即 ASCII 码</u>，因为读的时候是一个字节一个字节的读，而中文又不止一个字节，到底要几个字节来表示，这要取决于编码集（我这里的是拆成了三个字节，两个字节是用来标记一行的）。反正会拆成几个字节来读。

**中文转换**

```java
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

public class A1 {
    public static void main(String[] args) throws IOException {
        File f = new File("a.txt");
        FileInputStream fis = new FileInputStream(f);
        byte[] all = new byte[(int) f.length()];
        fis.read(all);

        //文件中读出来的数据是
        System.out.println("文件中读出来的数据是：");
        for (byte b : all)
        {
            int i = b&0x000000ff;  //只取16进制的后两位
            System.out.println(Integer.toHexString(i));
        }
        System.out.println("把这个数字，放在UTF-8的棋盘上去：");
        String str = new String(all,"UTF-8");
        System.out.println(str);

    }
}
```



###  FileoutStream

>  FileoutStream

| 用法                                         | 描述                                                         |
| -------------------------------------------- | ------------------------------------------------------------ |
| FileOutputStream(File file/ String filepath) | 创建一个向指定 File或String 对象表示的文件中写入数据的文件输出流。 |
| FileOutputStream(File file, boolean append)  | append表示内容是否追加                                       |

**注：**

（1）文件中写数据时，若文件已经存在，则覆盖存在的文件；

（2）读/写操作结束时，应调用close方法关闭流。

```java
import java.io.FileOutputStream;
import java.io.IOException;

public class A1 {
    public static void main(String[] args) throws IOException {
        String filePath = "a.txt";
        FileOutputStream fos = new FileOutputStream(filePath);
        int a;
        while ((a = System.in.read()) != -1) {
            fos.write(a);
        }
    }
}
```



### 字符流读取

> FileReader

字符流读取，FileReader 是Reader子类

```java
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

public class A1 {
    public static void main(String[] args) throws IOException {
        String filePath = "a.txt";
        File file= new File(filePath);
        FileReader fr = new FileReader(file);
        char a[] = new char[(int) file.length()];
        fr.read(a);//看源码
        for(char b : a){
            System.out.print(b);
        }

    }
}
```

> FileWriter

```java
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class A1 {
    public static void main(String[] args) throws IOException {
        String filePath = "a.txt";
        File file= new File(filePath);
        FileWriter fw = new FileWriter(file);
        String data = "abcdefg1234567890";
        char a[] = data.toCharArray();
        fw.write(a);
        fw.flush();//必须清空缓存流
    }
}
```

> 中文转换

FileReader得到的是字符，所以一定是已经把字节**根据某种编码识别成了字符**了
而FileReader使用的编码方式是Charset.defaultCharset()的返回值，如果是中文的操作系统，就是GBK
FileReader是不能手动设置编码方式的，为了使用其他的编码方式，只能使用`InputStreamReader`来代替，像这样：

`new InputStreamReader(new FileInputStream(f),Charset.forName("UTF-8")); `

```java
import java.io.*;
import java.nio.charset.Charset;

public class A1 {
    public static void main(String[] args) throws IOException {
        File f = new File("a.txt");
        System.out.println("默认编码方式:"+ Charset.defaultCharset());

        //FileReader是不能手动设置编码方式的，为了使用其他的编码方式，只能使用InputStreamReader来代替
        //并且使用new InputStreamReader(new FileInputStream(f),Charset.forName("UTF-8")); 这样的形式
        InputStreamReader isr = new InputStreamReader(new FileInputStream(f),Charset.forName("UTF-8"));
        char[] cs = new char[(int) f.length()];
        isr.read(cs);
        System.out.printf("InputStreamReader 指定编码方式UTF-8,识别出来的字符是：%n");
        System.out.println(new String(cs));

    }
}
```



## 缓冲流

### 缓冲流 BufferedInputStream/ BufferedOutputStream（也称包装流）

首先抛出一个问题，有了InputStream为什么还要有BufferedInputStream?

`BufferedInputStream`和`BufferedOutputStream`这两个类分别是`FilterInputStream`和`FilterOutputStream`的子类，作为装饰器子类，使用它们可以防止每次读取/发送数据时进行实际的写操作，代表着使用缓冲区。

我们有必要知道不带缓冲的操作，每读一个字节就要写入一个字节，由于涉及磁盘的IO操作相比内存的操作要慢很多，所以不带缓冲的流效率很低。带缓冲的流，可以一次读很多字节，但不向磁盘中写入，只是先放到内存里。等凑够了缓冲区大小的时候一次性写入磁盘，这种方式可以减少磁盘操作次数，速度就会提高很多！

<u>同时正因为它们实现了缓冲功能，所以要注意在使用`BufferedOutputStream`写完数据后，要调用`flush()`方法或`close()`方法，强行将缓冲区中的数据写出。否则可能无法写出数据。与之相似还`BufferedReader`和`BufferedWriter`两个类。</u>

现在就可以回答在本文的开头提出的问题：

`BufferedInputStream`和`BufferedOutputStream`类就是实现了缓冲功能的输入流/输出流。使用带缓冲的输入输出流,效率更高,速度更快。

#### 总结：

- `BufferedInputStream` 是缓冲输入流。它继承于`FilterInputStream`。
- `BufferedInputStream` 的作用是为另一个输入流添加一些功能，例如提供“缓冲功能”以及支持`mark()`标记和`reset()`重置方法。
- `BufferedInputStream` 本质上是通过一个内部缓冲区数组实现的。例如，在新建某输入流对应的`BufferedInputStream`后，当我们通过`read()`读取输入流的数据时，`BufferedInputStream`会将该输入流的数据分批的填入到缓冲区中。每当缓冲区中的数据被读完之后，输入流会再次填充数据缓冲区；如此反复，直到我们读完输入流数据位置。



| 使用                                              |                                        |
| ------------------------------------------------- | -------------------------------------- |
| BufferedInputStream(InputStream in, int size)     | 使用指定buf大小、底层字节输入流构建bis |
| BufferedOutputStream(OutputStream out, int size); | 使用指定大小、底层字节输出流构造bos    |

#### 注意：

我们需要手动的去刷新缓冲区。调用包装流的 `flush()` 方法。这个方法的作用就是将缓存区的内容写入到硬盘上并清空缓存区。

当然能不能不写 `flush()`方法也让它刷新呢？

答：可以，调用 `close()` 方法关闭流即可。当你调用 `close()`方法时它会先刷新缓存区。这就是刚才上面所说要记得用完之后要关闭流。不过最好有使用到包装流的时候两个方法都记得写上。

```java
void write(char ch);//写入单个字符。 
void write(char []cbuf,int off,int len)//写入字符数据的某一部分。
void write(String s,int off,int len)//写入字符串的某一部分。 
void newLine()//写入一个行分隔符。 
void flush();//刷新该流中的缓冲。将缓冲数据写到目的文件中去。
void close();//关闭此流，再关闭前会先刷新他。
```

#### Eg.复制文件

```java
import java.io.*;public class A1 {    
    public static void main(String[] args) throws IOException {       
        String oldFile = "1.JPEG";        
        String newFile = "2.JPG";        
        InputStream inputStream = new FileInputStream( oldFile ) ;        
        BufferedInputStream bufferedInputStream = new BufferedInputStream( inputStream ) ;       
        OutputStream outputStream = new FileOutputStream( newFile ) ;        
        BufferedOutputStream bufferedOutputStream = new BufferedOutputStream( outputStream ) ;        
        byte[] b=new byte[1024];   //代表一次最多读取1KB的内容        
        int length = 0 ; //代表实际读取的字节数        
        while( (length = bufferedInputStream.read( b ) )!= -1 ){            
            //length 代表实际读取的字节数            
            bufferedOutputStream.write(b, 0, length );        
        }        
        //缓冲区的内容写入到文件        
        bufferedOutputStream.flush();    
    }
}
```



### 缓冲流 BufferedReader/BufferedWriter

| 构造函数                           |                                                    |
| ---------------------------------- | -------------------------------------------------- |
| BufferedReader(Reader in, int sz)  | 创建一个使用指定大小输入缓冲区的缓冲字符输入流。   |
| BufferedWriter(Writer out, int sz) | 创建一个使用给定大小输出缓冲区的新缓冲字符输出流。 |

**方法：**

```java
int  read()  //读取单个字符。
int  read(char[] cbuf, int off, int len)  //将字符读入数组的某一部分。
String  readLine()  //读取一个文本行。
boolean	 ready()  //判断此流是否已准备好被读取。
void  reset()  //将流重置到最新的标记。
long  skip(long n)  //跳过字符。
void  close() //关闭该流并释放与之关联的所有资源。
void  mark(int readAheadLimit) //标记流中的当前位置。
boolean  markSupported() //判断此流是否支持mark() 操作（它一定支持）。    
void  close()  // 关闭此流，但要先刷新它。
void  flush()  //刷新该流的缓冲。
void  newLine() //写入一个行分隔符。
void  write(char[] cbuf, int off, int len) //写入字符数组的某一部分。
void  write(int c) //写入单个字符。
void  write(String s, int off, int len) //写入字符串的某一部分。
```

#### Eg.键入存文件

```java
import java.io.*;
public class A1 {    
    public static void main(String[] args) throws IOException {        
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));        
        BufferedWriter bw = new BufferedWriter(new FileWriter(new File("a.txt")));        
        String s;        
        while ((s = br.readLine()).length() > 0) {           
            bw.write(s, 0, s.length());            
            bw.flush();        
        }        
        bw.close();    
    }
}
```

### PrintWriter

PrintWriter 缓存字符输出流， 可以一次写出一行数据和BufferWriter用法一样

## 转换流

### 转换流 InputStreamReader/OutputStreamWriter

`InputStreamReader` 是字符流`Reader`的子类，是字节流通向字符流的桥梁。你可以在构造器重指定编码的方式，如果不指定的话将采用底层操作系统的默认编码方式，例如 GBK 等。要启用从字节到字符的有效转换，可以提前从底层流读取更多的字节，使其超过满足当前读取操作所需的字节。一次只读一个字符。

```java
InputStreamReader(Inputstream  in) //创建一个使用默认字符集的 InputStreamReader。
InputStreamReader(Inputstream  in，Charset cs) //创建使用给定字符集的 InputStreamReader。
InputStreamReader(InputStream in, CharsetDecoder dec) //创建使用给定字符集解码器的 InputStreamReader。
InputStreamReader(InputStream in, String charsetName)  //创建使用指定字符集的 InputStreamReader。
```

`OutputStreamWriter` 是字符流`Writer`的子类，是字符流通向字节流的桥梁。每次调用 `write()`方法都会导致在给定字符（或字符集）上调用编码转换器。在写入底层输出流之前，得到的这些字节将在缓冲区中累积。一次只写一个字符。

```java
OutputStreamWriter(OutputStream out) //创建使用默认字符编码的 
OutputStreamWriter(OutputStream out, String charsetName) //创建使用指定字符集的
OutputStreamWriter(OutputStream out, Charset cs) //创建使用给定字符集的 
OutputStreamWriter(OutputStream out, CharsetEncoder enc) //创建使用给定字符集编码器的 
```

**注意：**`InputStreamReader`、`OutputStreamWriter`实现从字节流到字符流之间的转换，使得流的处理效率得到提升，但是如果我们想要达到最大的效率，我们应该考虑使用缓冲字符流包装转换流的思路来解决问题。

比如：`BufferedReader in = new BufferedReader(new InputStreamReader(System.in));`



## 对象流&序列化

对象流指的是可以直接**把一个对象以流的形式**传输给其他的介质，比如硬盘

一个对象以流的形式进行传输，叫做序列化。 该对象所对应的类，必须是实现`Serializable接口`

Eg.

```java
import java.io.Serializable;public class Hero implements Serializable {    
    //表示这个类当前的版本，如果有了变化，比如新设计了属性，就应该修改这个版本号    
	private static final long serialVersionUID = 1L;    
    public String name;    
    public float hp;
}
```

```java
import java.io.*;public class A1 {    
    public static void main(String[] args) throws IOException, ClassNotFoundException {        
        File f =new File("a.txt");        
        //创建对象输出流        
        FileOutputStream fos = new FileOutputStream(f);        
        ObjectOutputStream oos =new ObjectOutputStream(fos);        
        //创建对象输入流        
        FileInputStream fis = new FileInputStream(f);        
        ObjectInputStream ois =new ObjectInputStream(fis);        
        //创建一个Hero garen        
        //要把Hero对象直接保存在文件上，务必让Hero类实现Serializable接口        
        Hero h = new Hero();        
        h.name = "garen";        
        h.hp = 616;        
        oos.writeObject(h);        
        Hero h2 = (Hero) ois.readObject();        
        System.out.println(h2.name);        
        System.out.println(h2.hp);    
    }
}
```



[java输入输出流详细讲解（入门经典），详细讲解JAVA中的IO流](https://blog.csdn.net/hljqfl/article/details/85677640?ops_request_misc=&request_id=&biz_id=102&utm_term=java%E6%96%87%E4%BB%B6%E8%BE%93%E5%85%A5%E8%BE%93%E5%87%BA%E8%AF%A6%E7%BB%86&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-1-85677640.pc_search_result_no_baidu_js&spm=1018.2226.3001.4187)











# 多线程

多线程即在同一时间，可以做多件事情。

**进程：**启动一个exe就叫一个进程。 接着又启动一个exe，这叫两个进程。
**线程：**线程是在进程内部同时做的事情。

## 线程状态

线程是cpu任务调度的最小执行单位，每个线程拥有自己独立的程序计数器、虚拟机栈、本地方法栈

**线程状态：创建、就绪、运行、阻塞、死亡**	`getState()`

<img src="https://s0.lgstatic.com/i/image3/M01/77/29/Cgq2xl5xxGKAKBpeAAEw9Ifr07Y662.png" alt="img" style="zoom: 40%;" />



## 创建线程

- 启动线程是<u>start()</u>方法，run()并不能启动一个新的线程

- 线程开启不一定立即执行，由CPU调度执行

**实现 Runnable 接口**（优先使用）

```java
public class RunnableThread implements Runnable {
    @Override
    public void run() {System.out.println('用实现Runnable接口实现线程');}
}
//启动方式，代理模式
new Thread(new RunnableThread()).start();
```

**实现Callable接口**（有返回值可抛出异常）

```java
class CallableTask implements Callable<Integer> {
    @Override
    public Integer call() throws Exception { return new Random().nextInt();}
}
//启动方式
FutureTask<Integer> futureTask = new FutureTask<Integer>(new CallableTask);
new Thread(futureTask).start();
```

**继承Thread类**（java不支持多继承）

```java
public class ExtendsThread extends Thread {
    @Override
    public void run() {System.out.println('用Thread类实现线程');}
}
//启动方式
new ExtendsThread().start();
```

**使用线程池**（底层都是实现run方法）

```java
static class DefaultThreadFactory implements ThreadFactory {
    DefaultThreadFactory() {
        SecurityManager s = System.getSecurityManager();
        group = (s != null) ? s.getThreadGroup() : Thread.currentThread().getThreadGroup();
        namePrefix = "pool-" + poolNumber.getAndIncrement() +"-thread-";
    }
    public Thread newThread(Runnable r) {
        Thread t = new Thread(group, r,namePrefix + threadNumber.getAndIncrement(),0);
        if (t.isDaemon()) t.setDaemon(false);  //是否守护线程
        if (t.getPriority() != Thread.NORM_PRIORITY) t.setPriority(Thread.NORM_PRIORITY); //线程优先级
        return t;
    }
}
```



## 常用方法

| 方法        | 作用                                                         | 区别              |
| ----------- | ------------------------------------------------------------ | ----------------- |
| start       | 启动线程，由虚拟机自动调度执行run()方法                      | 线程处于就绪状态  |
| run         | 线程逻辑代码块处理，JVM调度执行                              | 线程处于运行状态  |
| sleep       | 让当前正在执行的线程休眠（暂停执行）                         | <u>不释放锁</u>   |
| wait        | 使得当前线程等待                                             | <u>释放同步锁</u> |
| notify      | 唤醒在此对象监视器上等待的单个线程                           | 唤醒单个线程      |
| notifyAll   | 唤醒在此对象监视器上等待的所有线程                           | 唤醒多个线程      |
| yiled       | 停止当前线程，让同等优先权的线程运行（礼让不一定成功）       | 用Thread类调用    |
| join        | 使当前线程停下来等待，直至另一个调用join方法的线程终止       | 用线程对象调用    |
| setPriority | 线程优先级[1,10]                                             |                   |
| setDaemon   | 守护线程， 当一个进程里，所有的线程都是守护线程的时候，结束当前进程。 |                   |



> 停止线程 --自定义stop

```java

//测试stop
/*
    1、建议线程正常停止---》 利用次数，不建议死循环
    2、建议使用标志位---》 设置一个标志位
    3、不要使用stop或destroy等过时或JDK不建议使用的方法
 */
public class testStop implements  Runnable{
    //1、设置一个标志位
    private boolean flag = true;

    @Override
    public void run() {
        int i = 0;
        while (flag){
            System.out.println("run....Thread " + i++ );
        }
    }

    //2、设置一个公开的方法停止线程，转换标志位
    public void stop(){
        this.flag = false;
    }

    public static void main(String[] args) {
        testStop testStop = new testStop();
        new Thread(testStop).start();

        for (int i = 0; i < 1000; i++){
            System.out.println("main" + i);
            if(i == 900){
                //调用stop方法切换标志位，让线程停止
                testStop.stop();
                System.out.println("线程停止了");
            }
        }
    }
}
```





## 线程同步

并发：同一个对象被多个线程同时操作

形成条件：队列+锁

**死锁**：线程1 首先占有对象1，接着试图占有对象2；线程2 首先占有对象2，接着试图占有对象1；线程1 等待线程2释放对象2；与此同时，线程2等待线程1释放对象1；就会。。。一直等待下去。

### synchronized

` synchronized方法`：每个对象对应一把锁，每个方法都必须获得该方法对象的锁才能执行。否则线程会阻塞。**锁this**

`synchronized (Obj){ }`：同步块，**锁变化的量**

如果一个类，其**方法都是有synchronized修饰的**，那么该类就叫做**线程安全的类**



**面试题：**

1. **HashMap和Hashtable的区别**

   HashMap和Hashtable都实现了Map接口，都是键值对保存数据的方式
   区别1：HashMap可以存放 null	Hashtable不能存放null
   区别2：HashMap不是线程安全的类	Hashtable是线程安全的类

2. **StringBuffer和StringBuilder的区别**

   StringBuffer 是线程安全的	StringBuilder 是非线程安全的

   所以当进行大量字符串拼接操作的时候，如果是单线程就用StringBuilder会更快些，如果是多线程，就需要用StringBuffer 保证数据的安全性

   非线程安全的为什么会比线程安全的快？ 因为不需要同步嘛，省略了些时间

3. **ArrayList和Vector的区别**

   Vector是线程安全的类，而ArrayList是非线程安全的。

4. **把非线程安全的集合转换为线程安全**

   借助Collections.synchronizedList，可以把ArrayList转换为线程安全的List。

   与此类似的，还有HashSet,LinkedList,HashMap等等非线程安全的类，都通过`工具类Collections`转换为线程安全的

   ```java
    List<Integer> list1 = new ArrayList<>();
    List<Integer> list2 = Collections.synchronizedList(list1);
   ```

   

### Lock锁：

Lock是一个接口，为了使用一个Lock对象，需要用到`Lock lock = new ReentrantLock();`

与 **synchronized块**类似的，**lock()**方法，表示当前线程占用lock对象，一旦占用，其他线程就不能占用了。
与 **synchronized** 不同的是，一旦synchronized 块结束，就会自动释放占用。 lock却必须调用**unlock**方法进行手动释放，为了保证释放的执行，往往会把unlock() 放在finally中进行。

```java
Lock lock = new ReentrantLock();//创建锁
try{
    lock.lock();//加锁
    //正常代码
}
finally{
    lock.unlock();//解锁
}
```



## 线程协作

生产者消费者模型：管程法(缓冲区)、信号灯法(lag标志位)

| 方法      | 作用                               | 区别              |
| --------- | ---------------------------------- | ----------------- |
| wait      | 使得当前线程等待                   | <u>释放同步锁</u> |
| notify    | 唤醒在此对象监视器上等待的单个线程 | 唤醒单个线程      |
| notifyAll | 唤醒在此对象监视器上等待的所有线程 | 唤醒多个线程      |



### 管程法

```java
//生产者，消费者，产品，缓冲区
public class TestPC {
    public static void main(String[] args) {
        SynContainer container = new SynContainer();
        new Productor(container).start();
        new Consumer(container).start();

    }
}

//生产者
class Productor extends Thread{
    SynContainer container;

    public Productor(SynContainer container){
        this.container = container;
    }
    //生产

    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            System.out.println("生产了"+i+"只鸡");
            container.push(new Chicken(i));
        }
    }
}

//消费者
class Consumer extends Thread{
    SynContainer container;

    public Consumer(SynContainer container){
        this.container = container;
    }

    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            System.out.println("消费了-->"+container.pop().id+"只鸡");
        }
    }
}

//产品
class Chicken{
    int id;
    public Chicken(int id){
        this.id = id;
    }

}

//h缓冲区
class  SynContainer{
    //需要一个容器大小
    Chicken[] chickens = new Chicken[10];
    //容器计数器
    int count = 0;

    //生产者放入产品
    public synchronized void push(Chicken chicken){
        //如果容器满了，就需要等待消费者消费
        if (count == chickens.length){
            //通知消费者消费，生产等待
            try {
                this.wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        //如果没有满，就丢入产品
        chickens[count] = chicken;
        count++;

        //可以通知消费者消费了
        this.notifyAll();
    }

    //消费者消费产品
    public synchronized  Chicken pop(){
        if(count == 0){
            //等待生产者生产，消费者等待
            try {
                this.wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        //如果可以消费
        count--;
        Chicken chicken = chickens[count];

        //吃完了，通知生产者生产
        this.notifyAll();
        return chicken;
    }
}
```



## 线程池

JDK提供的API：`ExecutorService`和`Executors`

`ExecutorService`：真正的线程池接口

`Executors`:工具类，线程池的工厂类

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
public class TestPool {    
    public static void main(String[] args) {        
        //1、创建服务，创建线程池        
        ExecutorService service = Executors.newFixedThreadPool(10);//线程池大小        
        //执行        
        service.execute(new MyThread());        
        service.execute(new MyThread());        
        service.execute(new MyThread());        
        //2、关闭链接        
        service.shutdown();    
    }
}
class MyThread implements Runnable{    
    @Override    public void run() {        
        for (int i = 0; i < 100; i++) {            
            System.out.println(Thread.currentThread().getName()+i);        
        }    
    }
}
```









# 注解&反射

## 注解 Annotation

### 内置注解

| 注解                 | 解释                                                         |
| -------------------- | ------------------------------------------------------------ |
| @Override            | 重写                                                         |
| @Deprecated          | 表示这个方法已经过期，不建议开发者使用。                     |
| @SuppressWarnings    | Suppress英文的意思是抑制的意思，这个注解的用处是忽略警告信息。 |
| @FunctionalInterface | 用于约定函数式接口。接口中只有一个抽象方法                   |

**@SuppressWarnings有参数**

```java
@SuppressWarnings("all")
@SuppressWarnings(value={"deprecation","unchecked")
```

1. deprecation：使用了不赞成使用的类或方法时的警告(使用@Deprecated使得编译器产生的警告)；

2. unchecked：执行了未检查的转换时的警告，例如当使用集合时没有用泛型 (Generics) 来指定集合保存的类型; 关闭编译器警告

3. fallthrough：当 Switch 程序块直接通往下一种情况而没有 Break 时的警告;

4. path：在类路径、源文件路径等中有不存在的路径时的警告;

5. serial：当在可序列化的类上缺少 serialVersionUID 定义时的警告;

6. finally：任何 finally 子句不能正常完成时的警告;

7. rawtypes 泛型类型未指明

8. unused 引用定义了，但是没有被使用

9. all：关于以上所有情况的警告。

   

### 元注解

元注解 meta annotation用于<u>解释 自定义注解 的注解</u>。

**@Target** 表示这个注解能放在什么位置上，是只能放在类上？还是即可以放在方法上，又可以放在属性上

@Target({METHOD,TYPE})表示他可以用在方法和类型上（类和接口），但是不能放在属性等其他位置。 

​		ElementType.TYPE：能修饰类、接口或枚举类型
​		ElementType.FIELD：能修饰成员变量
​		ElementType.METHOD：能修饰方法
​		ElementType.PARAMETER：能修饰参数
​		ElementType.CONSTRUCTOR：能修饰构造器
​		ElementType.LOCAL_VARIABLE：能修饰局部变量
​		ElementType.ANNOTATION_TYPE：能修饰注解
​		ElementType.PACKAGE：能修饰包

**@Retention** 表示生命周期

​	RetentionPolicy.SOURCE： Java源文件上的注解 ，只在源代码中存在，编译成class之后，就没了
​	RetentionPolicy.CLASS：  Class类文件上的注解，运行起来后就没了。默认值.
​	RetentionPolicy.RUNTIME：运行时的注解，例：自定义注解

**@Inherited** 表示该注解具有继承性

**@Documented** 表示是否将我们的注解生成在JAVAdoc中



### 自定义注解

`public @interface 注解名{。。。} `

`参数：参数类型+参数名()`

如果只有一个参数成员，一般参数名为value

```java
package anno;
 
import static java.lang.annotation.ElementType.METHOD;
import static java.lang.annotation.ElementType.TYPE;
 
import java.lang.annotation.Documented;
import java.lang.annotation.Inherited;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
 
@Target({METHOD,TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Inherited
@Documented
public @interface JDBCConfig {
     String ip();
     int port() default 3306;
     String database();
     String encoding();
     String loginName();
     String password();
}
```

```java
package util;
 
import anno.JDBCConfig;
 
@JDBCConfig(ip = "127.0.0.1", database = "test", encoding = "UTF-8", loginName = "root", password = "admin")
public class DBUtil {
    static {
        try {
            Class.forName("com.mysql.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
 
}
```



## 反射 Reflection

**类对象**，就是用于描述这种类，都有什么属性，什么方法的。

​		在一个JVM中，<u>一种类，只会有一个类对象存在</u>。

​		一个Class对象对应一个.class文件

### 获取类对象

1. `Class.forName("完整路径")`
2. `对象.class`
3. ` 对象.getClass()`
4. `Interger.TYPE`:基本内置类型的包装类都有一个Type属性
5. `对象。getSuperclass()`:获得父类



### 获取类信息

通过反射获取运行时类的完成结构：Field、Method、Construct、Superclass、Interface、Annotation

```java
//名字
c.getName();//包名+类名
c.getSimpleName();//类名
//属性
Field[] fields = c.getFields("参数");//只找public属性		加参数-->获得指定属性的值
Field[] fields = c.getDeclaredFields();//全部属性
//方法
Method[] methods = c.getMethods();//获得本类及其父类的全部publi方法
Method[] methods = c.getDeclareMethods();//获得本来的所以方法
Method method = c.getMethods("方法名"，"参数类型");//获得指定方法，参数类型防止重载
//构造器
Constructor[] constructors = c.getConstructors();
Constructor[] constructors = c.getDeclaredConstructors();
Constructor constructor = c.getConstructors(参数类型，参数类型);
```



**创建对象**

```java
//类对象
Class pClass=Class.forName(className);
//构造器
Constructor c= pClass.getConstructor();
//通过构造器实例化
Hero h2= (Hero) c.newInstance();
```

**调用方法**

```java
 // 获取这个名字叫做setName，参数类型是String的方法
Method m = h.getClass().getMethod("setName", String.class);
// 对h对象，调用这个激活方法（对象，“方法的值）
m.invoke(h, "盖伦");
// 使用传统的方式，调用getName方法
System.out.println(h.getName());
```

**访问属性**

```java
//获取类Hero的名字叫做name的字段
Field f1= h.getClass().getDeclaredField("name");
//修改这个字段的值
f1.set(h, "teemo");
//打印被修改后的值
System.out.println(h.name);
```

注意：不能直接操作私有属性或方法或构造器，需要关闭安全检测。`f1.setAccessible(true);`



  类的加载

**加载**：

1.  将class文件字节码内容<u>加载到内存</u>中，
2.  并将这些<u>静态数据</u>转换成方法去的运行时数据结构，
3.  生成一个代表这个类的<u>java.lang.Class对象</u>

**链接**：将Java类的二进制代码合并到JVM的运行状态之中的过程。

1.  验证--> 确保符合JVM规范
2.  准备--> <u>为static分配内存默认初始值</u>
3.  解析--> 虚拟机常量池内的符号引用（常量名）替换为直接引用（地址）的过程

**初始化**：执行类构造器`<clinit>()`方法的过程



### 类的初始化

**类的主动引用**（一定会发生类的初始化）

-   当虚拟机启动，先初始化main方法所在的类
-   new一个类的对象
-   调用类的静态成员（除了final常量）和静态方法
-   使用java.lang.reflect包的方法对类进行反射调用
-   当初始化一个类，先初始化父类

**类的被动引用**（不会发生类的初始化）

-   当访问一个静态域时，只有真正生命这个域的类才会被初始化。如：通过子类引用父类的静态变量，子类不会初始化
-   通过数组定义类引用，不会
-   引用常量，不会（常量在链接阶段就存入调用类的常量池中了  ）

​    





















































