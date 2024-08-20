-- create DataBase LirazsWareHouse
-- use LirazsWareHouse

-- CREATE table Items (
--     Code int PRIMARY key,
--     [Description] VARCHAR(100) not null,
--     UnitPrice decimal(10, 2) check (UnitPrice >= 0),
--     Available int not null,
--     Saved int DEFAULT (0) not null,
--     [Waiting] int DEFAULT (0) not null,
--     SubScript int not null,
--     Freq VARCHAR(10) check (freq like '[cdwm]%'),
--     SuppDate DATE,
--     OrderPercnt decimal(3, 2) check (OrderPercnt BETWEEN 0 and 100)
-- )

-- CREATE table ExOrders (
--     OrderDate Date,
--     OrderNo int PRIMARY KEY,
--     CustID int default 999999999 not null,
--     Delivery char(2) check (delivery in ('dl', 'ps', 'pr')),
--     DeliveryAddress VARCHAR(50) not null,
--     [Status] VARCHAR(20),
--     SuppDate Date,
--     itemsInTheOrder varchar(MAX)
-- )

-- create table Orderswithitems (
--     OrderNo int not null, 
--     ItemCode int not null,
--     ItemQuant int check (itemQuant > 0) not null,
--     PRIMARY key (OrderNo, itemCode),
--     FOREIGN key (orderNo) REFERENCES ExOrders(orderNo),
--     FOREIGN key (itemCode) REFERENCES items(code)
-- )

-- CREATE table Invoices (
--     InvNo int PRIMARY key,
--     OrderNo int not null,
--     OrderDate Date not null,
--     TotAmount decimal(10, 2),
--     FOREIGN key (OrderNo) REFERENCES ExOrders(orderNo),
-- )

-- create table Customers (
--     CustID int PRIMARY key,
--     CustType int check (CustType in (1, 2)),
--     CustStatus varchar(10),
--     -- check (CustStatus in ('ACT', 'EXP', 'DEL')),
--     FreezCode int check (FreezCode in (1, 2) or FreezCode is null),
--     OverCount int,
--     CustName VARCHAR(20),
--     DelivAddrss VARCHAR(30),
--     MailAddrss VARCHAR(30),
--     CreditCard VARCHAR(30)
-- )

-- CREATE table Subscription (
--     OrderNo int,
--     [Status] varchar(10) check (Status in ('ACT', 'EXP', 'DEL')),
--     CustID int,
--     Freq varchar(10) check (freq like '[cdwm]%'),
--     Delivery varchar(10) check (delivery in ('dl', 'ps', 'pr')),
--     NextOrder Date,
--     Expiration Date,
--     PRIMARY key (OrderNo, CustID),
--     FOREIGN key (OrderNo) REFERENCES ExOrders(orderNo),
--     FOREIGN key (CustID) REFERENCES Customers(CustID)
-- )

-- create table Receipts (
--     PymtDate Date,
--     RecNo int PRIMARY key,
--     InvNo int,
--     OrderNo int,
--     PaidAmt decimal(10, 2),
--     FOREIGN key (InvNo) REFERENCES Invoices(InvNo),
--     FOREIGN key (orderno) REFERENCES exorders(orderNo)
-- )

-- create table Accounting (
--     [Date] Date,
--     Amount int,
--     CrdtDebt int check (CrdtDebt in (1, -1)),
--     InvNo int,
--     OrderNo int,
--     ReceiptNo int,
--     FOREIGN key (orderno) REFERENCES exorders(orderNo),
--     FOREIGN key (ReceiptNo) REFERENCES Receipts(RecNo),
--     FOREIGN key (InvNo) REFERENCES Invoices(InvNo)
-- )

create table StockOrder (
    OrderNo int,
    StockDate Date not null,
    Code int,
    [Desc] VARCHAR(100),
    Quant int,
    PRIMARY key (orderNo, code),
    FOREIGN key (orderno) REFERENCES exorders(orderNo),
    FOREIGN key (code) REFERENCES items(code)
)

create table DeliveryFees (
    Delivery char(2) check (delivery in ('dl', 'ps', 'pr')),
    [Desc] VARCHAR(100),
    DelFee decimal(10, 2)
)

create table Discounts (
    CustType int check (CustType in (1, 2)),
    Discnt decimal(3, 2) check (Discnt between 0 and 100)
)

create table Numbers (
    LastOrder int,
    LastSubsc int,
    LastStock int,
    LastReciept int,
    LastInvoice int
)

create table Users (
    UserName VARCHAR(20),
    [Profile] VARCHAR(20)
)

create table Profiles (
    ProfileName VARCHAR(20) UNIQUE NOT NULL,
    ProfileDescription VARCHAR(100)
)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT into Items (code, [Description], UnitPrice, Available, Saved, [Waiting], SubScript, Freq, SuppDate)
-- VALUES (122, 'Rocks', 100.99, 7890, 1000, 750, 10000, 'm12', '2025-02-03'), 
--         (123, 'Dolls', 5.49, 32, 28, 10, 50, 'c1', '2024-09-01'),
--         (124, 'Bunneies', 59.00, 3, 2, 7, 145, 'w3', '2024-09-01'),
--         (125, 'Ping-Pong Balls', 14.39, 64, 2, 0, 100, 'm12', '2024-12-31'),
--         (126, 'Armors', 999.99, 0, 0, 50, 100, 'w1', '2024-08-21'),
--         (127, 'Ireland', 75.99, 1, 1, 0, 1, 'd5', '2024-08-23'),
--         (128, 'DishWasher', 19.20, 15, 1, 9, 20, 'w10', '2024-08-31'),
--         (129, 'Palestine', 00.00, 0, 0, 1, 0, 'm11704', '2999-12-31'),
--         (130, 'Human Leg', 59.49, 2, 2, 0, 12, 'd1', '2024-08-23'),
--         (131, 'Nasa including The Moon', 66.0, 100, 0, 0, 100, 'c15', '2024-09-15')

-- insert into ExOrders(orderDate, orderNo, custId, delivery, DeliveryAddress, [Status], suppDate)
-- values ('2024-08-21', 760, 123456789, 'dl', 'My Home Adreess 30', 'Processing', '2024-08-20'),
--         ('2024-08-13', 985, 123456789, 'ps', 'My Home Adreess 30', 'Processing', '2024-09-12'),
--         ('2024-08-13', 444, 123456789, 'dl', 'My Home Adreess 30', 'Not Shipped', '2024-09-01'),
--         ('2000-01-13', 145, 123456789, 'ps', 'My Home Adreess 30', 'Canceled', null),
--         ('2012-12-21', 533, 123456789, 'pr', 'My Home Adreess 30', 'Canceled', null),
--         ('2020-01-31', 800, 987654321, 'ps', 'Hazit 1, USA', 'Open', '2024-10-31'),
--         ('2001-07-25', 799, 987654321, 'dl', 'Hazit 1, USA', 'Canceled', null),
--         ('2024-08-01', 788, 987654321, 'dl', 'Hazit 1, USA', 'Not Shipped', '2024-08-24'),
--         ('2024-06-03', 777, 987654321, 'pr', 'Hazit 1, USA', 'Not Fullfilled', '2024-10-14')
--         ('2024-08-01', 321, 123456789, 'dl', 'office', 'Shipped', '2024-08-25'),
--         ('2024-07-01', 432, 123456789, 'dl', 'office', 'Shipped', '2024-08-25')

-- insert into Orderswithitems(OrderNo, ItemCode, ItemQuant)
-- values (760, 122, 50),
--         (760, 131, 4),
--         (760, 125, 3),
--         (985, 127, 1),
--         (444, 126, 6),
--         (444, 130, 2),
--         (145, 129, 4),
--         (145, 128, 5),
--         (145, 124, 7),
--         (145, 123, 10),
--         (533, 125, 2),
--         (533, 130, 1),
--         (800, 122, 100),
--         (799, 131, 5),
--         (799, 130, 7),
--         (788, 129, 10),
--         (788, 128, 11),
--         (788, 127, 9),
--         (777, 126, 4),
--         (777, 125, 4),
--         (777, 124, 8),
--         (777, 123, 43),
--         (777, 122, 1)

-- insert into Invoices(InvNo, OrderNo, OrderDate)
-- values (100, 760, '2024-08-21'),
--         (101, 985, '2024-08-13'),
--         (102, 444, '2024-08-13'),
--         (103, 145, '2000-01-01'),
--         (104, 533, '2012-12-21'),
--         (105, 800, '2020-01-31'),
--         (106, 799, '2001-07-25'),
--         (107, 788, '2024-08-01'),
--         (108, 777, '2024-06-03')
--         (201, 321, '2024-08-01'), 
--         (202, 432, '2024-07-01')

-- insert into Customers(CustID, CustType, CustStatus, FreezCode, CustName, DelivAddrss, MailAddrss, CreditCard)
-- values (123456789, 1, 'ACT', null, 'Liraz', 'My Home Adreess 30', 'Liraz@Gmail', '12345678901233456'),
--         (987654321, 1, 'ACT', null, 'Bar-Nir', 'Hazit 1, USA', 'BarNir@Gmail', '6543210987654321'),
--         (192837465, 2, 'ACT', null, 'Duffy Duck', 'Looney Tones', 'Duckling@Gmail', '0000111122223333'),
--         (918273645, 1, 'FRZ', 2, 'BaBa', 'IITC', 'BaBa@Gmail', '1234123412341234'),
--         (564738291, 2, 'FRZ', 1, 'Trump', 'The White Houe', 'NoEar@Gmail', '9999000018187272'),
--         (789321654, 2, 'DEL', null, 'David', 'goliath 2', 'TheSlinger@Gmail', '000000000012')

-- INSERT into Subscription(OrderNo, [Status], CustID, freq, Delivery, NextOrder, Expiration)
-- VALUES (760, 'ACT', 123456789, 'm3', 'dl', '2024-08-20', '2049-08-20'),
--         (985, 'ACT', 123456789, 'm1', 'ps', '2024-09-12', '2025-11-12'),
--         (145, 'EXP', 123456789, 'm1', 'ps', null, '2001-08-13'),
--         (533, 'DEL', 123456789, 'd10', 'pr', null, null),
--         (800, 'ACT', 987654321, 'c31', 'ps', '2024-10-31', '2029-12-31'),
--         (799, 'EXP', 987654321, 'w7', 'dl', null, '2001-09-11')

-- insert into Receipts(PymtDate, RecNo, InvNo, OrderNo, PaidAmt)
-- values ('2024-08-21', 10001, 100, 760, 5356.67),
--         ('2024-08-13', 10011, 101, 985, 75.99),
--         ('2024-08-13', 10021, 102, 444, 6118.92),
--         ('2000-01-01', 10031, 103, 145, 563.90),
--         ('2012-12-21', 10041, 104, 533, 88.26),
--         ('2020-01-31', 10051, 105, 800, 10099.00),
--         ('2001-07-25', 10061, 106, 799, 746.43), 
--         ('2024-08-01', 10071, 107, 788, 895.11),
--         ('2024-06-03', 10081, 108, 777, 4866.58),
--         ('2024-08-01', 20012, 201, 321, 10), 
--         ('2024-07-01', 20022, 202, 432, 20)

-- insert into Accounting([date], amount, CrdtDebt, InvNo, OrderNo, ReceiptNo)
-- VALUES ('2024-08-21', 5356.67, 1, 100, 760, 10001),
--         ('2024-08-13', 75.99, 1, 101, 985, 10011),
--         ('2024-08-13', 6118.92, 1, 102, 444, 10021),
--         ('2000-01-01', 563.90, 1, 103, 145, 10031),
--         ('2012-12-21', 88.27, 1, 104, 533, 10041),
--         ('2020-01-31', 10099.00, 1, 105, 800, 10051),
--         ('2001-07-25', 746.43, 1, 106, 799, 10061),
--         ('2024-08-01', 895.11, 1, 107, 788, 10071),
--         ('2024-06-03', 4866.58, 1, 108, 777, 10081),
--         ('2024-08-01', 10, -1, 201, 321, 20012),
--         ('2024-07-01', 20, -1, 202, 432, 20022)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-- update Invoices
-- set TotAmount = (select SUM(o.ItemQuant * i.UnitPrice)
--                 from Orderswithitems o join Items i
--                 on o.ItemCode = i.Code
--                 where o.OrderNo = Invoices.OrderNo
--                 GROUP by o.OrderNo
--                 )

-- update ExOrders
-- set itemsInTheOrder = (select STRING_AGG(CAST(oi.ItemCode AS VARCHAR) + '(' + CAST(oi.ItemQuant AS VARCHAR) + ')', ', ') AS itemsInOrder
--                         from OrdersWithItems oi
--                         where oi.OrderNo = ExOrders.OrderNo
--                         group by oi.OrderNo)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-- --q1
-- declare @RequiredItemCode int = null
-- SELECT code as "קוד", [Description] as "תיאור", Available as "במלאי", 
--         [Waiting] as "בהמתנה", [Saved] as "שמורה", SubScript as "קבועות",  
--         UnitPrice as "מחיר", Freq as "תדירות", SuppDate as "ת. אספקה", OrderPercnt as "%"
-- from items
-- where @RequiredItemCode is null or code = @RequiredItemCode

-- --q2
-- declare @OrderStatus VARCHAR(20) = 'Processing'
-- declare @StartingDate Date = '2024-08-01'
-- declare @EndingDate Date = '2024-08-14'
-- declare @OrderNumber int = null
-- select distinct i.OrderDate, i.totamount, eo.itemsInTheOrder, eo.[Status]
-- from Invoices i  
-- join Orderswithitems oi on oi.OrderNo = i.OrderNo
-- join ExOrders eo on eo.OrderNo = oi.OrderNo
-- where (@OrderStatus is null or eo.[Status] = @OrderStatus) 
-- and ((@StartingDate is null and @EndingDate is null) or i.OrderDate between @StartingDate and @EndingDate)
-- and (@OrderNumber is null or i.OrderNo = @OrderNumber)
-- order by i.OrderDate

-- --q3
-- DECLARE @customerID int = 987654321
-- SELECT distinct c.CustID, c.CustName, c.CustStatus, s.OrderNo, s.[Status], eo.itemsInTheOrder, s.Freq
-- from Customers c join Subscription s
-- on c.CustID = s.CustID
-- join OrdersWithItems oi on s.OrderNo = oi.OrderNo
-- join ExOrders eo on s.OrderNo = eo.OrderNo
-- where @customerID is null or c.CustID = @customerID

-- --q4
-- declare @FromDate Date = null
-- SELECT OrderNo, invNo, [Date], Amount * CrdtDebt as cost
-- from Accounting
-- where @FromDate is null or [Date] > @FromDate

-- UNION ALL

-- select null as OrderNo, null as invNo, null as [Date], sum(Amount * CrdtDebt)
-- from Accounting
-- where (@FromDate is null or [Date] > @FromDate) and Amount * CrdtDebt > 0

-- union ALL

-- select null as OrderNo, null as invNo, null as [Date], sum(Amount * CrdtDebt)
-- from Accounting
-- where (@FromDate is null or [Date] > @FromDate) and Amount * CrdtDebt < 0

-- union ALL

-- select null as OrderNo, null as invNo, null as [Date], sum(Amount * CrdtDebt)
-- from Accounting
-- where (@FromDate is null or [Date] > @FromDate)

-- --q5
-- select eo.OrderDate, eo.SuppDate, i.TotAmount, eo.[Status]
-- from ExOrders eo join Invoices i
-- on eo.OrderNo = i.OrderNo
-- where eo.[Status] in ('Not Fullfilled', 'Not Shipped')
-- order BY eo.SuppDate