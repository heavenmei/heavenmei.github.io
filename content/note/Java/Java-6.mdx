---
title: Java 之 Kafka篇 (六)
subtitle:
layout: post
date: 2021-08-06
author: heavenmei
categories:
  - Note
description:
tags:
  - Java
image:
---

### Why kafka

消息队列的作用：**异步、削峰填谷、解耦**

**中小型公司**，技术实力较为一般，技术挑战不是特别高，用 **RabbitMQ** （开源、社区活跃）是不错的选择；**大型公司**，基础架构研发实力较强，用 **RocketMQ**（Java 二次开发） 是很好的选择。

如果是**大数据领域**的实时计算、日志采集等场景，用 **Kafka** 是业内标准的，绝对没问题，社区活跃度很高，绝对不会黄，何况几乎是全世界这个领域的事实性规范。

<img
  src="https://tva1.sinaimg.cn/large/008eGmZEly1gmfiyienm0j30zu0hago7.jpg"
  alt="image-20210107225921930"
  style="zoom:50%;"
/>

**RabbitMQ**

RabbitMQ 开始是用在电信业务的可靠通信的，也是少有的几款**支持 AMQP**协议的产品之一。

**优点：**

- 轻量级，快速，部署使用方便
- 支持灵活的路由配置。RabbitMQ 中，在生产者和队列之间有一个交换器模块。根据配置的路由规则，生产者发送的消息可以发送到不同的队列中。路由规则很灵活，还可以自己实现。
- RabbitMQ 的客户端支持大多数的编程语言，支持**AMQP**协议。

<img
  src="https://tva1.sinaimg.cn/large/008eGmZEly1gmfjicxzb2j30u80hx0uw.jpg"
  alt="image-20210107231826261"
  style="zoom:40%;"
/>

**缺点：**

- 如果有大量消息堆积在队列中，性能会急剧下降
- 每秒处理几万到几十万的消息。如果应用要求高的性能，不要选择 RabbitMQ。
- RabbitMQ 是 Erlang 开发的，功能扩展和二次开发代价很高。

**RocketMQ**

借鉴了 Kafka 的设计并做了很多改进，**几乎具备了消息队列应该具备的所有特性和功能**。

- RocketMQ 主要用于有序，事务，流计算，消息推送，日志流处理，binlog 分发等场景。
- 经过了历次的双 11 考验，性能，稳定性可靠性没的说。
- java 开发，阅读源代码、扩展、二次开发很方便。
- 对电商领域的响应延迟做了很多优化。
- 每秒处理几十万的消息，同时响应在毫秒级。如果应用很关注响应时间，可以使用 RocketMQ。
- 性能比 RabbitMQ 高一个数量级，。
- 支持死信队列，DLX 是一个非常有用的特性。它可以处理**异常情况下，消息不能够被消费者正确消费而被置入死信队列中**的情况，后续分析程序可以通过消费这个死信队列中的内容来分析当时所遇到的异常情况，进而可以**改善和优化系统**。

**缺点**：

​ 跟周边系统的整合和兼容不是很好。

**Kafka**

**高可用**，几乎所有相关的开源软件都支持，满足大多数的应用场景，尤其是**大数据和流计算**领域，

- Kafka 高效，可伸缩，消息持久化。支持分区、副本和容错。
- 对批处理和异步处理做了大量的设计，因此 Kafka 可以得到非常高的性能。
- 每秒处理几十万异步消息消息，如果开启了压缩，最终可以达到每秒处理 2000w 消息的级别。
- 但是由于是异步的和批处理的，延迟也会高，不适合电商场景。

### What Kafka

- Producer API：允许应用程序将记录流发布到一个或多个 Kafka 主题。
- Consumer API：允许应用程序订阅一个或多个主题并处理为其生成的记录流。
- Streams API：允许应用程序充当流处理器，将输入流转换为输出流。

<img
  src="https://tva1.sinaimg.cn/large/008eGmZEly1gme95cirjfj31000kb41j.jpg"
  alt="image-20210106203420526"
  style="zoom: 40%;"
/>

**消息 Message**

​ Kafka 的数据单元称为消息。可以把消息看成是数据库里的一个“数据行”或一条“记录”。

**批次**

​ 为了提高效率，消息被分批写入 Kafka。提高吞吐量却加大了响应时间

**主题 Topic**

​ 通过主题进行分类，类似数据库中的表，

**分区 Partition**

​ Topic 可以被分成若干分区分布于 kafka 集群中，方便扩容

​ 单个分区内是有序的，partition 设置为一才能保证全局有序

**副本 Replicas**

​ 每个主题被分为若干个分区，每个分区有多个副本。

**生产者 Producer**

​ 生产者在默认情况下把**消息均衡地分布**到主题的所有分区上：

- 直接指定消息的分区
- 根据消息的 key 散列取模得出分区
- 轮询指定分区。

**消费者 Comsumer**

​ 消费者通过**偏移量**来区分已经读过的消息，从而消费消息。把每个分区最后读取的消息偏移量保存在 Zookeeper 或 Kafka 上，如果消费者关闭或重启，它的**读取状态不会丢失**。

**消费组 ComsumerGroup**

​ 消费组保证**每个分区只能被一个消费者**使用，避免重复消费。如果群组内一个**消费者失效**，消费组里的其他消费者可以**接管失效消费者的工作再平衡**，重新分区

**节点 Broker**

​ 连接生产者和消费者，**单个**broker**可以轻松处理**数千个分区**以及**每秒百万级的消息量。

- broker 接收来自生产者的消息，为消息设置偏移量，并提交**消息到磁盘保存**。
- broker 为消费者提供服务，响应读取分区的请求，**返回已经提交到磁盘上的消息**。

**集群**

​ 每隔分区都有一个**首领**，当分区被分配给多个 broker 时，会通过首领进行**分区复制**。

**生产者 Offset**

​ 消息写入的时候，每一个分区都有一个 offset，即每个分区的最新最大的 offset。

**消费者 Offset**

​ 不同消费组中的消费者可以针对一个分区存储不同的 Offset，互不影响

**LogSegment**

- 一个分区由多个 LogSegment 组成，
- 一个 LogSegment 由`.log .index .timeindex`组成
- `.log`追加是顺序写入的，文件名是以文件中第一条 message 的 offset 来命名的
- `.Index`进行日志删除的时候和数据查找的时候可以快速定位。
- `.timeStamp`则根据**时间戳查找对应的偏移量**。

### How Kafka

**优点**

- **高吞吐量**：单机每秒处理几十上百万的消息量。即使存储了 TB 及消息，也保持稳定的性能。
  - **零拷贝** 减少内核态到用户态的拷贝，磁盘通过 sendfile 实现**DMA** 拷贝 Socket buffer
  - **顺序读写** 充分利用磁盘顺序读写的超高性能
  - **页缓存 mmap**，将磁盘文件**映射**到内存, 用户通过修改内存就能修改磁盘文件。
- **高性能**：单节点支持上千个客户端，并保证零停机和零数据丢失。
- **持久化**：将消息持久化到磁盘。通过将数据持久化到硬盘以及 replication 防止数据丢失。
- **分布式系统**，易扩展。所有的组件均为分布式的，无需停机即可扩展机器。
- **可靠性** - Kafka 是分布式，分区，复制和容错的。
- **客户端状态维护**：消息被处理的状态是在 Consumer 端维护，当失败时能自动平衡。

**应用场景**

- **日志收集：**用 Kafka 可以收集各种服务的 Log，通过大数据平台进行处理；
- **消息系统：**解耦生产者和消费者、缓存消息等；
- **用户活动跟踪：**Kafka 经常被用来记录 Web 用户或者 App 用户的各种活动，如浏览网页、搜索、点击等活动，这些活动信息被各个服务器发布到 Kafka 的 Topic 中，然后消费者通过订阅这些 Topic 来做**运营数据**的实时的监控分析，也可保存到数据库；

### **生产消费基本流程**

<img
  src="https://tva1.sinaimg.cn/large/008eGmZEly1gmeb1cw09gj313m0kgwgb.jpg"
  alt="image-20210106213944461"
  style="zoom:40%;"
/>

1. Producer 创建时，会创建一个 Sender 线程并设置为守护线程。

2. 生产的消息先经过拦截器->序列化器->分区器，然后将消息缓存在缓冲区。

3. 批次发送的条件为：缓冲区数据大小达到**batch.size**或者**linger.ms**达到上限。

4. 批次发送后，发往指定分区，然后落盘到 broker；

   - **acks=0**只要将消息放到缓冲区，就认为消息已经发送完成。

   - **acks=1**表示消息**只需要写到主分区**即可。在该情形下，如果主分区收到消息确认之后就宕机了，而副本分区还没来得及同步该消息，则该消息丢失。

   - **acks=all （默认）**首领分区会等待**所有的 ISR 副本分区确认记录**。该处理保证了只要有一个 ISR 副本分区存活，消息就不会丢失。

5. 如果生产者配置了**retrires 参数大于 0 并且未收到确认**，那么客户端会对该消息进行重试。

6. 落盘到 broker 成功，返回生产元数据给生产者。

**Leader 选举**

- Kafka 会在 Zookeeper 上针对每个 Topic 维护一个称为 ISR（in-sync replica）的集合

- 当集合中副本都跟 Leader 中的副本同步了之后，kafka 才会认为消息已提交

- 只有这些跟 Leader 保持同步的 Follower 才应该被选作新的 Leader

- 假设某个 topic 有 N+1 个副本，kafka 可以容忍 N 个服务器不可用，冗余度较低

  如果 ISR 中的副本都丢失了，则：

  - 可以等待 ISR 中的副本任何一个恢复，接着对外提供服务，需要时间等待
  - 从 OSR 中选出一个副本做 Leader 副本，此时会造成数据丢失

**副本消息同步**

​ 首先，Follower 发送 FETCH 请求给 Leader。接着，Leader 会读取底层日志文件中的消 息数据，再更新它内存中的 Follower 副本的 LEO 值，更新为 FETCH 请求中的 fetchOffset 值。最后，尝试更新分区高水位值。Follower 接收到 FETCH 响应之后，会把消息写入到底层日志，接着更新 LEO 和 HW 值。

**相关概念**：**LEO**和**HW**。

- LEO：即日志末端位移(log end offset)，记录了该副本日志中下一条消息的位移值。如果 LEO=10，那么表示该副本保存了 10 条消息，位移值范围是[0, 9]
- HW：水位值 HW（high watermark）即已备份位移。对于同一个副本对象而言，其 HW 值不会大于 LEO 值。小于等于 HW 值的所有消息都被认为是“已备份”的（replicated）

**Rebalance**

- 组成员数量发生变化
- 订阅主题数量发生变化
- 订阅主题的分区数发生变化

leader 选举完成后，当以上三种情况发生时，Leader 根据配置的**RangeAssignor**开始分配消费方案，即哪个 consumer 负责消费哪些 topic 的哪些 partition。一旦完成分配，leader 会将这个方案封装进**SyncGroup**请求中发给 coordinator，非 leader 也会发 SyncGroup 请求，只是内容为空。coordinator 接收到分配方案之后会把方案塞进 SyncGroup 的 response 中发给各个 consumer。这样组内的所有成员就都知道自己应该消费哪些分区了。

**分区分配算法 RangeAssignor**

- 原理是按照消费者总数和分区总数进行整除运算平均分配给所有的消费者。

- 订阅 Topic 的消费者按照名称的字典序排序，分均分配，剩下的字典序从前往后分配

**增删改查**

```bash
kafka-topics.sh --zookeeper localhost:2181/myKafka --create --topic topic_x
								--partitions 1 --replication-factor 1
kafka-topics.sh --zookeeper localhost:2181/myKafka --delete --topic topic_x
kafka-topics.sh --zookeeper localhost:2181/myKafka --alter --topic topic_x
								--config max.message.bytes=1048576
kafka-topics.sh --zookeeper localhost:2181/myKafka --describe --topic topic_x
```

**如何查看偏移量为 23 的消息？**

通过查询跳跃表`ConcurrentSkipListMap`，定位到在 00000000000000000000.index ，通过二分法在偏移量索引文件中找到不大于 23 的**最大索引项**，即 offset 20 那栏，然后从日志分段文件中的物理位置为 320 开始顺序查找偏移量为 23 的消息。

<img
  src="https://img-blog.csdnimg.cn/20191230225447849.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwMjMzNzA2,size_16,color_FFFFFF,t_70"
  alt="img"
  style="zoom:50%;"
/>

**切分文件**

- **大小分片** 当前日志分段文件的大小超过了 broker 端参数 `log.segment.bytes` 配置的值
- **时间分片** 当前日志分段中消息的最大时间戳与系统的时间戳的差值大于`log.roll.ms`配置的值
- **索引分片** 偏移量或时间戳索引文件大小达到 broker 端 `log.index.size.max.bytes`配置的值
- **偏移分片** 追加的消息的偏移量与当前日志分段的偏移量之间的差值大于 Integer.MAX_VALUE

### 一致性

**幂等性**

保证在消息重发的时候，消费者不会重复处理。即使在**消费者收到重复消息的时候，重复处理**，也

要**保证最终结果的一致性**。所谓幂等性，数学概念就是： f(f(x)) = f(x)

![image-20210107000942286](https://tva1.sinaimg.cn/large/008eGmZEly1gmefdeas1vj315i0bgmya.jpg)

**如何实现？**

​ 添加唯一 ID，类似于数据库的主键，用于唯一标记一个消息。

```bash
ProducerID：#在每个新的Producer初始化时，会被分配一个唯一的PID
SequenceNumber：#对于每个PID发送数据的每个Topic都对应一个从0开始单调递增的SN值
```

<img
  src="https://tva1.sinaimg.cn/large/008eGmZEly1gmefjpeet8j317e0cgmyp.jpg"
  alt="image-20210107001546404"
  style="zoom:80%;"
/>

**如何选举**

1. 使用 Zookeeper 的**分布式锁选举控制器**，并在节点加入集群或退出集群时通知控制器。
2. 控制器负责在节点加入或离开集群时进行分区 Leader 选举。
3. 控制器使用 epoch`忽略小的纪元`来避免**脑裂**：两个节点同时认为自己是当前的控制器。

### 可用性

- 创建 Topic 的时候可以指定 --replication-factor 3 ，表示不超过 broker 的副本数
- 只有 Leader 是负责读写的节点，Follower 定期地到 Leader 上 Pull 数据。
- ISR 是 Leader 负责维护的与其保持同步的 Replica 列表，即当前活跃的副本列表。如果一个 Follow 落后太多，Leader 会将它从 ISR 中移除。选举时优先从 ISR 中挑选 Follower。
- 设置 acks=all 。Leader 收到了 ISR 中所有 Replica 的 ACK，才向 Producer 发送 ACK。

### 面试题

#### **线上问题 rebalance**

> 因集群架构变动导致的消费组内重平衡，如果 kafka 集内节点较多，比如数百个，那重平衡可能会耗时导致**数分钟到数小时**，此时 kafka 基本处于不可用状态，对 kafka 的 TPS 影响极大

产生的原因：

- 组成员数量发生变化

- 订阅主题数量发生变化

- 订阅主题的分区数发生变化

  **组成员崩溃和组成员主动离开是两个不同的场景。**因为在崩溃时成员并不会主动地告知 coordinator 此事，coordinator 有可能需要一个完整的 session.timeout 周期(心跳周期)才能检测到这种崩溃，这必然会造成 consumer 的滞后。可以说离开组是主动地发起 rebalance；而崩溃则是被动地发起 rebalance。

  ![img](https://tva1.sinaimg.cn/large/008eGmZEly1gooe9o07fvj30p00btju1.jpg)

解决方案：

```properties
加大超时时间 session.timout.ms=6s
加大心跳频率 heartbeat.interval.ms=2s
增长推送间隔 max.poll.interval.ms=t+1 minutes
```

#### ZooKeeper 的作用

目前，Kafka 使用 ZooKeeper 存放集群元数据、成员管理、Controller 选举，以及其他一些管理类任务。之后，等 KIP-500 提案完成后，Kafka 将完全不再依赖于 ZooKeeper。

- **存放元数据**是指主题分区的所有数据都保存在 ZooKeeper 中，其他“人”都要与它保持对齐。
- **成员管理**是指 Broker 节点的注册、注销以及属性变更等 。
- **Controller 选举**是指选举集群 Controller，包括但不限于主题删除、参数配置等。

一言以蔽之:**KIP-500 ，是使用社区自研的基于 Raft 的共识算法，实现 Controller 自选举**。

同样是存储元数据，这几年**基于 Raft 算法的 etcd**认可度越来越高

​ 越来越多的系统开始用它保存关键数据。比如，**秒杀系统经常用它保存各节点信息**，以便控制消费 MQ 的服务数量。还有些**业务系统的配置数据**，也会通过 etcd 实时**同步给业务系统的各节点**，比如，秒杀管理后台会使用 etcd 将**秒杀活动的配置数据实时同步给秒杀 API 服务各节点**。

#### Replica 副本的作用

**Kafka 只有 Leader 副本才能 对外提供读写服务，响应 Clients 端的请求。Follower 副本只是采用拉(PULL)的方 式，被动地同步 Leader 副本中的数据，并且在 Leader 副本所在的 Broker 宕机后，随时准备应聘 Leader 副本。**

- **自 Kafka 2.4 版本开始**，社区可以通过配置参数，允许 Follower 副本有限度地提供读服务。
- 之前确保一致性的主要手段是高水位机制， 但高水位值无法保证 Leader 连续变更场景下的数据一致性，因此，社区引入了 **Leader Epoch** 机制，来修复高水位值的弊端。

#### 为什么不支持读写分离?

- **自 Kafka 2.4 之后**，Kafka 提供了有限度的读写分离。

- **场景不适用**。读写分离适用于那种读负载很大，而写操作相对不频繁的场景。
- **同步机制**。Kafka 采用 PULL 方式实现 Follower 的同步，同时复制延迟较大。

#### 如何防止重复消费

- 代码层面每次消费需提交 offset
- 通过 Mysql 的**唯一键约束**，结合 Redis 查看**id 是否被消费**，存 Redis 可以直接使用 set 方法
- 量大且允许误判的情况下，使用布隆过滤器也可以

#### **如何保证数据不会丢失**

- **生产者**生产消息可以通过 comfirm 配置**ack=all**解决
- **Broker**同步过程中 leader 宕机可以通过配置**ISR 副本+重试**解决
- **消费者**丢失可以**关闭自动提交**offset 功能，系统处理完成时提交 offset

#### **如何保证顺序消费**

- 单 topic，单 partition，单 consumer，单线程消费，吞吐量低，不推荐
- **如只需保证单 key 有序**，为每个 key 申请单独内存 queue，每个线程分别消费一个内存 queue 即可，这样就能保证单 key（例如用户 id、活动 id）顺序性。

#### 【线上】如何解决积压消费

- **修复 consumer**，使其具备消费能力，并且扩容 N 台
- 写一个**分发的程序**，将 Topic 均匀分发到临时 Topic 中
- 同时**起 N 台 consumer**，消费不同的**临时 Topic**

#### 如何避免消息积压

- 提高消费并行度
- 批量消费
- 减少组件 IO 的交互次数
- 优先级消费

```java
if (maxOffset - curOffset > 100000) {
  // TODO 消息堆积情况的优先处理逻辑
  // 未处理的消息可以选择丢弃或者打日志
  return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;
}
// TODO 正常消费过程
return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;
```

#### 如何设计消息队列

需要支持快速水平扩容，broker+partition，partition 放不同的机器上，增加机器时将数据根据 topic 做迁移，分布式需要考虑一致性、可用性、分区容错性

- **一致性：**生产者的消息确认、消费者的幂等性、Broker 的数据同步
- **可用性：**数据如何保证不丢不重、数据如何持久化、持久化时如何读写
- **分区容错：**采用何种选举机制、如何进行多副本同步
- **海量数据：**如何解决消息积压、海量 Topic 性能下降

性能上，可以借鉴**时间轮、零拷贝、IO 多路复用、顺序读写、压缩批处理**
