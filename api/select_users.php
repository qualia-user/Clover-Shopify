<?php

define('DB_HOST', '129.158.70.61:3306');
define('DB_NAME', 'qualiahr_dwh');
define('DB_USER', 'hrvoje');
define('DB_PASS', 'b1f969807ef044f519d7fd734649b7ed');

$db = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8', DB_USER, DB_PASS);
//$sqltype = 'NetAmount';
if ($_GET['interval']) {
    $interval = $_GET['interval'];
}

if ($_GET['intervaltype']) {
    $interval_type = $_GET['intervaltype'];
}

//--> $_get['day'] || $_get['week']

//if ($_GET['sqltype'] == 'NrPayments') {
//    $sqltype = 'NrPayments';
//}

try {

    switch ($interval_type) {
        case 'Week':
            $stmt = $db->prepare(" select concat( year(q1.date), '-W',   LPAD(WEEK(q1.date), 2, '0') ) as argumentField
                                            ,sum(q1.NetAmount) NetAmount, sum(q2.NetAmount) as NetAmount_PP
                                            ,sum(q1.tipAmount) tipAmount, sum(q2.tipAmount) as tipAmount_PP
                                            ,sum(q1.TipPercentOfNet) TipPercentOfNet, sum(q2.TipPercentOfNet) as TipPercentOfNet_PP
                                            ,sum(q1.refundAmount) refundAmount, sum(q2.refundAmount) as refundAmount_PP
                                            ,sum(q1.creditAmount) creditAmount, sum(q2.creditAmount) as creditAmount_PP
                                            from
                                            (
                                            SELECT d.date, ifnull(round(sum(p.net),2),0) as NetAmount,
                                            ifnull(round(sum(p.tipAmount),2),0) as tipAmount,
                                            round(100 * ifnull(round(sum(p.tipAmount),2),0) / ifnull(round(sum(p.net),2),0),1) as TipPercentOfNet,
                                            ifnull(round(sum(p.refund_amount),2),0) as refundAmount,
                                            ifnull(round(sum(p.credit_amount),2),0) as creditAmount
                                            FROM dates d left join PaymentsCloverDemo3 p on d.date = p.date
                                            WHERE d.date between '2019-02-28' - INTERVAL ".$interval." DAY and '2019-02-28' --  '2019-02-28'  -- CURDATE()
                                            group by d.date order by d.date asc
                                            ) q1
                                            inner join
                                            (
                                            SELECT d.date, ifnull(round(sum(p.net),2),0) as NetAmount,
                                            ifnull(round(sum(p.tipAmount),2),0) as tipAmount,
                                            round(100 * ifnull(round(sum(p.tipAmount),2),0) / ifnull(round(sum(p.net),2),0),1) as TipPercentOfNet,
                                            ifnull(round(sum(p.refund_amount),2),0) as refundAmount,
                                            ifnull(round(sum(p.credit_amount),2),0) as creditAmount
                                            FROM dates d left join PaymentsCloverDemo3 p on d.date = p.date
                                            WHERE d.date between ('2019-02-28' - INTERVAL 365+".$interval." DAY) and ('2019-02-28' - INTERVAL 365 DAY ) --  365+7 = 372
                                            group by d.date order by d.date asc
                                            ) q2 on q1.date = (q2.date + INTERVAL 365 DAY)
                                            GROUP BY concat( year(q1.date), '-W',   LPAD(WEEK(q1.date), 2, '0') )");
            break;
        case 'Month':
            $stmt = $db->prepare("select concat(year(q1.date), '-', LPAD(MONTH(q1.date), 2, '0')) as argumentField
                                            ,sum(q1.NetAmount) NetAmount, sum(q2.NetAmount) as NetAmount_PP
                                            ,sum(q1.tipAmount) tipAmount, sum(q2.tipAmount) as tipAmount_PP
                                            ,sum(q1.TipPercentOfNet) TipPercentOfNet, sum(q2.TipPercentOfNet) as TipPercentOfNet_PP
                                            ,sum(q1.refundAmount) refundAmount, sum(q2.refundAmount) as refundAmount_PP
                                            ,sum(q1.creditAmount) creditAmount, sum(q2.creditAmount) as creditAmount_PP
                                            from
                                            (
                                            SELECT d.date, ifnull(round(sum(p.net),2),0) as NetAmount,
                                            ifnull(round(sum(p.tipAmount),2),0) as tipAmount,
                                            round(100 * ifnull(round(sum(p.tipAmount),2),0) / ifnull(round(sum(p.net),2),0),1) as TipPercentOfNet,
                                            ifnull(round(sum(p.refund_amount),2),0) as refundAmount,
                                            ifnull(round(sum(p.credit_amount),2),0) as creditAmount
                                            FROM dates d left join PaymentsCloverDemo3 p on d.date = p.date
                                            WHERE d.date between '2019-02-28' - INTERVAL ".$interval." DAY and '2019-02-28' --  '2019-02-28'  -- CURDATE()
                                            group by d.date order by d.date asc
                                            ) q1
                                            inner join
                                            (
                                            SELECT d.date, ifnull(round(sum(p.net),2),0) as NetAmount,
                                            ifnull(round(sum(p.tipAmount),2),0) as tipAmount,
                                            round(100 * ifnull(round(sum(p.tipAmount),2),0) / ifnull(round(sum(p.net),2),0),1) as TipPercentOfNet,
                                            ifnull(round(sum(p.refund_amount),2),0) as refundAmount,
                                            ifnull(round(sum(p.credit_amount),2),0) as creditAmount
                                            FROM dates d left join PaymentsCloverDemo3 p on d.date = p.date
                                            WHERE d.date between ('2019-02-28' - INTERVAL 365+".$interval." DAY) and ('2019-02-28' - INTERVAL 365 DAY ) --  365+7 = 372
                                            group by d.date order by d.date asc
                                            ) q2 on q1.date = (q2.date + INTERVAL 365 DAY)
                                            GROUP BY concat(year(q1.date), '-', LPAD(MONTH(q1.date), 2, '0'))");
            break;
        default:
            $stmt = $db->prepare("select q1.date as argumentField
                                     ,q1.NetAmount, q2.NetAmount as NetAmount_PP 
                                     ,q1.tipAmount, q2.tipAmount as tipAmount_PP 
                                     ,q1.TipPercentOfNet, q2.TipPercentOfNet as TipPercentOfNet_PP 
                                     ,q1.refundAmount, q2.refundAmount as refundAmount_PP 
                                     ,q1.creditAmount, q2.creditAmount as creditAmount_PP 
                                     from
                                     (
                                     SELECT d.date, ifnull(round(sum(p.net),2),0) as NetAmount, 
                                     ifnull(round(sum(p.tipAmount),2),0) as tipAmount, 
                                     round(100 * ifnull(round(sum(p.tipAmount),2),0) / ifnull(round(sum(p.net),2),0),1) as TipPercentOfNet,
                                     ifnull(round(sum(p.refund_amount),2),0) as refundAmount,
                                     ifnull(round(sum(p.credit_amount),2),0) as creditAmount
                                     FROM dates d left join PaymentsCloverDemo3 p on d.date = p.date
                                     WHERE d.date between '2019-02-28' - INTERVAL ".$interval." DAY and '2019-02-28' --  '2019-02-28'  -- CURDATE()
                                     group by d.date order by d.date asc
                                    ) q1 
                                    inner join
                                     (
                                     SELECT d.date, ifnull(round(sum(p.net),2),0) as NetAmount, 
                                     ifnull(round(sum(p.tipAmount),2),0) as tipAmount, 
                                     round(100 * ifnull(round(sum(p.tipAmount),2),0) / ifnull(round(sum(p.net),2),0),1) as TipPercentOfNet,
                                     ifnull(round(sum(p.refund_amount),2),0) as refundAmount,
                                     ifnull(round(sum(p.credit_amount),2),0) as creditAmount
                                     FROM dates d left join PaymentsCloverDemo3 p on d.date = p.date
                                     WHERE d.date between ('2019-02-28' - INTERVAL 365+".$interval." DAY) and ('2019-02-28' - INTERVAL 365 DAY ) --  365+7 = 372
                                     group by d.date order by d.date asc
                                     ) q2 on q1.date = (q2.date + INTERVAL 365 DAY)");
    }

    $stmt->execute();
    $rowCount = $stmt->rowCount();
    if ($rowCount > 0) {
        $userArray = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($userArray);
    }
} catch (PDOException $ex) {
    var_dump($ex);
}