# Sequelize

Sequelize 是一个基于 promise 的 Node.js ORM, 目前支持 Postgres, MySQL, SQLite 和 Microsoft SQL Server. 它具有强大的事务支持, 关联关系, 预读和延迟加载,读取复制等功能.

[英文文档]: https://sequelize.org/master/
[中文文档]: https://demopark.github.io/sequelize-docs-Zh-CN/

## 安装

```bash
# 通过 npm 安装
$ npm install --save sequelize

# 选择对应的安装数据库驱动程序:
$ npm install --save pg pg-hstore # PostgreSQL
$ npm install --save mysql2 # MySQL
$ npm install --save mariadb # MariaDB
$ npm install --save sqlite3 # SQLite
$ npm install --save tedious # Microsoft SQL Server
```

## 配置

## 数据类型

- 所有类型
```bash
Sequelize.STRING                      // VARCHAR(255)
Sequelize.STRING(1234)                // VARCHAR(1234)
Sequelize.STRING.BINARY               // VARCHAR BINARY
Sequelize.TEXT                        // TEXT
Sequelize.TEXT('tiny')                // TINYTEXT
Sequelize.CITEXT                      // CITEXT      PostgreSQL and SQLite only.

Sequelize.INTEGER                     // INTEGER
Sequelize.BIGINT                      // BIGINT
Sequelize.BIGINT(11)                  // BIGINT(11)

Sequelize.FLOAT                       // FLOAT
Sequelize.FLOAT(11)                   // FLOAT(11)
Sequelize.FLOAT(11, 10)               // FLOAT(11,10)

Sequelize.REAL                        // REAL        PostgreSQL only.
Sequelize.REAL(11)                    // REAL(11)    PostgreSQL only.
Sequelize.REAL(11, 12)                // REAL(11,12) PostgreSQL only.

Sequelize.DOUBLE                      // DOUBLE
Sequelize.DOUBLE(11)                  // DOUBLE(11)
Sequelize.DOUBLE(11, 10)              // DOUBLE(11,10)

Sequelize.DECIMAL                     // DECIMAL
Sequelize.DECIMAL(10, 2)              // DECIMAL(10,2)

Sequelize.DATE                        // DATETIME for mysql / sqlite, TIMESTAMP WITH TIME ZONE for postgres
Sequelize.DATE(6)                     // DATETIME(6) for mysql 5.6.4+. Fractional seconds support with up to 6 digits of precision
Sequelize.DATEONLY                    // DATE without time.
Sequelize.BOOLEAN                     // TINYINT(1)

Sequelize.ENUM('value 1', 'value 2')  // An ENUM with allowed values 'value 1' and 'value 2'
Sequelize.ARRAY(Sequelize.TEXT)       // Defines an array. PostgreSQL only.
Sequelize.ARRAY(Sequelize.ENUM)       // Defines an array of ENUM. PostgreSQL only.

Sequelize.JSON                        // JSON column. PostgreSQL, SQLite and MySQL only.
Sequelize.JSONB                       // JSONB column. PostgreSQL only.

Sequelize.BLOB                        // BLOB (bytea for PostgreSQL)
Sequelize.BLOB('tiny')                // TINYBLOB (bytea for PostgreSQL. Other options are medium and long)

Sequelize.UUID                        // UUID datatype for PostgreSQL and SQLite, CHAR(36) BINARY for MySQL (use defaultValue: Sequelize.UUIDV1 or Sequelize.UUIDV4 to make sequelize generate the ids automatically)

Sequelize.CIDR                        // CIDR datatype for PostgreSQL
Sequelize.INET                        // INET datatype for PostgreSQL
Sequelize.MACADDR                     // MACADDR datatype for PostgreSQL

Sequelize.RANGE(Sequelize.INTEGER)    // Defines int4range range. PostgreSQL only.
Sequelize.RANGE(Sequelize.BIGINT)     // Defined int8range range. PostgreSQL only.
Sequelize.RANGE(Sequelize.DATE)       // Defines tstzrange range. PostgreSQL only.
Sequelize.RANGE(Sequelize.DATEONLY)   // Defines daterange range. PostgreSQL only.
Sequelize.RANGE(Sequelize.DECIMAL)    // Defines numrange range. PostgreSQL only.

Sequelize.ARRAY(Sequelize.RANGE(Sequelize.DATE)) // Defines array of tstzrange ranges. PostgreSQL only.

Sequelize.GEOMETRY                    // Spatial column.  PostgreSQL (with PostGIS) or MySQL only.
Sequelize.GEOMETRY('POINT')           // Spatial column with geometry type. PostgreSQL (with PostGIS) or MySQL only.
Sequelize.GEOMETRY('POINT', 4326)     // Spatial column with geometry type and SRID.  PostgreSQL (with PostGIS) or MySQL only.
```
- 常用类型
```bash
INTEGER(4)            # 4字节int类型，排序使用
STRING(80)            # 80字节varchat，文本名称
STRING                # 255字节varchat，描述，简介
TEXT                  # text文本格式，详情Html
FLOAT(11, 2)          # float小数点2位
DECIMAL               # 十进制整数
DECIMAL(10, 2)        # 十进制保留两位小数，价格
DATE                  # 时间类型2019-09-23T17:00:00.000Z，时间
DATEONLY              # 时间类型2019-09-23
BOOLEAN               # boolean类型true or false，显示与否
ENUM('1', '2')        # 枚举类型
JSON                  # json格式数据
GEOMETRY              # 地理几何对象信息
GEOMETRY('POINT')     # 地理点信息
```

- 属性设置
```bash
primaryKey: true,               # 主键设置
autoIncrement: true             # 自增整数
allowNull: false,               # 是否为空
defaultValue: Sequelize.NOW     # 默认值(当前时间)
unique: true                    # 唯一约束
references: {
    model: 'Bar',# 这是引用另一个模型
    key: 'id',# 这是引用模型的列名称
}                               # 外健约束
comment: '这是一个包含注释的列名'
```

## 查询接口

- 表操作： https://sequelize.org/master/class/lib/query-interface.js~QueryInterface.html
```bash
createDatabase              # 建立数据库（数据库：字符串，选项：对象）

createTable                 # 创建具有给定属性集的表
namedTable                  # 重命名表格
dropTable                   # 从数据库中删除表

addColumn                   # 向表添加新列
namedColumn                 # 重命名列
changeColumn                # 更改列定义
removeColumn                # 从表中删除列

addIndex                    # 向列添加索引
removeIndex                 # 从表中删除现有索引
```

- 数据操作
```bash
bulkInsert                  # 将多个记录插入表中
bulkUpdate                  # 更新一个表的多个记录
bulkDelete                  # 从表中删除多个记录
```

## 领域模型

## 迁移
